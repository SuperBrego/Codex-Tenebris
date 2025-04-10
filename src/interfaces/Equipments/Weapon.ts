import { Equipment } from "../Equipment";

export interface Weapon extends Equipment {
  damage: number;
  range: string;
  clip: number | '-';
  init: number;
  strength: number;
}
