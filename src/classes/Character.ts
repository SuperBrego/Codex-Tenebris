import { SupernaturalTemplates } from "../enum/SupernaturalTemplates";
import { StateTrack } from "../interfaces/StateTrack";
import { Trait } from "../interfaces/Trait";
import { TemplateTraits } from "../types/TemplateTraits";

export class Character {
  name: string;
  player: string;
  concept: string;
  chronicle: string;
  group: string;
  
  template: SupernaturalTemplates;
  // templateTraits: TemplateTraits;
  
  // willpower: StateTrack[];
  size: number;
  extraVitality: number;
  
  merits: any[];
  conditions: any[];
  aspirations: any[];
  story: string;
  appearance: string;
  
  npcs: { name: string; description: string }[];
  
  mentalAttributes: Trait[];
  physicalAttributes: Trait[];
  socialAttributes: Trait[];
  
  mentalSkills: Trait[];
  physicalSkills: Trait[];
  socialSkills: Trait[];
  
  equipments: any[];
  weapons: any[];
  armors: any[];
  
  constructor(name: string = "Personagem") {
    this.name = name;
    this.player = '';
    this.concept = '';
    this.chronicle = '';
    this.group = '';
    
    this.template = SupernaturalTemplates.Vampire;
    // this.templateTraits = getTemplateTraits(this.template);
       
    // this.willpower = createStateTrack(15);
    
    this.size = 5;
    this.extraVitality = 0;
    
    this.merits = [];
    this.conditions = [];
    this.aspirations = [];
    this.story = '';
    this.appearance = '';
    this.npcs = [];
    
    this.mentalAttributes = [
      { index: 0, name: "Inteligência", rank: 1, class: "intelligence" },
      { index: 1, name: "Raciocínio", rank: 1, class: "wits" },
      { index: 2, name: "Perseverança", rank: 1, class: "resolve" },
    ];
    
    this.physicalAttributes = [
      { index: 0, name: "Força", rank: 1, class: "strength" },
      { index: 1, name: "Destreza", rank: 1, class: "dexterity" },
      { index: 2, name: "Vigor", rank: 1, class: "stamina" },
    ];
    
    this.socialAttributes = [
      { index: 0, name: "Presença", rank: 1, class: "presence" },
      { index: 1, name: "Manipulação", rank: 1, class: "manipulation" },
      { index: 2, name: "Autocontrole", rank: 1, class: "composure" },
    ];
    
    this.mentalSkills = [
      { index: 0, name: "Ciências", rank: 0, class: "science" },
      { index: 1, name: "Erudição", rank: 0, class: "academics" },
      { index: 2, name: "Informática", rank: 0, class: "computer" },
      { index: 3, name: "Investigação", rank: 0, class: "investigation" },
      { index: 4, name: "Medicina", rank: 0, class: "medicine" },
      { index: 5, name: "Ocultismo", rank: 0, class: "occult" },
      { index: 6, name: "Ofícios", rank: 0, class: "crafts" },
      { index: 7, name: "Política", rank: 0, class: "politics" },
    ];
    
    this.physicalSkills = [
      { index: 0, name: "Armamento", rank: 0, class: "weaponry" },
      { index: 1, name: "Armas de Fogo", rank: 0, class: "firearms" },
      { index: 2, name: "Briga", rank: 0, class: "brawl" },
      { index: 3, name: "Condução", rank: 0, class: "drive" },
      { index: 4, name: "Dissimulação", rank: 0, class: "stealth" },
      { index: 5, name: "Esportes", rank: 0, class: "athletics" },
      { index: 6, name: "Furto", rank: 0, class: "larceny" },
      { index: 7, name: "Sobrevivência", rank: 0, class: "survival" },
    ];
    
    this.socialSkills = [
      { index: 0, name: "Astúcia", rank: 0, class: "subterfuge" },
      { index: 1, name: "Empatia", rank: 0, class: "empathy" },
      { index: 2, name: "Expressão", rank: 0, class: "expression" },
      { index: 3, name: "Intimidação", rank: 0, class: "intimidation" },
      { index: 4, name: "Manha", rank: 0, class: "streetwise" },
      { index: 5, name: "Persuasão", rank: 0, class: "persuasion" },
      { index: 6, name: "Socialização", rank: 0, class: "socialize" },
      { index: 7, name: "Tratar Animais", rank: 0, class: "animalKen" },
    ];
    
    this.equipments = [];
    this.weapons = [];
    this.armors = [];
  }
  
