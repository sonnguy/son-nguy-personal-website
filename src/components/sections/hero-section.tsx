import Image from "next/image";

import { homepageContent } from "@/content/homepage";
import { profile } from "@/content/profile";
import { resumeContent } from "@/content/resume";

export function HeroSection() {
  return (
    <section
      className="grid scroll-mt-20 items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20 lg:py-28"
      id="about"
      aria-labelledby="hero-heading"
    >
      <div className="order-2 lg:order-1">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          {profile.name}
        </p>
        <h1
          className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl sm:leading-[1.08] lg:text-6xl"
          id="hero-heading"
        >
          {homepageContent.hero.headline}
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-8 text-slate-700">
          {homepageContent.hero.subheadline}
        </p>
        <p className="mt-5 max-w-2xl leading-7 text-[var(--muted)]">
          {homepageContent.hero.supportingCopy}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            href={`mailto:${profile.email}`}
          >
            {homepageContent.hero.primaryAction}
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            href={resumeContent.pdfPath}
            download
          >
            {homepageContent.hero.secondaryAction}
          </a>
        </div>
      </div>

      <figure className="order-1 mx-auto w-full max-w-xs lg:order-2 lg:max-w-none">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image
            className="object-cover"
            src={profile.avatarPath}
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 352px, 320px"
          />
        </div>
      </figure>
    </section>
  );
}
