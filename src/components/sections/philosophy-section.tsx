import { profile } from "@/content";

export function PhilosophySection() {
  return (
    <section
      className="border-t border-[var(--border)] py-20 sm:py-28"
      aria-labelledby="philosophy-heading"
    >
      <div className="grid gap-8 lg:grid-cols-[15rem_1fr] lg:gap-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          {profile.homepage.philosophy.eyebrow}
        </p>
        <div className="max-w-3xl">
          <h2
            className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl"
            id="philosophy-heading"
          >
            {profile.homepage.philosophy.title}
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-[var(--muted)]">
            {profile.homepage.philosophy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
