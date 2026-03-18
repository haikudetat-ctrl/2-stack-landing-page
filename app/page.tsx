import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Why2Stack } from "@/components/Why2Stack";

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen overflow-x-clip text-[#e7ecff]"
      style={{
        background:
          "radial-gradient(circle at 12% 8%, rgba(86, 136, 240, 0.18), transparent 42%), radial-gradient(circle at 90% 5%, rgba(91, 173, 227, 0.14), transparent 30%), radial-gradient(circle at 75% 88%, rgba(92, 194, 185, 0.16), transparent 36%), #222837"
      }}
    >
      <div className="pointer-events-none absolute left-[-220px] top-[280px] h-[340px] w-[340px] animate-float rounded-full bg-[#5688f0]/15 blur-[100px]" />
      <div className="pointer-events-none absolute right-[-180px] top-[100px] h-[300px] w-[300px] animate-float rounded-full bg-[#5cc2b9]/12 blur-[95px]" />

      <Navbar />
      <Hero />
      <WhatWeDo />
      <Why2Stack />
      <Footer />
    </main>
  );
}
