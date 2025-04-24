import { SupernaturalPower } from "./SupernaturalPower";

export interface SupernaturalPowerCategory {
  id: string;
  name: string; // e.g. 'Gift of Death', 'Auspex', etc.
  type: 'gift' | 'discipline' | 'arcana' | 'devotion' | 'other';
  origin: string; // e.g. 'Werewolf: The Forsaken', 'Vampire: The Requiem'
  powers: SupernaturalPower[];
}
