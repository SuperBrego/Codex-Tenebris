import { SupernaturalTemplate } from "../TemplateTraits";

export interface MortalTraits extends SupernaturalTemplate {
  virtue: string;
  vice: string;
  faction: string;
  moralityType: string;
  moralityTrait: string[];
  morality: number;
}