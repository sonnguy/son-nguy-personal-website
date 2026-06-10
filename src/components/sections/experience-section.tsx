import { homepageContent } from "@/content/homepage";

import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section
      className="scroll-mt-20 border-t border-[var(--border)] py-20 sm:py-28"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <SectionHeading
        id="experience-heading"
        eyebrow="Experience"
        title={homepageContent.experienceTitle}
      />

      <ol className="mt-12 border-t border-[var(--border)]">
        {homepageContent.experience.map((entry) => (
          <li
            className="grid gap-2 border-b border-[var(--border)] py-6 sm:grid-cols-[1fr_1.25fr_auto] sm:items-center sm:gap-8"
            key={`${entry.company}-${entry.period}`}
          >
            <h3 className="font-semibold text-slate-950">{entry.company}</h3>
            <p className="text-[var(--muted)]">{entry.role}</p>
            <p className="text-sm font-medium text-slate-600">{entry.period}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
