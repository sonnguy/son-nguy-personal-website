import type { ReactNode } from "react";

import { siteMetadata } from "@/lib/site-metadata";

import "./globals.css";

export const metadata = siteMetadata;

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
