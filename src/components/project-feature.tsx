import Image from "next/image";
import Link from "next/link";
import { ButtonLink, NewTabHint, externalLinkProps } from "@/components/button-link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { TagList } from "@/components/tag";
import type { Project } from "@/lib/projects";

const toneClasses = {
  rose: "bg-rose",
  sky: "bg-sky",
};

/** Un proyecto en la página de inicio. `flip` invierte texto y captura. */
export function ProjectFeature({ project, flip = false }: { project: Project; flip?: boolean }) {
  const titleId = `proyecto-${project.slug}`;
  const caseHref = `/proyectos/${project.slug}`;

  return (
    <article
      aria-labelledby={titleId}
      className={`rounded-panel p-5 sm:p-8 lg:p-12 ${toneClasses[project.tone]}`}
    >
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
        <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
          <p className="label">
            {project.index} · {project.kind}
          </p>
          <h3 id={titleId} className="mt-4 text-title">
            <Link href={caseHref} className="hover:underline hover:decoration-2 hover:underline-offset-4">
              {project.name}
            </Link>
          </h3>
          <p className="mt-4 text-lead font-medium">{project.tagline}</p>
        </div>

        <div className={`relative lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            sizes="(min-width: 1024px) 640px, 100vw"
            placeholder="blur"
            className="w-full rounded-frame border border-ink/10 shadow-frame"
          />
          <Image
            src={project.phone.src}
            alt={project.phone.alt}
            sizes="160px"
            className={`absolute -bottom-6 hidden aspect-[9/16] w-[22%] rounded-xl border border-ink/10 object-cover object-top shadow-frame sm:block ${
              flip ? "-left-3 lg:-left-6" : "-right-3 lg:-right-6"
            }`}
          />
        </div>
      </div>

      <ul className="mt-12 grid gap-x-8 gap-y-6 border-t border-ink/20 pt-6 md:grid-cols-3 lg:mt-16">
        {project.highlights.map((highlight) => (
          <li key={highlight.title}>
            <h4 className="font-display text-lg font-semibold leading-snug tracking-tight">
              {highlight.title}
            </h4>
            <p className="mt-2 text-[0.9375rem]">{highlight.text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-6">
        <TagList tone="onTone" items={project.keyStack} label={`Tecnologías de ${project.name}`} />

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <ButtonLink href={caseHref}>
            Leer el caso
            <ArrowRight />
          </ButtonLink>
          {project.links.live && (
            <a
              href={project.links.live}
              className="link inline-flex items-center gap-1.5 text-[0.9375rem] font-medium"
              {...externalLinkProps(project.links.live)}
            >
              Ver el sitio <ArrowUpRight />
              <NewTabHint />
            </a>
          )}
          {project.links.repo ? (
            <a
              href={project.links.repo}
              className="link inline-flex items-center gap-1.5 text-[0.9375rem] font-medium"
              {...externalLinkProps(project.links.repo)}
            >
              Código <ArrowUpRight />
              <NewTabHint />
            </a>
          ) : (
            project.links.repoNote && <span className="label">{project.links.repoNote}</span>
          )}
        </div>
      </div>
    </article>
  );
}
