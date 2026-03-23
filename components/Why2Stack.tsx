import Image from "next/image";

export function Why2Stack() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 pb-24 pt-6 text-center">
      <div className="rounded-3xl border border-white/10 bg-white/[0.035] px-8 pb-5 pt-14 shadow-glow backdrop-blur-[8px]">
        <h2 className="font-[var(--font-display)] text-3xl font-semibold text-white md:text-4xl">Built by Operators</h2>
        <div className="mx-auto mt-4 max-w-3xl space-y-5 text-slate-300">
          <p>2Stack was built by people who&apos;ve actually run businesses.</p>
          <p>
            We know what it&apos;s like when good companies get buried under messy systems,
            <br />
            missed follow-ups, and tools that don&apos;t work together.
          </p>
          <p>
            We know owners don&apos;t need another marketing pitch.
            <br />
            They need someone who understands how a business actually runs.
          </p>
          <p>
            Our goal is simple: <span className="font-semibold text-white">Do good work for good people.</span>
          </p>
          <p>
            We ensure owners have the systems, automation, and customer experiences
            <br />
            that make their businesses easier to run and stronger for the long term.
          </p>
        </div>
        <div className="mt-5 flex justify-center">
          <Image
            src="/2S_TransWHITE.png"
            alt=""
            aria-hidden="true"
            width={1500}
            height={1500}
            className="h-14 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
