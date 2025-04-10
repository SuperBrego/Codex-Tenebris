import { Equipment } from "../Equipment";

export interface Gear extends Equipment {
  durability: number;
  structure: string;
}
