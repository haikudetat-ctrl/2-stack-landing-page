"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Vertical = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  cta: string;
  href: string;
  accentClasses: string;
  activeClasses: string;
  bulletColor: string;
  bulletIndentClass?: string;
  titleColor?: string;
  subtitleColor?: string;
  bulletTextColor?: string;
  buttonHoverClasses?: string;
  buttonActiveClasses?: string;
};

const verticals: Vertical[] = [
  {
    id: "home-services-card",
    title: "Home Services",
    subtitle: "Roofing, HVAC, Plumbing, and Service Teams",
    description: "Capture leads faster, tighten follow-up,\nand turn chaos into repeatable growth.",
    bullets: ["Lead response systems", "Pipeline management", "Sales follow-up automation", "Review generation"],
    cta: "Enter Home Services",
    href: "/home-services",
    accentClasses:
      "border-[#caffc0]/80 ring-1 ring-[#caffc0]/35 hover:border-[#caffc0]/90 hover:shadow-[0_10px_11px_rgba(122,255,96,0.24)]",
    activeClasses: "border-[#caffc0]/70 shadow-[0_10px_11px_rgba(122,255,96,0.24)]",
    bulletColor: "bg-[#caffc0]",
    bulletIndentClass: "ml-24",
    titleColor: "text-[#caffc0]",
    subtitleColor: "text-[#44c5ff]",
    buttonActiveClasses: "bg-[#caffc0] text-[#13240f] border-[#caffc0] shadow-[0_10px_20px_rgba(122,255,96,0.28)]"
  },
  {
    id: "medical-aftercare-card",
    title: "Medical Aftercare",
    subtitle: "Clinics, Surgical Practices, and Care Providers",
    description: "Post-procedure systems that improve outcomes\nand increase operational visibility.",
    bullets: [
      "Post-procedure care management",
      "Patient monitoring workflows",
      "Communication automation",
      "Care coordination dashboards"
    ],
    cta: "Enter Medical Systems",
    href: "/medical-aftercare",
    accentClasses: "border-[#ff66aa]/55 hover:border-[#ff66aa]/70 hover:shadow-[0_10px_11px_rgba(255,102,170,0.24)]",
    activeClasses: "border-[#ff66aa]/70 shadow-[0_10px_11px_rgba(255,102,170,0.24)]",
    bulletColor: "bg-[#ff66aa]",
    titleColor: "text-[#ff66aa]",
    subtitleColor: "text-[#44c5ff]",
    bulletTextColor: "text-white",
    buttonHoverClasses: "hover:border-[#44c5ff]/70 hover:bg-[#44c5ff]/12",
    buttonActiveClasses: "bg-[#ff66aa] text-white border-[#ff66aa] shadow-[0_10px_20px_rgba(255,102,170,0.28)]"
  },
  {
    id: "restaurants-card",
    title: "Restaurants",
    subtitle: "Restaurants, Hospitality Groups, and Operators",
    description: "Operational systems that improve training\nconsistency, and guest experience.",
    bullets: ["Staff training systems", "Service SOP platforms", "Menu knowledge tools", "Operational dashboards"],
    cta: "Enter Restaurant Systems",
    href: "/clopen",
    accentClasses: "border-[#ffc05d]/55 hover:border-[#ffc05d]/70 hover:shadow-[0_10px_11px_rgba(255,192,93,0.24)]",
    activeClasses: "border-[#ffc05d]/70 shadow-[0_10px_11px_rgba(255,192,93,0.24)]",
    bulletColor: "bg-[#D94B3D]",
    titleColor: "text-[#D94B3D]",
    subtitleColor: "text-[#ffc05d]",
    buttonActiveClasses: "bg-[#ffc05d] text-[#3d2a08] border-[#ffc05d] shadow-[0_10px_20px_rgba(255,192,93,0.28)]"
  }
];

type VerticalCardsCarouselProps = {
  compact?: boolean;
};

const SWIPE_THRESHOLD_PX = 54;
const AUTO_ADVANCE_MS = 5200;
const DRAG_DRIFT_FACTOR = 0.5;

