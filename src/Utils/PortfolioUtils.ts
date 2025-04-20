import { Portfolio } from "../classes/Portfolio";
import { migratePortfolio } from "../migrations";

export function importPortfolioFile(file: File): Promise<Portfolio> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const raw = reader.result as string;
        const json = JSON.parse(raw);
        const migrated = migratePortfolio(json); // <- Aplicar migrações aqui
        const portfolio = Portfolio.fromJSON(migrated);
        resolve(portfolio);
      } catch (e) {
        reject(e);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}
