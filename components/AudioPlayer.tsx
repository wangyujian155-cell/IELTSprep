import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, RotateCcw } from 'lucide-react';

interface AudioPlayerProps {
  audioBuffer?: AudioBuffer | null;
  audioUrl?: string | null;
  onPlayStart?: () => void;
  onPlayEnd?: () => void;
  onTimeUpdate?: (currentTime: number) => void;
  label?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  audioBuffer, 
  audioUrl,
  onPlayStart, 
  onPlayEnd, 
  onTimeUpdate,
  label = "Audio"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const isDraggingRef = useRef(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const startTimeRef = useRef<number>(0);
  const pauseTimeRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const htmlAudioRef = useRef<HTMLAudioElement | null>(null);

  const hasContent = !!audioBuffer || !!audioUrl;

  useEffect(() => {
    return () => {
      stopAudio();
      if (audioContextRef.current?.state !== 'closed') {
        audioContextRef.current?.close();
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    stopAudio();
    pauseTimeRef.current = 0;
    setCurrentTime(0);
    setDuration(0);
    if (onTimeUpdate) onTimeUpdate(0);
    
    if (audioUrl) {
      if (!htmlAudioRef.current) htmlAudioRef.current = new Audio(audioUrl);
      else htmlAudioRef.current.src = audioUrl;
      const audio = htmlAudioRef.current;
      const handleLoadedMetadata = () => setDuration(audio.duration);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.onended = () => {
        setIsPlaying(false);
        onPlayEnd?.();
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
      if (audio.readyState >= 1) setDuration(audio.duration);
      return () => audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    } else if (audioBuffer) {
      setDuration(audioBuffer.duration);
    }
  }, [audioBuffer, audioUrl]);

  const playHtmlAudio = () => {
    if (!htmlAudioRef.current) return;
    const audio = htmlAudioRef.current;
    audio.play().then(() => {
      setIsPlaying(true);
      onPlayStart?.();
      const updateHtmlTime = () => {
        if (!audio.paused && !audio.ended) {
          const curr = audio.currentTime;
          if (!isDraggingRef.current) setCurrentTime(curr);
          if (onTimeUpdate) onTimeUpdate(curr * 1000);
          rafRef.current = requestAnimationFrame(updateHtmlTime);
        }
      };
      rafRef.current = requestAnimationFrame(updateHtmlTime);
    }).catch(e => console.error("Playback failed", e));
  };

  const pauseHtmlAudio = () => {
    if (htmlAudioRef.current) {
      htmlAudioRef.current.pause();
      setIsPlaying(false);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    }
  };

  const initAudioContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  };

  const updateWebAudioTime = () => {
    if (!audioContextRef.current || !isPlaying) return;
    const ctx = audioContextRef.current;
    const currentPosition = ctx.currentTime - startTimeRef.current;
    const safeDuration = audioBuffer?.duration || 0;
    const displayTime = Math.min(currentPosition, safeDuration);

    if (!isDraggingRef.current) setCurrentTime(displayTime);
    if (onTimeUpdate) onTimeUpdate(displayTime * 1000);
    
    if (currentPosition >= safeDuration) {
        setIsPlaying(false);
        onPlayEnd?.();
        pauseTimeRef.current = 0;
        setCurrentTime(0);
        if (onTimeUpdate) onTimeUpdate(0);
        cancelAnimationFrame(rafRef.current!);
        return;
    }
    if (isPlaying) rafRef.current = requestAnimationFrame(updateWebAudioTime);
  };

  const playBufferAudio = () => {
    if (!audioBuffer) return;
    initAudioContext();
    const ctx = audioContextRef.current!;
    if (ctx.state === 'suspended') ctx.resume();

    const source = ctx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(ctx.destination);
    
    let offset = pauseTimeRef.current;
    if (offset >= audioBuffer.duration) offset = 0;
    source.start(0, offset);
    
    startTimeRef.current = ctx.currentTime - offset;
    sourceNodeRef.current = source;
    setIsPlaying(true);
    onPlayStart?.();
    rafRef.current = requestAnimationFrame(updateWebAudioTime);
  };

  const pauseBufferAudio = () => {
    if (sourceNodeRef.current && audioContextRef.current) {
      try { sourceNodeRef.current.stop(); } catch (e) {}
      sourceNodeRef.current.disconnect();
      sourceNodeRef.current = null;
      pauseTimeRef.current = audioContextRef.current.currentTime - startTimeRef.current;
      setIsPlaying(false);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    }
  };

  const handleSeekStart = () => { isDraggingRef.current = true; };
  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => { setCurrentTime(parseFloat(e.target.value)); };
  const handleSeekEnd = (e: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>) => {
     isDraggingRef.current = false;
     const target = e.target as HTMLInputElement;
     const newTime = parseFloat(target.value);
     if (onTimeUpdate) onTimeUpdate(newTime * 1000);
     if (audioUrl && htmlAudioRef.current) htmlAudioRef.current.currentTime = newTime;
     if (audioBuffer) {
        pauseTimeRef.current = newTime;
        if (isPlaying) {
            if (sourceNodeRef.current) { try { sourceNodeRef.current.stop(); } catch(e){} }
            playBufferAudio();
        } else {
            setCurrentTime(newTime);
        }
     }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (audioUrl) pauseHtmlAudio(); else pauseBufferAudio();
    } else {
      if (Math.abs(currentTime - duration) < 0.1) {
          pauseTimeRef.current = 0;
          setCurrentTime(0);
          if (audioUrl && htmlAudioRef.current) htmlAudioRef.current.currentTime = 0;
      }
      if (audioUrl) playHtmlAudio(); else playBufferAudio();
    }
  };

  const stopAudio = () => {
    if (sourceNodeRef.current) { try { sourceNodeRef.current.stop(); } catch (e) {} sourceNodeRef.current = null; }
    if (htmlAudioRef.current) { htmlAudioRef.current.pause(); htmlAudioRef.current.currentTime = 0; }
    setIsPlaying(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };

  const resetAudio = () => {
    stopAudio();
    pauseTimeRef.current = 0;
    setCurrentTime(0);
    if (onTimeUpdate) onTimeUpdate(0);
  };

  const formatTime = (time: number) => {
    if (!Number.isFinite(time) || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center gap-4 w-full">
      <button
        onClick={togglePlay}
        disabled={!hasContent}
        className={`w-12 h-12 flex items-center justify-center rounded-full transition-all shrink-0 ${
          !hasContent 
            ? 'bg-slate-100 dark:bg-slate-700 text-slate-300 dark:text-slate-500' 
            : 'bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 shadow-lg hover:shadow-blue-500/30'
        }`}
      >
        {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
      </button>
      
      <div className="flex-1 min-w-0">
         <div className="flex justify-between items-center text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">
            <span>{label}</span>
            <span className="tabular-nums font-mono text-blue-500 dark:text-blue-400">
               {formatTime(currentTime)} / {formatTime(duration)}
            </span>
         </div>
         
         <div className="relative h-2 w-full group cursor-pointer">
            <div className="absolute inset-0 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
            <div 
                className="absolute left-0 top-0 h-full bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-100" 
                style={{ width: `${(currentTime / (duration || 100)) * 100}%` }}
            ></div>
            <input
              type="range"
              min="0"
              max={duration || 100}
              step="0.01"
              value={currentTime}
              disabled={!hasContent}
              onMouseDown={handleSeekStart}
              onTouchStart={handleSeekStart}
              onChange={handleSeekChange}
              onMouseUp={handleSeekEnd}
              onTouchEnd={handleSeekEnd}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
         </div>
      </div>

      {hasContent && (
        <button 
            onClick={resetAudio}
            className="p-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors shrink-0"
        >
            <RotateCcw className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default AudioPlayer;