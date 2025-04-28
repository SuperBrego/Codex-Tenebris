import { commonLexicon } from "../locales/common.lexicon";
import { supernaturalLexicon } from "../locales/supernatural/supernatural.lexicon";

export function lexiconToFlat(lexicon: Record<string, { 'pt-BR': string; 'en-US': string }>, lang: 'pt-BR' | 'en-US'): Record<string, string> {
  return Object.fromEntries(Object.entries(lexicon).map(([key, val]) => [key, val[lang]]));
}

export function commonLexiconToFlat(lang: 'pt-BR' | 'en-US') {
  return Object.fromEntries(
    Object.entries(commonLexicon).map(([key, val]) => [key, val[lang]])
  );
}

export function supernaturalLexiconToFlat(lang: 'pt-BR' | 'en-US') {
  return Object.fromEntries(
    Object.entries(supernaturalLexicon).map(([key, val]) => [key, val[lang]])
  );
}
