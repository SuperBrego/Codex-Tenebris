export const FORMS = ['hishu', 'dalu', 'gauru', 'urshul', 'urhan'] as const;

export type FormType = typeof FORMS[number]; // 'hishu' | 'dalu' | ...

export interface FormBonuses {
  size: number;
  strength: number;
  stamina: number;
  dexterity: number;
  manipulation: number;
  initiative: number;
  speed: number;
  armor: number;
  perception: number;
}

export const formBonuses: Record<FormType, FormBonuses> = {
  hishu:  { strength: 0, dexterity: 0, stamina: 0, manipulation: 0,  size: 0,  speed: 0, initiative: 0, armor: 0, perception: 1 },
  dalu:   { strength: 1, dexterity: 0, stamina: 1, manipulation: -1, size: 1,  speed: 1, initiative: 0, armor: 0, perception: 2 },
  gauru:  { strength: 3, dexterity: 1, stamina: 2, manipulation: 0,  size: 2,  speed: 4, initiative: 1, armor: 0, perception: 3 }, 
  urshul: { strength: 2, dexterity: 2, stamina: 2, manipulation: -1, size: 1,  speed: 7, initiative: 2, armor: 0, perception: 3 },
  urhan:  { strength: 0, dexterity: 2, stamina: 1, manipulation: -1, size: -1, speed: 5, initiative: 0, armor: 0, perception: 4 }
};

export const formText: Record<FormType, string> = {
  hishu:  `Pele de Cordeiro`,
  dalu:   `Dentes/Garras +OL\nDefesa vs. Armas de fogo\nAluamento Leve\nCão Chupando Manga`,
  gauru:  `Dentes/Garras +2L\nIniciativa +3\nDefesa vs. Armas de fogo\nAluamento Total\nRegeneração\nFúria\nTerror Primitivo`,
  urshul: `Dentes +2L/Garras +1L\nDefesa vs. Armas de fogo\nAluamento Moderado\nAbater a Presa`,
  urhan:  `Dentes +1L\nPerseguição`,
};

export const formShortDescriptions: Record<FormType, string> = {
  hishu: "Totalmente humano por fora. O lobo espreita por dentro.",
  dalu: "Um monstro discreto — maior, mais forte, ainda quase humano.",
  gauru: "A máquina de matar. Enorme. Letal. Fora de controle.",
  urshul: "A fera lendária. Um lobo do tamanho de um cavalo, pronto para caçar.",
  urhan: "Lobo puro. Ágil, natural, invisível à vista humana.",
};
