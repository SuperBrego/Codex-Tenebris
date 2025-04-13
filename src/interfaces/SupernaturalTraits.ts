import { SupernaturalTemplatesIDs } from "../enum/SupernaturalTemplates";

export interface SupernaturalTraits {
  index: SupernaturalTemplatesIDs;
  book: string;
  name: string;
  moralityTrait: string[];
}