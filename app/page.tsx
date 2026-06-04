import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { VerticalCards } from "@/components/VerticalCards";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Why2Stack } from "@/components/Why2Stack";

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen overflow-x-clip text-[#e7ecff]"
      style={{
        background:
          "linear-gradient(135deg, rgba(24, 34, 48, 0.98) 0%, rgba(13, 19, 29, 1) 48%, rgba(23, 30, 41, 1) 100%)"
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <Navbar />
      <Hero />
      <VerticalCards />
      <WhatWeDo />
      <Why2Stack />
      <Footer />
    </main>
  );
}
