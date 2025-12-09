
export enum ProgressStatus {
  NOT_STARTED = "not_started",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
}

export interface WordTiming {
  word: string;
  start: number;
  end: number;
}

export interface Vocabulary {
  id?: number;
  word: string;
  definition: string;
  phonetic: string;
  example: string;
}

export interface VocabCard extends Vocabulary {
  // SRS Metadata
  id: number; // Ensure ID is present for cards
  addedAt: number;
  nextReview: number; // Timestamp for next review
  interval: number; // Current interval in days
  streak: number; // Consecutive correct answers
}

export interface SentenceAnalysis {
  english: string;
  chinese: string;
  key_words: string[];
}

export interface SampleAnswer {
  id: number;
  question_id: number;
  english_text: string;
  chinese_translation: string;
  audio_url?: string;
  word_timings?: WordTiming[];
  vocabularies?: Vocabulary[];
  sentences?: SentenceAnalysis[];
}

export interface Question {
  id: number;
  topic_id: number;
  content: string;
  sample_answer?: SampleAnswer;
  thinking_logic?: string; // Guidance on how to approach the answer
  key_arguments?: string[]; // Useful vocabulary or concepts for the argument
}

export type TopicCategory = 'People' | 'Objects' | 'Events' | 'Places';

export interface Topic {
  id: number;
  title: string;
  part: string; // "part1", "part2", "part3"
  category: TopicCategory;
  description: string;
  questions?: Question[];
  // Metadata for Quarterly Rotation
  season?: string; // e.g. "Sep-Dec 2025", "Permanent"
  status?: 'active' | 'forecast' | 'archived'; 
}

export interface UserProgress {
  id: number;
  user_id: string;
  question_id: number;
  status: ProgressStatus;
  user_audio_url?: string;
  last_practiced: string;
}

// New Argument Mining Structures
export interface ArgumentStructure {
  Main_Claim: string | null;
  Supporting_Reasons: string[];
  Examples: string[];
  Logic_Gap_Detected: boolean;
  Improvement_Suggestion: string;
}

export interface LogicAnalysis {
  logic_xray: string; // "The Logic X-Ray" summary
  mermaid_code: string; // The graph TD code
  argument_structure: ArgumentStructure; // Structured JSON data
  next_step_advice: string; // Actionable advice
}

export interface EvaluationResult {
  score: number; // 0-9
  feedback: string;
  better_version: string;
  // New Prosody Engine Fields
  prosody_markup?: string; // Visualized rhythm/linking
  ipa?: string; // IPA transcription
  // New Logic Analysis Field
  logic_analysis?: LogicAnalysis;
}
