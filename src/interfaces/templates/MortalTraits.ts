import { SupernaturalTraits } from "../SupernaturalTraits";

export interface MortalTraits extends SupernaturalTraits {
  virtue: string;
  vice: string;
  faction: string;
}