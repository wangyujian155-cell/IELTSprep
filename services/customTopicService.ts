
import { Topic, Question } from '../types';

const STORAGE_KEY = 'ielts_prep_custom_topics';

export const customTopicService = {
  getTopics(): Topic[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to load custom topics", e);
      return [];
    }
  },

  saveTopic(topic: Topic): void {
    const topics = this.getTopics();
    // Check if updating or creating
    const index = topics.findIndex(t => t.id === topic.id);
    if (index !== -1) {
      topics[index] = topic;
    } else {
      topics.push(topic);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(topics));
  },

  deleteTopic(id: number): void {
    const topics = this.getTopics().filter(t => t.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(topics));
  },

  getTopicById(id: number): Topic | undefined {
    return this.getTopics().find(t => t.id === id);
  }
};