  // Continua dentro da classe Character
  
  setCharacterFromCharacter(character: Character): void {
    this.name = character.name;
    this.player = character.player;
    this.concept = character.concept;
    this.chronicle = character.chronicle;
    this.group = character.group;
    // this.health = character.healthPoints;
    // this.willpower = character.willpower;
    this.size = character.size;
    this.merits = character.merits;
    this.mentalAttributes = character.mentalAttributes;
    this.physicalAttributes = character.physicalAttributes;
    this.socialAttributes = character.socialAttributes;
    this.mentalSkills = character.mentalSkills;
    this.physicalSkills = character.physicalSkills;
    this.socialSkills = character.socialSkills;
    this.extraVitality = character.extraVitality;
    this.conditions = character.conditions;
    this.aspirations = character.aspirations;
    this.story = character.story;
    this.appearance = character.appearance;
    this.template = character.template;
    // this.templateTraits = character.templateTraits;
    this.npcs = character.npcs;
  }
  
  get healthPoints(): number {
    return this.size + this.physicalAttributes[2].rank;
  }
  
  get willpowerPoints(): number {
    return this.mentalAttributes[2].rank + this.socialAttributes[2].rank;
  }
  
  get defense(): number {
    return Math.min(this.mentalAttributes[1].rank, this.physicalAttributes[1].rank) + this.physicalSkills[5].rank;
  }
  
  get initiative(): number {
    return this.physicalAttributes[1].rank + this.socialAttributes[2].rank;
  }
  
  get speed(): number {
    return this.physicalAttributes[0].rank + this.physicalAttributes[1].rank + 5;
  }
  
  // Sobrenatural
  get supernaturalTemplate(): SupernaturalTemplates {
    return this.template;
  }
  
  set supernaturalTemplate(template: SupernaturalTemplates) {
    this.template = template;
    // this.templateTraits = getTemplateTraits(template);
  }
  
  // Atributos — acesso por índice
  getMentalAttr(index: number): Trait | undefined {
    return this.mentalAttributes.find(attr => attr.index === index);
  }
  
  getPhysicalAttr(index: number): Trait | undefined {
    return this.physicalAttributes.find(attr => attr.index === index);
  }
  
  getSocialAttr(index: number): Trait | undefined {
    return this.socialAttributes.find(attr => attr.index === index);
  }
  
  getMentalAttrClass(index: number): string {
    const attr = this.getMentalAttr(index);
    if (!attr) throw new Error(`Não foi possível encontrar Index. Index encontrado: ${index}`);
    return attr.class;
  }
  
  getPhysicalAttrClass(index: number): string {
    const attr = this.getPhysicalAttr(index);
    if (!attr) throw new Error(`Não foi possível encontrar Index. Index encontrado: ${index}`);
    return attr.class;
  }
  
  getSocialAttrClass(index: number): string {
    const attr = this.getSocialAttr(index);
    if (!attr) throw new Error(`Não foi possível encontrar Index. Index encontrado: ${index}`);
    return attr.class;
  }
  
  // Atributos — setters
  setMentalAttr(index: number, rank: number): void {
    const attr = this.getMentalAttr(index);
    if (!attr) throw new Error(`Não foi possível encontrar Index Mental. Index encontrado: ${index}.`);
    attr.rank = rank;
  }
  
  setPhysicalAttr(index: number, rank: number): void {
    const attr = this.getPhysicalAttr(index);
    if (!attr) throw new Error(`Não foi possível encontrar Index Físico. Index encontrado: ${index}.`);
    attr.rank = rank;
  }
  
  setSocialAttr(index: number, rank: number): void {
    const attr = this.getSocialAttr(index);
    if (!attr) throw new Error(`Não foi possível encontrar Index Social. Index encontrado: ${index}.`);
    attr.rank = rank;
  }
  
