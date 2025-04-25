export interface SupernaturalPower {
  id: string;
  name: string;
  type: string; // 'gift' | 'discipline' | 'arcana' | 'devotion' | 'other';
  subtype?: string; // 'gift' | 'discipline' | 'arcana' | 'devotion' | 'other';
  origin: string; // e.g. 'Werewolf: The Forsaken', 'Vampire: The Requiem'
  level: number; // 1 to 5
  cost: string;
  dicePool?: string;
  action?: string;
  duration?: string;
  rollResults?: {
    dramaticFailure?: string;
    failure?: string;
    success?: string;
    exceptionalSuccess?: string;
  };
  description: string;
  sampleQuestions?: string[]; // Optional, e.g. Auspex sample queries
  notes?: string;
}