function normalizeRelative(index: number, activeIndex: number, total: number) {
  let diff = index - activeIndex;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

type IndustryCardProps = {
  vertical: Vertical;
  compact?: boolean;
  style: React.CSSProperties;
  isActive: boolean;
  isDragging: boolean;
  cardRef?: (node: HTMLElement | null) => void;
};

function MobileIndustryCard({ vertical, compact = false }: { vertical: Vertical; compact?: boolean }) {
  return (
    <article
      id={`${vertical.id}-mobile`}
      className={`snap-center shrink-0 w-[min(86vw,360px)] flex flex-col rounded-3xl border border-white/10 bg-white/[0.035] ${compact ? "p-5" : "p-6"} shadow-[0_10px_30px_rgba(0,0,0,0.25)] ${vertical.accentClasses}`}
    >
      <h3 className="w-full text-center font-[var(--font-display)] text-2xl font-semibold leading-none">
        <Link
          href={vertical.href}
          className={`inline-grid grid-cols-[auto,1fr,auto] items-center gap-2 whitespace-nowrap transition-opacity hover:opacity-90 ${vertical.titleColor ?? "text-white"}`}
        >
          <Image
            src="/2S_TransWHITE.png"
            alt=""
            aria-hidden="true"
            width={1500}
            height={1500}
            className="block h-[0.75em] w-auto opacity-20"
          />
          <span className="leading-none">{vertical.title}</span>
          <Image
            src="/2S_TransWHITE.png"
            alt=""
            aria-hidden="true"
            width={1500}
            height={1500}
            className="block h-[0.75em] w-auto translate-y-[1px] opacity-20"
          />
        </Link>
      </h3>
      <p className={`mt-2 text-sm font-semibold italic ${vertical.subtitleColor ?? "text-slate-400"}`}>{vertical.subtitle}</p>
      <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-slate-300">{vertical.description}</p>

      <ul
        className={`mt-3 ${vertical.bulletIndentClass ?? "ml-20"} space-y-1.5 text-sm ${vertical.bulletTextColor ?? "text-slate-200"}`}
      >
        {vertical.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${vertical.bulletColor}`} />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link
          href={vertical.href}
          className={`group/cta inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 border-white/15 text-white ${vertical.buttonHoverClasses ?? "hover:border-white/30 hover:bg-white/10"}`}
        >
          <span>{vertical.cta}</span>
          <span className="ml-1 inline-block transition-transform duration-300 group-hover/cta:translate-x-1">&#8594;</span>
        </Link>
      </div>
    </article>
  );
}

function IndustryCard({ vertical, compact = false, style, isActive, isDragging, cardRef }: IndustryCardProps) {
  return (
    <article
      ref={cardRef}
      id={vertical.id}
      style={style}
      className={`absolute left-1/2 top-1/2 flex w-[min(86vw,360px)] -translate-x-1/2 -translate-y-1/2 flex-col rounded-3xl border border-white/10 ${isActive ? "bg-[#222837]" : "bg-white/[0.035]"} ${compact ? "p-5" : "p-6"} shadow-[0_10px_30px_rgba(0,0,0,0.25)] will-change-transform ${isDragging ? "transition-none" : "transition-[transform,opacity,filter,box-shadow,border-color,background-color] duration-500 ease-out"} ${vertical.accentClasses} ${isActive ? `pointer-events-auto ${vertical.activeClasses}` : "pointer-events-none md:pointer-events-auto"} md:w-[min(66vw,390px)] lg:w-[min(42vw,410px)]`}
    >
      <h3 className="w-full text-center font-[var(--font-display)] text-2xl font-semibold leading-none">
        <Link
          href={vertical.href}
          className={`inline-grid grid-cols-[auto,1fr,auto] items-center gap-2 whitespace-nowrap transition-opacity hover:opacity-90 ${vertical.titleColor ?? "text-white"}`}
        >
          <Image
            src="/2S_TransWHITE.png"
            alt=""
            aria-hidden="true"
            width={1500}
            height={1500}
            className="block h-[0.75em] w-auto opacity-20"
          />
          <span className="leading-none">{vertical.title}</span>
          <Image
            src="/2S_TransWHITE.png"
            alt=""
            aria-hidden="true"
            width={1500}
            height={1500}
            className="block h-[0.75em] w-auto translate-y-[1px] opacity-20"
          />
        </Link>
      </h3>
      <p className={`mt-2 text-sm font-semibold italic ${vertical.subtitleColor ?? "text-slate-400"}`}>
        {vertical.subtitle}
      </p>
      <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-slate-300">{vertical.description}</p>

      <ul
        className={`mt-3 ${vertical.bulletIndentClass ?? "ml-20"} space-y-1.5 text-sm ${vertical.bulletTextColor ?? "text-slate-200"}`}
      >
        {vertical.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${vertical.bulletColor}`} />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link
          href={vertical.href}
          className={`group/cta inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
            isActive
              ? `scale-[1.05] -translate-y-0.5 ${vertical.buttonActiveClasses ?? "bg-white text-[#222837] border-white shadow-[0_10px_20px_rgba(255,255,255,0.18)]"}`
              : "border-white/15 text-white"
          } ${vertical.buttonHoverClasses ?? "hover:border-white/30 hover:bg-white/10"}`}
        >
          <span>{vertical.cta}</span>
          <span className="ml-1 inline-block transition-transform duration-300 group-hover/cta:translate-x-1">&#8594;</span>
        </Link>
      </div>
    </article>
  );
}

export function VerticalCardsCarousel({ compact = false }: VerticalCardsCarouselProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const startXRef = useRef(0);
  const pauseUntilRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffsetX, setDragOffsetX] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1);
  const [activeCardHeight, setActiveCardHeight] = useState<number | null>(null);
  const total = verticals.length;

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      if (isDragging) return;
      if (Date.now() < pauseUntilRef.current) return;
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [isDragging, total]);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const updateWidth = () => {
      setViewportWidth(node.offsetWidth || 1);
    };

    updateWidth();
    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(node);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const node = cardRefs.current[activeIndex];
    if (!node) return;

    const updateHeight = () => {
      setActiveCardHeight(node.offsetHeight);
    };

    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(node);

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeIndex, viewportWidth]);

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (event) => {
    const target = event.target as HTMLElement;
    if (target.closest("a,button")) return;

    if (!viewportRef.current) return;
    startXRef.current = event.clientX;
    setIsDragging(true);
    setDragOffsetX(0);
    pauseUntilRef.current = Date.now() + 1800;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (event) => {
    if (!isDragging) return;
    setDragOffsetX(event.clientX - startXRef.current);
  };

  const finishDrag = (deltaX: number) => {
    if (deltaX <= -SWIPE_THRESHOLD_PX) goNext();
    if (deltaX >= SWIPE_THRESHOLD_PX) goPrev();
    setIsDragging(false);
    setDragOffsetX(0);
  };

  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (event) => {
    if (!isDragging) return;
    finishDrag(event.clientX - startXRef.current);
  };

  const onPointerCancel: React.PointerEventHandler<HTMLDivElement> = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setDragOffsetX(0);
  };

  const dragPct = (dragOffsetX / viewportWidth) * 100 * DRAG_DRIFT_FACTOR;

  return (
    <div id="vertical-cards" className="relative w-full overflow-hidden rounded-[32px]">
      <div className="md:hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-5 bg-gradient-to-r from-[#222837] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-5 bg-gradient-to-l from-[#222837] to-transparent" />
        <div className="-mx-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-3 pb-3 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {verticals.map((vertical) => (
            <MobileIndustryCard key={vertical.id} vertical={vertical} compact={compact} />
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-8 bg-gradient-to-r from-[#222837] to-transparent md:w-12" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-8 bg-gradient-to-l from-[#222837] to-transparent md:w-12" />

        <div className="absolute right-3 top-3 z-40 flex items-center gap-2 md:right-4 md:top-4">
          <button
            type="button"
            onClick={() => {
              pauseUntilRef.current = Date.now() + 1800;
              goPrev();
            }}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-[#222837]/80 text-sm text-slate-200 transition-colors hover:border-white/40 hover:bg-white/10"
            aria-label="Previous card"
          >
            &#8592;
          </button>
          <button
            type="button"
            onClick={() => {
              pauseUntilRef.current = Date.now() + 1800;
              goNext();
            }}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-[#222837]/80 text-sm text-slate-200 transition-colors hover:border-white/40 hover:bg-white/10"
            aria-label="Next card"
          >
            &#8594;
          </button>
        </div>

        <div
          ref={viewportRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          style={{ height: activeCardHeight ? activeCardHeight + 48 : undefined }}
          className={`relative min-h-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] ${isDragging ? "cursor-grabbing" : "cursor-grab"} touch-pan-x select-none`}
          aria-label="Industry carousel"
        >
          {verticals.map((vertical, index) => {
            const relative = normalizeRelative(index, activeIndex, total);
            const isActive = relative === 0;
            const translateX = relative * 68 + dragPct;
            const scale = isActive ? 1 : 0.84;
            const opacity = isActive ? 1 : 0.58;
            const blurPx = isActive ? 0 : 0.5;
            const zIndex = isActive ? 40 : 30 - Math.abs(relative);

            return (
              <IndustryCard
                key={vertical.id}
                vertical={vertical}
                compact={compact}
                isActive={isActive}
                isDragging={isDragging}
                cardRef={(node) => {
                  cardRefs.current[index] = node;
                }}
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}%) scale(${scale})`,
                  opacity,
                  filter: `blur(${blurPx}px)`,
                  zIndex
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function VerticalCards() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <VerticalCardsCarousel />
    </section>
  );
}
