import type { Metadata } from "next";

import { profile, siteMeta } from "@/content";

export const siteUrl = new URL(siteMeta.domain);
export const socialImage = siteMeta.socialImage;

export const siteMetadata: Metadata = {
  metadataBase: siteUrl,
  title: siteMeta.siteTitle,
  description: siteMeta.siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl.origin,
    siteName: profile.name,
    title: siteMeta.ogTitle,
    description: siteMeta.ogDescription,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.ogTitle,
    description: siteMeta.ogDescription,
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
