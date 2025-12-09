
import { Topic, Question, SampleAnswer } from '../../types';

// Re-exporting main types to ensure consistency across data files
export type { Topic, Question, SampleAnswer };

export interface IPart3Question extends Question {
  // Aliasing for clarity, but keeping structure compatible with App.tsx
  // content = question
  // thinking_logic = examinerStrategy
}

export interface IPart2Topic extends Topic {
  part: 'part2';
  // questions[0] is the Cue Card
  // questions[1..n] are Part 3
}

export interface IPart1Topic extends Topic {
  part: 'part1';
}
