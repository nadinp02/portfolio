const tones = {
  rose: "bg-rose text-rose-deep",
  sky: "bg-sky text-sky-deep",
  neutral: "border border-ink/15 text-ink",
  // Sobre un panel ya teñido de rosa o celeste.
  onTone: "bg-surface/70 text-ink",
};

export type TagTone = keyof typeof tones;

export function Tag({ tone = "neutral", children }: { tone?: TagTone; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[0.8125rem] font-medium leading-5 ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function TagList({ items, tone, label }: { items: string[]; tone?: TagTone; label?: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item}>
          <Tag tone={tone}>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
