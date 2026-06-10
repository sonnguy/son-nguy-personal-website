import Link from "next/link";
import type { Metadata } from "next";

import { resumeContent } from "@/content/resume";
import { socialImage } from "@/lib/site-metadata";

const title = "Resume | Son Nguy";
const description =
  "Resume for Son Nguy, a Product Engineer specializing in payments, Martech, analytics, and customer experience platforms.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    type: "website",
    url: "/resume",
    title,
    description,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-5xl">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Son Nguy
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Resume
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
            View or download the latest PDF version of my resume.
          </p>

          <nav
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            aria-label="Resume actions"
          >
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--accent)] px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              href={resumeContent.pdfPath}
              download
            >
              Download Resume
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              href={resumeContent.pdfPath}
              target="_blank"
              rel="noreferrer"
            >
              Open PDF in New Tab
            </a>
          </nav>

          <Link
            className="mt-6 inline-flex text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            href="/"
          >
            Back to Homepage
          </Link>
        </section>

        <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4 sm:px-6">
            <h2 className="font-semibold text-slate-950">Resume preview</h2>
            <p className="mt-1 text-sm text-slate-600">
              If the preview does not load, open the PDF in a new tab or
              download it.
            </p>
          </div>
          <iframe
            className="h-[28rem] w-full bg-slate-100 sm:h-[38rem]"
            sandbox="allow-downloads allow-same-origin"
            src={`${resumeContent.pdfPath}#view=FitH`}
            title="Son Nguy resume PDF preview"
          />
        </section>
      </div>
    </main>
  );
}
