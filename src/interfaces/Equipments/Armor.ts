import { Equipment } from "../Equipment";

export interface Armor extends Equipment {
  generalRating: number;
  ballisticRating: number;
  defense: number;
  speed: number;
  strength: number;
  equiped: boolean;
}