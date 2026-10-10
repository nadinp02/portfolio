// Dónde uso cada tecnología. Es la distinción que ordena el sitio: "work" se
// pinta en rosa y "own" en celeste (ver globals.css).
export type Origin = "work" | "own";

export const originLabels: Record<Origin, string> = {
  work: "En el trabajo",
  own: "En proyectos propios",
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  // Aclaración opcional junto a la empresa (tipo de contrato, por ejemplo).
  detail?: string;
  tasks: string[];
  tools: string[];
};

export const experience: Experience[] = [
  {
    period: "Sep 2024 — Actualidad",
    role: "Full Stack Developer",
    company: "Impacto · Soluciones de gestión",
    tasks: [
      "Aplicaciones SPA con Vue.js y JavaScript.",
      "APIs REST con PHP MVC y bases de datos SQL.",
      "Funcionalidades completas, desde la interfaz hasta la persistencia de datos.",
      "Mantenimiento y mejora de sistemas en producción.",
    ],
    tools: ["Vue.js", "JavaScript", "PHP", "MVC", "APIs REST", "SQL / MySQL"],
  },
  {
    period: "Ago 2022 — Oct 2023",
    role: "Web Developer",
    company: "Estudio Rocha & Asoc.",
    detail: "Prácticas",
    tasks: [
      "Landing pages, sitios institucionales y ecommerce para distintos clientes.",
      "Mantenimiento y actualización de sitios existentes.",
      "Configuración de hosting y puesta en marcha de los sitios.",
      "Relevamiento con clientes y optimización SEO.",
    ],
    tools: ["PHP", "MySQL", "JavaScript", "WordPress", "Hosting", "SEO"],
  },
];

export type StackLayer = {
  layer: string;
  work: string[];
  own: string[];
};

export const stack: StackLayer[] = [
  {
    layer: "Interfaz",
    work: ["Vue.js", "JavaScript", "WordPress"],
    own: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Pinia"],
  },
  {
    layer: "Servidor",
    work: ["PHP", "Arquitectura MVC", "APIs REST"],
    own: ["Server Actions", "Auth.js", "JWT", "Zod"],
  },
  {
    layer: "Datos",
    work: ["SQL", "MySQL"],
    own: ["PostgreSQL", "Prisma"],
  },
  {
    layer: "Entrega",
    work: ["Hosting", "SEO"],
    own: ["Vitest", "PHPUnit", "GitHub Actions", "Vercel"],
  },
];

export const principles = [
  {
    title: "Entender antes de cambiar",
    text: "Reviso cómo está resuelto hoy antes de escribir código nuevo.",
  },
  {
    title: "Decisiones explicadas",
    text: "Cuando una solución no es obvia, dejo escrito el porqué.",
  },
];
