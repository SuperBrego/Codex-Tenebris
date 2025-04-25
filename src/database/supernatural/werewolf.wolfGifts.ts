import { SupernaturalPowerCategory } from "../../interfaces/SupernaturalPowerCategory";

export const wolfGifts: SupernaturalPowerCategory[] = [
  {
    id: "gift-of-change",
    name: "Gift of Change",
    type: "gift",
    origin: "Werewolf: The Forsaken",
    powers: [
      {
        id: "skin-thief",
        name: "SkinThief",
        type: "gift",
        origin: "Werewolf: The Forsaken",
        level: 1,
        renown: "CUNNING",
        cost: "5 Essence",
        action: "Instant",
        description: `
          Although grisly, an Uratha with this Facet can don the skin of a kill as if it were his own natural hide. The Uratha can only use this Facet while in Hishu form. He must skin a human or predatory animal of roughly the same size as a wolf, enough to wear across his shoulders at least, and then don the skin. Once he has paid the Essence cost of the Facet, the Uratha's skin warps and ripples before settling into a copy of the deceased's appearance, bone structure, and muscle.\n\nIn the case of a human, the Uratha becomes a physically perfect mimic of the prey until such a time as he willingly sheds the stolen skin or shapeshifts, bloodily tearing his way out of the sheath. In the case of an animal, the werewolf's Urhan form now becomes a copy of the slain predator for one lunar month, although its traits do not otherwise change. If the werewolf spends a Willpower point, his Urhan copies the predator indefinitely, until he chooses to copy another animal with this Facet or decides to return his Urhan to the form of a wolf. Whether the mimicked prey is human or animal, the Uratha's eyes never change to match the new shape — they remain his own.'
        `
      },
      {
        id: "gaze-of-the-moon",
        name: "Gaze of the Moon",
        type: "gift",
        origin: "Werewolf: The Forsaken",
        level: 1,
        renown: "GLORY",
        cost: "1 Essence",
        action: "Instant",
        description: `An Uratha with this Facet can draw the Moon's bright madness into his gaze, eyes flickering pure silver for a moment. When using this Facet, the Uratha targets a single human who can clearly see his eyes. The prey is subjected to the full effects of Lunacy as if the Uratha was in Gauru form, and the Uratha may choose which of the three Conditions is inflicted by the Lunacy.`
      },
      {
        id: "lunas-embrace",
        name: "Luna's Embrace",
        type: "gift",
        origin: "Werewolf: The Forsaken",
        level: 1,
        renown: "HONOR",
        cost: "1 Essence",
        action: "Instant",
        description: `The Uratha with this Facet can change sex as easily as he or she changes form. This Facet changes the Uratha's sex until the next time Luna's Embrace is used to change back again. The change is biologically complete and functional. The Uratha's appearance changes so that he or she now looks very much like a twin brother or sister to his or her old self.`
      },
      {
        id: "the-fathers-form",
        name: "The Father's Form",
        type: "gift",
        origin: "Werewolf: The Forsaken",
        level: 1,
        renown: "PURITY",
        cost: "None",
        action: "Instant",
        description: `The Uratha may take Gauru form without having to constantly attack or risk falling to Kuruth. This Facet brings forth Father Wolf's form while suppressing Mother Luna's bloodthirsty madness.\n\nThe Uratha can shift to Gauru form outside combat without falling to Kuruth. The character loses several of the form's advantages using this Facet — she regenerates as per other forms, she does not automatically benefit from Down and Dirty combat, and she inflicts Lunacy as if she were in Urshul form.\n\nThe suppressed rage burns fierce and builds pressure beneath the flimsy locks. If the Uratha makes an attack, or suffers more than her Purity Renown in lethal damage during the scene, this Facet ends and she follows the normal rules for Gauru. Further, taking Gauru form and not engaging in combat goes against Father Wolf's ancient expectations; shifting to another form to end this Facet is a breaking point towards Flesh.`
      },
      {
        id: "quicksilver-flesh",
        name: "Quicksilver Flesh",
        type: "gift",
        origin: "Werewolf: The Forsaken",
        level: 1,
        renown: "WISDOM",
        cost: "1 Essence",
        action: "Instant",
        duration: "1 scene",
        description: `The Uratha's flesh flows like mercury at her urging, blurring the boundaries between the shapes that she can take.\n\nThe Uratha can change a portion of her current form to match that of another, selecting a single benefit from the list below each time she uses this Facet:\n\n- Honed Senses — +3 to Perception checks (Hishu)\n- Grasping Hands — Paws change to hands that can grip and manipulate (Urshul, Urhan)\n- Loping Stride — +2 Speed (Hishu, Dalu, Gauru)\n- Razor Talons — Claws that deal 1L (Hishu, Dalu, Urhan)\n- Maw of Man — Can speak human languages clearly, loses any bite attack (Urshul, Urhan)\n\nOther changes are also possible, based on agreement between the player and Storyteller. Changes while in Urhan or Hishu that are obviously unnatural cause the werewolf to inflict Lunacy as if he were in Dalu form.`
      }
    ]
  },
  {
    id: "gift-of-hunting",
    name: "Gift of Hunting",
    type: "gift",
    origin: "Werewolf: The Forsaken",
    powers: [
      {
        id: "honed-senses",
        name: "HonedSenses",
        type: "gift",
        origin: "Werewolf: The Forsaken",
        level: 1,
        renown: "CUNNING",
        cost: "None",
        duration: "Permanent",
        description: 'Any detail, no matter how small or subtle, could be the difference between the success of the hunt or its failure.\n\nThe Uratha achieves an exceptional success on Perception rolls with three successes instead of five.'
      },
      {
        id: "cow-the-prey",
        name: "Cow the Prey",
        type: "gift",
        origin: "Werewolf: The Forsaken",
        level: 1,
        renown: "GLORY",
        cost: "1 Essence",
        action: "Reflexive",
        description: `Everyone trembles when werewolves hunt. The prey knows the Uratha with this Facet is an implacable foe who cannot be stopped.\n\nThe Uratha spends 1 Essence when activating her hunter's aspect. The associated Condition becomes Persistent; the prey gains a Beat when she turns a successful roll against the werewolf into a dramatic failure.`
      },
      {
        id: "beast-talker",
        name: "Beast Talker",
        type: "gift",
        origin: "Werewolf: The Forsaken",
        level: 1,
        renown: "HONOR",
        cost: "None",
        duration: "Permanent",
        description: 'The primal tongue of the Uratha easily masters the languages of beasts and birds.\n\nThe Uratha can communicate with and understand any known animal. Animals may have limited understanding of the world around them and are likely to be afraid of a werewolf, but this Facet does allow the Uratha to engage in Social maneuvers against an animal.'
      },
      {
        id: "tireless-hunter",
        name: "Tireless Hunter",
        type: "gift",
        origin: "Werewolf: The Forsaken",
        level: 1,
        renown: "PURITY",
        cost: "1 Essence",
        action: "Instant",
        duration: '1 day',
        description: `No matter how long the hunt or where it takes her, the hunter endures.\n\nWhile this Facet is active and the Uratha has the Siskur-Dah Condition, she ignores up to her Purity Renown in penalties from tiredness, fatigue, and poor morale. She may also ignore any Conditions that would prevent her from spending Willpower, as long as the action in question will bring her closer to the hunt's culmination.\n\nShe does not even need to eat or drink, although she cannot maintain this benefit from the Facet for more than her Purity Renown in successive days; after that, she must gorge herself and drink over at least one day of rest.`
      },
      {
        id: "impossible-spoor",
        name: "Impossible Spoor",
        type: "gift",
        origin: "Werewolf: The Forsaken",
        level: 1,
        renown: "WISDOM",
        cost: "None or 1 Essence",
        action: "Reflexive",
        duration: 'Scene',
        description: `All Uratha are superb hunters — those with this Facet surpass their fellows. The Uratha's senses are attuned to unusual or otherwise impossible traces. The lingering photons disturbed by the prey's shadow; the slowly settling ripple of air currents disturbed by the prey; the electromagnetic handshake of the prey's smartphone with a wireless hotspot — all leave a trail this werewolf can follow.\n\nThis Facet grants superlative tracking skills, as the werewolf notices traces invisible to others. When making Tracking rolls the Uratha adds two successes to every successful roll. No successes are added if the character fails the roll.\n\nAdditionally, the character may spend 1 Essence to remove any negative modifiers due to the age of the trail, and may spend additional Essence to negate the penalty each time the trail would degrade from environmental conditions. No matter how old the trail or how hostile the weather, Uratha with this Facet can always find something to track.`
      }
    ]
  },
  {
    id: "gift-of-pack",
    name: "Gift of Pack",
    type: "gift",
    origin: "Werewolf: The Forsaken",
    powers: [
      {
        id: "reflected-facets",
        name: "ReflectedFacets",
        type: "gift",
        origin: "Werewolf: The Forsaken",
        level: 1,
        renown: "CUNNING",
        cost: "+1 Essence",
        duration: "Special",
        description: `A werewolf is a weapon armed with Gifts. Like an artillery strike, this Facet grants the Uratha's pack the ability to guide her power.\n\nThe Uratha may use her Gifts even against prey she cannot personally sense as long as one of her packmates can. This costs 1 additional Essence on top of the Facet's normal cost. The werewolf gains no special ability to know when her packmate can see the prey and must use other Gifts, signals, or technology to coordinate.\n\nThe character may also transfer Facets that enhance the individual rather than target prey. The Uratha activates the Facet while paying 1 additional Essence, and the effects appear on the chosen packmate. The Uratha can't reactivate the Facet while it is in use, but may cancel the transfer with a reflexive action.\n\nBoth uses of this Facet have a range of the Uratha's Cunning Renown in miles.`
      },
      {
        id: "down-the-prey",
        name: "Down the Prey",
        type: "gift",
        origin: "Werewolf: The Forsaken",
        level: 1,
        renown: "GLORY",
        cost: "1 Essence",
        action: "Reflexive",
        description: `A pack of Uratha working in concert is a glorious and often lethal sight to behold.\n\nThe Uratha may use this Facet when she hits an enemy who has been injured by a packmate since her last turn. She may pick one of the following effects to apply to the prey:\n\n- A –2 penalty to the next dice pool that the prey rolls.\n- A +2 bonus to the Uratha's Defense against the prey for one turn.\n- The Knockdown Tilt, as long as the prey's Defense against the attack was 0.`
      },
      {
        id: "totems-wrath",
        name: "Totem's Wrath",
        type: "gift",
        origin: "Werewolf: The Forsaken",
        level: 1,
        renown: "HONOR",
        cost: "5 Essence",
        dicePool: "'Presence + Occult + Honor versus Power + Finesse +Resistance",
        action: 'Contested',
        description: `The werewolf injects Death Rage into the totem and forces it to physical form, where a Gauru-like shell hastily forms around it. The totem isn't itself at that moment — it is a murderous foe in the throes of Kuruth that can only distinguish "pack" from "not pack."\n\nMost totems believe that using this Facet violates their bargains with their packs, even those that enjoy violence and conflict. Use of this Facet can have a dramatic effect on the relationship between totem and pack.\n\nThe totem immediately gains the Materialized Condition. This Facet forces it into a shell of flesh that resembles an Uratha's Gauru form. The totem gains Power +3, Finesse +1, Resistance +2 and Size 7 (changing derived traits by Corpus +2, Initiative +1, Speed +4). It applies Defense to Firearms attacks, inflicts Lunacy, and uses the Primal Fear ability like a Gauru werewolf.\n\nPowered by rage, the totem follows the rules for a werewolf in Basu-Im, but will not attack any packmate with the Totem Merit. Other packmates may fall into Basu-Im as a result of the spirit's actions.\n\nThe spirit loses 1 Essence per turn. Once it hits 0 Essence, or the werewolf using the Facet dismisses it, the totem explodes into ephemera with a final howl.\n\nOnce dismissed, the totem withdraws from the pack. For one day per turn it was active, the pack cannot use any bonuses provided by the totem, nor can they use Gifts or rites that rely on its presence, including this Facet.`
      },
      {
        id: "maw-of-madness",
        name: "Maw of Madness",
        type: "gift",
        origin: "Werewolf: The Forsaken",
        level: 1,
        renown: "PURITY",
        cost: "1 Essence",
        action: "Reflexive",
        description: `The jaws of the Uratha become a source of maddening taint, infecting the prey with a spasm of the Moon's mad love.\n\nWhen the Uratha successfully inflicts damage with his bite on a living victim who is not an Uratha, the victim suffers the Moon Taint Condition.`
      },
      {
        id: "pack-awareness",
        name: "Pack Awareness",
        type: "gift",
        origin: "Werewolf: The Forsaken",
        level: 1,
        renown: "WISDOM",
        cost: "None or 1 Essence",
        description: `The pack is an extension of the Uratha's own spirit, its life intertwined with her own. The pack is everything.\n\nThis Facet grants theUratha " permanent general sense of where each of her packmates is in relation to herself, as well as his or her general state and wellbeing. The effects reach up to a range of her Wisdom Renown in miles. She cannot be surprised by any enemy that any of her packmates are aware of, making it extremely hard to ambush her when she is with her pack.\n\nFinally, the Uratha may spend 1 Essence to speak mind-to-mind with any packmate she can see for one scene.`
      }
    ]
  }
];