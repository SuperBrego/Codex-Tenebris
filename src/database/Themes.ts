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
    background: "#402324",      // caput-mortuum — fundo muito escuro e quente
    surface: "#582F30",         // caput-mortuum-2 — um tom mais claro para superfícies
    border: "#AC5757",          // redwood — bordas intensas com caráter emocional
    primary: "#A89797",         // rose-quartz — tom neutro magenta-acinzentado para destaque
    primaryText: "#F6ECEB",     // snow — legibilidade clara com tom rosado
    text: "#A8979F",            // rose-quartz novamente como texto normal
    accent: "#F6ECEB",          // snow — como destaque mais claro em hover, tooltips etc.
    danger: "#AC5757",          // redwood — tom emocional quente para erros/alertas
    highlight: "#F6ECEB",       // snow — realce visual em componentes
  }
};
