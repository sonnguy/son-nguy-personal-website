import { domains } from "@/content/domains";
import { experience } from "@/content/experience";
import { platforms } from "@/content/platforms";
import { profile } from "@/content/profile";

export const homepageContent = {
  hero: {
    headline: profile.positioning,
    subheadline:
      "Building customer-facing products across fintech, AI SaaS, hospitality, and membership businesses with 10+ years of experience in frontend engineering, payment systems, analytics, and product delivery.",
    supportingCopy:
      "From payment gateways and loyalty programs to analytics foundations and marketing technology integrations, I help teams build products that improve customer experiences and support business growth.",
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
  experienceTitle: "10+ Years Building Customer-Facing Products",
  philosophy: {
    title: "Building Products Where Technology Meets Business",
    paragraphs: [
      "The most valuable engineering work rarely exists in isolation.",
      "It often sits at the intersection of customer needs, business objectives, product strategy, payments, analytics, and operational constraints.",
      "I enjoy working across disciplines to help teams transform complex requirements into reliable customer-facing experiences that create measurable value for both users and businesses.",
    ],
  },
  contact: {
    title: "Let's Build Better Product Experiences",
    copy: "I'm always interested in conversations about product engineering, payment systems, Martech, customer experience platforms, and AI-assisted development workflows.",
    primaryAction: "Get In Touch",
  },
} as const;