  get intelligence(): number { return this.mentalAttributes[0].rank; }
  get wits(): number         { return this.mentalAttributes[1].rank; }
  get resolve(): number      { return this.mentalAttributes[2].rank; }
  
  get strength(): number   { return this.physicalAttributes[0].rank; }
  get dexterity(): number  { return this.physicalAttributes[1].rank; }
  get stamina(): number    { return this.physicalAttributes[2].rank; }
  
  get presence(): number     { return this.socialAttributes[0].rank; }
  get manipulation(): number { return this.socialAttributes[1].rank; }
  get composure(): number    { return this.socialAttributes[2].rank; }
  
  get science(): number       { return this.mentalSkills[0].rank; }
  get academics(): number     { return this.mentalSkills[1].rank; }
  get computer(): number      { return this.mentalSkills[2].rank; }
  get investigation(): number { return this.mentalSkills[3].rank; }
  get medicine(): number      { return this.mentalSkills[4].rank; }
  get occult(): number        { return this.mentalSkills[5].rank; }
  get crafts(): number        { return this.mentalSkills[6].rank; }
  get politics(): number      { return this.mentalSkills[7].rank; }
  
  set science(rank: number)       { this.mentalSkills[0].rank = rank; }
  set academics(rank: number)     { this.mentalSkills[1].rank = rank; }
  set computer(rank: number)      { this.mentalSkills[2].rank = rank; }
  set investigation(rank: number) { this.mentalSkills[3].rank = rank; }
  set medicine(rank: number)      { this.mentalSkills[4].rank = rank; }
  set occult(rank: number)        { this.mentalSkills[5].rank = rank; }
  set crafts(rank: number)        { this.mentalSkills[6].rank = rank; }
  set politics(rank: number)      { this.mentalSkills[7].rank = rank; }
  
  get weaponry(): number  { return this.physicalSkills[0].rank; }
  get firearms(): number  { return this.physicalSkills[1].rank; }
  get brawl(): number     { return this.physicalSkills[2].rank; }
  get drive(): number     { return this.physicalSkills[3].rank; }
  get stealth(): number   { return this.physicalSkills[4].rank; }
  get athletics(): number { return this.physicalSkills[5].rank; }
  get larceny(): number   { return this.physicalSkills[6].rank; }
  get survival(): number  { return this.physicalSkills[7].rank; }
  
  set weaponry(rank: number)  { this.physicalSkills[0].rank = rank; }
  set firearms(rank: number)  { this.physicalSkills[1].rank = rank; }
  set brawl(rank: number)     { this.physicalSkills[2].rank = rank; }
  set drive(rank: number)     { this.physicalSkills[3].rank = rank; }
  set stealth(rank: number)   { this.physicalSkills[4].rank = rank; }
  set athletics(rank: number) { this.physicalSkills[5].rank = rank; }
  set larceny(rank: number)   { this.physicalSkills[6].rank = rank; }
  set survival(rank: number)  { this.physicalSkills[7].rank = rank; }
  
  get subterfuge(): number  { return this.socialSkills[0].rank; }
  get empathy(): number     { return this.socialSkills[1].rank; }
  get expression(): number  { return this.socialSkills[2].rank; }
  get intimidation(): number { return this.socialSkills[3].rank; }
  get streetwise(): number  { return this.socialSkills[4].rank; }
  get persuasion(): number  { return this.socialSkills[5].rank; }
  get socialize(): number   { return this.socialSkills[6].rank; }
  get animalKen(): number   { return this.socialSkills[7].rank; }
  
  set subterfuge(rank: number)  { this.socialSkills[0].rank = rank; }
  set empathy(rank: number)     { this.socialSkills[1].rank = rank; }
  set expression(rank: number)  { this.socialSkills[2].rank = rank; }
  set intimidation(rank: number) { this.socialSkills[3].rank = rank; }
  set streetwise(rank: number)  { this.socialSkills[4].rank = rank; }
  set persuasion(rank: number)  { this.socialSkills[5].rank = rank; }
  set socialize(rank: number)   { this.socialSkills[6].rank = rank; }
  set animalKen(rank: number)   { this.socialSkills[7].rank = rank; }
  
}
