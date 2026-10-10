/**
 * Sección de la página de inicio. La estructura es siempre la misma: una
 * línea, una columna angosta con el índice y, al lado, el título y el
 * contenido. Esa columna de margen es la que le da ritmo al sitio.
 */
export function Section({
  id,
  index,
  label,
  title,
  intro,
  compact = false,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  // Versión más contenida, para los bloques de un caso de estudio.
  compact?: boolean;
  children: React.ReactNode;
}) {
  const titleId = `${id}-titulo`;

  return (
    <section id={id} aria-labelledby={titleId} className={compact ? "py-8 md:py-12" : "py-12 md:py-16"}>
      <div className="container-page">
        <div className="grid gap-x-8 gap-y-4 border-t border-ink pt-5 md:grid-cols-12 md:pt-6">
          <p className="label text-ink-soft md:col-span-3">
            <span className="text-ink">{index}</span> / {label}
          </p>
          <div className="md:col-span-9">
            <h2 id={titleId} className={compact ? "text-heading md:text-[2.125rem] md:leading-[1.1]" : "text-title"}>
              {title}
            </h2>
            {intro && <p className="mt-4 max-w-2xl text-lead text-ink-soft">{intro}</p>}
          </div>
        </div>
        <div className={compact ? "mt-8 md:mt-10" : "mt-10 md:mt-14"}>{children}</div>
      </div>
    </section>
  );
}
