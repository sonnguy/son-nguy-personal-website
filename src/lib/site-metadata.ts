import type { Metadata } from "next";

export const siteUrl = new URL("https://sonnguy.dev");

const title =
  "Son Nguy | Product Engineer - Payments, Martech & Customer Experience";
const description =
  "Product Engineer with 10+ years of experience building customer-facing products across fintech, AI SaaS, hospitality, and membership platforms. Specialized in payments, Martech, analytics, and AI-assisted engineering.";

export const socialImage = {
  url: "/images/og-image-1200x630.png",
  width: 1200,
  height: 630,
  alt: "Son Nguy, Product Engineer specializing in payments, Martech, and customer experience platforms",
};

export const siteMetadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl.origin,
    siteName: "Son Nguy",
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
  icons: {
    icon: [
      {
        url: "/images/favicon_io/favicon.ico",
      },
      {
        url: "/images/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/images/favicon_io/site.webmanifest",
};
