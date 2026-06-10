import { profile } from "@/content";

export function CareerSnapshotSection() {
  return (
    <section
      className="rounded-2xl bg-slate-950 px-6 py-8 text-white sm:px-8 sm:py-10"
      aria-labelledby="career-snapshot-heading"
    >
      <div className="flex flex-col gap-3 border-b border-white/15 pb-7 sm:flex-row sm:items-end sm:justify-between">
        <h2
          className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl"
          id="career-snapshot-heading"
        >
          {profile.homepage.snapshot.title}
        </h2>
        <p className="max-w-xl text-sm leading-6 text-slate-300 sm:text-right">
          {profile.homepage.snapshot.description}
        </p>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {profile.highlights.metrics.map((metric) => (
          <div
            className="border-l border-blue-400 pl-5 lg:border-l-white/15 lg:first:border-l-blue-400"
            key={metric.label}
          >
            <p className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              {metric.value}
            </p>
            <p className="mt-3 text-sm font-medium leading-6 text-slate-300">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
