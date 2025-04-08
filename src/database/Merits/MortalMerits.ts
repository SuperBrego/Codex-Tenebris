import { Merit } from "../../interfaces/Merit";

export const _MortalMerits: Merit[] = [
  // ============= MENTAIS ============= //
  { 
    id: "investigative-aide", 
    name: "Assistente Investigativo", 
    labelKey: "merit.investigativeAide", 
    value: 1, 
    fixed: true, 
    exclusive: true,
    customText: '',
    description: "Escolha uma Habilidade. Quando fizer testes para Descobrir Pistas com ela, você obtém sucesso excepcional com três sucessos em vez de cinco. Pistas obtidas dessa forma têm um elemento adicional.", 
    category: "Mental" 
  },
  { 
    id: "library", 
    name: "Biblioteca", 
    labelKey: "merit.library", 
    value: 1, 
    min: 1, 
    max: 3, 
    fixed: false,
    description: "Escolha uma Habilidade Mental. Em testes prolongados com essa Habilidade, adicione os pontos desta Vantagem. Pode ser comprada várias vezes para diferentes Habilidades.", 
    category: "Mental" 
  },
  { 
    id: "good-time-management", 
    name: "Boa Gestão do Tempo", 
    labelKey: "merit.goodTimeManagement", 
    value: 3, 
    fixed: true, 
    exclusive: true,
    description: "Pré-Requisito: Erudição •• ou Ciências ••.\nVocê reduz pela metade o tempo necessário entre testes de ações prolongadas.", 
    category: "Mental" 
  },
  { 
    id: "common-sense", 
    name: "Bom Senso", 
    labelKey: "merit.commonSense", 
    value: 2, 
    fixed: true, 
    exclusive: true,
    description: "Uma vez por capítulo, teste Raciocínio + Autocontrole para fazer perguntas táticas ao Narrador e receber conselhos, como qual decisão é mais segura ou mais arriscada.", 
    category: "Mental" 
  },
  { 
    id: "encyclopedic-knowledge", 
    name: "Conhecimento Enciclopédico", 
    labelKey: "merit.encyclopedicKnowledge", 
    value: 2, 
    fixed: true, 
    exclusive: true,
    customText: '',
    description: "Escolha uma Habilidade. Você pode fazer testes de Inteligência + Raciocínio para recordar fatos relevantes sobre esse assunto, mesmo sem pontos nela.", 
    category: "Mental" 
  },
  { 
    id: "vice-ridden", 
    name: "Consumido por Vícios", 
    labelKey: "merit.viceRidden", 
    value: 2, 
    fixed: true, 
    exclusive: true,
    description: "Você possui dois Vícios, mas ainda só pode recuperar Força de Vontade com um por cena.", 
    category: "Mental" 
  },
  { 
    id: "holistic-awareness", 
    name: "Consciência Holística", 
    labelKey: "merit.holisticAwareness", 
    value: 1, 
    fixed: true, 
    exclusive: true,
    description: "Você pode tratar ferimentos leves sem equipamento médico moderno, usando conhecimentos naturais e botânicos.", 
    category: "Mental" 
  },
  { 
    id: "interdisciplinary-specialty", 
    name: "Especialista Multidisciplinar", 
    labelKey: "merit.interdisciplinarySpecialty", 
    value: 1, 
    fixed: true, 
    exclusive: true,
    description: "Pré-Requisito: Habilidade ••• com Especialização.\nVocê pode aplicar o bônus de uma Especialização em outras Habilidades com pelo menos um ponto, quando justificável.", 
    category: "Mental" 
  },
  { 
    id: "professional-training", 
    name: "Formação Profissional", 
    labelKey: "merit.professionalTraining", 
    value: 1, 
    min: 1, 
    max: 5, 
    fixed: false,
    customText: '',
    description: "Escolha uma Profissão e duas Habilidades Ativas relacionadas. Você recebe benefícios crescentes conforme aumenta os pontos nesta Vantagem.", 
    category: "Mental" 
  },
  { 
    id: "language", 
    name: "Idioma", 
    labelKey: "merit.language", 
    value: 1, 
    fixed: true, 
    exclusive: false,
    customText: '',
    description: "Seu personagem sabe falar, ler e escrever uma língua adicional além de sua língua nativa.", 
    category: "Mental" 
  },
  { 
    id: "indomitable", 
    name: "Indomável", 
    labelKey: "merit.indomitable", 
    value: 3, 
    fixed: true, 
    exclusive: true,
    description: "Pré-Requisito: Perseverança •••.\nAdicione dois dados para resistir a poderes sobrenaturais de controle mental ou manipulação emocional.", 
    category: "Mental" 
  },
  { 
    id: "eidetic-memory", 
    name: "Memória Eidética", 
    labelKey: "merit.eideticMemory", 
    value: 2, 
    fixed: true, 
    exclusive: true,
    description: "Você se lembra de detalhes com precisão impressionante. Bônus de +2 ao tentar recordar informações.", 
    category: "Mental" 
  },
  { 
    id: "meditative-mind", 
    name: "Mente Meditativa", 
    labelKey: "merit.meditativeMind", 
    value: 1, 
    min: 1, 
    max: 4, 
    fixed: false,
    description: "Você se beneficia mais da meditação. Em níveis mais altos, obtém bônus maiores e requer menos sucessos.", 
    category: "Mental" 
  },
  { 
    id: "trained-observer", 
    name: "Observador Treinado", 
    labelKey: "merit.trainedObserver", 
    value: 1, 
    min: 1, 
    max: 3, 
    fixed: false,
    description: "Pré-Requisito: Raciocínio ••• ou Autocontrole •••.\nVocê se beneficia da Explosão do 9 ou 8 em testes de Percepção, dependendo do nível desta Vantagem.", 
    category: "Mental" 
  },
  { 
    id: "eye-for-the-strange", 
    name: "Olho para o Estranho", 
    labelKey: "merit.eyeForTheStrange", 
    value: 2, 
    fixed: true, 
    exclusive: true,
    description: "Pré-Requisito: Perseverança ••, Ocultismo •.\nVocê pode detectar evidências sobrenaturais e receber pistas relacionadas, ou bônus para investigações mundanas.", 
    category: "Mental" 
  },
  { 
    id: "patient", 
    name: "Paciente", 
    labelKey: "merit.patient", 
    value: 1, 
    fixed: true, 
    exclusive: true,
    description: "Você pode fazer dois testes extras em ações prolongadas, além do limite normal.", 
    category: "Mental" 
  },
  { 
    id: "area-of-expertise", 
    name: "Perito", 
    labelKey: "merit.areaOfExpertise", 
    value: 1, 
    fixed: true, 
    exclusive: true,
    description: "Pré-Requisito: Perseverança •• e uma Especialização de Habilidade.\nSubstitua o bônus +1 da sua Especialização por +2.", 
    category: "Mental" 
  },
  { 
    id: "multilingual", 
    name: "Poliglota", 
    labelKey: "merit.multilingual", 
    value: 1, 
    fixed: true, 
    exclusive: false,
    customText: '',
    description: "Cada vez que compra esta Vantagem, escolha dois idiomas. Pode ser substituído por Idioma específico.", 
    category: "Mental" 
  },
  { 
    id: "investigative-prodigy", 
    name: "Prodígio Investigativo", 
    labelKey: "merit.investigativeProdigy", 
    value: 1, 
    min: 1, 
    max: 5, 
    fixed: false,
    description: "Pré-Requisito: Raciocínio •••, Investigação •••.\nVocê pode descobrir múltiplas Pistas de uma só vez, até o seu número de sucessos ou nível de Vantagem.", 
    category: "Mental"
  },
  // ============= FÍSICAS ============= //
  
  // ============= SOCIAIS ============= //
  // ========= ESTILOS DE LUTA ========= //
];
