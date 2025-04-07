import { Trait } from './Trait';

export interface Merit extends Trait {
  id: string;
  fixed: boolean;         // Se true, custo não pode ser editado
  min?: number;           // Mínimo para customização
  max?: number;           // Máximo para customização
  description?: string;   // Descrição opcional (mais comum em custom)
  custom?: boolean;       // Se é um mérito criado pelo jogador
  category: string        // Categoria: Física, Mental, Social, etc.
}
