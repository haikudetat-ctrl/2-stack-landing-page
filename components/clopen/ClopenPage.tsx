"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CTASection } from "@/components/clopen/CTASection";
import { Footer } from "@/components/clopen/Footer";
import { Hero } from "@/components/clopen/Hero";
import HandsWidget from "@/components/clopen/HandsWidget";
import { Navbar } from "@/components/clopen/Navbar";
import { PainPoints } from "@/components/clopen/PainPoints";
import { PricingOptions } from "@/components/clopen/PricingOptions";
import { ShiftAtRestaurant } from "@/components/clopen/ShiftAtRestaurant";
import { SystemsOverview } from "@/components/clopen/SystemsOverview";
import { trackBookingCta } from "@/lib/analytics";

const clopenBookingUrl = "https://calendly.com/2-stack-founders/clopen_walkthrough";

export function ClopenPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const onOpenBooking = () => {
      trackBookingCta("restaurants", "clopen_booking_event");
      setIsBookingOpen(true);
    };
    window.addEventListener("openClopenBooking", onOpenBooking as EventListener);
    return () => window.removeEventListener("openClopenBooking", onOpenBooking as EventListener);
  }, []);

  useEffect(() => {
    if (!isBookingOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsBookingOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isBookingOpen]);

  return (
    <main className="min-h-screen bg-[#f7f6f3] text-[#1f2933]">
      <Navbar />

      <section className="bg-gradient-to-b from-[#ffffff] to-[#f7f6f3]">
        <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-8 md:px-10 md:pt-8 lg:px-12">
          <Hero />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-2 md:px-10 lg:px-12">
          <PainPoints />
        </div>
      </section>

      <section className="bg-[#f1efe9]">
        <div className="mx-auto w-full max-w-7xl px-6 py-2 md:px-10 lg:px-12">
          <SystemsOverview />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-2 md:px-10 lg:px-12">
          <ShiftAtRestaurant />
        </div>
      </section>

      <section className="bg-[#f1efe9]">
        <div className="mx-auto w-full max-w-7xl px-6 py-2 md:px-10 lg:px-12">
          <PricingOptions />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-2 md:px-10 lg:px-12">
          <CTASection />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-2 md:px-10 lg:px-12">
          <Footer />
        </div>
      </section>

      <AnimatePresence>
        {isBookingOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/55 p-4 backdrop-blur-sm"
            onClick={() => setIsBookingOpen(false)}
          >
            <div className="flex min-h-full items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-5xl rounded-2xl border border-[#e5e7eb] bg-white p-4 shadow-2xl md:p-5"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="font-[var(--font-display)] text-lg font-semibold text-[#1f2933]">
                    Book a Clopen Walkthrough
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(false)}
                    className="rounded-md border border-[#d1d5db] px-2.5 py-1 text-xs text-[#4b5563] transition hover:bg-[#f3f4f6]"
                  >
                    Close
                  </button>
                </div>

                <div className="rounded-xl bg-gradient-to-b from-[#ff6633] to-[#cc3300] p-[2px]">
                  <div className="overflow-hidden rounded-[11px] border border-white/70 bg-white">
                    <iframe title="Clopen Walkthrough Booking" src={clopenBookingUrl} className="h-[72vh] w-full" loading="lazy" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <HandsWidget />
    </main>
  );
}
