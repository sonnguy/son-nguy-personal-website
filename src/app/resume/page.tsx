import Link from "next/link";
import type { Metadata } from "next";

import { siteMeta } from "@/content";
import { socialImage } from "@/lib/site-metadata";

const { resumePage } = siteMeta;

export const metadata: Metadata = {
  title: resumePage.title,
  description: resumePage.description,
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    type: "website",
    url: "/resume",
    title: resumePage.title,
    description: resumePage.description,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: resumePage.title,
    description: resumePage.description,
    images: [socialImage],
  },
};

export default function ResumePage() {
  return (
    <main
      className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 sm:py-16"
      id="main-content"
      tabIndex={-1}
    >
      <div className="mx-auto w-full max-w-5xl">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            {resumePage.eyebrow}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {resumePage.heading}
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
            {resumePage.intro}
          </p>

          <nav
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            aria-label="Resume actions"
          >
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--accent)] px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              href={siteMeta.resumeUrl}
              download
            >
              {resumePage.downloadAction}
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              href={siteMeta.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              {resumePage.openAction}
            </a>
          </nav>

          <Link
            className="mt-6 inline-flex text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            href="/"
          >
            {resumePage.backAction}
          </Link>
        </section>

        <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4 sm:px-6">
            <h2 className="font-semibold text-slate-950">
              {resumePage.previewTitle}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {resumePage.previewFallback}
            </p>
          </div>
          <iframe
            className="h-[28rem] w-full bg-slate-100 sm:h-[38rem]"
            sandbox="allow-downloads allow-same-origin"
            src={`${siteMeta.resumeUrl}#view=FitH`}
            title={resumePage.previewFrameTitle}
          />
        </section>
      </div>
    </main>
  );
}
