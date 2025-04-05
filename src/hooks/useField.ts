// hooks/fields/useField.ts
import { useCharacter } from './useCharacter';
import { Character } from '../classes/Character';

export function useField<K extends keyof Character>(field: K): [Character[K], (value: Character[K]) => void] {
  const { character, updateCharacter } = useCharacter();

  const value = character[field];
  const setValue = (newValue: Character[K]) => {
    updateCharacter({ [field]: newValue });
  };

  return [value, setValue];
}
