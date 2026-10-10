// URL pública del sitio: la usan metadataBase, sitemap y robots. En Vercel se
// resuelve sola; en otro hosting hay que definir NEXT_PUBLIC_SITE_URL.
function resolveSiteUrl() {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000");
  return fromEnv.replace(/\/$/, "");
}

export const siteConfig = {
  name: "Nadin Pérez",
  initials: "NP",
  role: "Full Stack Developer",
  location: "Argentina",
  url: resolveSiteUrl(),
  description:
    "Desarrolladora Full Stack. Trabajo en sistemas de gestión en producción con Vue.js, PHP y SQL, y construyo proyectos propios con Next.js, TypeScript y PostgreSQL.",
  email: "pereznadin6@gmail.com",
  social: {
    github: "https://github.com/nadinp02",
    linkedin: "https://www.linkedin.com/in/nadin-perez/",
  },
};

// Con "/" adelante para que funcionen también desde las páginas de proyecto.
export const navLinks = [
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/#stack", label: "Stack" },
  { href: "/#sobre-mi", label: "Sobre mí" },
];

export const contactHref = "/#contacto";
