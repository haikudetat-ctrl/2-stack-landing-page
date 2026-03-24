"use client";

export function CTASection() {
  const openBooking = () => {
    window.dispatchEvent(new CustomEvent("openClopenBooking"));
  };

  return (
    <section className="pt-16">
      <div className="relative overflow-hidden rounded-xl border border-[#e5e7eb] bg-white p-7 shadow-sm md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(194,124,44,0.08),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(107,142,35,0.08),transparent_45%)]" />
        <div className="relative">
          <h2 className="max-w-3xl font-[var(--font-display)] text-2xl font-semibold text-[#1f2933] md:text-3xl">
            Service Is Already Hard Enough
          </h2>
          <p className="mt-3 text-sm text-[#6b7280]">Restaurants shouldn&apos;t run on:</p>
          <ul className="mt-3 space-y-1 text-sm text-[#4b5563]">
            <li>• group texts</li>
            <li>• binders</li>
            <li>• spreadsheets</li>
            <li>• memory</li>
          </ul>
          <p className="mt-4 text-sm font-medium text-[#1f2933]">Clopen builds the systems behind the service.</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#systems-overview"
              className="rounded-lg bg-gradient-to-b from-[#ffa339] to-[#c27c2c] px-6 py-3 text-sm font-medium text-white transition hover:from-[#ffb24d] hover:to-[#b8772b] hover:opacity-95"
            >
              See the Clopen System
            </a>
            <button
              type="button"
              onClick={openBooking}
              className="rounded-lg border border-[#d1d5db] px-6 py-3 text-sm font-medium text-[#4b5563] transition hover:bg-[#f3f4f6]"
            >
              Book a Walkthrough
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
