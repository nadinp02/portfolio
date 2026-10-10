import Image from "next/image";
import type { Project, Shot } from "@/lib/projects";

const spans: Record<Shot["layout"], string> = {
  wide: "md:col-span-8",
  phone: "md:col-span-4",
  half: "md:col-span-6",
};

const sizes: Record<Shot["layout"], string> = {
  wide: "(min-width: 768px) 66vw, 100vw",
  phone: "220px",
  half: "(min-width: 768px) 50vw, 100vw",
};

const toneClasses = {
  rose: "bg-rose",
  sky: "bg-sky",
};

export function Gallery({ shots, tone }: { shots: Shot[]; tone: Project["tone"] }) {
  return (
    <ul className="grid gap-x-5 gap-y-8 md:grid-cols-12">
      {shots.map((shot) => (
        <li key={shot.caption} className={spans[shot.layout]}>
          <figure className="flex h-full flex-col">
            {shot.layout === "phone" ? (
              // La captura de teléfono ocupa el alto de la fila, centrada sobre el color del proyecto.
              <div className={`relative min-h-[26rem] flex-1 rounded-frame md:min-h-0 ${toneClasses[tone]}`}>
                <div className="absolute inset-y-5 left-1/2 aspect-[900/1948] -translate-x-1/2 overflow-hidden rounded-xl border border-ink/10 shadow-frame">
                  <Image src={shot.src} alt={shot.alt} fill sizes={sizes.phone} className="object-cover" />
                </div>
              </div>
            ) : (
              <Image
                src={shot.src}
                alt={shot.alt}
                sizes={sizes[shot.layout]}
                placeholder="blur"
                className="w-full rounded-frame border border-ink/10 shadow-frame"
              />
            )}
            <figcaption className="mt-3 text-sm text-ink-soft">{shot.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
