import { StateTrack } from "../StateTrack";
import { SupernaturalTraits } from "../SupernaturalTraits";
import { SpecialTrait } from "../SpecialTrait";

export interface VampireTraits extends SupernaturalTraits {
  bloodPotency: number;
  clan: string;
  mask: string;
  dirge: string;
  bloodline: string;
  covenant: string;
  vitae: StateTrack[];
  disciplines: SpecialTrait[];
  banes: string[];
  devotions: SpecialTrait[];
  ritesMiracles: SpecialTrait[];
  vinculum: any[];
  havens: any[];
}