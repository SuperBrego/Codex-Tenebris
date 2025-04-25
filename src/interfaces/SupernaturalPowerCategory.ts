import { PowerEffect } from "../types/PowerEffect";

export interface SupernaturalPowerCategory {
  id: string;
  name: string; // e.g. 'Gift of Death', 'Auspex', etc.
  type: string; // 'gift' | 'discipline' | 'arcana' | 'devotion' | 'other';
  origin: string; // e.g. 'Werewolf: The Forsaken', 'Vampire: The Requiem'
  powers: PowerEffect[];
}
