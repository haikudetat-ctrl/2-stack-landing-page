import Image from "next/image";

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 pb-12 pt-10 sm:px-6 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="animate-fade-in">
        <p className="inline-flex rounded-full border border-white/12 bg-white/[0.045] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
          For owners that take pride in their work.
        </p>

        <h1 className="mt-6 max-w-4xl font-[var(--font-display)] text-[2.7rem] font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-[3.375rem] lg:text-[4.05rem]">
          Business solutions built
          <br />
          by real operators.
        </h1>

        <div className="mt-7 max-w-2xl space-y-4 text-base leading-7 text-slate-300 sm:text-lg">
          <p className="space-y-0">
            <span className="block text-slate-500">You know your industry.</span>
            <span className="block text-slate-400">You know your customers.</span>
            <span className="block text-slate-300">You know how to deliver real value.</span>
          </p>
          <p className="text-[1.06em] font-medium text-white">
            Outpacing competitors requires more than hustle.
            <br />
            It requires structural discipline.
            That&apos;s where 2Stack comes in.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#business-lines"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#101722] transition hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101722]"
          >
            Find Your Operating System
          </a>
          <a
            href="#how-we-build"
            className="inline-flex items-center justify-center rounded-md border border-white/14 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/28 hover:bg-white/[0.06]"
          >
            See How 2Stack Works
          </a>
        </div>
      </div>

      <div className="relative animate-fade-in overflow-hidden rounded-lg border border-white/10 bg-[#111a25] shadow-[0_24px_90px_rgba(0,0,0,0.32)] lg:translate-y-12 xl:translate-y-10">
        <Image
          src="/2stack-verticals-ad.png"
          alt="LOAM, CLOPEN, and RAKE operating systems"
          width={2000}
          height={1334}
          priority
          className="aspect-[2000/1334] w-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#101722]/88 via-transparent to-[#101722]/16" />
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#101722]/84 p-4">
          <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
            <span>LOAM</span>
            <span>CLOPEN</span>
            <span>RAKE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
