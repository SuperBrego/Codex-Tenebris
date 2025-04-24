import { SupernaturalPower } from "../SupernaturalPower";

// Exemplo futuro para Mago: o Despertar (Arcana)
export interface ArcanumSpell extends SupernaturalPower {
  arcanum: string; // ex: 'Time', 'Death', 'Forces'
  reachEffects?: string[];
  paradoxRisk?: boolean;
}
