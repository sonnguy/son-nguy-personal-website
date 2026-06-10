import { siteMeta, skills } from "@/content";

import { SectionHeading } from "./section-heading";

export function CoreDomainsSection() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="domains-heading">
      <SectionHeading id="domains-heading" title={siteMeta.sections.domains} />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {skills.domains.map((domain, index) => (
          <article
            className="rounded-xl border border-[var(--border)] bg-white p-7 sm:p-8"
            key={domain.id}
          >
            <p className="text-sm font-semibold text-[var(--accent)]">
              0{index + 1}
            </p>
            <h3 className="mt-5 text-xl font-semibold text-slate-950">
              {domain.title}
            </h3>
            <p className="mt-3 leading-7 text-[var(--muted)]">
              {domain.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
