import { SupernaturalTemplatesIDs } from "../enum/SupernaturalTemplates";
import GalleryImage from "../interfaces/GalleryImage";
import { HealthBox } from "../interfaces/HealthBox";
import { SpecialTrait } from "../interfaces/SpecialTrait";
import { PersonalInfo } from "../interfaces/PersonalInfo";
import { Skill } from "../interfaces/Skill";
import { StateTrack } from "../interfaces/StateTrack";
import { WerewolfTraits } from "../interfaces/templates/WerewolfTraits";
import { Trait } from "../interfaces/Trait";
import { EquipmentTypes } from "../types/EquipmentTypes";
import { SupernaturalTemplatesType } from "../types/SupernaturalTemplatesType";
import { getTemplateTraits } from "../Utils/SupernaturalTemplates";
import { createHealthTrack, createStateTrackList } from "../Utils/Utils";

export class Character {
  id: string = crypto.randomUUID();
  name: string;
  player: string;
  concept: string;
  chronicle: string;
  group: string;
  age: number = 30;
  
  template: SupernaturalTemplatesIDs;
  templateTraits: SupernaturalTemplatesType;
  
  health: HealthBox[];
  willpower: StateTrack[];
  _size: number = 5;
  
  merits: SpecialTrait[] = [];
  
  conditions: string[] = [];
  aspirations: string[] = [];
  
  story: string = '';
  appearance: string = '';
  beats: boolean[] = Array.from( { length: 5 }, () => { return false });
  experience: number = 0;
  
  npcs: { id: number, name: string; description: string }[] = [];
  
  attributes: Record<'mental' | 'physical' | 'social', Trait[]> = {
    mental: [
      { name: 'intelligence', labelKey: 'intelligence', value: 1 },
      { name: 'wits', labelKey: 'wits', value: 1 },
      { name: 'resolve', labelKey: 'resolve', value: 1 },
    ],
    physical: [
      { name: 'strength', labelKey: 'strength', value: 1 },
      { name: 'dexterity', labelKey: 'dexterity', value: 1 },
      { name: 'stamina', labelKey: 'stamina', value: 1 },
    ],
    social: [
      { name: 'presence', labelKey: 'presence', value: 1 },
      { name: 'manipulation', labelKey: 'manipulation', value: 1 },
      { name: 'composure', labelKey: 'composure', value: 1 },
    ],
  };
  
  skills: Record<'mental' | 'physical' | 'social', Skill[]> = {
    mental: [
      { name: 'science', labelKey: 'science', value: 0, specialties: '' },
      { name: 'academics', labelKey: 'academics', value: 0, specialties: '' },
      { name: 'computer', labelKey: 'computer', value: 0, specialties: '' },
      { name: 'investigation', labelKey: 'investigation', value: 0, specialties: '' },
      { name: 'medicine', labelKey: 'medicine', value: 0, specialties: '' },
      { name: 'occult', labelKey: 'occult', value: 0, specialties: '' },
      { name: 'crafts', labelKey: 'crafts', value: 0, specialties: '' },
      { name: 'politics', labelKey: 'politics', value: 0, specialties: '' },
    ],
    physical: [
      { name: 'weaponry', labelKey: 'weaponry', value: 0, specialties: '' },
      { name: 'firearms', labelKey: 'firearms', value: 0, specialties: '' },
      { name: 'brawl', labelKey: 'brawl', value: 0, specialties: '' },
      { name: 'drive', labelKey: 'drive', value: 0, specialties: '' },
      { name: 'stealth', labelKey: 'stealth', value: 0, specialties: '' },
      { name: 'athletics', labelKey: 'athletics', value: 0, specialties: '' },
      { name: 'larceny', labelKey: 'larceny', value: 0, specialties: '' },
      { name: 'survival', labelKey: 'survival', value: 0, specialties: '' },
    ],
    social: [
      { name: 'subterfuge', labelKey: 'subterfuge', value: 0, specialties: '' },
      { name: 'empathy', labelKey: 'empathy', value: 0, specialties: '' },
      { name: 'expression', labelKey: 'expression', value: 0, specialties: '' },
      { name: 'intimidation', labelKey: 'intimidation', value: 0, specialties: '' },
      { name: 'streetwise', labelKey: 'streetwise', value: 0, specialties: '' },
      { name: 'persuasion', labelKey: 'persuasion', value: 0, specialties: '' },
      { name: 'socialize', labelKey: 'socialize', value: 0, specialties: '' },
      { name: 'animalKen', labelKey: 'animalKen', value: 0, specialties: '' },
    ],
  };
  
  equipments: EquipmentTypes[] = [];
  
  extraVitality: number = 0;
  extraArmor: number = 0;
  extraInitiative: number = 0;
  extraSpeed: number = 0;
  extraDefense: number = 0;
  
  moralityValue: number = 7;
  
  // Itens Pessoais
  gallery: GalleryImage[] = [ { id: 'image-avatar', src: '', caption: 'Avatar' } ];
  personalInfo: PersonalInfo = {
    dateofBirth: '',
    hair: '',
    eyes: '',
    race: '',
    nationality: '',
    ethnicity: '',
    height: '',
    weight: '',
    sex: '',
    gender: '',
    physicalDescription: ''
  }
  
