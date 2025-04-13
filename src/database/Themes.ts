import { Theme } from "../types/Theme";

export const blueMysticTheme: Theme = {
  name: "blue-mystic",
  colors: {
    background: "#1B1F33",
    surface: "#2A2E45",
    border: "#3A4B8C",
    primary: "#3A4B8C",
    primaryText: "#E6EEF9",
    text: "#A8C2E1",
    accent: "#8EA1C5",
    danger: "#D9534F",
    highlight: "#4AA288",
  },
};


export const vampireTheme: Theme = {
  name: "vampire",
  colors: {
    background: "#1a0d0f",     // fundo escuro avermelhado, quase negro
    surface: "#2c1416",        // superfície com leve destaque sobre o fundo
    border: "#6a474a ",         // tom mais vivo para elementos de borda
    primary: "#8b1e1e",        // vermelho-sangue principal, usado no título e elementos marcantes
    primaryText: "#e0d6d6",    // texto claro contrastando com o vermelho e o fundo
    text: "#c4b0b0",           // texto comum mais suave
    accent: "#c92323",         // vermelho mais vibrante para detalhes e interações
    danger: "#ff2a2a",         // vermelho mais puro, usado em alertas e ações críticas
    highlight: "#f6e8e8",      // para destacar texto ou elementos importantes sobre tons escuros
  }
};

export const werewolfTheme: Theme = {
  name: "werewolf",
  colors: {
    background: "#1b120a",     // fundo escuro, terroso, quase negro
    surface: "#2d1c10",        // marrom profundo para cartões e painéis
    border: "#5b3a24",         // tom mais quente para destacar divisões
    primary: "#a54f1e",        // laranja-âmbar queimado, usado para elementos principais
    primaryText: "#f0e8d8",    // bege claro para textos contrastantes
    text: "#c5b49c",           // texto comum mais neutro
    accent: "#ff8c42",         // laranja vibrante, evoca o fogo interior e fúria
    danger: "#d3381c",         // tom de sangue/violência para alertas
    highlight: "#faeddc",      // usado para destacar ou iluminar algo importante
  }
};

export const deviantTheme: Theme = {
  name: "deviant",
  colors: {
    background: "#1a0e14",     // roxo escuro quase preto
    surface: "#2d1c26",        // magenta escuro com tons de ferrugem
    border: "#613948",         // rosa queimado ou vinho profundo
    primary: "#a74b7d",        // magenta vívido usado no título e detalhes
    primaryText: "#f7f0f5",    // branco levemente rosado para legibilidade
    text: "#e2d1dc",           // texto comum (rosa claro acinzentado)
    accent: "#ff71c8",         // rosa neon/distópico para interações destacadas
    danger: "#c1126b",         // vermelho-púrpura intenso, usado para alertas
    highlight: "#fff4fb",      // usado para destacar áreas em layouts com muito contraste
  }
};
