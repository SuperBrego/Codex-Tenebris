import { crescentMoon_lexicon } from "./moon/werewolf.crescent_moon.lexicon";
import { fullMoon_lexicon } from "./moon/werewolf.full_moon.lexicon";
import { gibbousMoon_lexicon } from "./moon/werewolf.gibbous_moon.lexicon";
import { halfMoon_lexicon } from "./moon/werewolf.half_moon.lexicon";
import { newMoon_lexicon } from "./moon/werewolf.new_moon.lexicon";

export const moonGifts_lexicon = {
  ...crescentMoon_lexicon,
  ...fullMoon_lexicon,
  ...gibbousMoon_lexicon,
  ...halfMoon_lexicon,
  ...newMoon_lexicon
};
