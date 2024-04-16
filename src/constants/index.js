import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  facebook,
  figma,
  framer,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  slack,
  sliders04,
  lider,
  vitagran,
  drone,
  gps,
  target,
  texag,
  rodomaq,
  brava,
  agro,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Detalhes",
    url: "#details",
  },
  {
    id: "1",
    title: "PIX4Dfields",
    url: "#pix",
  },
  {
    id: "2",
    title: "Drones XAG",
    url: "#xag",
  },
  {
    id: "3",
    title: "Encontrar Revendas",
    url: "#location",
  },
];

export const heroIcons = [drone, gps, target, agro];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [texag, vitagran, lider, rodomaq, brava];

export const p100proServices = [
  {
    id: 0,
    title: "Desempenho Avançado de Carga e Tamanho",
    },
  {
    id: 1,
    title: "Eficiência de Proteção e Espalhamento da Colheita",
   },
  {
    id: 2,
    title: "Tecnologia de Pulverização e Espalhamento Avançada",
  },

];
export const v50Services = [
  {
    id: 0,
    title: "Capacidade de 20 kg para manejo eficiente de produtos agrícolas.",
    },
  {
    id: 1,
    title: "Troca rápida entre sistemas de pulverização e espalhamento para versatilidade operacional.",
   },
  {
    id: 2,
    title: "Proteção IPX6K e eficiência comprovada em áreas de até 13 hectares, ideal para agricultura de precisão.",
  },

];


export const p100proServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const field = [
  {
    id: "0",
    title: "Exploração",
    text: "Gere ortomosaicos precisos, modelos digitais de superfície, mapas de índice, zonas e mapas de prescrição precisos.  Corte seus campos até um limite de campo desejado para criar resultados mais direcionados.",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Análise",
    text: "Gere ortomosaicos precisos, modelos digitais de superfície, mapas de índice, zonas e mapas de prescrição precisos.  Corte seus campos até um limite de campo desejado para criar resultados mais direcionados.",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Integração",
    text: "Baixe todos os resultados, resultados e insights e importe-os para o software de gerenciamento agrícola de sua escolha em vários formatos padrão do setor.",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: " Resultados em campo",
    text: "Crie mapas rapidamente (sem necessidade de conexão com a Internet) para tomar decisões e ações mais rápidas, sem sair do campo.",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Software avançado de mapeamento agrícola para análise aérea de culturas e agricultura digital";
export const collabContent = [
  {
    id: "0",
    title: "Sensoriamento Remoto",
    desc: "Colete imagens usando drones ou importe dados de satélite Sentinel-2 para uma análise aérea precisa.",
  },
  {
    id: "1",
    title: "Processamento Rápido",
    desc: "Obtenha mapas diretamente no campo em apenas 10 minutos com o novo módulo de radiometria.",
  },
  {
    id: "2",
    title: "Compartilhamento Fácil",
    desc: "Compartilhe mapas e relatórios em PDF de forma rápida e eficiente via PIX4Dcloud.",
  },
];

export const pricing = [
  {
    id: "0",
    title: "Plano Anual",
    description: "Aplicativo desktop com licença flutuante (1 dispositivo por vez).",
    price: "8.199",
    features: [
      "Processamento de desktop ilimitado e saídas de alta resolução.",
      "Suporte pessoal e atualizações incluídas durante sua assinatura.",
      "Assinatura anual recorrente. Cancele a qualquer momento.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Performance Superior",
    text: "Desfrute de capacidades de dispersão e pulverização sem precedentes, alcançando taxas de fluxo de até 12 L/min e dispersão de 110 kg/min. Com nossos drones, a eficiência e o rendimento estão garantidos.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Flexibilidade Total",
    text: "Seja no modo totalmente autônomo ou manual, nossos drones adaptam-se às suas necessidades. Com designs dobráveis e módulos intercambiáveis, a versatilidade está ao seu alcance.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Mapeamento Avançado",
    text: "Com o software Pix4DFields, mapear campos e pomares nunca foi tão fácil. Parâmetros pré-configurados e planejamento automático de rotas garantem precisão em cada operação.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Segurança Incomparável",
    text: "Nossos drones são construídos para resistir. Classificações de proteção IPX6K e IPX7 combinadas com sistemas avançados de detecção de obstáculos garantem operações seguras em qualquer ambiente.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Eficiência Energética",
    text: "Otimize suas operações com nossas soluções de energia resfriada a água, garantindo longevidade e desempenho máximo durante cada voo.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Tecnologia de Ponta",
    text: "Aproveite o poder da tecnologia 4D e do radar adaptativo para uma detecção de obstáculos precisa e um mapeamento detalhado, tudo isso disponível na palma da sua mão com o Pix4DFields.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
