import Image from "next/image";
import Link from "next/link";
import { ButtonLink, NewTabHint, externalLinkProps } from "@/components/button-link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { TagList } from "@/components/tag";
import { projects } from "@/lib/projects";
import { originLabels } from "@/lib/profile";
import { contactHref, siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section aria-labelledby="inicio-titulo" className="pb-12 pt-12 md:pb-16 md:pt-20">
      <div className="container-page">
        <p className="label text-ink-soft">
          {siteConfig.role} · {siteConfig.location}
        </p>
        <h1 id="inicio-titulo" className="mt-5 max-w-[22ch] text-display md:mt-6">
          Desarrollo aplicaciones web completas: interfaz, API y base de datos.
        </h1>

        <div className="mt-10 grid gap-10 md:mt-14 xl:grid-cols-12 xl:gap-8">
          <div className="flex flex-col xl:col-span-5">
            <p className="max-w-xl text-lead">
              Soy Nadin, desarrolladora Full Stack. Trabajo con Vue.js, PHP y SQL en sistemas de
              gestión, y construyo proyectos propios con Next.js, TypeScript y PostgreSQL.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/#proyectos">
                Ver proyectos
                <ArrowRight />
              </ButtonLink>
              <ButtonLink href={contactHref} variant="secondary">
                Contactarme
              </ButtonLink>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] font-medium xl:mt-auto xl:pt-8">
              <li>
                <a
                  href={siteConfig.social.github}
                  className="link inline-flex items-center gap-1.5"
                  {...externalLinkProps(siteConfig.social.github)}
                >
                  GitHub <ArrowUpRight />
                  <NewTabHint />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  className="link inline-flex items-center gap-1.5"
                  {...externalLinkProps(siteConfig.social.linkedin)}
                >
                  LinkedIn <ArrowUpRight />
                  <NewTabHint />
                </a>
              </li>
            </ul>
          </div>

          <ProfileSheet />
        </div>
      </div>
    </section>
  );
}

/** Ficha del perfil: qué uso hoy, qué estoy sumando y los dos casos. */
function ProfileSheet() {
  return (
    <div className="rounded-panel border border-line bg-surface p-6 sm:p-7 xl:col-span-7">
      <dl className="grid gap-x-6 gap-y-5 sm:grid-cols-[9.5rem_1fr]">
        <dt className="label pt-1.5 text-ink-soft">{originLabels.work}</dt>
        <dd>
          <p className="font-medium">Sistemas de gestión en producción</p>
          <div className="mt-2.5">
            <TagList tone="rose" items={["Vue.js", "PHP", "APIs REST", "SQL / MySQL"]} />
          </div>
        </dd>

        <dt className="label border-t border-line pt-5 text-ink-soft sm:pt-6">
          {originLabels.own}
        </dt>
        <dd className="sm:border-t sm:border-line sm:pt-5">
          <p className="font-medium">Productos completos, de la base al deploy</p>
          <div className="mt-2.5">
            <TagList tone="sky" items={["Next.js", "TypeScript", "Prisma", "PostgreSQL"]} />
          </div>
        </dd>

        <dt className="label border-t border-line pt-5 text-ink-soft sm:pt-6">Casos</dt>
        <dd className="sm:border-t sm:border-line sm:pt-5">
          <ul className="grid gap-2">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="group flex items-center gap-3 rounded-2xl p-1.5 pr-3 transition-colors hover:bg-paper"
                >
                  <Image
                    src={project.cover.src}
                    alt=""
                    sizes="72px"
                    className="h-11 w-[4.5rem] shrink-0 rounded-lg border border-ink/10 object-cover object-top"
                  />
                  <span className="min-w-0 flex-1 leading-snug">
                    <span className="block font-display font-semibold tracking-tight">
                      {project.name}
                    </span>
                    <span className="block text-sm text-ink-soft">{project.kind}</span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </dd>
      </dl>
    </div>
  );
}
