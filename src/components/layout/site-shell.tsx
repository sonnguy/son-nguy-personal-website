import type { ReactNode } from "react";

type SiteShellProps = Readonly<{
  children: ReactNode;
}>;

export function SiteShell({ children }: SiteShellProps) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-6 py-16 sm:px-10 lg:py-24">
      {children}
    </main>
  );
}
