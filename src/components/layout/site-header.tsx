import { profile, siteMeta } from "@/content";

import { ActiveNavigation } from "./active-navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-end px-6 sm:justify-between sm:gap-6 sm:px-10">
        <a
          className="hidden text-sm font-bold tracking-tight text-slate-950 transition-colors hover:text-[var(--accent)] sm:block"
          href="#about"
          aria-label={`${profile.name}, back to top`}
        >
          {profile.name}
        </a>

        <ActiveNavigation items={siteMeta.navigation} />
      </div>
    </header>
  );
}
