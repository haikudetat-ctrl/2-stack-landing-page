"use client";

export function Hero() {
  const openBooking = () => {
    window.dispatchEvent(new CustomEvent("openClopenBooking"));
  };

  return (
    <section id="top" className="grid gap-10 pt-14 md:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
      <div>
        <p className="inline-flex rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#c27c2c]">
          Hospitality Systems
        </p>
        <h1 className="mt-5 max-w-[15ch] font-[var(--font-display)] text-4xl font-bold leading-[1.03] tracking-tight text-[#1f2933] md:text-5xl">
          Stop Running Your Restaurant Through Group Texts
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6b7280]">
          Clopen gives restaurant owners, chefs, and GMs the systems they actually need to manage communication,
          scheduling, and financial operations.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#systems-overview"
            className="rounded-lg bg-[#c27c2c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
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

      <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm font-semibold text-[#1f2933]">Operations Snapshot</p>
          <span className="rounded-full border border-[#e5e7eb] bg-[#f1efe9] px-2 py-1 text-xs text-[#6b7280]">
            Live
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-[#e5e7eb] bg-[#f1efe9] p-3">
            <p className="text-xs text-[#6b7280]">Labor %</p>
            <p className="mt-1 text-xl font-semibold text-[#1f2933]">29.2</p>
          </div>
          <div className="rounded-xl border border-[#e5e7eb] bg-[#f1efe9] p-3">
            <p className="text-xs text-[#6b7280]">Open Tasks</p>
            <p className="mt-1 text-xl font-semibold text-[#1f2933]">14</p>
          </div>
          <div className="rounded-xl border border-[#e5e7eb] bg-[#f1efe9] p-3">
            <p className="text-xs text-[#6b7280]">Schedule Gaps</p>
            <p className="mt-1 text-xl font-semibold text-[#1f2933]">3</p>
          </div>
        </div>

        <div className="mt-4 space-y-2 rounded-xl border border-[#e5e7eb] bg-[#f7f6f3] p-4">
          <p className="text-sm text-[#6b7280]">Tonight&apos;s Service Checklist</p>
          <div className="flex items-center justify-between text-sm text-[#6b7280]">
            <span>Lineup Notes Shared</span>
            <span className="text-[#6b8e23]">Done</span>
          </div>
          <div className="flex items-center justify-between text-sm text-[#6b7280]">
            <span>Coverage Alerts</span>
            <span className="text-[#c27c2c]">Pending</span>
          </div>
          <div className="flex items-center justify-between text-sm text-[#6b7280]">
            <span>Recipe Cost Variance</span>
            <span className="text-[#c27c2c]">+2.4%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
