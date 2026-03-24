"use client";

export function Hero() {
  const openBooking = () => {
    window.dispatchEvent(new CustomEvent("openClopenBooking"));
  };

  return (
    <section id="top" className="grid gap-10 pt-7 md:pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
      <div>
        <p className="inline-flex rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#c27c2c]">
          Hospitality Systems
        </p>
        <h1 className="mt-5 max-w-[15ch] font-[var(--font-display)] text-4xl font-bold leading-[1.03] tracking-tight text-[#1f2933] md:text-5xl">
          Stop Running Your Restaurant Through Group Texts
        </h1>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-[#6b7280]">
          Clopen gives restaurant owners, chefs, and GMs the systems they actually need to manage communication,
          scheduling, and financial operations.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#systems-overview"
            className="rounded-lg bg-gradient-to-b from-[#ffa339] to-[#c27c2c] px-6 py-3 text-sm font-medium text-white transition hover:from-[#ffb24d] hover:to-[#b8772b] hover:opacity-95"
          >
            See How Clopen Works
          </a>
          <button
            type="button"
            onClick={openBooking}
            className="rounded-lg border border-[#d1d5db] px-6 py-3 text-sm font-medium text-[#4b5563] transition hover:bg-[#f3f4f6]"
          >
            Book Clopen Walkthrough
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_70%_20%,rgba(194,124,44,0.16),transparent_56%)] blur-2xl" />

        <div className="rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-[0_18px_50px_rgba(31,41,51,0.10)] md:p-6">
          <div className="mb-4 rounded-xl border border-[#e5e7eb] bg-[#f7f6f3] p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#e87f38]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e2ba3d]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#6b8e23]/70" />
                <p className="ml-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b7280]">Clopen Ops</p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#dbe2ea] bg-white px-2.5 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#6b8e23]" />
                <span className="text-[11px] font-medium text-[#6b7280]">Live Sync</span>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-md border border-[#d7dce3] bg-white px-2.5 py-1 text-[11px] font-medium text-[#1f2933]">
                Service
              </span>
              <span className="rounded-md border border-[#d7dce3] bg-white px-2.5 py-1 text-[11px] font-medium text-[#6b7280]">
                Scheduling
              </span>
              <span className="rounded-md border border-[#d7dce3] bg-white px-2.5 py-1 text-[11px] font-medium text-[#6b7280]">
                Costing
              </span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-[#e5e7eb] bg-[#f1efe9] p-3">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[#6b7280]">Labor %</p>
              <p className="mt-1 text-xl font-semibold text-[#1f2933]">29.2</p>
              <p className="mt-1 text-xs text-[#6b8e23]">Within target</p>
            </div>
            <div className="rounded-xl border border-[#e5e7eb] bg-[#f1efe9] p-3">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[#6b7280]">Open Tasks</p>
              <p className="mt-1 text-xl font-semibold text-[#1f2933]">14</p>
              <p className="mt-1 text-xs text-[#c27c2c]">4 due in next hour</p>
            </div>
            <div className="rounded-xl border border-[#e5e7eb] bg-[#f1efe9] p-3">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[#6b7280]">Schedule Gaps</p>
              <p className="mt-1 text-xl font-semibold text-[#1f2933]">3</p>
              <p className="mt-1 text-xs text-[#c27c2c]">Coverage in progress</p>
            </div>
            <div className="rounded-xl border border-[#e5e7eb] bg-[#f1efe9] p-3">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[#6b7280]">Food Cost Drift</p>
              <p className="mt-1 text-xl font-semibold text-[#1f2933]">+2.4%</p>
              <p className="mt-1 text-xs text-[#c27c2c]">Variance alert</p>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-[#e5e7eb] bg-[#f7f6f3] p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-[#1f2933]">Tonight&apos;s Service Run</p>
              <span className="text-xs font-medium text-[#6b7280]">76% complete</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#e2e8f0]">
              <div className="h-full w-[76%] rounded-full bg-gradient-to-b from-[#ffa339] to-[#c27c2c]" />
            </div>
            <div className="mt-3 space-y-2 text-sm text-[#4b5563]">
              <div className="flex items-center justify-between rounded-md border border-[#e5e7eb] bg-white px-2.5 py-1.5">
                <span>Lineup notes posted</span>
                <span className="text-[#6b8e23]">Done</span>
              </div>
              <div className="flex items-center justify-between rounded-md border border-[#e5e7eb] bg-white px-2.5 py-1.5">
                <span>Call-out coverage</span>
                <span className="text-[#c27c2c]">2 pending</span>
              </div>
              <div className="flex items-center justify-between rounded-md border border-[#e5e7eb] bg-white px-2.5 py-1.5">
                <span>Recipe update sync</span>
                <span className="text-[#6b8e23]">Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
