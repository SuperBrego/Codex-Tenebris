// src/data/supernatural/index.ts

// Agrupamento geral, se desejar uma lista completa:
import { moonGifts } from './werewolf.moonGifts';
import { shadowGifts } from './werewolf.shadowGifts';
import { wolfGifts } from './werewolf.wolfGifts';
// ...

export const allSupernaturalPowerCategories = [
  ...moonGifts,
  ...shadowGifts,
  ...wolfGifts,
  // ...
];
