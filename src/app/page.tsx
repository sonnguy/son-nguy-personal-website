import { SiteShell } from "@/components/layout/site-shell";
import { PlaceholderSection } from "@/components/sections/placeholder-section";
import { homepageContent } from "@/content/homepage";
import { profile } from "@/content/profile";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata = siteMetadata;

export default function HomePage() {
  return (
    <SiteShell>
      <header className="space-y-4 border-b border-[var(--border)] pb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Foundation preview
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {profile.positioning}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
          The Next.js foundation for {profile.name}&apos;s personal website is
          working. Final content and visual design will be implemented in a
          later phase.
        </p>
      </header>

      <div className="divide-y divide-[var(--border)]">
        {homepageContent.sections.map((section) => (
          <PlaceholderSection key={section.id} {...section} />
        ))}
      </div>
    </SiteShell>
  );
}
