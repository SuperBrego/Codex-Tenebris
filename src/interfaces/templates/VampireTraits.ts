import { StateTrack } from "../StateTrack";
import { Trait } from "../Trait";
import { SupernaturalTraits } from "../SupernaturalTraits";

export interface VampireTraits extends SupernaturalTraits {
  bloodPotency: number;
  clan: string;
  mask: string;
  dirge: string;
  bloodline: string;
  covenant: string;
  vitae: StateTrack[];
  disciplines: Trait[];
  banes: string[];
  devotions: Trait[];
  ritesMiracles: Trait[];
  vinculum: any[];
  havens: any[];
}