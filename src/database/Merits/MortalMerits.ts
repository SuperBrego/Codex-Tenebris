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
    description: `Pré-Requisito: Erudição •• ou Ciências ••.\n
      Você reduz pela metade o tempo necessário entre testes de ações prolongadas.`,
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
    description: `Pré-Requisito: Habilidade ••• com Especialização.\n
      Você pode aplicar o bônus de uma Especialização em outras Habilidades com pelo menos um ponto, quando justificável.`,
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
    description: `Pré-Requisito: Perseverança •••.\n
      Adicione dois dados para resistir a poderes sobrenaturais de controle mental ou manipulação emocional.`,
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
    description: `Pré-Requisito: Raciocínio ••• ou Autocontrole •••.\n
      Você se beneficia da Explosão do 9 ou 8 em testes de Percepção, dependendo do nível desta Vantagem.`,
    category: "Mental" 
  },
  { 
    id: "eye-for-the-strange", 
    name: "Olho para o Estranho", 
    labelKey: "merit.eyeForTheStrange", 
    value: 2, 
    fixed: true, 
    exclusive: true,
    description: `Pré-Requisito: Perseverança ••, Ocultismo •.\n
      Você pode detectar evidências sobrenaturais e receber pistas relacionadas, ou bônus para investigações mundanas.`,
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
    description: `Pré-Requisito: Perseverança •• e uma Especialização de Habilidade.\n
      Substitua o bônus +1 da sua Especialização por +2.`,
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
    description: `Pré-Requisito: Raciocínio •••, Investigação •••.\n
      Você pode descobrir múltiplas Pistas de uma só vez, até o seu número de sucessos ou nível de Vantagem.`,
    category: "Mental"
  },
  // ============= FÍSICAS ============= //
  {
    id: "crack-driver",
    name: "Ás do Volante",
    labelKey: "merit.crackDriver",
    value: 2,
    min: 2,
    max: 3,
    fixed: false,
    exclusive: true,
    description: `Pré-Requisitos: Condução •••.\n
      Efeitos: Seu personagem é um ás ao volante, e nada distrai sua concentração. Contanto que não estiver fazendo nenhuma outra ação além de conduzir (e manter o carro seguro), adicione seu Autocontrole a todos os testes de Condução. Qualquer teste para desativar seu veículo também sofre uma penalidade igual ao seu Autocontrole. Com a versão de três pontos, uma vez por turno, ele pode fazer uma ação reflexa de Condução.`,
    category: "Física"
  },
  {
    id: "ambidextrous",
    name: "Ambidestro",
    labelKey: "merit.ambidextrous",
    value: 3,
    fixed: true,
    exclusive: true,
    description: "Efeitos: Seu personagem não sofre a penalidade de -2 por usar a mão inábil em combate ou realizar outras ações. Disponível apenas na criação do personagem.",
    category: "Física"
  },
  {
    id: "seizing-the-edge",
    name: "Aproveitar a Vantagem",
    labelKey: "merit.seizingTheEdge",
    value: 2,
    fixed: true,
    exclusive: true,
    description: `Pré-Requisitos: Raciocínio •••, Autocontrole •••.\n
      Efeitos: Seu personagem está sempre pronto para uma perseguição. Se para escapar de uma ameaça ou caçar um rival, está sempre pronto. Ela sempre tem a Vantagem no primeiro turno de uma cena de perseguição (p. 84). Além disso, o oponente deve fazer um teste bem-sucedido de Raciocínio + Autocontrole, como se estivesse sendo emboscado, ou seu personagem não tem que contabilizar seu Deslocamento ou Iniciativa ao calcular os sucessos necessários no primeiro turno.`,
    category: "Física"
  },
  {
    id: "demolisher",
    name: "Demolidor",
    labelKey: "merit.demolisher",
    value: 1,
    min: 1,
    max: 3,
    fixed: false,
    exclusive: true,
    description: `Pré-Requisitos: Força ••• ou Inteligência •••.\n
      Efeitos: Seu personagem tem uma sensação inata para os pontos fracos em objetos. Ao danificar um objeto, ele ignora um ponto da Durabilidade do objeto por ponto nesta Vantagem.`,
    category: "Física"
  },
  {
    id: "double-jointed",
    name: "Flexibilidade nas Juntas",
    labelKey: "merit.doubleJointed",
    value: 2,
    fixed: true,
    exclusive: true,
    description: `Pré-Requisitos: Destreza •••.\n
      Efeitos: Seu personagem pode ter sido um contorcionista, ou passou um tempo praticando yoga. Ele pode desalojar as articulações quando necessário. Ele automaticamente escapa de qualquer vínculo mundano sem um teste. Quando agarrado, subtraia sua Destreza de qualquer teste para dominá-lo, desde que não esteja realizando nenhuma ação agressiva.`,
    category: "Física"
  },
  {
    id: "greyhound",
    name: "Galgo",
    labelKey: "merit.greyhound",
    value: 1,
    fixed: true,
    exclusive: true,
    description: `Pré-Requisitos: Esportes •••, Raciocínio •••, Vigor •••.\n
      Efeitos: Seu personagem funciona melhor quando persegue ou é perseguido; A caça está em seu sangue. Quando em uma perseguição (p. 84), você recebe os efeitos de um sucesso excepcional em três sucessos em vez de cinco.`,
    category: "Física"
  },
  {
    id: "giant",
    name: "Gigante",
    labelKey: "merit.giant",
    value: 3,
    fixed: true,
    exclusive: true,
    description: `Efeitos: Seu personagem é enorme. Ele mede mais de dois metros de altura, e se destaca em multidões. Ele tem Tamanho 6 e por isso recebe +1 na Vitalidade. Disponível somente na criação do personagem.\n\n
      Desvantagens: Comprar roupas é um pesadelo. Caber em pequenos espaços é difícil na melhor das hipóteses.`,
    category: "Física"
  },
  {
    id: "automotive-genius",
    name: "Gênio Automotivo",
    labelKey: "merit.automotiveGenius",
    value: 1,
    fixed: true,
    exclusive: true,
    customText: '',
    description: "Pré-Requisitos: Ofícios •••, Condução •, Ciências •\nEfeitos: Seu personagem sabe como ajustar um veículo ao extremo absoluto. Ao determinar quantas modificações ele pode adicionar em um veículo (p. 98), triplique seus pontos de Ofícios em vez de dobrá-los. Assim, um personagem com Ofícios •••• poderia suportar 12 modificações combinadas em um veículo em vez de oito. Adicionalmente, qualquer Especialização de Ofícios relevante adiciona mais uma modificação potencial ao total.",
    category: "Física"
  },
  {
    id: "relentless",
    name: "Implacável",
    labelKey: "merit.relentless",
    value: 2,
    fixed: true,
    exclusive: true,
    description: `Pré-Requisitos: Esportes ••, Vigor •••.\n
      Efeitos: Seu personagem não vai parar de correr, enquanto estiver fugindo de um perseguidor ou quando estiver perseguindo alguém. Em qualquer perseguição (ver p. 84), seus oponentes devem alcançar dois sucessos adicionais contra os seus para pegá-lo ou para escapar dele.`,
    category: "Física"
  },
  {
    id: "hardy",
    name: "Inquebrável",
    labelKey: "merit.hardy",
    value: 1,
    fixed: false,
    exclusive: false,
    description: `Pré-Requisitos: Vigor •••.\n
      Efeitos: O corpo de seu personagem aguenta mais do que deveria. Adicione os pontos nesta Vantagem a qualquer teste para resistir à doenças, venenos, privações, inconsciência ou sufocamento.`,
    category: "Física",
    min: 1,
    max: 3
  },
  {
    id: "fleet-of-foot",
    name: "Ligeiro",
    labelKey: "merit.fleetOfFoot",
    value: 1,
    fixed: false,
    exclusive: false,
    description: `Pré-Requisitos: Esportes ••.\n
      Efeitos: Seu personagem é notavelmente veloz e corre muito mais rápido do que sua estrutura sugere. Ele ganha +1 no seu Deslocamento por ponto, e qualquer um que o perseguir sofre um -1 por ponto em qualquer perseguição a pé.`,
    category: "Física",
    min: 1,
    max: 3
  },
  {
    id: "sleight-of-hand",
    name: "Mãos Leves",
    labelKey: "merit.sleightOfHand",
    value: 2,
    fixed: true,
    exclusive: true,
    description: `Pré-Requisitos: Furto •••.\n
      Efeitos: Seu personagem pode abrir fechaduras e bolsos sem sequer pensar nisso. Ele pode realizar uma ação instantânea baseada em Furto de forma reflexa em um determinado turno. Além disso, suas ações de Furto passam despercebido, a menos que alguém esteja tentando especificamente pegá-lo.`,
    category: "Física"
  },
  {
    id: "parkour",
    name: "Parkour",
    labelKey: "merit.parkour",
    value: 1,
    fixed: false,
    exclusive: false,
    description: `Pré-Requisitos: Destreza •••, Esportes ••.\n
    Efeitos: Seu personagem é um corredor livre treinado e proficiente. A Corrida Livre é a arte de se mover fluidamente através de ambientes urbanos com saltos complexos, limites, truques e abóbadas. Este é o tipo de esporte popularizado em filmes de ação modernos, onde os personagens não são impedidos por cercas, paredes, equipamentos de construção, carros ou qualquer outra coisa que a cidade coloca em seu caminho.
    \n\n
    Nível Descrição\n
    •     Foco: Seu personagem reage instintivamente a qualquer obstáculo com pulos, saltos e técnicas de escalada. Quando estiver em uma perseguição de pé, subtraia seu Parkour dos sucessos necessários para perseguir ou evadir. Além disso, ignore penalidades ambientais nos testes de Esportes igual ao seu nível em Parkour.\n
    ••    Pulo do Gato: Seu personagem cai com graça excepcional. Ao realizar um teste de Destreza + Esporte para atenuar os danos causados pela queda, seu personagem ganha um sucesso automático. Adicionalmente, some seu nível de Parkour ao limite de dano que pode ser removido através deste teste. O Parkour não pode prevenir os danos causados pela queda em velocidade terminal.\n
    •••   Correr pelas Paredes: Ao escalar, seu personagem pode correr para cima por alguns metros antes de ter que escalar tradicionalmente. Sem testar, seu personagem escala 3 metros + 1,5 metro por ponto de Esportes como uma ação instantânea, ao invés dos 3 metros normais.\n
    ••••  Traceur Experiente: Parkour tornou-se uma segunda natureza para o seu personagem. Ao gastar um ponto de Força de Vontade, você pode designar um teste de Esportes para correr, pular ou escalar como uma ação de roteamento (refaça o teste usando todos os dados que não resultaram em sucessos). Em qualquer turno durante o qual você usa essa habilidade, você não pode aplicar a Defesa de seu personagem em ataques futuros.\n
    •••••   Fluxo livre: O Parkour do seu personagem é agora memória muscular. Ele pode se mover sem pensar, num estado de Zen. O personagem deve meditar com sucesso (p. 75) para estabelecer o Fluxo Livre. Uma vez estabelecido, seu personagem é capaz de realizar ações de Esportes como ações reflexas uma vez por turno. Ao gastar um ponto de Força de Vontade em um teste de Esportes em uma perseguição pé, ganha três sucessos em vez de três dados.`,
    category: "Física",
    min: 1,
    max: 5,
    customText: ''
  },
  {
		id: "small-framed",
		name: "Pequeno",
		labelKey: "merit.smallFramed",
		value: 2,
		fixed: true,
		exclusive: true,
		description: `Pré-Requisitos: descrição.\n
      Efeitos: descrição.\n
      Desvantagens: Além de uma menor Vitalidade, seu personagem pode ser esquecido ou não levado a sério por algumas pessoas.`,
		category: "Física"
	},
	{
		id: "stunt-driver",
		name: "Proeza Automotiva",
		labelKey: "merit.stuntDriver",
		value: 1,
		fixed: false,
		exclusive: false,
		description: `Pré-Requisitos: Destreza •••, Condução •••, Raciocínio •••.\n
      Efeitos: Seu personagem é um especialista do asfalto, e pode levar um veículo além dos limites normais. Cada ponto desta Vantagem concede acesso a outra técnica de condução.
      \n\n
      Nível   Descrição\n
      •       Condução Defensiva: Seu personagem sabe como proteger a si mesmo e seu veículo enquanto estiver dirigindo. Subtraia seus pontos de Condução de qualquer tentativa de bater o veículo enquanto ele estiver em movimento.\n
      ••      Demônio da Velocidade: Seu personagem é um especialista em elevar veículos a seu potencial em terreno plano. Cada sucesso em testes para acelerar um veículo (ver p.98) aumenta a Velocidade do veículo em 10 em vez de 5.\n
      •••     Drift: Seu personagem sabe como usar o impulso do seu veículo para fazer curvas eficientemente em altas velocidades. Ele nunca precisa fazer um teste de manobra para fazer curvas em altas velocidades.\n
      ••••    Clipping: Seu personagem tem experiência batendo em coisas com seu veículo de tal forma que não se machuque muito. Quando voluntariamente bater em outro personagem ou veículo com o dele, ignore danos ao seu próprio veículo igual ao seus pontos em Raciocínio. Isso é aplicado antes da Durabilidade.`,
		category: "Física",
		min: 1,
		max: 4,
		customText: ''
	},
  {
		id: "iron-stamina",
		name: "Resistência Férrea",
		labelKey: "merit.ironStamina",
		value: 1,
		fixed: false,
		exclusive: false,
		description: "Pré-Requisitos: Vigor ••• ou Perseverança •••.\nEfeitos: Cada ponto elimina um modificador negativo ao resistir aos efeitos de fadiga ou lesão. Por exemplo: Um personagem com Resistência Férrea •• é capaz de ignorar até um modificador -2 provocado pela fadiga. A Vantagem também neutraliza os efeitos das penalidades por ferimentos. Assim, se todas as caixas de Vitalidade do seu personagem estiverem preenchidas (o que normalmente impõe uma penalidade de -3 a suas ações) e ele tem Resistência Férrea, essas penalidades são reduzidas para -2. Esta Vantagem não pode ser usada para ganhar modificadores positivos em ações, apenas para cancelar negativos.",
		category: "Física",
		min: 1,
		max: 3
	},
	{
		id: "quick-draw",
		name: "Saque Rápido",
		labelKey: "merit.quickDraw",
		value: 1,
		fixed: true,
		exclusive: true,
		description: "Pré-Requisitos: Raciocínio •••, uma Especialização na arma ou estilo de luta escolhido.\nEfeitos: Escolha uma Especialização em Armamento ou Armas de Fogo quando comprar esta Vantagem. Seu personagem treinou com aquela arma ou estilo o suficiente para sacar a arma sendo o seu primeiro reflexo. Sacar ou guardar essa arma é considerado uma ação reflexa e pode ser feito a qualquer momento em que sua Defesa for aplicável.",
		category: "Física",
		customText: ''
	}
  
  // ============= SOCIAIS ============= //
  // ========= ESTILOS DE LUTA ========= //
];
