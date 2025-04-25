import { FormType } from "../../Utils/werewolfFormsData";
import { SpecialTrait } from "../SpecialTrait";
import { StateTrack } from "../StateTrack";
import { SupernaturalTraits } from "../SupernaturalTraits";

export interface WerewolfTraits extends SupernaturalTraits {
  primalUrge: number;
  essence: StateTrack[];
  activeForm: FormType;
  renown: Record<'purity' | 'glory' | 'honor' | 'wisdom' | 'cunning', number>;
  triggers: Record<'passive' | 'common' | 'specific', string>;
  gifts: SpecialTrait[];// Record<'moon' | 'shadow' | 'wolf', 
  rites: SpecialTrait[];
  totem: {
    name: string;
    power: number;
    finesse: number;
    resistance: number;
    willpower: StateTrack[];
    essence: StateTrack[];
    initiative: number;
    defense: number;
    speed: number;
    size: number;
    corpus: number;
    influences: SpecialTrait[];
    aspiration: string;
    numina: string;
    bonuses: string;
    ban: string;
    bane: string;
  };
}

