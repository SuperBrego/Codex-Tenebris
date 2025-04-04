import { SupernaturalTemplates } from "../../enum/SupernaturalTemplates";
import { StateTrack } from "../StateTrack";
import { Trait } from "../Trait";

export interface WerewolfTraits {
  index: SupernaturalTemplates;
  book: string;
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
