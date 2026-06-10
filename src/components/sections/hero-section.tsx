import Image from "next/image";
import Link from "next/link";

import { profile } from "@/content";

export function HeroSection() {
  const [positioningPrefix, positioningSuffix] = profile.positioning.split(
    profile.positioningAccent,
  );

  return (
    <section
      className="grid grid-cols-[minmax(0,1fr)] scroll-mt-20 items-center gap-12 py-16 sm:py-20 lg:min-h-[44rem] lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-20 lg:py-24"
      id="about"
      aria-labelledby="hero-heading"
    >
      <div className="order-2 min-w-0 lg:order-1">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          {profile.name}
        </p>
        <p className="mt-3 text-sm font-semibold text-slate-600">
          {profile.homepage.hero.eyebrow}
        </p>
        <h1
          className="mt-5 max-w-full text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-slate-950 sm:max-w-4xl sm:text-5xl lg:text-[3.75rem]"
          id="hero-heading"
        >
          {positioningPrefix}
          <span className="text-[var(--accent)]">
            {profile.positioningAccent}
          </span>
          <span>{positioningSuffix}</span>
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-700 sm:text-2xl sm:leading-10">
          {profile.homepage.hero.subheadline}
        </p>
        <p className="mt-5 max-w-2xl text-[1.0625rem] leading-8 text-[var(--muted)]">
          {profile.homepage.hero.supportingCopy}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            href="/resume"
          >
            {profile.homepage.hero.primaryAction}
          </Link>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            href={`mailto:${profile.email}`}
          >
            {profile.homepage.hero.secondaryAction}
          </a>
        </div>
      </div>

      <figure className="order-1 mx-auto w-full max-w-72 sm:max-w-xs lg:order-2 lg:max-w-none">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
          <Image
            className="object-cover"
            src={profile.avatarPath}
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 368px, 320px"
          />
        </div>
      </figure>
    </section>
  );
}
