export interface Equipment {
  id: string;
  name: string;
  cost: number;
  size: number;
  description: string;
  type: "weapon" | "armor" | "gear";
}

export interface Gear extends Equipment {
  durability: number;
  structure: string;
}

export interface Weapon extends Equipment {
  damage: number;
  range: string;
  clip: number | '-';
  init: number;
  strength: number;
}

export interface Armor extends Equipment {
  generalRating: number;
  ballisticRating: number;
  defense: number;
  speed: number;
  strength: number;
}