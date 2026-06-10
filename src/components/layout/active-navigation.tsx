"use client";

import { useEffect, useState } from "react";

type NavigationItem = {
  href: string;
  label: string;
};

type ActiveNavigationProps = Readonly<{
  items: NavigationItem[];
}>;

const getSectionId = (href: string) => href.replace(/^#/, "");

export function ActiveNavigation({ items }: ActiveNavigationProps) {
  const [activeSection, setActiveSection] = useState(() =>
    getSectionId(items[0]?.href ?? ""),
  );

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(getSectionId(item.href)))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top - second.boundingClientRect.top,
          )[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-64px 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Primary navigation">
      <ul className="flex items-center gap-3 text-xs font-medium text-slate-600 sm:gap-7 sm:text-sm lg:text-[0.9375rem]">
        {items.map((item) => {
          const sectionId = getSectionId(item.href);
          const isActive = activeSection === sectionId;

          return (
            <li key={item.href}>
              <a
                aria-current={isActive ? "location" : undefined}
                className={`relative rounded-sm py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:bg-[var(--accent)] after:transition-transform hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] motion-reduce:transition-none motion-reduce:after:transition-none ${
                  isActive
                    ? "font-semibold text-[var(--accent)] after:scale-x-100"
                    : "after:scale-x-0"
                }`}
                href={item.href}
                onClick={() => setActiveSection(sectionId)}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
