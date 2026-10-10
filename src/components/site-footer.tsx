import { ButtonLink, NewTabHint, externalLinkProps } from "@/components/button-link";
import { ArrowUpRight } from "@/components/icons";
import { siteConfig } from "@/lib/site";

const channels = [
  { label: "GitHub", href: siteConfig.social.github, handle: "nadinp02" },
  { label: "LinkedIn", href: siteConfig.social.linkedin, handle: "nadin-perez" },
];

/** Contacto y pie de página: un único bloque grafito que cierra todas las páginas. */
export function SiteFooter() {
  return (
    <footer id="contacto" aria-labelledby="contacto-titulo" className="on-ink px-2 pb-2 sm:px-3 sm:pb-3">
      <div className="rounded-panel bg-ink text-paper">
        <div className="container-page pb-10 pt-14 md:pb-12 md:pt-20">
          <p className="label text-paper-soft">Contacto</p>

          <div className="mt-5 grid gap-x-8 gap-y-8 lg:grid-cols-12">
            <h2 id="contacto-titulo" className="text-display lg:col-span-5">
              ¿Hablamos?
            </h2>
            <div className="lg:col-span-7 lg:pt-3">
              <p className="max-w-xl text-lead text-paper-soft">
                Si querés conversar sobre un puesto, un proyecto o algo de mi código, escribime.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="link mt-6 inline-block break-all font-display text-[clamp(1.375rem,3.4vw,2.5rem)] font-semibold leading-tight tracking-tight"
              >
                {siteConfig.email}
              </a>
              <div className="mt-8">
                <ButtonLink href={`mailto:${siteConfig.email}`} variant="inverse">
                  Escribirme un correo
                </ButtonLink>
              </div>
            </div>
          </div>

          <ul className="mt-14 grid border-t border-paper/25 sm:grid-cols-2">
            {channels.map((channel) => (
              <li key={channel.label} className="border-b border-paper/25 sm:odd:pr-8 sm:even:pl-8">
                <a
                  href={channel.href}
                  className="group flex min-h-16 items-center justify-between gap-4 py-4"
                  {...externalLinkProps(channel.href)}
                >
                  <span>
                    <span className="label block text-paper-soft">{channel.label}</span>
                    <span className="mt-1 block font-medium group-hover:underline group-hover:underline-offset-4">
                      {channel.handle}
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <NewTabHint />
                </a>
              </li>
            ))}
          </ul>

          <div className="label mt-10 flex flex-col gap-2 text-paper-soft sm:flex-row sm:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.location}
            </p>
            <p>Hecho con Next.js y Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
