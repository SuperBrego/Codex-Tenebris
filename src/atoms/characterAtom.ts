// atoms/characterAtom.ts
import { atom } from 'jotai';
import { Character } from '../classes/Character';

export const characterAtom = atom(new Character());
