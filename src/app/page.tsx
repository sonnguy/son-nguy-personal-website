import { SiteHeader } from "@/components/layout/site-header";
import { CareerSnapshotSection } from "@/components/sections/career-snapshot-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CoreDomainsSection } from "@/components/sections/core-domains-section";
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
      <main className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <HeroSection />
        <CareerSnapshotSection />
        <CoreDomainsSection />
        <FeaturedPlatformsSection />
        <ExperienceSection />
        <PhilosophySection />
        <ContactSection />
      </main>
    </>
  );
}
