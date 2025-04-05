import { atom } from 'jotai';
import { Portfolio } from '../classes/Portfolio';

const STORAGE_KEY = 'codex-portfolio';

function loadPortfolio(): Portfolio {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const data = JSON.parse(raw);
      return Portfolio.fromJSON(data);
    } catch (e) {
      console.error("Erro ao carregar portfolio:", e);
    }
  }
  return new Portfolio();
}

export const characterListAtom = atom<Portfolio>(loadPortfolio());

export const savePortfolioAtom = atom(null, (get, _set, updated: Portfolio) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated.toJSON()));
});
