import { StateTrack } from "../StateTrack";
import { Trait } from "../Trait";
import { SupernaturalTemplate } from "../TemplateTraits";

export interface VampireTraits extends SupernaturalTemplate {
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