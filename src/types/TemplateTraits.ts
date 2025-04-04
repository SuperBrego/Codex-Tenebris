import { DeviantTraits } from "../interfaces/templates/DeviantTraits";
import { MortalTraits } from "../interfaces/templates/MortalTraits";
import { VampireTraits } from "../interfaces/templates/VampireTraits";
import { WerewolfTraits } from "../interfaces/templates/WerewolfTraits";

// types.ts
export type TemplateTraits = MortalTraits | VampireTraits | WerewolfTraits | DeviantTraits;
