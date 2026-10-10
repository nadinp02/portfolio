import { notFound } from "next/navigation";
import { ogSize, renderOgImage } from "@/lib/og";
import { getProject, projects } from "@/lib/projects";

export const alt = "Caso de estudio de un proyecto de Nadin Pérez";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return renderOgImage({
    eyebrow: `Caso ${project.index} · ${project.kind}`,
    title: project.name,
    text: project.tagline,
    chips: project.keyStack.map((label) => ({ label, tone: "neutral" })),
    background: project.tone,
  });
}
