
import { Vocabulary, VocabCard } from '../types';

const STORAGE_KEY = 'ielts_prep_vocab_deck';

export const vocabService = {
  getDeck(): VocabCard[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to load vocabulary deck", e);
      return [];
    }
  },

  saveDeck(deck: VocabCard[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(deck));
  },

  addCard(vocab: Vocabulary): VocabCard {
    const deck = this.getDeck();
    
    // Check if word already exists
    const existing = deck.find(c => c.word.toLowerCase() === vocab.word.toLowerCase());
    if (existing) {
      return existing;
    }

    const newCard: VocabCard = {
      ...vocab,
      id: Date.now(),
      addedAt: Date.now(),
      nextReview: Date.now(), // Due immediately
      interval: 0, // 0 means learning phase
      streak: 0
    };

    deck.push(newCard);
    this.saveDeck(deck);
    return newCard;
  },

  removeCard(id: number) {
    const deck = this.getDeck().filter(c => c.id !== id);
    this.saveDeck(deck);
  },

  hasCard(word: string): boolean {
    const deck = this.getDeck();
    return deck.some(c => c.word.toLowerCase() === word.toLowerCase());
  },

  getDueCards(): VocabCard[] {
    const deck = this.getDeck();
    const now = Date.now();
    return deck.filter(c => c.nextReview <= now);
  },

  // SRS Algorithm (Simplified SM-2)
  processReview(cardId: number, isCorrect: boolean) {
    const deck = this.getDeck();
    const cardIndex = deck.findIndex(c => c.id === cardId);
    if (cardIndex === -1) return;

    const card = deck[cardIndex];

    if (isCorrect) {
      // Increase interval
      // 0 (New) -> 1 day -> 3 days -> 7 days -> 14 days -> etc.
      let newInterval = 1;
      if (card.interval === 0) {
        newInterval = 1;
      } else if (card.interval === 1) {
        newInterval = 3;
      } else {
        newInterval = Math.ceil(card.interval * 2.2); // Multiplier
      }
      
      card.interval = newInterval;
      card.streak += 1;
      card.nextReview = Date.now() + (newInterval * 24 * 60 * 60 * 1000);
    } else {
      // Reset logic
      card.interval = 1; // Reset to 1 day
      card.streak = 0;
      card.nextReview = Date.now() + (1 * 24 * 60 * 60 * 1000); // Review tomorrow (or could be 10 mins for strict SRS)
    }

    deck[cardIndex] = card;
    this.saveDeck(deck);
  },

  // Quiz helper: Get distractors for a specific card
  getDistractors(targetCard: VocabCard, count: number = 3): string[] {
    const deck = this.getDeck();
    const otherCards = deck.filter(c => c.id !== targetCard.id);
    
    // Shuffle and slice
    const shuffled = otherCards.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map(c => c.definition);
  }
};
