import { homepageContent } from "@/content/homepage";

export function CareerSnapshotSection() {
  return (
    <section
      className="border-y border-[var(--border)] py-10 sm:py-12"
      aria-label="Career snapshot"
    >
      <div className="grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
        {homepageContent.snapshot.map((metric) => (
          <div className="bg-white p-6 sm:p-7" key={metric.label}>
            <p className="text-3xl font-semibold tracking-tight text-slate-950">
              {metric.value}
            </p>
            <p className="mt-2 text-sm font-medium leading-6 text-[var(--muted)]">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
