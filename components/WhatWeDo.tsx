"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
    <section id="what-we-do" ref={sectionRef} className="mx-auto w-full max-w-6xl px-6 pb-8 pt-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
        <div className="relative pl-6">
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 top-2 h-[86%] w-px bg-gradient-to-b from-[#5688f0]/70 via-[#5cc2b9]/55 to-transparent"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute left-[-4px] top-2 h-[86%] w-2 rounded-full bg-gradient-to-b from-[#5688f0]/25 via-[#5cc2b9]/20 to-transparent blur-sm"
          />

          <h2
            className={`max-w-none font-[var(--font-display)] text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white md:text-[2.95rem] ${reveal()}`}
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
            We build the operational foundation specifically for your needs to help your business run more smoothly,
            grow faster, and focus on the work that made your business successful in the first place.
          </p>
        </div>

        <div className={`flex h-full flex-col gap-6 ${reveal()}`} style={{ transitionDelay: "180ms" }}>
          <div className="group relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-glow transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="absolute left-[-60px] top-[-90px] h-56 w-56 rounded-full bg-[#5688f0]/25 blur-3xl" />
            <div className="absolute bottom-[-80px] right-[-40px] h-52 w-52 rounded-full bg-[#5cc2b9]/20 blur-3xl" />
            <div className="relative h-full min-h-[180px] overflow-hidden rounded-2xl border border-white/15 bg-[#222837]/70 ring-1 ring-inset ring-white/10 transition-transform duration-500 group-hover:-translate-y-0.5">
              <Image
                src="/thumbnail_test1.png"
                alt="Thumbnail test 1"
                fill
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="group relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-glow transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="absolute right-[-60px] top-[-90px] h-56 w-56 rounded-full bg-[#5bade3]/25 blur-3xl" />
            <div className="absolute bottom-[-80px] left-[-40px] h-52 w-52 rounded-full bg-[#5688f0]/20 blur-3xl" />
            <div className="relative h-full min-h-[180px] overflow-hidden rounded-2xl border border-white/15 bg-[#222837]/70 ring-1 ring-inset ring-white/10 transition-transform duration-500 group-hover:-translate-y-0.5">
              <Image
                src="/thumbnail_test2.png"
                alt="Thumbnail test 2"
                fill
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
