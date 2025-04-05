// hooks/usePortfolio.ts
import { useAtom } from 'jotai';
import { Character } from '../classes/Character';
import { characterListAtom, savePortfolioAtom } from '../atoms/portfolioAtom';

export function usePortfolio() {
  const [portfolio, setPortfolio] = useAtom(characterListAtom);
  const [, save] = useAtom(savePortfolioAtom);

  function emitUpdate() {
    const updated = Object.create(Object.getPrototypeOf(portfolio));
    Object.assign(updated, portfolio);
    setPortfolio(updated);
    save(updated);
  }

  function addCharacter(character: Character) {
    portfolio.add(character);
    emitUpdate();
  }

  function removeCharacter(id: string) {
    portfolio.remove(id);
    emitUpdate();
  }

  function updateCharacter(id: string, partial: Partial<Character>) {
    portfolio.updateCharacter(id, partial);
    emitUpdate();
  }

  function setActiveCharacter(id: string) {
    portfolio.setActive(id);
    emitUpdate();
  }

  return {
    portfolio,
    characters: portfolio.characters,
    active: portfolio.active,
    addCharacter,
    removeCharacter,
    updateCharacter,
    setActiveCharacter,
    setPortfolio, // <-- aqui
    save           // <-- aqui
  };
}
