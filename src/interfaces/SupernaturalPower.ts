export interface SupernaturalPower {
  id: string;
  name: string;
  type: 'gift' | 'discipline' | 'arcana' | 'devotion' | 'other';
  origin: string; // e.g. 'Werewolf: The Forsaken', 'Vampire: The Requiem'
  level: number; // 1 to 5
  renown?: 'CUNNING' | 'GLORY' | 'HONOR' | 'PURITY' | 'WISDOM'; // Optional, only for Gifts
  cost: string;
  dicePool: string;
  action: string;
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
