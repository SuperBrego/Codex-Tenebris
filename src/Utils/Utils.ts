import { useCharacter } from "../hooks/useCharacter";
import { HealthBox } from "../interfaces/HealthBox";
import { StateTrack } from "../interfaces/StateTrack";
import { Trait } from "../interfaces/Trait";
import { DamageType } from "../types/DamageType";

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