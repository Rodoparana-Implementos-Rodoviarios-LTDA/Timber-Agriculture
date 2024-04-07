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
  discordBlack,
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
  telegram,
  twitter,
  yourlogo,
  drone,
  gps,
  target,
  agro,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "5",
    title: "Contato",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [drone, gps, target, agro];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const p100proServices = [
  {
    id: 0,
    title: "Desempenho Avançado de Carga e Tamanho",
    desc1:
      "Projeto dobrável inovador com sistema de potência atualizado, suportando uma carga útil de até 50 kg.",
    desc2:
      "Tamanho compacto: dobrável até 62% menor para facilitar o transporte e carregamento.",
  },
  {
    id: 1,
    title: "Eficiência de Proteção e Espalhamento da Colheita",
    desc1:
      "Taxa de fluxo máxima de 22 L/min com XAG RevoSpray 3 e 12 L/min com RevoSpray 2.",
    desc2:
      "Eficiência geral de proteção de campo aberto de 19ha/h e 2ha/h para pomares, variando conforme as condições reais.",
  },
  {
    id: 2,
    title: "Tecnologia de Pulverização e Espalhamento Avançada",
    desc1:
      "XAG RevoSpray 3 com bomba peristáltica dupla atualizada, taxa de fluxo de 22 L/min e capacidade do tanque de 50 L.",
    desc2:
      "XAG RevoCast 3 permite espalhar um saco de fertilizante em apenas 20 segundos, com taxa máxima de espalhamento de 150 kg/min.",
  },

];

export const p100proServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
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

export const collabApps = [
  {
    id: "0",
    title: "Sensoriamento",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Processo",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Exploração",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Análise",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Compartilhamento",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Integração",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Resultado em Campo",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Mapas precisos",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
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
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
