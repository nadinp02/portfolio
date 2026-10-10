import { ogSize, renderOgImage, type OgChip } from "@/lib/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = ogSize;
export const contentType = "image/png";

const chips: OgChip[] = [
  { label: "Vue.js", tone: "rose" },
  { label: "PHP", tone: "rose" },
  { label: "SQL", tone: "rose" },
  { label: "Next.js", tone: "sky" },
  { label: "TypeScript", tone: "sky" },
  { label: "PostgreSQL", tone: "sky" },
];

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: siteConfig.location,
    title: "Aplicaciones web completas: interfaz, API y base de datos.",
    chips,
  });
}
