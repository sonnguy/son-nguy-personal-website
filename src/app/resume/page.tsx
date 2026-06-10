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
    <main className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-5 flex flex-col gap-4 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Son Nguy
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Resume
            </h1>
          </div>

          <nav
            className="flex flex-col-reverse gap-3 sm:flex-row"
            aria-label="Resume actions"
          >
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              href="/"
            >
              Back to Homepage
            </Link>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--accent)] px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              href={resumeContent.pdfPath}
              download
            >
              Download Resume
            </a>
          </nav>
        </header>

        <iframe
          className="h-[72vh] min-h-[32rem] w-full rounded-xl border border-slate-300 bg-white shadow-sm sm:h-[78vh] lg:min-h-[48rem]"
          sandbox="allow-downloads allow-same-origin"
          src={`${resumeContent.pdfPath}#view=FitH`}
          title="Son Nguy resume PDF"
        />
      </div>
    </main>
  );
}
