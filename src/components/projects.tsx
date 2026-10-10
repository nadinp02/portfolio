import { ProjectFeature } from "@/components/project-feature";
import { Section } from "@/components/section";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <Section id="proyectos" index="01" label="Proyectos" title="Proyectos destacados">
      <div className="grid gap-6 md:gap-8">
        {projects.map((project, i) => (
          <ProjectFeature key={project.slug} project={project} flip={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}
