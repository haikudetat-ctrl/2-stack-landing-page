"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { trackVerticalRouteCta } from "@/lib/analytics";

type BusinessLine = {
  key: "loam" | "clopen" | "rake";
  work: string;
  description: string;
  bullets: string[];
  href: string;
  cta: string;
  accent: string;
  logo: {
    src: string;
    alt: string;
    className: string;
    invert?: boolean;
  };
  image: {
    src: string;
    alt: string;
    className?: string;
    position?: string;
  };
};

const businessLines: BusinessLine[] = [
  {
    key: "loam",
    work: "Landscaping crews and jobs",
    description:
      "Keep schedules, crews, customers, invoices, and field work moving without making the owner the whole operating system.",
    bullets: ["Today’s jobs", "Crew routing", "Seasonal follow-up", "Payment workflows"],
    href: "/loam",
    cta: "Open LOAM",
    accent: "#6f9d45",
    logo: {
      src: "/loam-logo-white.svg",
      alt: "LOAM",
      className: "h-11 w-auto"
    },
    image: {
      src: "/loam-vertical-ad.png",
      alt: "LOAM landscaping operations reference"
    }
  },
  {
    key: "clopen",
    work: "Restaurant standards and costs",
    description:
      "Keep the house standard, service rhythm, training, menu knowledge, and cost signals from living in memory and group texts.",
    bullets: ["Service standards", "SOPs and training", "Menu knowledge", "Cost visibility"],
    href: "https://clopen.2-stack.com",
    cta: "Open CLOPEN",
    accent: "#ef742d",
    logo: {
      src: "/clopen-logo-mark.svg",
      alt: "CLOPEN",
      className: "h-11 w-auto max-w-[210px]",
      invert: true
    },
    image: {
      src: "/clopen-vertical-ad.png",
      alt: "CLOPEN restaurant operations reference"
    }
  },
  {
    key: "rake",
    work: "Contractor projects and pipeline",
    description:
      "Give contractors a clearer grip on open jobs, project flow, costs, customer trust, and the follow-up that turns good work into more work.",
    bullets: ["Project pipeline", "Job costing", "Customer trust", "Weekly numbers"],
    href: "https://rake.2-stack.com",
    cta: "Open RAKE",
    accent: "#1f67b1",
    logo: {
      src: "/rake-logo-mark.svg",
      alt: "RAKE",
      className: "h-10 w-auto max-w-[190px]",
      invert: true
    },
    image: {
      src: "/rake-vertical-ad.png",
      alt: "RAKE contractor operations reference"
    }
  }
];

export function VerticalCards() {
  return (
    <section id="business-lines" className="mx-auto w-full max-w-7xl px-4 pb-12 pt-4 sm:px-6 lg:pb-20">
      <div className="mb-6 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Where the work happens</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            Pick the system built for your line of work.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-300 md:text-right">
          Different trades break in different places. Each 2Stack system starts with the pressure owners actually feel.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {businessLines.map((line) => (
          <article
            key={line.key}
            className="group overflow-hidden rounded-lg border border-white/10 bg-[#101722] shadow-[0_20px_70px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-white/20"
            style={{ "--line-accent": line.accent } as CSSProperties}
          >
            <a
              href={line.href}
              onClick={() => trackVerticalRouteCta(line.key, "main_router_card_cta")}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--line-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101722]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <Image
                  src={line.image.src}
                  alt={line.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className={`object-cover transition duration-500 ${
                    line.image.className ?? "group-hover:scale-[1.03]"
                  }`}
                  style={{ objectPosition: line.image.position ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101722] via-[#101722]/24 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex rounded-full border border-white/16 bg-black/36 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/88 backdrop-blur">
                    {line.work}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-h-14">
                    <Image
                      src={line.logo.src}
                      alt={line.logo.alt}
                      width={480}
                      height={160}
                      className={`${line.logo.className} object-contain object-left ${line.logo.invert ? "brightness-0 invert" : ""}`}
                    />
                    <span className="mt-3 block h-1 w-12 rounded-full bg-[var(--line-accent)]" />
                  </div>
                  <span className="mt-1 rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                    2Stack
                  </span>
                </div>

                <p className="mt-5 min-h-[96px] text-sm leading-6 text-slate-300">{line.description}</p>

                <ul className="mt-5 grid grid-cols-2 gap-2 text-xs font-medium text-slate-200">
                  {line.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-md border border-white/8 bg-white/[0.035] px-3 py-2">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="rounded-md bg-[var(--line-accent)] px-4 py-2 text-white shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
                    {line.cta}
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                    -&gt;
                  </span>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
