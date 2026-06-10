import { domains } from "@/content/domains";
import { experience } from "@/content/experience";
import { platforms } from "@/content/platforms";
import { profile } from "@/content/profile";

export const homepageContent = {
  hero: {
    headline: profile.positioning,
    primaryAction: "Get In Touch",
    secondaryAction: "Download Resume",
  },
  snapshot: [
    { value: "10+", label: "Years Building Products" },
    { value: "8+", label: "Payment Providers Integrated" },
    { value: "8+", label: "Martech & Analytics Platforms" },
    { value: "3+", label: "Core Product Domains" },
  ],
  domains,
  platforms,
  experience,
  sections: [
    {
      id: "hero",
      label: "Hero",
      description: "Positioning, introduction, and primary actions.",
    },
    {
      id: "career-snapshot",
      label: "Career Snapshot",
      description: "High-signal experience and domain metrics.",
    },
    {
      id: "core-domains",
      label: "Core Domains",
      description: "Payments, Martech, product engineering, and AI workflows.",
    },
    {
      id: "featured-platforms",
      label: "Featured Platforms",
      description: "Selected platforms that demonstrate product impact.",
    },
    {
      id: "experience",
      label: "Experience",
      description: "A concise professional experience timeline.",
    },
    {
      id: "engineering-philosophy",
      label: "Engineering Philosophy",
      description: "How product, technology, and business outcomes connect.",
    },
    {
      id: "contact",
      label: "Contact",
      description: "Clear paths to start a professional conversation.",
    },
  ],
} as const;
