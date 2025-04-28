import { commonLexicon } from "./common.lexicon";
import { supernaturalLexicon } from "./supernatural/supernatural.lexicon";
import { attributesLexicon } from "./attributes.lexicon";
import { characterLexicon } from "./character.lexicon";
import { equipmentLexicon } from "./equipment.lexicon";
import { skillsLexicon } from "./skills.lexicon";
import { templateLexicon } from "./templates.lexicon";
import { vampireLexicon } from "./supernatural/vampire/vampire.lexicon";
import { werewolfLexicon } from "./supernatural/werewolf/werewolf.lexicon";
import { generalMeritsLexicon } from "./merits/merits_general.lexicon";
import { moonGifts_lexicon } from "./supernatural/werewolf/werewolf.moon_gifts.lexicon";

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
  moonGifts_lexicon,
);

export default translations;
