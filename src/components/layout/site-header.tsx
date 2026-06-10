import { profile } from "@/content/profile";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#platforms", label: "Platforms" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

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

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-3 text-xs font-medium text-slate-600 sm:gap-7 sm:text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="rounded-sm transition-colors hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
