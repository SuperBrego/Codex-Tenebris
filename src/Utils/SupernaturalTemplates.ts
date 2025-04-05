import { SupernaturalTemplatesIDs } from "../enum/SupernaturalTemplates";
import { DeviantTraits } from "../interfaces/templates/DeviantTraits";
import { MortalTraits } from "../interfaces/templates/MortalTraits";
import { VampireTraits } from "../interfaces/templates/VampireTraits";
import { WerewolfTraits } from "../interfaces/templates/WerewolfTraits";
import { SupernaturalTemplatesType } from "../types/SupernaturalTemplatesType";
import { createHealthTrack, createStateTrackList } from "./Utils";

export function getTemplateTraits(template: SupernaturalTemplatesIDs): SupernaturalTemplatesType {
  switch (template) {
    default: return {} as MortalTraits;
    case SupernaturalTemplatesIDs.Mortal: return createMortalTraits() as MortalTraits;
    case SupernaturalTemplatesIDs.Vampire: return createVampireTraits() as VampireTraits;
    case SupernaturalTemplatesIDs.Werewolf: return createWerewolfTraits() as WerewolfTraits;
    case SupernaturalTemplatesIDs.Deviant: return createDeviantTraits() as DeviantTraits;
  }
}

function createMortalTraits(): MortalTraits {
  return {
    index: SupernaturalTemplatesIDs.Mortal,
    book: "WoD",
    virtue: '',
    vice: '',
    faction: '',
    moralityType: 'Humanidade',
    moralityTrait: [],
    morality: 0,
  };
}

function createVampireTraits(): VampireTraits {
  return {
    index: SupernaturalTemplatesIDs.Vampire,
    book: "VtR",
    bloodPotency: 0,
    clan: '',
    mask: '',
    dirge: '',
    bloodline: '',
    covenant: '',
    vitae: createStateTrackList(10, false),
    disciplines: [],
    banes: [],
    devotions: [],
    ritesMiracles: [],
    vinculum: [],
    havens: [],
  };
}

function createWerewolfTraits(): WerewolfTraits {
  return {
    index: SupernaturalTemplatesIDs.Werewolf,
    book: "WtF",
    primalUrge: 0,
    essense: createStateTrackList(10, false),
    renown: { purity: 0, glory: 0, honor: 0, wisdom: 0, cunning: 0 },
    triggers: { passive: '', common: '', specific: '' },
    gifts: { moon: [], shadow: [], wolf: [] },
    rites: [],
    totem: {
      name: '',
      power: 0,
      finesse: 0,
      resistance: 0,
      willpower: createStateTrackList(10, false),
      essence: createStateTrackList(10, false),
      initiative: 0,
      defense: 0,
      speed: 0,
      size: 0,
      corpus: 0,
      influences: [],
      aspiration: '',
      numina: '',
      bonuses: '',
      ban: '',
      bane: ''
    }
  };
}

function createDeviantTraits(): DeviantTraits {
  return {
    index: SupernaturalTemplatesIDs.Deviant,
    book: "DtR",
    convictions: [],
    loyalty: [],
    scars: [],
    variations: [],
    stability: createHealthTrack(10)
  };
}