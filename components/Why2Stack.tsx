import Image from "next/image";

export function Why2Stack() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-2 sm:px-6">
      <div className="grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] shadow-[0_24px_90px_rgba(0,0,0,0.26)] backdrop-blur-[8px] lg:grid-cols-[0.8fr_1.2fr]">
        <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Built by Operators</p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.05em] text-white md:text-6xl">
            Built by people who know the weight of the work.
          </h2>
          <div className="mt-8">
            <Image
              src="/navbar_logo.png"
              alt=""
              aria-hidden="true"
              width={1500}
              height={509}
              className="h-10 w-auto opacity-80"
            />
          </div>
        </div>

        <div className="space-y-5 p-6 text-slate-300 sm:p-8">
          <p className="text-lg leading-8 text-white">2Stack was built by people who&apos;ve actually run businesses.</p>
          <p>
            We know what it&apos;s like when good companies get buried under messy systems,
            missed follow-ups, and tools that don&apos;t work together.
          </p>
          <p>
            We know owners don&apos;t need another marketing pitch.
            They need someone who understands how a business actually runs.
          </p>
          <p>
            Our goal is simple: <span className="font-semibold text-white">Do good work for good people.</span>
          </p>
          <p>
            We ensure owners have the systems, automation, and customer experiences
            that make their businesses easier to run and stronger for the long term.
          </p>
        </div>
      </div>
    </section>
  );
}
