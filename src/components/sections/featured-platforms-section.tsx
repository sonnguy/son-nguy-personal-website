import { homepageContent } from "@/content/homepage";

import { SectionHeading } from "./section-heading";

export function FeaturedPlatformsSection() {
  return (
    <section
      className="scroll-mt-20 border-t border-[var(--border)] py-20 sm:py-28"
      id="platforms"
      aria-labelledby="platforms-heading"
    >
      <SectionHeading id="platforms-heading" title="Featured Platforms" />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {homepageContent.platforms.map((platform) => (
          <article
            className="flex h-full flex-col rounded-xl border border-[var(--border)] bg-white p-7 sm:p-8"
            key={platform.id}
          >
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
              {platform.name}
            </h3>
            <ul
              className="mt-4 flex flex-wrap gap-2"
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
            <div className="mt-7 space-y-4 border-t border-[var(--border)] pt-6">
              {platform.description.map((paragraph) => (
                <p className="leading-7 text-[var(--muted)]" key={paragraph}>
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
