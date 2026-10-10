import { Section } from "@/components/section";
import { TagList } from "@/components/tag";
import { experience } from "@/lib/profile";

export function Experience() {
  return (
    <Section id="experiencia" index="02" label="Experiencia" title="Experiencia profesional">
      <ol>
        {experience.map((job) => (
          <li
            key={job.company}
            className="grid gap-x-8 gap-y-3 border-t border-line py-8 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-12 md:py-10"
          >
            <p className="label text-ink-soft md:col-span-3 md:pt-1.5">
              {job.period}
            </p>
            <div className="md:col-span-9">
              <h3 className="text-heading">{job.role}</h3>
              <p className="mt-1 text-ink-soft">
                {job.detail ? `${job.company} · ${job.detail}` : job.company}
              </p>
              <ul className="mt-5 grid max-w-3xl gap-2.5">
                {job.tasks.map((task) => (
                  <li key={task} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-ink" />
                    {task}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <TagList tone="rose" items={job.tools} label="Tecnologías" />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
