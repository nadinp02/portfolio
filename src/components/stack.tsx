import { Section } from "@/components/section";
import { TagList } from "@/components/tag";
import { originLabels, stack } from "@/lib/profile";

export function Stack() {
  return (
    <Section id="stack" index="03" label="Stack" title="Tecnologías">
      <div className="rounded-panel border border-line bg-surface px-5 sm:px-8">
        {/* Encabezado de columnas: solo en desktop; en mobile cada celda lleva su etiqueta. */}
        <div
          aria-hidden="true"
          className="hidden gap-8 border-b border-line py-5 md:grid md:grid-cols-12"
        >
          <p className="label col-span-3 text-ink-soft">Capa</p>
          <p className="label col-span-4 flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-rose-deep" />
            {originLabels.work}
          </p>
          <p className="label col-span-5 flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-sky-deep" />
            {originLabels.own}
          </p>
        </div>

        <ul>
          {stack.map((row) => (
            <li
              key={row.layer}
              className="grid gap-x-8 gap-y-4 border-b border-line py-6 last:border-b-0 md:grid-cols-12 md:py-7"
            >
              <div className="md:col-span-3">
                <h3 className="font-display text-xl font-semibold tracking-tight">{row.layer}</h3>
              </div>
              <div className="md:col-span-4">
                <p className="label mb-2 text-ink-soft md:sr-only">{originLabels.work}</p>
                <TagList tone="rose" items={row.work} />
              </div>
              <div className="md:col-span-5">
                <p className="label mb-2 text-ink-soft md:sr-only">{originLabels.own}</p>
                <TagList tone="sky" items={row.own} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
