// hooks/useCharacter.ts
import { usePortfolio } from './usePortfolio';
import { Character } from '../classes/Character';

export function useCharacter() {
  const {
    active: character,
    updateCharacter,
  } = usePortfolio();

  if (!character) {
    throw new Error('Nenhum personagem ativo.');
  }

  // Atualiza qualquer campo do personagem ativo, propagando para o Portfolio
  function update(partial: Partial<Character>) {
    if (!character) {
      throw new Error('Nenhum personagem ativo.');
    }
    updateCharacter(character.id, partial);
  }

  // Atualiza um campo aninhado (como trait), útil para componentes reutilizáveis
  function updateField<K extends keyof Character>(field: K, value: Character[K]) {
    update({ [field]: value });
  }

  return {
    character,
    updateCharacter: update,
    updateField,
  };
}
