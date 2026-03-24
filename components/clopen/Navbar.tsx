"use client";

export function Navbar() {
  const openBooking = () => {
    window.dispatchEvent(new CustomEvent("openClopenBooking"));
  };

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-[#e5e7eb] bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
        <a href="#top" className="font-[var(--font-display)] text-lg font-semibold tracking-tight text-[#1f2933]">
          Clopen by 2Stack
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-[#374151] md:flex">
          <a href="#systems-overview" className="transition-colors hover:text-[#c27c2c]">
            Systems
          </a>
          <a href="#pricing" className="transition-colors hover:text-[#c27c2c]">
            Pricing
          </a>
          <a href="#systems-check" className="transition-colors hover:text-[#c27c2c]">
            Restaurant Systems Check
          </a>
          <button
            type="button"
            onClick={openBooking}
            className="rounded-lg bg-gradient-to-b from-[#ffa339] to-[#c27c2c] px-4 py-2 font-medium text-white transition hover:from-[#ffb24d] hover:to-[#b8772b] hover:opacity-95"
          >
            Book Clopen Walkthrough
          </button>
        </div>

        <button
          type="button"
          onClick={openBooking}
          className="rounded-lg bg-gradient-to-b from-[#ffa339] to-[#c27c2c] px-4 py-2 text-sm font-medium text-white transition hover:from-[#ffb24d] hover:to-[#b8772b] hover:opacity-95 md:hidden"
        >
          Book Clopen Walkthrough
        </button>
      </nav>
    </header>
  );
}
