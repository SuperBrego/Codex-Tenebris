import { Trait } from './Trait';

export interface Merit extends Trait {
  id: string;
  fixed: boolean;         // Se true, custo não pode ser editado
  category: string        // Categoria: Física, Mental, Social, etc.
  min?: number;           // Mínimo para customização
  max?: number;           // Máximo para customização
  description?: string;   // Descrição opcional (mais comum em custom)
  custom?: boolean;       // Se é um Vantagenm criado pelo jogador
  exclusive?: boolean;    // Se é uma Vantagem que pode ser readicionada.
  customText?: string;    // Texto livre do jogador, mesmo para Vantagens não custom
}
