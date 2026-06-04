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
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="relative rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-[#5688f0]/70 via-[#ef742d]/55 to-transparent"
          />

          <h2
            className={`max-w-none font-[var(--font-display)] text-3xl font-semibold leading-[1.04] tracking-[-0.04em] text-white md:text-5xl ${reveal()}`}
            style={{ transitionDelay: "0ms" }}
          >
            For owners that take
            <br />
            pride in their work.
          </h2>
          <p className={`mt-7 max-w-xl text-[1.05rem] leading-8 text-slate-300 ${reveal()}`} style={{ transitionDelay: "120ms" }}>
            You know your industry.
            <br />
            You know your customers.
            <br />
            You know how to deliver real value.
          </p>

          <p className={`mt-7 max-w-xl text-slate-300 ${reveal()}`} style={{ transitionDelay: "220ms" }}>
            Outpacing competitors requires more than hustle,
            <br />
            it requires structural discipline.
          </p>

          <p className={`mt-7 max-w-xl text-slate-300 ${reveal()}`} style={{ transitionDelay: "320ms" }}>
            That&apos;s where 2Stack comes in.
          </p>

          <p className={`mt-7 max-w-xl leading-8 text-slate-300 ${reveal()}`} style={{ transitionDelay: "420ms" }}>
            We build operational foundations that help your business run smoother, grow faster, and stay focused on the
            work that made it successful in the first place.
          </p>
        </div>

        <div className={`flex h-full flex-col gap-6 ${reveal()}`} style={{ transitionDelay: "180ms" }}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">How we build</p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              A closer look at how we make messy businesses easier to run.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="group overflow-hidden rounded-lg border border-white/10 bg-[#101722] shadow-[0_20px_70px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
              <LandingVideoCard playbackId={TOP_VIDEO_PLAYBACK_ID} posterTime={6} title="2Stack operator overview" />
              <div className="border-t border-white/10 p-4">
                <p className="text-sm font-semibold text-white">Start with the structure</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Why owners need the right operating rhythm before more leads, more jobs, or more seats.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg border border-white/10 bg-[#101722] shadow-[0_20px_70px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
              <LandingVideoCard playbackId={SECOND_VIDEO_PLAYBACK_ID} posterTime={7} title="2Stack operating overview" />
              <div className="border-t border-white/10 p-4">
                <p className="text-sm font-semibold text-white">Find the owner bottleneck</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  How we find the missed follow-ups, scattered tools, and daily friction slowing the business down.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
