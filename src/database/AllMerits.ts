// import { _VampireMerits } from "./VampireMerits";
// import { _WerewolfMerits } from "./WerewolfMerits";
// ... conforme crescer

import { SpecialTrait } from "../interfaces/SpecialTrait";
import { _MortalMerits } from "./Merits/MortalMerits";
import { _WerewolfMerits } from "./Merits/WerewolfMerits";


// Junta tudo num único objeto indexed by id
export const MeritRegistry: Record<string, SpecialTrait> = [
  ..._MortalMerits,
  // ..._VampireMerits,
  ..._WerewolfMerits,
].reduce((acc, merit) => {
  acc[merit.labelKey] = merit;
  return acc;
}, {} as Record<string, SpecialTrait>);
