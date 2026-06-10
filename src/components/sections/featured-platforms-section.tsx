import { projects, siteMeta } from "@/content";

import { SectionHeading } from "./section-heading";

export function FeaturedPlatformsSection() {
  return (
    <section
      className="scroll-mt-20 border-t border-[var(--border)] py-20 sm:py-28"
      id="platforms"
      aria-labelledby="platforms-heading"
    >
      <SectionHeading
        id="platforms-heading"
        title={siteMeta.sections.platforms}
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {projects.map((platform) => (
          <article
            className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 sm:p-8"
            key={platform.id}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
              {platform.name}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              {platform.category}
            </h3>
            <ul
              className="mt-5 flex flex-wrap gap-2"
              aria-label={`${platform.name} domains`}
            >
              {platform.domains.map((domain) => (
                <li
                  className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                  key={domain}
                >
                  {domain}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-[var(--border)] pt-6">
              <p className="text-lg font-semibold leading-7 tracking-[-0.01em] text-slate-900">
                {platform.description}
              </p>
              {platform.contributions.map((paragraph) => (
                <p
                  className="mt-4 text-lg leading-8 text-[var(--muted)]"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
