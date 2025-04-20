import { CURRENT_PORTFOLIO_VERSION } from "./constants";
import { migrateV1toV2 } from "./migration_v1_to_v2";

const portfolioMigrations: Record<number, (data: any) => any> = {
  1: migrateV1toV2
};

export function migratePortfolio(data: any): any {
  let version = data.version ?? 1;

  while (version < CURRENT_PORTFOLIO_VERSION) {
    const migrator = portfolioMigrations[version];
    if (!migrator) break;
    data = migrator(data);
    version++;
  }

  data.version = CURRENT_PORTFOLIO_VERSION;
  return data;
}
