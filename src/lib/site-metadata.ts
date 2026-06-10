import type { Metadata } from "next";

export const siteUrl = new URL("https://sonnguy.dev");

const title =
  "Son Nguy | Product Engineer - Payments, Martech & Customer Experience";
const description =
  "Product Engineer with 10+ years of experience building customer-facing products across fintech, AI SaaS, hospitality, and membership platforms. Specialized in payments, Martech, analytics, and AI-assisted engineering.";

export const siteMetadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Son Nguy",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};
