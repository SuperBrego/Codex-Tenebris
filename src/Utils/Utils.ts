import { HealthBox } from "../interfaces/HealthBox";
import { StateTrack } from "../interfaces/StateTrack";
import { Trait } from "../interfaces/Trait";
import { DamageType } from "../types/DamageType";

export function createStateTrackList(quantity: number, initialState: boolean | number): StateTrack[] {
  return Array.from({ length: quantity }, () => ({ state: initialState }));
}

export function createTrait(index: number, name: string, rank: number, type: string): Trait {
  return { index: index, name: name, rank: rank, type: type, };
}

export function createHealthTrack(quantity: number, initialState: DamageType = 'none'): HealthBox[] {
  return Array.from({ length: quantity }, () => ({ state: initialState }));
}