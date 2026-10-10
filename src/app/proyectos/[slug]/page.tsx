import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { Gallery } from "@/components/gallery";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { Section } from "@/components/section";
import { TagList } from "@/components/tag";
import { serializeJsonLd } from "@/lib/json-ld";
import { getProject, projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

const toneClasses = {
  rose: "bg-rose",
  sky: "bg-sky",
};

// Solo existen las páginas de los proyectos cargados; cualquier otro slug da 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.name}: ${project.kind.toLowerCase()}`;
  const path = `/proyectos/${project.slug}`;

  return {
    title,
    description: project.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "es_AR",
      siteName: siteConfig.name,
      url: path,
      title: `${title} — ${siteConfig.name}`,
      description: project.tagline,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${siteConfig.name}`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: `${siteConfig.url}/proyectos/${project.slug}`,
    dateCreated: project.year,
    inLanguage: "es",
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    keywords: project.keyStack.join(", "),
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <header className="container-page pb-10 pt-8 md:pb-14 md:pt-12">
        <Link href="/#proyectos" className="link inline-flex items-center gap-2 text-[0.9375rem] font-medium">
          <ArrowLeft />
          Todos los proyectos
        </Link>

        <p className="label mt-10 text-ink-soft md:mt-14">
          Caso {project.index} · {project.kind} · {project.year}
        </p>
        <h1 className="mt-5 text-display">{project.name}</h1>
        <p className="mt-6 max-w-3xl font-display text-heading font-medium">{project.tagline}</p>

        <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-ink pt-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <dt className="label text-ink-soft">Mi rol</dt>
            <dd className="mt-2">{project.role}</dd>
          </div>
          <div className="md:col-span-4">
            <dt className="label text-ink-soft">Tecnologías principales</dt>
            <dd className="mt-2.5">
              <TagList items={project.keyStack} />
            </dd>
          </div>
          <div className="md:col-span-3">
            <dt className="label text-ink-soft">Enlaces</dt>
            <dd className="mt-2.5 flex flex-wrap items-center gap-2.5">
              {project.links.live && <ButtonLink href={project.links.live}>Ver el sitio</ButtonLink>}
              {project.links.repo && (
                <ButtonLink href={project.links.repo} variant="secondary">
                  Código
                </ButtonLink>
              )}
              {project.links.repoNote && <span className="label">{project.links.repoNote}</span>}
            </dd>
          </div>
        </dl>
      </header>

      <div className="container-page">
        <div className={`rounded-panel p-4 sm:p-8 lg:p-12 ${toneClasses[project.tone]}`}>
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            sizes="(min-width: 1248px) 1088px, 92vw"
            placeholder="blur"
            preload
            className="w-full rounded-frame border border-ink/10 shadow-frame"
          />
        </div>
      </div>

      <Section compact id="contexto" index="01" label="Contexto" title="Qué es y qué problema resuelve">
        <div className="grid gap-x-8 md:grid-cols-12">
          <div className="max-w-2xl space-y-4 text-lead md:col-span-9 md:col-start-4">
            {project.context.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section compact id="alcance" index="02" label="Alcance" title="Lo que construí">
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-3">
          {project.features.map((feature) => (
            <div key={feature.group}>
              <h3 className="border-b border-line pb-3 font-display text-xl font-semibold tracking-tight">
                {feature.group}
              </h3>
              <ul className="mt-4 grid gap-3 text-[0.9375rem]">
                {feature.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section compact id="decisiones" index="03" label="Decisiones" title="Decisiones técnicas">
        <ol className="grid gap-x-8 md:grid-cols-12">
          {project.decisions.map((decision, i) => (
            <li
              key={decision.title}
              className="grid gap-x-8 gap-y-2 border-t border-line py-6 first:border-t-0 first:pt-0 md:col-span-9 md:col-start-4 md:grid-cols-[2.5rem_1fr]"
            >
              <p className="label pt-1.5 text-ink-soft">0{i + 1}</p>
              <div>
                <h3 className="font-display text-xl font-semibold leading-snug tracking-tight">
                  {decision.title}
                </h3>
                <p className="mt-2 max-w-2xl">{decision.text}</p>
                <p className="mt-3 break-all font-mono text-[0.8125rem] text-ink-soft">{decision.file}</p>
              </div>
            </li>
          ))}
        </ol>

        {project.flow && (
          <div className={`mt-10 rounded-panel p-6 sm:p-8 lg:p-10 ${toneClasses[project.tone]}`}>
            <h3 className="font-display text-xl font-semibold leading-snug tracking-tight">
              {project.flow.title}
            </h3>
            <p className="mt-2 max-w-2xl text-[0.9375rem]">{project.flow.text}</p>
            <ol className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
              {project.flow.steps.map((step, i) => (
                <li key={step.title} className="border-t border-ink pt-3">
                  <p className="label">Paso {i + 1}</p>
                  <p className="mt-2 font-display text-lg font-semibold tracking-tight">{step.title}</p>
                  <p className="mt-1 text-[0.9375rem]">{step.text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 break-all font-mono text-[0.8125rem]">{project.flow.file}</p>
          </div>
        )}
      </Section>

      <Section compact id="desafio" index="04" label="Aprendizaje" title={project.challenge.title}>
        <div className="grid gap-x-8 md:grid-cols-12">
          <p className="max-w-2xl text-lead md:col-span-9 md:col-start-4">{project.challenge.text}</p>
        </div>
      </Section>

      <Section compact id="capturas" index="05" label="Capturas" title="El producto funcionando">
        <Gallery shots={project.gallery} tone={project.tone} />
      </Section>

      <Section compact id="stack" index="06" label="Stack" title="Tecnologías por capa">
        <div className="grid gap-x-8 gap-y-8 md:grid-cols-12">
          <dl className="md:col-span-9 md:col-start-4">
            {project.stack.map((row) => (
              <div
                key={row.layer}
                className="grid gap-x-8 gap-y-2 border-t border-line py-4 first:border-t-0 first:pt-0 sm:grid-cols-[8rem_1fr]"
              >
                <dt className="font-display text-lg font-semibold tracking-tight">{row.layer}</dt>
                <dd>
                  <TagList items={row.items} />
                </dd>
              </div>
            ))}
          </dl>
          <div className="md:col-span-9 md:col-start-4">
            <h3 className="label text-ink-soft">Lo que no hace</h3>
            <p className="mt-2 max-w-2xl">{project.limits}</p>
          </div>
        </div>
      </Section>

      <nav aria-label="Otros proyectos" className="container-page pb-16 pt-6 md:pb-24">
        <Link
          href={`/proyectos/${next.slug}`}
          className={`group flex flex-col gap-6 rounded-panel p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10 ${toneClasses[next.tone]}`}
        >
          <span>
            <span className="label block">Siguiente caso</span>
            <span className="mt-3 block font-display text-title font-semibold">{next.name}</span>
            <span className="mt-2 block max-w-xl">{next.tagline}</span>
          </span>
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-transform group-hover:translate-x-1">
            <ArrowRight className="size-5" />
          </span>
        </Link>
      </nav>
    </article>
  );
}
