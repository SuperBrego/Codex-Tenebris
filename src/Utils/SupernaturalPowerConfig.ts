// utils/buildSupernaturalPowerPaths.ts
import { allWerewolfGifts } from "../database/supernatural";
import { SpecialTrait } from "../interfaces/SpecialTrait";
import { VampireTraits } from "../interfaces/templates/VampireTraits";
import { WerewolfTraits } from "../interfaces/templates/WerewolfTraits";
import { SupernaturalTemplatesType } from "../types/SupernaturalTemplatesType";

// Aqui você define quais labels mapeiam para quais "caminhos" dentro dos templates
const pathBuilders: Record<string, (traits: SupernaturalTemplatesType) => SpecialTrait[]> = {
  disciplines: (traits) => (traits as VampireTraits).disciplines ?? [],
  gifts: (traits) => (traits as WerewolfTraits).gifts ?? [],
  rites: (traits) => (traits as WerewolfTraits).rites ?? [],
  // embeds: (traits) => traits.embeds ?? [],
  // exploits: (traits) => traits.exploits ?? [],
  // rotes: (traits) => traits.rotes ?? [],
  // arcana: (traits) => traits.arcana ?? [],
  // Adicione aqui os outros caminhos especiais
};


export const supernaturalPowerPaths = pathBuilders;

export const supernaturalPredefinedPowers: Record<string, SpecialTrait[]> = {
  gifts: allWerewolfGifts
}
