// theme/themesMap.ts
import { blueMysticTheme, deviantTheme, vampireTheme, werewolfTheme } from '../database/Themes';
import { SupernaturalTemplatesIDs } from '../enum/SupernaturalTemplates';
import { Theme } from '../types/Theme';

export const themesByTemplate: Record<SupernaturalTemplatesIDs, Theme> = {
  [SupernaturalTemplatesIDs.Mortal]: blueMysticTheme,
  [SupernaturalTemplatesIDs.Vampire]: vampireTheme,
  [SupernaturalTemplatesIDs.Werewolf]: werewolfTheme,
  [SupernaturalTemplatesIDs.Deviant]: deviantTheme,
};
