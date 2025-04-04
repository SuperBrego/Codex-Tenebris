import { MortalTraits } from "./MortalTraits";
import { StateTrack } from "../StateTrack";

export interface VampireTraits extends MortalTraits {
  bloodPotency: number;
  clan: string;
  mask: string;
  dirge: string;
  bloodline: string;
  covenant: string;
  vitae: StateTrack[];
  disciplines: any[];
  banes: string[];
  devotions: any[];
  ritesMiracles: any[];
  vinculum: any[];
  havens: any[];
}