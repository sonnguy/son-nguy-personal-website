import Link from "next/link";
import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { ResumeFoundation } from "@/components/resume/resume-foundation";
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
    <SiteShell>
      <ResumeFoundation content={resumeContent} />
      <nav className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
        <Link className="text-[var(--accent)] underline-offset-4 hover:underline" href="/">
          Back to home
        </Link>
        <a
          className="text-[var(--accent)] underline-offset-4 hover:underline"
          href={resumeContent.pdfPath}
        >
          View current PDF
        </a>
      </nav>
    </SiteShell>
  );
}
