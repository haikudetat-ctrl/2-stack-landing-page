"use client";

import {
  CalendarDays,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  Gauge,
  Map,
  MessageSquareReply,
  Route,
  SearchCheck,
  Sparkles,
  Star,
  Utensils,
  type LucideIcon
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { trackVerticalRouteCta } from "@/lib/analytics";
import { verticalSites } from "@/lib/seo";

type FeatureItem = {
  label: string;
  icon: LucideIcon;
};

type BusinessLine = {
  key: "loam" | "clopen" | "rake";
  work: string;
  description: string;
  bullets: FeatureItem[];
  href: string;
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
    bullets: [
      { label: "Today’s jobs", icon: CalendarDays },
      { label: "Crew routing", icon: Route },
      { label: "Seasonal follow-up", icon: Sparkles },
      { label: "Payment workflows", icon: CreditCard }
    ],
    href: verticalSites.loam.url,
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
    bullets: [
      { label: "Service standards", icon: ClipboardCheck },
      { label: "SOPs and training", icon: ClipboardList },
      { label: "Menu knowledge", icon: Utensils },
      { label: "Cost visibility", icon: Gauge }
    ],
    href: verticalSites.clopen.url,
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
    work: "Contractor and home-service pipeline",
    description:
      "Give contractors and home-service operators a clearer grip on leads, missed calls, follow-up, open jobs, reviews, referrals, and margin.",
    bullets: [
      { label: "Lead response", icon: MessageSquareReply },
      { label: "Project pipeline", icon: Map },
      { label: "Review follow-up", icon: Star },
      { label: "Weekly numbers", icon: SearchCheck }
    ],
    href: verticalSites.rake.url,
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
      <div className="mb-12 border-t border-white/10 pt-6">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Where the work happens</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-white md:whitespace-nowrap md:text-[clamp(2rem,3.15vw,3rem)]">
            Pick the system built for your line of work.
          </h2>
          <p className="mt-6 max-w-xl text-left text-sm leading-6 text-slate-300">
            Different trades break in different places. Each 2Stack system starts with the pressure owners actually feel.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {businessLines.map((line) => (
          <VerticalCard key={line.key} line={line} />
        ))}
      </div>
    </section>
  );
}

function VerticalCard({ line }: { line: BusinessLine }) {
  const cardRef = useRef<HTMLElement | null>(null);
  const [isScrollActive, setIsScrollActive] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrollActive(mediaQuery.matches && entry.isIntersecting);
      },
      { threshold: 0.56, rootMargin: "-8% 0px -16% 0px" }
    );

    observer.observe(card);

    const onMediaChange = () => {
      if (!mediaQuery.matches) setIsScrollActive(false);
    };
    mediaQuery.addEventListener("change", onMediaChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", onMediaChange);
    };
  }, []);

  const imageMotionClass = line.image.className ?? (isScrollActive ? "scale-[1.04]" : "scale-[1.01] group-hover:scale-[1.04]");
  const mutedImageClass = isScrollActive ? "opacity-0" : "opacity-100 group-hover:opacity-0";
  const mapOverlayClass = isScrollActive ? "opacity-0" : "group-hover:opacity-0";
  const highlightOverlayClass = isScrollActive ? "opacity-20" : "group-hover:opacity-20";

  return (
    <article
      ref={cardRef}
      className="group overflow-hidden rounded-lg border border-white/10 bg-[#101722] shadow-[0_20px_70px_rgba(0,0,0,0.24)] ring-0 ring-white transition duration-300 hover:-translate-y-1 hover:border-white hover:ring-[1.5px]"
      style={{ "--line-accent": line.accent } as CSSProperties}
    >
      <a
        href={line.href}
        onClick={() => trackVerticalRouteCta(line.key, "main_router_card_cta")}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--line-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101722]"
      >
        <div className="relative isolate aspect-[4/3] overflow-hidden bg-[#101722]">
          <Image
            src={line.image.src}
            alt={line.image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className={`object-cover transform-gpu saturate-[1.12] contrast-[1.06] transition-transform duration-500 will-change-transform ${imageMotionClass}`}
            style={{ objectPosition: line.image.position ?? "center" }}
          />
          <Image
            src={line.image.src}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className={`object-cover transform-gpu grayscale saturate-[0.45] brightness-[0.82] contrast-[0.95] transition-[opacity,transform] duration-500 will-change-[opacity,transform] ${mutedImageClass} ${imageMotionClass}`}
            style={{ objectPosition: line.image.position ?? "center" }}
          />
          <div className={`absolute -inset-[5px] bg-[#101722]/55 transition duration-500 ${mapOverlayClass}`} />
          <div
            className={`absolute -inset-[5px] bg-gradient-to-tr from-[#101722]/72 via-white/[0.10] to-transparent transition duration-500 ${highlightOverlayClass}`}
          />
          <div className="absolute -inset-[5px] bg-gradient-to-t from-[#101722] via-[#101722]/24 to-transparent" />
          <div className="absolute inset-x-[-5px] bottom-[-1px] h-2 bg-[#101722]" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="inline-flex rounded-full border border-white/16 bg-black/36 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/88 backdrop-blur">
              {line.work}
            </div>
          </div>
        </div>

        <div className="relative z-20 -mt-2 bg-[#101722] p-5 pb-6 pt-7 sm:p-6 sm:pb-7 sm:pt-8">
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

          <ul className="mt-1.5 grid grid-cols-4 pb-1 text-center">
            {line.bullets.map((bullet) => {
              const Icon = bullet.icon;

              return (
                <li
                  key={bullet.label}
                  className="min-h-[76px] border-l border-[var(--line-accent)] px-2 py-3 text-sm leading-5 text-slate-300 transition duration-300 first:border-l-0 group-hover:text-white"
                >
                  <Icon
                    aria-hidden="true"
                    className="mx-auto h-5 w-5 text-[var(--line-accent)]"
                    strokeWidth={1.8}
                  />
                  <span className="mt-2 block text-balance">{bullet.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </a>
    </article>
  );
}
