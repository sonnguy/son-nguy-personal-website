import { experience } from "@/content/experience";
import { profile } from "@/content/profile";

export const resumeContent = {
  eyebrow: "Resume foundation",
  title: `${profile.name} Resume`,
  description:
    "The /resume route is working. The full semantic, print-friendly resume will be implemented in a later phase from the shared content source.",
  pdfPath: "/files/Son-Nguy-Senior-Frontend-Engineer-2026.pdf",
  profile,
  experience,
} as const;
