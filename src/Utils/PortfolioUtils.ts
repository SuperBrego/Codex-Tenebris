import { Portfolio } from "../classes/Portfolio";

export function exportPortfolio(portfolio: Portfolio) {
  const dataStr = JSON.stringify(portfolio.toJSON(), null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'portfolio.json';
  a.click();
  URL.revokeObjectURL(url);
}

export function importPortfolioFile(file: File): Promise<Portfolio> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const raw = reader.result as string;
        const data = JSON.parse(raw);
        const portfolio = Portfolio.fromJSON(data);
        resolve(portfolio);
      } catch (e) {
        reject(e);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}
