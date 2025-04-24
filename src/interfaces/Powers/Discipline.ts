import { SupernaturalPower } from "../SupernaturalPower";

// Alias específico para Vampiro: o Réquiem (Disciplines)
export interface DisciplinePower extends SupernaturalPower {
  discipline: string; // ex: 'Auspex'
  vitaeCost?: string; // pode ser redundante com cost, mas separável para parser
  requiresLineOfSight?: boolean;
  resistedBy?: string;
}
