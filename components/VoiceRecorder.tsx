
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Mic, Square, Play, Trash2, Pause, AlertCircle, Clock, RefreshCw } from 'lucide-react';
import { audioStorageService } from '../services/audioStorageService';

interface VoiceRecorderProps {
  onRecordingComplete?: (blob: Blob, transcript: string) => void;
  onTranscriptUpdate?: (text: string) => void;
  onError?: (errorType: 'not-found' | 'permission-denied' | 'unknown') => void;
  timeLimit?: number; // Time limit in seconds (e.g. 120 for Part 2)
  autoStart?: boolean;
}

const VoiceRecorder: React.FC<VoiceRecorderProps> = ({ 
  onRecordingComplete, 
  onTranscriptUpdate, 
  onError,
  timeLimit,
  autoStart = false
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recognitionRef = useRef<any>(null);
  const transcriptBufferRef = useRef<string>("");
  const chunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Timer Refs
  const startTimeRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopRecording();
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Timer Logic
  const updateTimer = useCallback(() => {
    if (!startTimeRef.current) return;
    
    const now = Date.now();
    const diff = Math.floor((now - startTimeRef.current) / 1000);
    
    setElapsedTime(diff);

    // Auto-stop if time limit reached
    if (timeLimit && diff >= timeLimit) {
      stopRecording();
      return;
    }

    rafRef.current = requestAnimationFrame(updateTimer);
  }, [timeLimit]);

  const startRecording = async () => {
    setHasError(false);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('getUserMedia not supported');
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Mime type selection
      let mimeType = 'audio/webm';
      if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
        mimeType = 'audio/webm;codecs=opus';
      } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
        mimeType = 'audio/mp4'; 
      }

      const mediaRecorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];
      transcriptBufferRef.current = ""; 

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const finalBlob = new Blob(chunksRef.current, { type: mimeType });
        const url = URL.createObjectURL(finalBlob);
        setAudioUrl(url);
        
        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop());

        // Save to indexedDB
        const id = `rec_${Date.now()}`;
        // Calculate duration based on the timer, not just chunk size
        const duration = Math.floor((Date.now() - startTimeRef.current) / 1000);
        await audioStorageService.saveAudio(id, finalBlob, duration);

        if (onRecordingComplete) {
          onRecordingComplete(finalBlob, transcriptBufferRef.current.trim());
        }
      };

      // Start Recording
      mediaRecorder.start(1000); // Slice every second for safety
      
      // Initialize Speech Recognition
      initSpeechRecognition();

      setIsRecording(true);
      startTimeRef.current = Date.now();
      updateTimer();

    } catch (err: any) {
      console.error("Error accessing microphone:", err);
      setHasError(true);
      if (onError) onError('permission-denied');
    }
  };

  const initSpeechRecognition = () => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event: any) => {
          let interimTranscript = '';
          let finalTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            } else {
              interimTranscript += event.results[i][0].transcript;
            }
          }

          if (finalTranscript) {
            transcriptBufferRef.current += finalTranscript + " ";
          }

          if (onTranscriptUpdate) {
            onTranscriptUpdate((transcriptBufferRef.current + interimTranscript).trim());
          }
        };

        recognition.onend = () => {
          // Restart recognition if we are still recording (handles silence timeouts)
          if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            try {
              recognition.start();
            } catch(e) { /* ignore already started errors */ }
          }
        };

        recognitionRef.current = recognition;
        try {
          recognition.start();
        } catch (e) { console.error(e); }
      }
    }
  };

  const stopRecording = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }

    setIsRecording(false);
  };

  const togglePlayback = () => {
    if (!audioRef.current && audioUrl) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.onended = () => setIsPlaying(false);
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const resetRecording = () => {
    setAudioUrl(null);
    setIsPlaying(false);
    setElapsedTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  };

  useEffect(() => {
    if (autoStart) {
      startRecording();
    }
  }, [autoStart]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const timeLeft = timeLimit ? Math.max(0, timeLimit - elapsedTime) : 0;
  const progressPercent = timeLimit ? Math.min(100, (elapsedTime / timeLimit) * 100) : 0;

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className={`
        relative flex items-center justify-between p-4 rounded-xl border transition-all overflow-hidden
        ${isRecording ? 'bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-900/30' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'}
        ${hasError ? 'border-red-500' : ''}
      `}>
        {/* Progress Bar Background for Time Limit */}
        {isRecording && timeLimit && (
          <div 
            className="absolute bottom-0 left-0 h-1 bg-red-500 transition-all duration-1000 ease-linear"
            style={{ width: `${progressPercent}%` }}
          />
        )}

        <div className="flex items-center gap-4 z-10">
           {/* Status Icon */}
           <div className={`
             w-10 h-10 rounded-full flex items-center justify-center transition-all
             ${isRecording ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}
           `}>
             {isRecording ? <Mic className="w-5 h-5" /> : (audioUrl ? <Play className="w-5 h-5 ml-0.5" /> : <Mic className="w-5 h-5" />)}
           </div>

           <div>
             {isRecording ? (
               <div className="flex flex-col">
                 <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Recording</span>
                 <span className="font-mono text-xl font-bold text-slate-900 dark:text-white tabular-nums">
                   {timeLimit ? formatTime(timeLeft) : formatTime(elapsedTime)}
                 </span>
               </div>
             ) : audioUrl ? (
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">Recorded</span>
                  <span className="font-mono text-xl font-bold text-slate-900 dark:text-white tabular-nums">
                    {formatTime(elapsedTime)}
                  </span>
                </div>
             ) : (
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ready</span>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Click mic to start
                  </span>
                </div>
             )}
           </div>
        </div>

        <div className="flex items-center gap-2 z-10">
          {!audioUrl ? (
            !isRecording ? (
              <button
                onClick={startRecording}
                disabled={hasError}
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-red-500/30 transition-all active:scale-95 ${hasError ? 'opacity-50 cursor-not-allowed' : ''}`}
                title="Start Recording"
              >
                <Mic className="w-6 h-6" />
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg transition-all active:scale-95"
                title="Stop Recording"
              >
                <Square className="w-5 h-5 fill-current" />
              </button>
            )
          ) : (
            <>
              <button
                onClick={togglePlayback}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 transition-colors"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </button>
              <button
                onClick={resetRecording}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 transition-colors"
                title="Retake"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>
      
      {/* Helper Text */}
      {isRecording && timeLimit && (
        <div className="text-center text-xs font-bold text-red-500 animate-pulse">
          {timeLeft <= 10 ? "Time is almost up! Wrap up your answer." : "Recording in progress..."}
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;
