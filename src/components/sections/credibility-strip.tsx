import { profile } from "@/content";

export function CredibilityStrip() {
  return (
    <section
      className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-7 sm:px-8"
      aria-labelledby="credibility-heading"
    >
      <div className="flex flex-col gap-2 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <h2
          className="text-xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-2xl"
          id="credibility-heading"
        >
          {profile.homepage.credibility.title}
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-slate-600 lg:text-right">
          {profile.homepage.credibility.description}
        </p>
      </div>

      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
        {profile.homepage.credibility.items.map((item) => (
          <li
            className="border-l-2 border-blue-500 pl-4 lg:border-l lg:border-slate-200 lg:px-5 lg:first:border-l-2 lg:first:border-blue-500 lg:first:pl-4"
            key={item.label}
          >
            <p className="font-semibold text-slate-950">
              {item.label}
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
