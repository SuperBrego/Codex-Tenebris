import { commonLexicon } from "./common.lexicon";
import { supernaturalLexicon } from "./supernatural.lexicon";
import { attributesLexicon } from "./attributes.lexicon";
import { characterLexicon } from "./character.lexicon";
import { equipmentLexicon } from "./equipment.lexicon";
import { skillsLexicon } from "./skills.lexicon";
import { templateLexicon } from "./templates.lexicon";
import { vampireLexicon } from "./vampire.lexicon";
import { werewolfLexicon } from "./werewolf.lexicon";
import { generalMeritsLexicon } from "./merits_general.lexicon";

const mergeLexicons = (...lexicons: Record<string, { 'en-US': string; 'pt-BR': string }>[]): Record<"en-US" | "pt-BR", Record<string, string>> => {
  const merged = {
    "en-US": {} as Record<string, string>,
    "pt-BR": {} as Record<string, string>,
  };

  for (const lexicon of lexicons) {
    for (const [key, value] of Object.entries(lexicon)) {
      merged["en-US"][key] = value["en-US"];
      merged["pt-BR"][key] = value["pt-BR"];
    }
  }

  return merged;
};

const translations = mergeLexicons(
  attributesLexicon,
  characterLexicon,
  commonLexicon,
  equipmentLexicon,
  generalMeritsLexicon,
  skillsLexicon,
  supernaturalLexicon,
  templateLexicon,
  vampireLexicon,
  werewolfLexicon,
);

export default translations;
