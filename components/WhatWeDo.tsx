"use client";

import { LandingVideoCard } from "@/components/LandingVideoCard";
import { useEffect, useRef, useState } from "react";

const TOP_VIDEO_PLAYBACK_ID = "Y5yU8Kgc5WjNX6E4lKkQMfr7Zqh2Ytgp3IXuR3qGIoM";
const SECOND_VIDEO_PLAYBACK_ID = "jkDpjbpRJySiwb4zgZ00slhTbtfsdPmfirX202dmvCgcw";

export function WhatWeDo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const reveal = () =>
    [
      "transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
    ].join(" ");

  return (
    <section id="how-we-build" ref={sectionRef} className="mx-auto w-full max-w-7xl px-4 pb-12 pt-4 sm:px-6 lg:pb-20">
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.22)] sm:p-8">
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-[#5688f0]/70 via-[#ef742d]/55 to-transparent"
        />

        <h2
          className={`whitespace-nowrap font-[var(--font-display)] text-[clamp(0.95rem,5.05vw,3rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-white ${reveal()}`}
          style={{ transitionDelay: "0ms" }}
        >
          For owners that take pride in their work.
        </h2>

        <div className={`mt-8 grid gap-4 md:grid-cols-2 ${reveal()}`} style={{ transitionDelay: "140ms" }}>
          <div className="group overflow-hidden rounded-lg border border-white/10 bg-[#101722] shadow-[0_20px_70px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
            <LandingVideoCard playbackId={TOP_VIDEO_PLAYBACK_ID} posterTime={6} title="2Stack operator overview" />
          </div>

          <div className="group overflow-hidden rounded-lg border border-white/10 bg-[#101722] shadow-[0_20px_70px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
            <LandingVideoCard playbackId={SECOND_VIDEO_PLAYBACK_ID} posterTime={7} title="2Stack operating overview" />
          </div>
        </div>

        <p className={`mt-8 max-w-4xl text-lg font-semibold leading-8 text-white ${reveal()}`} style={{ transitionDelay: "260ms" }}>
          We build operational foundations that help your business run smoother, grow faster, and stay focused on the
          work that made it successful in the first place.
        </p>
      </div>
    </section>
  );
}
