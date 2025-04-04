import { SupernaturalTemplates } from "../../enum/SupernaturalTemplates";

export interface MortalTraits {
  index: SupernaturalTemplates;
  book: string;
  virtue: string;
  vice: string;
  age: number;
  faction: string;
  moralityType: string;
  moralityTrait: string[];
  morality: number;
}