import { SiteHeader } from "@/components/layout/site-header";
import { ContactSection } from "@/components/sections/contact-section";
import { CoreDomainsSection } from "@/components/sections/core-domains-section";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FeaturedPlatformsSection } from "@/components/sections/featured-platforms-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata = siteMetadata;

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main
        className="mx-auto w-full max-w-6xl px-6 sm:px-10"
        id="main-content"
        tabIndex={-1}
      >
        <HeroSection />
        <CredibilityStrip />
        <CoreDomainsSection />
        <FeaturedPlatformsSection />
        <ExperienceSection />
        <PhilosophySection />
        <ContactSection />
      </main>
    </>
  );
}
