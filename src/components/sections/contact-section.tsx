import { profile, siteMeta } from "@/content";

export function ContactSection() {
  return (
    <section
      className="scroll-mt-20 border-t border-[var(--border)] py-20 sm:py-28"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-7 sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              {profile.homepage.contact.eyebrow}
            </p>
            <h2
              className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl"
              id="contact-heading"
            >
              {profile.homepage.contact.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              {profile.homepage.contact.copy}
            </p>
          </div>

          <a
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            href={`mailto:${profile.email}`}
          >
            {profile.homepage.contact.primaryAction}
          </a>
        </div>

        <dl className="mt-10 grid gap-6 border-t border-blue-100 pt-8 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-semibold text-slate-950">
              {siteMeta.contactLabels.email}
            </dt>
            <dd className="mt-2">
              <a
                className="break-all text-sm text-slate-600 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-[var(--accent)]"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </dd>
          </div>
          {profile.links.linkedin ? (
            <div>
              <dt className="text-sm font-semibold text-slate-950">
                {siteMeta.contactLabels.linkedin}
              </dt>
              <dd className="mt-2 text-sm text-slate-600">
                <a
                  className="underline decoration-slate-300 underline-offset-4 transition-colors hover:text-[var(--accent)]"
                  href={profile.links.linkedin}
                >
                  {siteMeta.contactLabels.linkedinAction}
                </a>
              </dd>
            </div>
          ) : null}
          <div>
            <dt className="text-sm font-semibold text-slate-950">
              {siteMeta.contactLabels.resume}
            </dt>
            <dd className="mt-2">
              <a
                className="text-sm text-slate-600 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-[var(--accent)]"
                href={siteMeta.resumeUrl}
                download
              >
                {siteMeta.contactLabels.resumeAction}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
