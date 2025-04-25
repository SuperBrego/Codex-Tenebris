import { SupernaturalPowerCategory } from "../../interfaces/SupernaturalPowerCategory";

export const shadowGifts: SupernaturalPowerCategory[] = [
  {
    id: 'gift-of-death',
    name: 'Gift of Death',
    type: 'gift',
    origin: 'Werewolf: The Forsaken',
    powers: [
      {
        id: 'cold-embrace',
        name: 'Cold Embrace',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 1,
        renown: 'CUNNING',
        cost: '1 Essence',
        dicePool: 'Stamina + Medicine + Cunning',
        action: 'Instant',
        duration: '1 hour per success',
        rollResults: {
          dramaticFailure: 'The Uratha brings herself too close to death, and suffers one point of aggravated damage.',
          failure: 'The Uratha fails to still her body’s vital signs.',
          success: 'The Uratha successfully stills her body’s vital signs. She appears to be freshly dead, displaying no pulse or respiration, and her natural regeneration ceases for the duration. Acting imposes a penalty equal to (5 – Cunning Renown).',
          exceptionalSuccess: 'The Uratha’s morbid flesh also becomes more resilient, reducing all damage she suffers by one.'
        },
        description: 'The Uratha embraces the chill of the grave to still her heartbeat and appear dead. She can still act while "dead" but suffers penalties.'
      },
      {
        id: 'barghest',
        name: 'Barghest',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 2,
        renown: 'GLORY',
        cost: 'None',
        dicePool: '-',
        action: '-',
        duration: 'Permanent',
        description: 'The Uratha perceives ghosts and other undead in Twilight, and may attack them while in Gauru, Urshul, or Urhan. She may spend 1 Essence to damage corporeal undead and drain Willpower.'
      },
      {
        id: 'memento-mori',
        name: 'Memento Mori',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 3,
        renown: 'HONOR',
        cost: '1 Essence',
        dicePool: '-',
        action: 'Reflexive',
        duration: '1 scene',
        description: 'The Uratha can sense the health of packmates and transfer damage to herself reflexively each turn (up to Honor in bashing/lethal or 1 aggravated).' 
      },
      {
        id: 'bone-gnaw',
        name: 'Bone Gnaw',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 4,
        renown: 'PURITY',
        cost: '1 Essence',
        dicePool: '-',
        action: 'Instant',
        description: 'By consuming bones, the Uratha gleans knowledge of the dead, gains a Skill or Renown temporarily, or learns important secrets.'
      },
      {
        id: 'eyes-of-the-dead',
        name: 'Eyes of the Dead',
        type: 'gift',
        origin: 'Werewolf: The Forsaken',
        level: 5,
        renown: 'WISDOM',
        cost: '1 Essence',
        dicePool: 'Wits + Occult + Wisdom',
        action: 'Instant',
        rollResults: {
          dramaticFailure: 'The Uratha gains the Ban Condition. She cannot look directly into the eyes of another.',
          failure: 'The Facet fails.',
          success: 'The Uratha sees the last moments of the corpse, their emotions and impressions.',
          exceptionalSuccess: 'The Uratha gains deeper memories leading up to death, equal in minutes to Wisdom Renown.'
        },
        description: 'The Uratha gleans death visions from a corpse’s eyes, revealing final moments and emotions. Requires intact eyes.'
      }
    ]
  },
  
];
