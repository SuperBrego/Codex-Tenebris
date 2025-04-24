import { mental_merits } from "./merits_mental.lexicon";
import { merits_physical } from "./merits_physical.lexicon";
import { merits_social } from "./social_merits.lexicon";

export const generalMeritsLexicon = {
  ...mental_merits,
  ...merits_physical,
  ...merits_social
};

