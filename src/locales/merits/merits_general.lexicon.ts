import { merits_social } from "./merits_social.lexicon";
import { merits_mental } from "./merits_mental.lexicon";
import { merits_physical } from "./merits_physical.lexicon";

export const generalMeritsLexicon = {
  ...merits_mental,
  ...merits_physical,
  ...merits_social
};

