import { SupernaturalPowerCategory } from "../../interfaces/SupernaturalPowerCategory";

export const packRites: SupernaturalPowerCategory = {
  id: "pack_rites",
  name: "Pack Rites",
  type: "rite",
  origin: "Werewolf: The Forsaken",
  powers: [
    {
      id: "banish",
      name: "Banish",
      type: "rite",
      subtype: "pack",
      origin: "Werewolf: The Forsaken",
      dotRating: 1,
      cost: "Varies",
      symbols: [
        "Warning",
        "the two worlds",
        "the Wolf’s last howl",
        "bitterness"
      ],
      sampleRite: "A growing trend amongst North American Uratha is a subtle invocation of banishment, where the ritemaster warns the interloper and challenges them with paradoxical demands. During the rite, the ritemaster chews on a paste of bitter berries, spitting it out to daub sigils of warding and the two worlds. Whatever answer is given by the spirit is wrong by its very nature, and the ritemaster’s mocking howl chases it across the Gauntlet.",
      action: "Extended (5 successes; each roll represents 1 minute); spirits may contest with their Resistance, but other creatures cannot resist",
      description: `
        This rite banishes a targeted spirit from the physical world into Shadow, or a creature in the Shadow that is not a spirit or werewolf to the world of Flesh. The banished creature appears at the corresponding point in its appropriate realm.\n
        There are reports that this rite also works on Wound-tainted spirit servants of the dread Maeljin if conducted in the Wound in question, pushing them out of the Shadow and into somewhere else beyond the Uratha’s ken.
      `
    },
    {
      id: "harness_the_cycle",
      name: "Harness the Cycle",
      type: "rite",
      subtype: "pack",
      origin: "Werewolf: The Forsaken",
      dotRating: 1,
      cost: "Varies",
      symbols: ["The season", "consumption", "blood", "earth or sky"],
      sampleRite: "At harvest time and the Autumn equinox, the pack comes together to celebrate the time of plenty. They feast on freshly killed meat, mark themselves with the fertile earth and howl to the sky. They share the bounty of the season, painting themselves with the blood of the kill.",
      action: "Extended (10 successes; each roll represents half an hour)",
      description: `
        "This rite draws Essence from the changing of the seasons. In temperate regions, it can only be performed on seasonal equinoxes and solstices. All participating Uratha gain Essence equal to half their maximum pool. Humans and Wolf-Blooded regain all Willpower and heal at twice the normal rate for a full month.\n
        In tropical regions, the rite occurs during the transitions between wet and dry seasons. Uratha fill their full Essence pool, and humans or Wolf-Blooded gain the same benefits, plus one dot in Allies, Contacts, or Resources for a month."
      `
    },
    {
      id: "totemic_empowerment",
      name: "Totemic Empowerment",
      type: "rite",
      subtype: "pack",
      origin: "Werewolf: The Forsaken",
      dotRating: 1,
      cost: "Varies",
      symbols: ["The totem", "the pack", "blood", "strength"],
      sampleRite: "The subject pierces his flesh with spines, the ritemaster painting images of snarling foxes in the flowing blood.",
      action: "Extended (10 successes; each roll represents 1 minute)",
      duration: "Until the next sunrise",
      description: "The totem temporarily rides the target, granting +1 Strength, Dexterity, and Stamina, +2 Perception, and vision of Twilight. The Uratha gains 5 extra Essence and access to the totem’s Influences and Numina. Humans become immune to Lunacy; if an Uratha enters Basu-Im, the totem takes control. Being empowered is a breaking point toward Spirit for Uratha, and an Integrity breaking point for humans or Wolf-Blooded."
    },
    {
      id: "hunting_ground",
      name: "Hunting Ground",
      type: "rite",
      subtype: "pack",
      origin: "Werewolf: The Forsaken",
      dotRating: 2,
      cost: "Varies",
      symbols: ["Territory", "pack totem", "the pack", "boundaries"],
      sampleRite: "Packs beat the bounds, striking markers with totem-staves, gouging trees and stones.",
      action: "Extended (10 successes; each roll represents half an hour)",
      duration: "1 season",
      description: "The territory becomes sanctified. Pack members gain +2 to chases and tracking, and +2 to Animal Ken, Empathy, and Politics rolls within the territory. The rite ends if the pack fails to complete a hunt each month."
    },
    {
      id: "moons_mad_love",
      name: "Moon’s Mad Love",
      type: "rite",
      subtype: "pack",
      origin: "Werewolf: The Forsaken",
      dotRating: 2,
      cost: "Varies",
      symbols: ["Silver", "the auspices", "love", "change"],
      sampleRite: "At a moonlit masquerade, supplicants debate change and love, earning silver tokens from the ritemaster.",
      action: "Extended (15 successes; each roll represents 1 minute)",
      duration: "1 month",
      description: "Humans do not suffer Lunacy from packmates and remember events normally. Upon seeing the full moon, they gain the Inspired Condition. At the month’s end, they must roll Resolve + Composure or gain the Madness Condition."
    },
    {
      id: "wellspring",
      name: "Wellspring",
      type: "rite",
      subtype: "pack",
      origin: "Werewolf: The Forsaken",
      dotRating: 2,
      cost: "Varies",
      symbols: ["Fountains or ignition", "cleansing", "energy", "the resonance type"],
      sampleRite: "Packs mix blood and plant sap in ritual cleansing dances over loci of plants.",
      action: "Extended (20 successes; each roll represents 10 minutes)",
      duration: "1 month",
      description: "Spirits and Uratha gain bonuses to Influences related to the locus’ Resonance. Pack members may wield the Influence using Presence + Wits, spending the locus’ Essence. The area gains the Resonant Condition. The pack gains a persistent Ban Condition matching the Resonance. If violated, the effect ends and the rite may not be reused for a year and a day."
    },
    {
      id: "raiment_of_the_storm",
      name: "Raiment of the Storm",
      type: "rite",
      subtype: "pack",
      origin: "Werewolf: The Forsaken",
      dotRating: 3,
      cost: "Varies",
      symbols: ["Rain", "lightning", "blood", "sky"],
      sampleRite: "Pack gathers in the storm, lightning writhing among them, each slashing a hand to pool blood under the totem’s gaze.",
      action: "Extended (15 successes; each roll represents 1 minute)",
      duration: "Until the storm ceases",
      description: `
        Thought only to Storm Lords \n
        Performed during a thunderstorm. Participants outside in rain gain +2 to resist supernatural effects, +2 general armor, and immunity to electricity. They also gain a Ban: they cannot rest until the storm ends.
      `
    },

    {
      id: "moons_mad_love",
      name: "Moon’s Mad Love",
      type: "rite",
      subtype: "pack",
      origin: "Werewolf: The Forsaken",
      dotRating: 2,
      cost: "Varies",
      symbols: ["Silver", "the auspices", "love", "change"],
      sampleRite: "At a moonlit masquerade, supplicants debate change and love, earning silver tokens from the ritemaster.",
      action: "Extended (15 successes; each roll represents 1 minute)",
      duration: "1 month",
      description: "Humans do not suffer Lunacy from packmates and remember events normally. Upon seeing the full moon, they gain the Inspired Condition. At the month’s end, they must roll Resolve + Composure or gain the Madness Condition."
    },
    {
      id: "wellspring",
      name: "Wellspring",
      type: "rite",
      subtype: "pack",
      origin: "Werewolf: The Forsaken",
      dotRating: 2,
      cost: "Varies",
      symbols: ["Fountains or ignition", "cleansing", "energy", "the resonance type"],
      sampleRite: "Packs mix blood and plant sap in ritual cleansing dances over loci of plants.",
      action: "Extended (20 successes; each roll represents 10 minutes)",
      duration: "1 month",
      description: "Spirits and Uratha gain bonuses to Influences related to the locus’ Resonance. Pack members may wield the Influence using Presence + Wits, spending the locus’ Essence. The area gains the Resonant Condition. The pack gains a persistent Ban Condition matching the Resonance. If violated, the effect ends and the rite may not be reused for a year and a day."
    },
    {
      id: "raiment_of_the_storm",
      name: "Raiment of the Storm",
      type: "rite",
      subtype: "pack",
      origin: "Werewolf: The Forsaken",
      dotRating: 3,
      cost: "Varies",
      symbols: ["Rain", "lightning", "blood", "sky"],
      sampleRite: "Pack gathers in the storm, lightning writhing among them, each slashing a hand to pool blood under the totem’s gaze.",
      action: "Extended (15 successes; each roll represents 1 minute)",
      duration: "Until the storm ceases",
      description: `
        Taught Only To Storm Lords\n
        Performed during a thunderstorm. Participants outside in rain gain +2 to resist supernatural effects, +2 general armor, and immunity to electricity. They also gain a Ban: they cannot rest until the storm ends.
      `
    },
    {
      id: "shadowcall",
      name: "Shadowcall",
      type: "rite",
      subtype: "pack",
      origin: "Werewolf: The Forsaken",
      dotRating: 3,
      cost: "Varies",
      symbols: ["Circles", "a call", "lights", "the spirit’s type"],
      sampleRite: "A tech-ritual of circuitry, light, and code summons spirits via “gateway servers.”",
      action: "Extended (20 successes; each roll represents 1 minute); may be contested by spirit’s Resistance",
      description: "Targets a specific spirit by name or type. On success, the spirit appears in a summoning spot with gathra. If summoned from across the Gauntlet, the local Gauntlet strength applies. If summoned into the material world, the space gains the Open Condition and the spirit appears in Twilight."
    },
    {
      id: "supplication",
      name: "Supplication",
      type: "rite",
      subtype: "pack",
      origin: "Werewolf: The Forsaken",
      dotRating: 3,
      cost: "Varies",
      symbols: ["Territory", "smoke", "balance", "the spirits’ type"],
      sampleRite: "Trinkets of straw and bone are painted with blood and hung throughout the territory with smoke trails and howls.",
      action: "Extended (10 successes; each roll represents half an hour)",
      duration: "1 season",
      description: "Spirits of the specified type improve their impressions toward the pack. If most offerings are removed or destroyed, the effect ends. The ritemaster gains a persistent Ban Condition reflecting the spirit type, ending when the rite does."
    },
    {
      id: "hidden_path",
      name: "Hidden Path",
      type: "rite",
      subtype: "pack",
      origin: "Werewolf: The Forsaken",
      dotRating: 4,
      cost: "Varies",
      symbols: ["Paths", "shadow", "doorways", "the destination"],
      sampleRite: "Within abandoned buildings, the pack hunts while the ritemaster paints their intended destination on exits.",
      action: "Extended (15 successes; each roll represents 10 minutes)",
      description: `
        Taught Only To Hunters in Darkness\n
        Participants follow a shortcut that takes one tenth the time by foot and avoids barriers or detection. The destination must be accessible by land. If anyone leaves the path, the rite ends.
      `
    },
    {
      id: "expel",
      name: "Expel",
      type: "rite",
      subtype: "pack",
      origin: "Werewolf: The Forsaken",
      dotRating: 4,
      cost: "Varies",
      symbols: ["Ownership", "dominance", "shattering", "scourging"],
      sampleRite: "The pack wraps the host in chains, marks them with blood sigils, and tears away bindings as the spirit is forced out.",
      action: "Extended (10 successes; 1 roll per minute); contested by the spirit’s Resistance",
      description: "If successful, the spirit is cast out. If the host is living, they are considered a temporary pack member for one hour. The rite has no effect on Claimed."
    },
    {
      id: "great_hunt",
      name: "Great Hunt",
      type: "rite",
      subtype: "pack",
      origin: "Werewolf: The Forsaken",
      dotRating: 5,
      cost: "Varies",
      symbols: ["Blood", "transformation", "wolves", "silver"],
      sampleRite: "Humans wear wolf-skins and ingest drugs during shamanic ceremonies while Uratha bite and mark them with silver coins.",
      action: "Extended (20 successes; each roll represents one minute)",
      duration: "Until next sunrise",
      description: "Human and Wolf-Blooded pack members transform into Urhan, gaining its benefits and regeneration. They gain a Ban: they must hunt the declared prey. Humans experience an Integrity breaking point; Wolf-Blooded do not."
    }
    
  ]
}
