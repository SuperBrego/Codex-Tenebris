import { useCharacter } from "../hooks/useCharacter";
import { Armor } from "../interfaces/Equipments/Armor";
import { Gear } from "../interfaces/Equipments/Gear";
import { Weapon } from "../interfaces/Equipments/Weapon";
import { HealthBox } from "../interfaces/HealthBox";
import { StateTrack } from "../interfaces/StateTrack";
import { Trait } from "../interfaces/Trait";
import { DamageType } from "../types/DamageType";
import { EquipmentTypes } from "../types/EquipmentTypes";

export function createStateTrackList(quantity: number, initialState: boolean): StateTrack[] {
  return Array.from({ length: quantity }, () => ({ state: initialState }));
}

export function createTrait(name: string, value: number, labelKey: string): Trait {
  return { name: name, value: value, labelKey: labelKey };
}

export function createHealthTrack(quantity: number, initialState: DamageType = 'none'): HealthBox[] {
  return Array.from({ length: quantity }, () => ({ state: initialState }));
}

export function containsMerit(meritLabel: string): boolean {
  const { character } = useCharacter();
  const found = character.merits.find(elem => elem.labelKey === meritLabel);
  return (found !== undefined);
}

export function createEquipment(type: string): EquipmentTypes {
  if(type === 'weapon') 
    return {
    id: crypto.randomUUID(),
    name: '',
    damage: 0,
    cost: 0,
    init: 0,
    clip: 0,
    size: 1,
    strength: 0,
    range: '',
    description: '',
    type: 'weapon'
  } as Weapon;
  
  if(type === 'armor') 
    return {
    id: crypto.randomUUID(),
    name: '',
    generalRating: 0,
    ballisticRating: 0,
    cost: 0,
    defense: 0,
    size: 1,
    speed: 0,
    strength: 1,
    type: 'armor',
    description: '',
    equiped: false
  } as Armor;

  return {
    id: crypto.randomUUID(),
    name: '',
    cost: 0,
    size: 1,
    durability: 0,
    structure: '',
    description: '',
    type: 'gear'
  } as Gear;
  
}