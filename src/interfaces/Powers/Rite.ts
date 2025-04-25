import { SupernaturalPower } from "../SupernaturalPower";

export interface Rite extends Omit<SupernaturalPower, 'level' | 'renown' | 'sampleQuestions' | 'type'> {
  type: 'rite';
  dotRating: number; // de 1 a 5, equivalente aos pontinhos (•)
  subtype: 'pack' | 'wolf' | 'totem' | 'other';
  symbols: string[];
  sampleRite: string;
}