  constructor(name: string = "Personagem", characterTemplate: SupernaturalTemplatesIDs = SupernaturalTemplatesIDs.Mortal) {
    this.name = name;
    this.player = '';
    this.concept = '';
    this.chronicle = '';
    this.group = '';
    
    this.health = createHealthTrack(30);
    this.template = characterTemplate;
    this.templateTraits = getTemplateTraits(this.template);
    this.willpower = createStateTrackList(30, true);
    
  }
  
  // Sobrenatural
  get supernaturalTemplate(): SupernaturalTemplatesIDs {
    return this.template;
  }
  
  set supernaturalTemplate(template: SupernaturalTemplatesIDs) {
    this.template = template;
    this.templateTraits = getTemplateTraits(template);
  }
  
  set size(_size: number) {
    this._size = _size;
  }
  
  get size(): number {
    const templateSize = this.getTemplateValues('size') || 0;
    const meritSize = (this.merits.some(elem => elem.labelKey === 'merit.giant') ? 1 : 0);
    //                    Se contém Gigante.
    return this._size + meritSize + templateSize;
  }
  
  get healthPoints(): number {
    return this.size + this.stamina + this.extraVitality;
  }
  
  get willpowerPoints(): number {
    return this.getAttribute('resolve') + this.getAttribute('composure');
  }
  
  get defense(): number {
    return Math.min(this.getAttribute('wits'), this.getAttribute('dexterity')) + this.getSkill('athletics');
  }
  
  // TODO: Função de Armadura. Pegar bônus de Equipamentos e outros.
  get armor(): number {
    // Vantagem Pele de Aço
    const ironSkinMerit = (this.merits.find(elem => elem.labelKey === 'merit.iron_skin'));
    const ironSkinValue = (ironSkinMerit) ? (ironSkinMerit.value === 4 ? 2 : 1) : 0;

    return 0 + ironSkinValue;
  }
  
  get initiative(): number {
    return this.getAttribute('dexterity') + this.getAttribute('composure') + this.extraInitiative;
  }
  
  get speed(): number {
    return this.getAttribute('strength') + this.getAttribute('dexterity') + 5;
  }  
  
  getAttribute(type: string): number {
    for (const group of Object.values(this.attributes)) {
      const attr = group.find((a) => a.name === type);
      if (attr) return attr.value + this.getTemplateValues(type);
    }
    return 0;
  }
  
  setAttribute(type: string, value: number) {
    for (const group of Object.values(this.attributes)) {
      const attr = group.find((a) => a.name === type);
      if (attr) {
        attr.value = value;
        return;
      }
    }
  }
  
  getSkill(type: string): number {
    for (const group of Object.values(this.skills)) {
      const skill = group.find((s) => s.name === type);
      if (skill) return skill.value;
    }
    return 0;
  }
  
  setSkill(type: string, value: number) {
    for (const group of Object.values(this.skills)) {
      const skill = group.find((s) => s.name === type);
      if (skill) {
        skill.value = value;
        return;
      }
    }
  }
  
  // ============================ ATRIBUTOS ============================ //
  // ============== MENTAIS ============== //
  get intelligence(): number { return this.getAttribute('intelligence'); }
  get wits(): number         { return this.getAttribute('wits'); }
  get resolve(): number      { return this.getAttribute('resolve'); }
  
  set intelligence(value: number) { this.setAttribute('intelligence', value); }
  set wits(value: number)         { this.setAttribute('wits', value); }
  set resolve(value: number)      { this.setAttribute('resolve', value); }
  
  // ============== FÍSICOS ============== //
  get strength(): number   { return this.getAttribute('strength'); }
  get dexterity(): number  { return this.getAttribute('dexterity'); }
  get stamina(): number    { 
    const templateExtra: number = this.getTemplateValues('stamina') || 0;
    return this.getAttribute('stamina') + templateExtra; 
  }
  
  set strength(value: number)   { this.setAttribute('strength', value); }
  set dexterity(value: number)  { this.setAttribute('dexterity', value); }
  set stamina(value: number)    { this.setAttribute('stamina', value); }
  
  // ============== SOCIAIS ============== //
  get presence(): number     { return this.getAttribute('presence'); }
  get manipulation(): number { return this.getAttribute('manipulation'); }
  get composure(): number    { return this.getAttribute('composure'); }
  
  set presence(value: number)     { this.setAttribute('presence', value); }
  set manipulation(value: number) { this.setAttribute('manipulation', value); }
  set composure(value: number)    { this.setAttribute('composure', value); }
  
  // ============================ HABILIDADES ============================ //
  // ============== MENTAIS ============== //
  get science(): number       { return this.getSkill('science'); }
  get academics(): number     { return this.getSkill('academics'); }
  get computer(): number      { return this.getSkill('computer'); }
  get investigation(): number { return this.getSkill('investigation'); }
  get medicine(): number      { return this.getSkill('medicine'); }
  get occult(): number        { return this.getSkill('occult'); }
  get crafts(): number        { return this.getSkill('crafts'); }
  get politics(): number      { return this.getSkill('politics'); }
  
