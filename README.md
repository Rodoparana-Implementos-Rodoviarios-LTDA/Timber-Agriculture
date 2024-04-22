<div align="center">
  <h1 align="center">Timber Agriculture</h1>
  <div align="center">
  <h3 align="center">Página de Destino para os Drones XAG e o Software de Mapeamento Topográfico PIX4Dfields, em um formato de Aplicação de Página Única (SPA).</h3><br><br>
  <p>  Ele é responsável pela captação de novos Leads, enviando via <b>Web to Lead</b> para a ORG do <b>Salesforce</b> e é atualmente hospedado pela <a href="https://vercel.com/" target="_blank"><b>Vercel.</b></a></p>
  </div>
  <br>
  <img src="/public/WEBPAGE.png" alt="Landing page">
</div>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Vite
- React.js
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Lindas seções**: Inclui a hero, principais Highlights, Drones da XAG, Mapa de Atendimento das Revendas e o PIX4D; Rodapé e Menu.

👉 **Animações Parallax**: Efeitos envolventes acionados pelo movimento e rolagem do mouse

👉 **Geometria de UI complexa**: utiliza tailwindcss para formas complexas, como exibições de recursos circulares, linhas de grade e linhas laterais.

👉 **Últimas tendências de UI**: incorpora elementos de design moderno, como grades "bento".

👉 **Gradientes legais**: aprimora os visuais com gradientes elegantes usando Tailwind CSS para cartões, botões, etc.

👉 **Responsivo**: Garante funcionalidade e estética perfeitas em todos os dispositivos

e muito mais, incluindo arquitetura de código e capacidade de reutilização

## <a name="quick-start">🤸 Quick Start</a>

Siga estas etapas para configurar o projeto localmente em sua máquina.

**Pre requisitos**

Garanta que tenha intalado em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Clonando o Repositório**

```bash
git clone https://github.com/Rodoparana-Implementos-Rodoviarios-LTDA/Timber-Agriculture.git
cd Timber-Agriculture
```

**Instalação**

Instale as dependências do projeto utilizando NPM:

```bash
npm install
```

**Rodando o Projeto**

```bash
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no seu browser para ver o projeto.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#14b8a6",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#98f0ff",
        },
        stroke: {
          1: "#500724",
        },
        n: {
          1: "#FFFFFF",
          2: "#fef2f2",
          3: "#fee2e2",
          4: "#fecaca",
          5: "#fca5a5",
          6: "#500724",
          7: "#ef4444",
          8: "#171717",
          9: "#500724",
          10: "#b91c1c",
          11: "#991b1b",
          12: "#7f1d1d",
          13: "#4c0519",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #500724, #4c0519, #500724)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};

```

</details>

<details>
<summary><code>index.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-sora: "Sora", sans-serif;
  --font-code: "Source Code Pro", monospace;
  --font-grotesk: "Space Grotesk", sans-serif;
  color-scheme: dark;
}

* {
  scroll-behavior: smooth
}

@layer base {
  body {
    @apply font-sans bg-zinc-950 text-n-1 text-base;
  }
}

.rotate-45 {
  @apply rotate-[45deg]
}

.rotate-90 {
  @apply rotate-[90deg]
}

.rotate-135 {
  @apply rotate-[135deg]
}

.rotate-180 {
  @apply rotate-[180deg]
}

.rotate-225 {
  @apply rotate-[225deg]
}

.rotate-270 {
  @apply rotate-[270deg]
}

.rotate-315 {
  @apply rotate-[315deg]
}

.rotate-360 {
  @apply rotate-[360deg]
}

.-rotate-45 {
  @apply rotate-[-45deg]
}

.-rotate-90 {
  @apply rotate-[-90deg]
}

.-rotate-135 {
  @apply rotate-[-135deg]
}

.-rotate-180 {
  @apply rotate-[-180deg]
}

.-rotate-225 {
  @apply rotate-[-225deg]
}

.-rotate-270 {
  @apply rotate-[-270deg]
}

.-rotate-315 {
  @apply rotate-[-315deg]
}

.-rotate-360 {
  @apply rotate-[-360deg]
}
```

</details>

<details>
<summary><code>constants/index.js</code></summary>

```javascript
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
    title:
      "Troca rápida entre sistemas de pulverização e espalhamento para versatilidade operacional.",
  },
  {
    id: 2,
    title:
      "Proteção IPX6K e eficiência comprovada em áreas de até 13 hectares, ideal para agricultura de precisão.",
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
    description:
      "Aplicativo desktop com licença flutuante (1 dispositivo por vez).",
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
export const estadosBrasileiros = [
  { id: 1, name: "Acre" },
  { id: 2, name: "Alagoas" },
  { id: 3, name: "Amapá" },
  { id: 4, name: "Amazonas" },
  { id: 5, name: "Bahia" },
  { id: 6, name: "Ceará" },
  { id: 7, name: "Distrito Federal" },
  { id: 8, name: "Espírito Santo" },
  { id: 9, name: "Goiás" },
  { id: 10, name: "Maranhão" },
  { id: 11, name: "Mato Grosso" },
  { id: 12, name: "Mato Grosso do Sul" },
  { id: 13, name: "Minas Gerais" },
  { id: 14, name: "Pará" },
  { id: 15, name: "Paraíba" },
  { id: 16, name: "Paraná" },
  { id: 17, name: "Pernambuco" },
  { id: 18, name: "Piauí" },
  { id: 19, name: "Rio de Janeiro" },
  { id: 20, name: "Rio Grande do Norte" },
  { id: 21, name: "Rio Grande do Sul" },
  { id: 22, name: "Rondônia" },
  { id: 23, name: "Roraima" },
  { id: 24, name: "Santa Catarina" },
  { id: 25, name: "São Paulo" },
  { id: 26, name: "Sergipe" },
  { id: 27, name: "Tocantins" },
];

```

</details>

<details>
<summary><code>components/Section.jsx</code></summary>

```javascript
import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;

```

</details>


