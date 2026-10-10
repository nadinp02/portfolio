import { Section } from "@/components/section";
import { principles } from "@/lib/profile";

export function About() {
  return (
    <Section
      id="sobre-mi"
      index="04"
      label="Sobre mí"
      title="Me muevo entre el frontend, el backend y los datos según lo que el problema pida."
    >
      <div className="grid gap-x-8 gap-y-10 md:grid-cols-12">
        <div className="max-w-2xl space-y-4 text-lead md:col-span-9 md:col-start-4">
          <p>
            En el trabajo mantengo y mejoro sistemas que ya están en producción. En mis proyectos
            empiezo de cero y aprendo las herramientas que hagan falta.
          </p>
        </div>

        <ol className="grid gap-x-8 gap-y-8 md:col-span-9 md:col-start-4 md:grid-cols-2">
          {principles.map((principle, i) => (
            <li key={principle.title} className="border-t border-ink pt-4">
              <p className="label text-ink-soft">0{i + 1}</p>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight">
                {principle.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] text-ink-soft">{principle.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