  set science(value: number)       { this.setSkill('science', value); }
  set academics(value: number)     { this.setSkill('academics', value); }
  set computer(value: number)      { this.setSkill('computer', value); }
  set investigation(value: number) { this.setSkill('investigation', value); }
  set medicine(value: number)      { this.setSkill('medicine', value); }
  set occult(value: number)        { this.setSkill('occult', value); }
  set crafts(value: number)        { this.setSkill('crafts', value); }
  set politics(value: number)      { this.setSkill('politics', value); }
  
  // ============== FÍSICAS ============== //
  get weaponry(): number  { return this.getSkill('weaponry'); }
  get firearms(): number  { return this.getSkill('firearms'); }
  get brawl(): number     { return this.getSkill('brawl'); }
  get drive(): number     { return this.getSkill('drive'); }
  get stealth(): number   { return this.getSkill('stealth'); }
  get athletics(): number { return this.getSkill('athletics'); }
  get larceny(): number   { return this.getSkill('larceny'); }
  get survival(): number  { return this.getSkill('survival'); }
  
  set weaponry(value: number)  { this.setSkill('weaponry', value); }
  set firearms(value: number)  { this.setSkill('firearms', value); }
  set brawl(value: number)     { this.setSkill('brawl', value); }
  set drive(value: number)     { this.setSkill('drive', value); }
  set stealth(value: number)   { this.setSkill('stealth', value); }
  set athletics(value: number) { this.setSkill('athletics', value); }
  set larceny(value: number)   { this.setSkill('larceny', value); }
  set survival(value: number)  { this.setSkill('survival', value); }
  
  // ============== SOCIAIS ============== //
  get subterfuge(): number  { return this.getSkill('subterfuge'); }
  get empathy(): number     { return this.getSkill('empathy'); }
  get expression(): number  { return this.getSkill('expression'); }
  get intimidation(): number { return this.getSkill('intimidation'); }
  get streetwise(): number  { return this.getSkill('streetwise'); }
  get persuasion(): number  { return this.getSkill('persuasion'); }
  get socialize(): number   { return this.getSkill('socialize'); }
  get animalKen(): number   { return this.getSkill('animalKen'); }
  
  set subterfuge(value: number)  { this.setSkill('subterfuge', value); }
  set empathy(value: number)     { this.setSkill('empathy', value); }
  set expression(value: number)  { this.setSkill('expression', value); }
  set intimidation(value: number) { this.setSkill('intimidation', value); }
  set streetwise(value: number)  { this.setSkill('streetwise', value); }
  set persuasion(value: number)  { this.setSkill('persuasion', value); }
  set socialize(value: number)   { this.setSkill('socialize', value); }
  set animalKen(value: number)   { this.setSkill('animalKen', value); }

  getTemplateValues(trait: string): number {
    const valuesByTrait: Record<string, Record<SupernaturalTemplatesIDs, () => number>> = {
      size: {
        [SupernaturalTemplatesIDs.Mortal]: () => 0,
        [SupernaturalTemplatesIDs.Werewolf]: () => {
          const form = (this.templateTraits as WerewolfTraits).activeForm;
          if (form === 'dalu') return 1;
          if (form === 'gauru') return 2;
          if (form === 'urshul') return 1;
          if (form === 'urhan') return -1;
          return 0;
        },
        [SupernaturalTemplatesIDs.Vampire]: () => 0,
        [SupernaturalTemplatesIDs.Deviant]: () => 0,
      },
      stamina: {
        [SupernaturalTemplatesIDs.Mortal]: () => 0,
        [SupernaturalTemplatesIDs.Werewolf]: () => {
          const form = (this.templateTraits as WerewolfTraits).activeForm;
          if (form === 'dalu') return 1;
          if (form === 'gauru') return 2;
          if (form === 'urshul') return 2;
          if (form === 'urhan') return 1;
          return 0;
        },
        [SupernaturalTemplatesIDs.Vampire]: () => 0,
        [SupernaturalTemplatesIDs.Deviant]: () => 0,
      },
      strength: {
        [SupernaturalTemplatesIDs.Mortal]: () => 0,
        [SupernaturalTemplatesIDs.Werewolf]: () => {
          const form = (this.templateTraits as WerewolfTraits).activeForm;
          if (form === 'dalu') return 1;
          if (form === 'gauru') return 3;
          if (form === 'urshul') return 2;
          if (form === 'urhan') return 0;
          return 0;
        },
        [SupernaturalTemplatesIDs.Vampire]: () => 0,
        [SupernaturalTemplatesIDs.Deviant]: () => 0,
      },
      // Pode adicionar outros traits aqui se quiser depois.
    };
  
    const traitMap = valuesByTrait[trait];
    if (!traitMap) return 0;
  
    const templateFunc = traitMap[this.template];
    return templateFunc ? templateFunc() : 0;
  }
  
  
  // Character.ts
  static fromJSON(raw: any): Character {
    const c = new Character();
    Object.assign(c, raw);
    Object.assign(c.templateTraits, raw.templateTraits);
    return c;
  }
  
}
