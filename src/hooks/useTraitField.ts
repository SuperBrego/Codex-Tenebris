// hooks/fields/useTraitField.ts
import { useCharacter } from './useCharacter';

export function useTraitField<K extends string>(
  field: K
): [string, (value: string) => void] {
  const { character, updateCharacter } = useCharacter();

  const value = (character.templateTraits as any)?.[field] ?? '';
  const setValue = (newValue: string) => {
    updateCharacter({
      templateTraits: {
        ...character.templateTraits,
        [field]: newValue,
      },
    });
  };

  return [value, setValue];
}
