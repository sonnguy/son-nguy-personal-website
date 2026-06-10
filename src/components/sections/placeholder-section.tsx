type PlaceholderSectionProps = Readonly<{
  id: string;
  label: string;
  description: string;
}>;

export function PlaceholderSection({
  id,
  label,
  description,
}: PlaceholderSectionProps) {
  return (
    <section className="grid gap-3 py-8 sm:grid-cols-[12rem_1fr]" id={id}>
      <h2 className="text-lg font-semibold">{label}</h2>
      <p className="max-w-2xl leading-7 text-[var(--muted)]">{description}</p>
    </section>
  );
}
