type SectionHeadingProps = Readonly<{
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
}>;

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`${eyebrow ? "mt-3" : ""} text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl`}
        id={id}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
