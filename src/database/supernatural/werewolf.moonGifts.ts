import { SupernaturalPowerCategory } from "../../interfaces/SupernaturalPowerCategory";

export const moonGifts: SupernaturalPowerCategory[] = [
  {
    id: 'half-moon',
    name: 'Half Moon’s Gift',
    type: 'gift',
    origin: 'Werewolf: The Forsaken',
    powers: [
      {
        id: 'scent-beneath-the-surface',
        name: 'Scent Beneath the Surface',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 1,
        renown: 'HONOR',
        cost: '1 Essence',
        dicePool: 'Wits + Empathy + Honor vs Composure + Primal Urge',
        action: 'Contested',
        duration: '1 scene',
        rollResults: {
          dramaticFailure: 'The Elodoth believes whatever the prey says as the truth.',
          failure: 'The Facet fails.',
          success: 'The Elodoth can sense whether the prey’s words and actions are deceptive or truthful.',
          exceptionalSuccess: 'It becomes trivially obvious how to manipulate the prey; add Honor to Manipulation-based dice pools.'
        },
        description: 'The Elodoth can discern lies and misdirection after observing or conversing with someone for at least one turn.'
      },
      {
        id: 'binding-oath',
        name: 'Binding Oath',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 2,
        renown: 'HONOR',
        cost: '1 Essence',
        dicePool: 'Resolve + Persuasion + Honor vs Resolve + Primal Urge',
        action: 'Contested',
        duration: '1 month',
        rollResults: {
          dramaticFailure: 'Oath is not bound; the first to break it regains 2 Willpower.',
          failure: 'The Elodoth fails to bind the oath.',
          success: 'Oath is bound. Attempts to break it suffer a penalty equal to the Elodoth’s Honor.',
          exceptionalSuccess: 'The Elodoth becomes immediately aware if the oath is broken and by whom.'
        },
        description: 'Allows the Elodoth to bind two parties to an oath with a symbolic act, causing supernatural consequences if broken.'
      },
      {
        id: 'sly-hunter',
        name: 'Sly Hunter',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 3,
        renown: 'HONOR',
        cost: '1 Essence',
        dicePool: '-',
        action: 'Instant',
        duration: 'Full duration of Siskur-Dah',
        description: 'While pursuing Siskur-Dah prey, the Elodoth adds Honor to dice pools involving Allies and Contacts, and to social rolls against the prey’s connections.'
      },
      {
        id: 'ties-of-word-and-promise',
        name: 'Ties of Word and Promise',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 4,
        renown: 'HONOR',
        cost: '1 Essence per Merit dot',
        dicePool: 'Manipulation + Persuasion + Honor',
        action: 'Extended (10 successes, 1 minute per roll)',
        duration: '1 day',
        rollResults: {
          dramaticFailure: 'The targeted group attempts to block an existing Ally or Contact.',
          failure: 'No successes gained. Gain the Stumbled Condition.',
          success: 'Gain the desired Merit from the group for one day.',
          exceptionalSuccess: 'Gain the Merit for one week.'
        },
        description: 'Grants temporary Merits like Allies or Resources by influencing a linked group through promises and persuasion.'
      },
      {
        id: 'ties-of-blood-and-bone',
        name: 'Ties of Blood and Bone',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 5,
        renown: 'HONOR',
        cost: '3 Essence',
        dicePool: 'Stamina + Empathy + Honor vs Stamina + Primal Urge',
        action: 'Instant, may be Contested',
        rollResults: {
          dramaticFailure: 'The Elodoth suffers the Arm Wrack or Leg Wrack Tilt.',
          failure: 'The Facet fails.',
          success: 'The Elodoth and a packmate within range instantly switch places.',
          exceptionalSuccess: 'Both heal 2 points of lethal or bashing damage during the exchange.'
        },
        description: 'Swaps places with a packmate within range, through a supernatural transformation. Equipment and garb are retained.'
      }
    ]
  },
  {
    id: 'full-moon',
    name: "Full Moon’s Gift",
    type: 'gift',
    origin: 'Werewolf: The Forsaken',
    powers: [
      {
        id: 'savage-might',
        name: 'Savage Might',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 1,
        renown: 'GLORY',
        cost: '1 Essence',
        dicePool: 'Strength + Brawl + Glory',
        action: 'Instant',
        description: 'This Facet enhances the raw power behind the Rahu’s blows, letting her drive enemies back or break through their defenses with pure force.',
        rollResults: {
          dramaticFailure: 'The attack overextends the Rahu, imposing a –2 Defense penalty next turn.',
          failure: 'The Facet fails.',
          success: 'Add Glory Renown to damage dealt by the next successful Brawl or Weaponry attack this turn.',
          exceptionalSuccess: 'The target is also knocked prone or stunned (player’s choice).'
        }
      },
      {
        id: 'battle-trance',
        name: 'Battle Trance',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 2,
        renown: 'GLORY',
        cost: '1 Essence',
        dicePool: 'Composure + Survival + Glory',
        action: 'Reflexive',
        duration: '1 scene',
        description: 'The Rahu enters a supernatural state of calm and focus, ignoring pain and distractions during the hunt.',
        rollResults: {
          dramaticFailure: 'The trance turns inward and isolates the Rahu, giving –2 to Perception rolls for the scene.',
          failure: 'The Facet fails.',
          success: 'The Rahu ignores wound penalties and adds Glory to Resolve rolls.',
          exceptionalSuccess: 'All Social rolls to intimidate gain +2 for the scene.'
        }
      },
      {
        id: 'relentless-assault',
        name: 'Relentless Assault',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 3,
        renown: 'GLORY',
        cost: '1 Essence',
        dicePool: 'Strength + Athletics + Glory',
        action: 'Reflexive',
        duration: '1 turn',
        description: 'After landing an attack, the Rahu surges forward to follow it up. She gains another attack or move toward a new target.',
        rollResults: {
          dramaticFailure: 'The Rahu stumbles and loses Defense for a turn.',
          failure: 'The Facet fails.',
          success: 'She may immediately take another action (move or attack) against another enemy.',
          exceptionalSuccess: 'She may take two additional actions: one move and one attack.'
        }
      },
      {
        id: 'crushing-fang',
        name: 'Crushing Fang',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 4,
        renown: 'GLORY',
        cost: '1 Essence',
        dicePool: 'Strength + Intimidation + Glory',
        action: 'Instant',
        description: 'The Rahu channels pure destructive intent through her bite or strike, targeting a critical point on her opponent’s form.',
        rollResults: {
          dramaticFailure: 'The blow backfires; the Uratha suffers bashing damage equal to her Glory.',
          failure: 'The Facet fails.',
          success: 'The attack ignores the target’s Defense and deals +2 damage.',
          exceptionalSuccess: 'The target also suffers a Tilt such as Arm Wrack or Knocked Down.'
        }
      },
      {
        id: 'fury-unleashed',
        name: 'Fury Unleashed',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 5,
        renown: 'GLORY',
        cost: '3 Essence',
        dicePool: 'Presence + Brawl + Glory',
        action: 'Instant',
        duration: '1 scene',
        description: 'The Rahu becomes a living engine of violence, striking at multiple foes in a blur of destruction.',
        rollResults: {
          dramaticFailure: 'The Uratha falls into Basu-Im immediately.',
          failure: 'The Facet fails.',
          success: 'For the rest of the scene, once per turn, the Uratha may attack an additional target within reach at no penalty.',
          exceptionalSuccess: 'The Rahu gains +2 Initiative and ignores Defense penalties when choosing targets.'
        }
      }
    ]
  },
  {
    id: 'gibbous-moon',
    name: "Gibbous Moon’s Gift",
    type: 'gift',
    origin: 'Werewolf: The Forsaken',
    powers: [
      {
        id: 'voice-of-glory',
        name: 'Voice of Glory',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 1,
        renown: 'HONOR',
        cost: '1 Essence',
        dicePool: 'Presence + Expression + Honor',
        action: 'Instant',
        duration: '1 scene',
        description: 'The Cahalith’s voice carries with it the weight of epic battles and ancestral tales, demanding the attention of all who hear it.',
        rollResults: {
          dramaticFailure: 'The Cahalith’s voice falters; all packmates suffer –1 to Resolve rolls for the scene.',
          failure: 'The Facet fails.',
          success: 'All allies who hear the Cahalith speak gain +2 to resist fear-based effects.',
          exceptionalSuccess: 'All allies gain +2 to Resolve and Composure for the scene.'
        }
      },
      {
        id: 'echoes-of-the-first-song',
        name: 'Echoes of the First Song',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 2,
        renown: 'HONOR',
        cost: '2 Essence',
        dicePool: 'Manipulation + Empathy + Honor',
        action: 'Extended (10 successes; 1 minute per roll)',
        duration: '1 day',
        description: 'With a ritual chant, the Cahalith awakens a memory of the ancient songs that bound the world, weaving fate and emotion together.',
        rollResults: {
          dramaticFailure: 'The chant attracts the attention of a hostile spirit.',
          failure: 'No successes gained. The Cahalith gains the Spooked Condition.',
          success: 'A number of targets equal to the Cahalith’s Honor gain the Inspired Condition.',
          exceptionalSuccess: 'Targets also gain +1 Willpower immediately.'
        }
      },
      {
        id: 'howl-of-the-past-hunt',
        name: 'Howl of the Past Hunt',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 3,
        renown: 'HONOR',
        cost: '1 Essence',
        dicePool: 'Wits + Occult + Honor',
        action: 'Instant',
        description: 'The Cahalith channels the memory of a legendary hunt, drawing from the power of collective pack history.',
        rollResults: {
          dramaticFailure: 'The howl is discordant. The Cahalith loses 1 Willpower.',
          failure: 'The Facet fails.',
          success: 'The Cahalith gains +2 to any Social or Survival-based roll related to the target of the Siskur-Dah.',
          exceptionalSuccess: 'The pack also gains +1 to their next Initiative roll during the hunt.'
        }
      },
      {
        id: 'vision-of-the-pack-victorious',
        name: 'Vision of the Pack Victorious',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 4,
        renown: 'HONOR',
        cost: '2 Essence',
        dicePool: 'Presence + Empathy + Honor',
        action: 'Instant',
        duration: '1 scene',
        description: 'The Cahalith offers a prophetic glimpse of triumph, bolstering morale and inspiring victory.',
        rollResults: {
          dramaticFailure: 'The vision turns nightmarish. All allies lose 1 Willpower.',
          failure: 'The Facet fails.',
          success: 'All packmates gain +2 to their next action roll this scene.',
          exceptionalSuccess: 'All packmates also recover 1 spent Willpower.'
        }
      },
      {
        id: 'echoes-eternal',
        name: 'Echoes Eternal',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 5,
        renown: 'HONOR',
        cost: '3 Essence',
        dicePool: 'Intelligence + Expression + Honor',
        action: 'Instant',
        duration: '1 scene',
        description: 'The Cahalith speaks words that outlast the moment — stories and declarations that bind fate and stir the world itself.',
        rollResults: {
          dramaticFailure: 'The Cahalith gains the Madness Condition for the scene.',
          failure: 'The Facet fails.',
          success: 'The next social action taken by the Cahalith or a chosen ally gains 8-again and doubles the base effect.',
          exceptionalSuccess: 'The action also counts as an Exceptional Success if it achieves at least one success.'
        }
      }
    ]
  },
  {
    id: 'crescent-moon',
    name: "Crescent Moon’s Gift",
    type: 'gift',
    origin: 'Werewolf: The Forsaken',
    powers: [
      {
        id: 'open-spirit-eye',
        name: 'Open Spirit Eye',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 1,
        renown: 'WISDOM',
        cost: '1 Essence',
        dicePool: 'Wits + Occult + Wisdom',
        action: 'Instant',
        duration: '1 scene',
        description: 'The Ithaeur opens his inner eye to glimpse the Shadow World. He perceives spirits in Twilight, and sees Essence flows in people and places.',
        rollResults: {
          dramaticFailure: 'The Ithaeur is overwhelmed by conflicting visions and suffers the Spooked Condition.',
          failure: 'The Facet fails.',
          success: 'The Ithaeur can perceive spirits in Twilight and sense whether a location is a Locus, a Verge, or spiritually resonant.',
          exceptionalSuccess: 'The Ithaeur gains +2 on all subsequent rolls to interact with spirits this scene.'
        }
      },
      {
        id: 'lorekeeper',
        name: 'Lorekeeper',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 2,
        renown: 'WISDOM',
        cost: '1 Essence',
        dicePool: 'Intelligence + Occult + Wisdom',
        action: 'Instant',
        description: 'The Ithaeur channels the spirit-echoes of ancient lore, identifying the type, Rank, and Ban of a spirit within line of sight.',
        rollResults: {
          dramaticFailure: 'The Ithaeur misidentifies the spirit, mistaking its type or Rank.',
          failure: 'The Facet fails.',
          success: 'The Ithaeur correctly identifies the spirit’s type, approximate Rank, and its Ban.',
          exceptionalSuccess: 'Also reveals the spirit’s Bane, if it has one.'
        }
      },
      {
        id: 'spirit-bargain',
        name: 'Spirit Bargain',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 3,
        renown: 'WISDOM',
        cost: '1 Essence (more may be offered)',
        dicePool: 'Manipulation + Persuasion + Wisdom',
        action: 'Extended (10 successes, 1 minute per roll)',
        description: 'The Ithaeur opens formal negotiation with a spirit for boons, banishments, or pacts. Spirits respect the formality of this rite, and may offer fairer terms.',
        rollResults: {
          dramaticFailure: 'The spirit is offended, and may demand a humiliating concession.',
          failure: 'No progress in negotiation. The spirit grows impatient.',
          success: 'The Ithaeur may request or bargain for a favor; Essence or other conditions may be used as barter.',
          exceptionalSuccess: 'The spirit is unusually generous or impressed and may offer something extra.'
        }
      },
      {
        id: 'ban-evoker',
        name: 'Ban Evoker',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 4,
        renown: 'WISDOM',
        cost: '2 Essence',
        dicePool: 'Presence + Expression + Wisdom vs spirit’s Resistance + Rank',
        action: 'Contested',
        description: 'The Ithaeur calls aloud a spirit’s Ban, weakening it through spiritual command. Even mighty spirits may be laid low if their Ban is strong.',
        rollResults: {
          dramaticFailure: 'The spirit is enraged and gains +1 Rank for resisting the Ithaeur this scene.',
          failure: 'The Ban cannot be evoked.',
          success: 'The spirit suffers a penalty equal to the Ithaeur’s Wisdom to resist actions targeting it for the rest of the scene.',
          exceptionalSuccess: 'The spirit loses access to one of its Numina of the Ithaeur’s choice for the duration.'
        }
      },
      {
        id: 'totem-summons',
        name: 'Totem Summons',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 5,
        renown: 'WISDOM',
        cost: '3 Essence',
        dicePool: 'Resolve + Occult + Wisdom',
        action: 'Instant',
        description: 'The Ithaeur may summon the pack’s totem from the Shadow to assist temporarily, even if the pack is scattered or the Locus is unstable.',
        rollResults: {
          dramaticFailure: 'The totem refuses to answer, and the Ithaeur gains the Guilty Condition.',
          failure: 'The totem cannot manifest.',
          success: 'The totem appears in Twilight or corporeal form (as permitted by its Rank and the location) and aids the Ithaeur’s command for one scene.',
          exceptionalSuccess: 'The totem appears with additional strength or unique power, and remains for an additional scene.'
        }
      }
    ]
  },
  {
    id: 'new-moon',
    name: "New Moon’s Gift",
    type: 'gift',
    origin: 'Werewolf: The Forsaken',
    powers: [
      {
        id: 'eviscerate',
        name: 'Eviscerate',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 1,
        renown: 'CUNNING',
        cost: '1 Essence',
        dicePool: 'Part of a Brawl or Weaponry attack',
        action: 'Reflexive',
        duration: '-',
        description: 'The Irraka may activate this Facet as part of a Brawl or Weaponry attack against an unaware or surprised opponent, turning her attack into a rote action.',
        rollResults: {
          dramaticFailure: '—',
          failure: '—',
          success: 'The attack is treated as a rote action.',
          exceptionalSuccess: '—'
        }
      },
      {
        id: 'slip-away',
        name: 'Slip Away',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 2,
        renown: 'CUNNING',
        cost: '1 Essence',
        dicePool: '-',
        action: 'Instant',
        duration: '1 scene',
        description: 'Characters who perceive or interact with the Irraka while this Facet is active find it hard to remember her presence. She’s forgotten unless she took memorable action. If prompted, memory rolls suffer a penalty equal to the Irraka’s Cunning Renown.',
        rollResults: {
          dramaticFailure: '—',
          failure: '—',
          success: 'Witnesses forget or blur memory of the Irraka unless she took obvious action.',
          exceptionalSuccess: 'Memories become vague shadows even when actively examined.'
        }
      },
      {
        id: 'relentless-hunter',
        name: 'Relentless Hunter',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 3,
        renown: 'CUNNING',
        cost: '1 Essence',
        dicePool: '-',
        action: 'Instant',
        duration: 'Full duration of Siskur-Dah',
        description: 'While pursuing a target under the Siskur-Dah Condition, the Irraka adds her Cunning Renown to Stealth rolls, overcoming obstructions (Larceny, etc.), and finding hidden approaches to prey.',
        rollResults: {
          dramaticFailure: '—',
          failure: '—',
          success: 'Gain bonus equal to Cunning to all relevant rolls while pursuing prey.',
          exceptionalSuccess: '—'
        }
      },
      {
        id: 'divide-and-conquer',
        name: 'Divide and Conquer',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 4,
        renown: 'CUNNING',
        cost: '1 Essence',
        dicePool: 'Manipulation + Subterfuge + Cunning vs Composure + Primal Urge',
        action: 'Contested',
        description: 'The Irraka distracts one group member, causing them to become separated with the Lured Condition. On exceptional success, affects additional targets equal to her Cunning.',
        rollResults: {
          dramaticFailure: 'Prey gains the Spooked Condition and clings to their group.',
          failure: 'The Facet fails.',
          success: 'Prey gains the Lured Condition and splits off.',
          exceptionalSuccess: 'Multiple group members (equal to Cunning) are affected.'
        }
      },
      {
        id: 'breach',
        name: 'Breach',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 5,
        renown: 'CUNNING',
        cost: '3 Essence',
        dicePool: 'Wits + Stealth + Cunning',
        action: 'Instant',
        description: 'The Irraka crosses the Gauntlet even outside a Locus. She appears at the corresponding spot on the other side. On exceptional success, her next use this scene is free.',
        rollResults: {
          dramaticFailure: 'The Gauntlet violently repels her, and she suffers a Tilt (Arm Wrack, Leg Wrack, or Stunned).',
          failure: 'The Facet fails.',
          success: 'She crosses the Gauntlet without a locus.',
          exceptionalSuccess: 'Next Breach this scene is free.'
        }
      }
    ]
  }
];
