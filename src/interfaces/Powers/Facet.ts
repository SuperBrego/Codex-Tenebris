import { SupernaturalPower } from "../SupernaturalPower";

// Alias específico para Werewolf: The Forsaken
export interface Facet extends SupernaturalPower {
  renown: 'CUNNING' | 'GLORY' | 'HONOR' | 'PURITY' | 'WISDOM';
  gift: string; // ex: 'Gift of Death'
}