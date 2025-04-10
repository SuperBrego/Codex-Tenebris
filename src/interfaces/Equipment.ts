export interface Equipment {
  id: string;
  name: string;
  cost: number;
  size: number;
  description: string;
  type: "weapon" | "armor" | "gear";
}
