import { SupernaturalTemplatesIDs } from "../enum/SupernaturalTemplates";
import { SpecialTrait } from "../interfaces/SpecialTrait";
import { VampireTraits } from "../interfaces/templates/VampireTraits";
import { WerewolfTraits } from "../interfaces/templates/WerewolfTraits";
import { SupernaturalTemplatesType } from "../types/SupernaturalTemplatesType";

export interface SupernaturalPowerConfig {
  label: string;
  path: (traits: SupernaturalTemplatesType) => SpecialTrait[];
  updatePath: (traits: SupernaturalTemplatesType, updated: SpecialTrait[]) => SupernaturalTemplatesType;
}

export const supernaturalPowerPaths: Record<SupernaturalTemplatesIDs, SupernaturalPowerConfig | null> = {
  [SupernaturalTemplatesIDs.Mortal]: null,

  [SupernaturalTemplatesIDs.Vampire]: {
    label: 'disciplines',
    path: (traits) => (traits as VampireTraits).disciplines ?? [],
    updatePath: (traits, updated) => ({ ...traits, disciplines: updated }),
  },

  [SupernaturalTemplatesIDs.Werewolf]: {
    label: 'gifts',
    path: (traits) => (traits as WerewolfTraits).gifts ?? [],
    updatePath: (traits, updated) => ({ ...traits, gifts: updated }),
  },

  [SupernaturalTemplatesIDs.Deviant]: null,
};