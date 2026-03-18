export function CTASection() {
  return (
    <section className="pt-20">
      <div className="relative overflow-hidden rounded-xl border border-[#e5e7eb] bg-white p-7 shadow-sm md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(194,124,44,0.08),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(107,142,35,0.08),transparent_45%)]" />
        <div className="relative">
          <h2 className="max-w-3xl font-[var(--font-display)] text-2xl font-semibold text-[#1f2933] md:text-3xl">
            Run a Better Restaurant Without More Chaos
          </h2>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#systems-overview"
              className="rounded-lg bg-[#c27c2c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Explore the System
            </a>
            <a
              href="#systems-check"
              className="rounded-lg border border-[#d1d5db] px-6 py-3 text-sm font-medium text-[#4b5563] transition hover:bg-[#f3f4f6]"
            >
              Run the Systems Check
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
