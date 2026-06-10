type ResumeFoundationProps = Readonly<{
  content: {
    eyebrow: string;
    title: string;
    description: string;
  };
}>;

export function ResumeFoundation({ content }: ResumeFoundationProps) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
        {content.eyebrow}
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        {content.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
        {content.description}
      </p>
    </article>
  );
}
