
import { IPart1Topic } from './types';

export const PART1_GENERAL_TOPICS: IPart1Topic[] = [
  {
    id: 101, title: "Work or Study", part: "part1", category: "Events",
    season: "Permanent", status: "active",
    description: "Core mandatory topic (Examiner chooses one branch).",
    questions: [
      { id: 10101, topic_id: 101, content: "What is your job?" },
      { id: 10102, topic_id: 101, content: "Do you like your job?" },
      { id: 10103, topic_id: 101, content: "What are your responsibilities at work?" },
      { id: 10104, topic_id: 101, content: "Would you like to change your job in the future?" },
      { id: 10105, topic_id: 101, content: "Is your job popular in your country?" },
      { id: 10106, topic_id: 101, content: "What subject are you studying?" },
      { id: 10107, topic_id: 101, content: "Why did you choose this subject?" },
      { id: 10108, topic_id: 101, content: "Do you prefer to study in the morning or evening?" },
      { id: 10109, topic_id: 101, content: "What is the most difficult part of your studies?" },
      { id: 10110, topic_id: 101, content: "Do you plan to continue studying after graduation?" }
    ]
  },
  {
    id: 102, title: "Home and Hometown", part: "part1", category: "Places",
    season: "Permanent", status: "active",
    description: "Core mandatory topic.",
    questions: [
      { id: 10201, topic_id: 102, content: "Where is your hometown?" },
      { id: 10202, topic_id: 102, content: "What do you like most about your hometown?" },
      { id: 10203, topic_id: 102, content: "Is your hometown a good place for young people?" },
      { id: 10204, topic_id: 102, content: "Do you live in a house or an apartment?" },
      { id: 10205, topic_id: 102, content: "Which is your favorite room in your home?" },
      { id: 10206, topic_id: 102, content: "Would you like to move to a different home in the future?" }
    ]
  }
];
