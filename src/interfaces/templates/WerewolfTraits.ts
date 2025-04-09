import { StateTrack } from "../StateTrack";
import { SupernaturalTraits } from "../SupernaturalTraits";
import { Trait } from "../Trait";

export interface WerewolfTraits extends SupernaturalTraits {
  primalUrge: number;
  essense: StateTrack[];
  renown: Record<'purity' | 'glory' | 'honor' | 'wisdom' | 'cunning', number>;
  triggers: Record<'passive' | 'common' | 'specific', string>;
  gifts: Record<'moon' | 'shadow' | 'wolf', Trait[]>;
  rites: Trait[];
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
    influences: Trait[];
    aspiration: string;
    numina: string;
    bonuses: string;
    ban: string;
    bane: string;
  };
}

