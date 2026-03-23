"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { LeadResponseScannerWidget } from "@/components/home-services/LeadResponseScannerWidget";

const scenarioCards = [
  {
    moment: "Moment 1",
    time: "08:12 AM",
    title: "Website Lead",
    withoutLines: [
      "A homeowner fills out your website form.",
      "Nobody is in the office until 9:00",
      "By the time you call back...",
      "The job is already booked."
    ],
    withLines: [
      "The lead gets sent instantly.",
      "The office and owner get alerts.",
      "Someone reaches out while the homeowner is still shopping."
    ]
  },
  {
    moment: "Moment 2",
    time: "10:37 AM",
    title: "Missed Call",
    withoutLines: [
      "The phone rings.",
      "The office is busy.",
      "It goes to voicemail.",
      "The callback happens tomorrow.",
      "The job is gone."
    ],
    withLines: [
      "Missed calls trigger an automatic text back.",
      "The customer gets a quick reply.",
      "The lead goes to the next available person."
    ]
  },
  {
    moment: "Moment 3",
    time: "01:24 PM",
    title: "Ad Money Mystery",
    withoutLines: ["Leads come in from ads.", "But you do not know:"],
    withoutBullets: ["which ads work", "which leads turn into jobs", "where your money is going"],
    withLines: ["Every lead gets tracked.", "You can see:"],
    withBullets: ["where it came from", "which ones turn into jobs", "what marketing actually makes money"]
  },
  {
    moment: "Moment 4",
    time: "04:18 PM",
    title: "No Review Request",
    withoutLines: [
      "A tech finishes a great job.",
      "The customer is happy.",
      "But nobody asks for a review.",
      "You lose easy word-of-mouth growth."
    ],
    withLines: [
      "After the job is done...",
      "The system automatically asks for a review.",
      "More reviews = more trust = more jobs."
    ]
  },
  {
    moment: "Moment 5",
    time: "06:02 PM",
    title: "Dispatcher Out",
    withoutLines: [
      "Your dispatcher knows everything.",
      "But when they are out...",
      "Everything slows down.",
      "The office starts guessing."
    ],
    withLines: [
      "Your systems handle the process.",
      "Leads, follow-ups, and dispatch keep moving.",
      "Even if someone is out."
    ]
  }
];

const systems = [
  {
    title: "Lead Speed System",
    body: "New leads get routed instantly. Text, calls, and alerts make sure no lead gets ignored."
  },
  {
    title: "Follow-Up Engine",
    body: "Old leads and missed estimates get followed up automatically. Jobs do not get forgotten."
  },
  {
    title: "Operations Dashboard",
    body: "See how many leads came in, which ones turned into jobs, and where money is leaking."
  },
  {
    title: "Reputation Engine",
    body: "Every finished job triggers review requests. More reviews means more booked work."
  },
  {
    title: "Customer Automation",
    body: "Customers get reminders, updates, and next steps automatically. No more chasing people."
  },
  {
    title: "Pipeline Protection System",
    body: "Leads, calls, estimates, and follow-ups all stay connected so jobs move\nsmoothly from first contact to finished work."
  }
];

const systemsPyramidTiers = [
  [5],
  [0, 1],
  [2, 3, 4]
] as const;

const speedOptions = [
  { label: "< 5 minutes", value: "fast" },
  { label: "15 minutes", value: "strong" },
  { label: "1 hour", value: "risk" },
  { label: "Same day", value: "high-risk" },
  { label: "Next day", value: "critical" }
] as const;

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.36, ease: "easeOut" }
} as const;

const cardClass =
  "rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-[8px] transition-all duration-[250ms] ease-in-out hover:border-[#caffc0]/55 hover:bg-[#222837] hover:shadow-[0_0_18px_rgba(122,255,96,0.25)]";

const homeServicesBookingUrl =
  "https://calendly.com/2-stack-founders/home-services-systems-review-meet-the-founders";

export function HomeServicesLanding() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openScanner = () => {
    window.dispatchEvent(new CustomEvent("openLeadScanner"));
  };

  const openBooking = () => setIsBookingOpen(true);

  useEffect(() => {
    const onOpenBooking = () => setIsBookingOpen(true);
    window.addEventListener("openHomeServicesBooking", onOpenBooking as EventListener);
    return () => window.removeEventListener("openHomeServicesBooking", onOpenBooking as EventListener);
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
    <main className="relative min-h-screen overflow-x-clip bg-[#222837] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(68,197,255,0.16),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(122,255,96,0.12),transparent_32%),radial-gradient(circle_at_50%_96%,rgba(68,197,255,0.10),transparent_38%)]" />

      <section className="sticky top-0 z-40 border-b border-white/10 bg-[#222837]/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.16em] text-[#caffc0]">
            2Stack | Home Services Systems
          </Link>
          <div className="hidden items-center gap-5 text-xs uppercase tracking-[0.12em] text-white/70 md:flex">
            <a href="#familiar" className="transition hover:text-[#caffc0]">
              Familiar Moments
            </a>
            <a href="#systems" className="transition hover:text-[#caffc0]">
              Systems
            </a>
            <a href="#cta" className="transition hover:text-[#caffc0]">
              Run Scanner
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-14">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-start lg:gap-10">
          <motion.div {...fadeIn} className="lg:pr-2">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#44c5ff]">
              Roofing - HVAC - Plumbing - Service Teams
            </p>
            <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-tight text-[#caffc0] md:text-5xl">
              Stop losing jobs because your systems are messy.
            </h1>

            <div className="mt-6">
              <div className="relative overflow-hidden rounded-xl border border-[#caffc0]/30 bg-white/[0.04] px-4 py-4 pl-5 backdrop-blur-[6px]">
                <span className="absolute inset-y-0 left-0 w-1 bg-[#caffc0]" />

                <ul className="space-y-2.5">
                  {["Missed calls.", "Slow lead response.", "Forgotten follow-ups."].map((line) => (
                    <li key={line} className="flex items-center gap-2.5">
                      <span className="h-2 w-2 rounded-full bg-[#caffc0]" />
                      <span className="text-base font-semibold leading-7 text-white md:text-lg">{line}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-3 text-sm leading-7 text-[#bdfbb0]">
                  2Stack fixes the systems behind your service business.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openScanner}
                className="rounded-full border border-[#caffc0]/45 bg-[#caffc0] px-6 py-3 text-sm font-semibold text-[#172114] transition-all duration-300 hover:border-[#44c5ff] hover:bg-[#44c5ff] hover:text-[#102637]"
              >
                Check Your Lead Response
              </button>
              <button
                type="button"
                onClick={openBooking}
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#caffc0]/55 hover:bg-[#caffc0]/10"
              >
                See How It Works
              </button>
            </div>
          </motion.div>

          <motion.aside
            {...fadeIn}
            className="self-start rounded-2xl border border-white/10 bg-[#222837] p-6 backdrop-blur-[8px] md:p-7"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-[#44c5ff]">Speed-to-Lead Meter</p>
            <h2 className="mt-3 font-[var(--font-display)] text-2xl font-semibold text-[#caffc0]">
              How fast are you calling new leads?
            </h2>
            <p className="mt-3 text-sm leading-7 text-white">
              Most homeowners contact 3-5 companies. The first company to respond usually wins the job.
            </p>
            <p className="mt-2 text-sm font-semibold text-[#caffc0]">How fast are you?</p>

            <SpeedToLeadMeter />

          </motion.aside>
        </div>
      </section>

      <Section
        id="familiar"
        title="Where Most Service Companies Lose Jobs"
        subtitle="These moments happen every day."
      >
        <div className="space-y-4">
          {scenarioCards.map((card) => (
            <motion.article key={`${card.time}-${card.title}`} {...fadeIn} className={`${cardClass} overflow-hidden p-0`}>
              <div className="grid gap-0 lg:grid-cols-[180px_1fr]">
                <div className="relative flex flex-col items-center border-b border-white/10 bg-[#1e2634] px-5 py-6 lg:border-b-0 lg:border-r">
                  <span className="absolute -right-[5px] top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#caffc0] lg:block" />
                  <p className="inline-flex rounded-md border border-[#44c5ff] bg-[#44c5ff]/12 px-3 py-2 font-mono text-base font-semibold tracking-[0.12em] tabular-nums text-[#00baff] shadow-[0_0_14px_rgba(68,197,255,0.22)]">
                    {card.time}
                  </p>
                  <p className="mt-2 text-center text-xs font-semibold uppercase text-[#caffc0]">{card.title}</p>
                </div>

                <div className="grid gap-0 md:grid-cols-[0.94fr_1.06fr]">
                  <div className="border-b border-white/10 px-5 py-6 md:border-b-0 md:border-r md:pr-3">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/65">Current Reality</p>
                    <div className="mt-3 space-y-1 text-sm leading-[1.275rem] text-white">
                      {card.withoutLines.map((line: string) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    {card.withoutBullets ? (
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-[1.275rem] text-white marker:text-white/55">
                        {card.withoutBullets.map((item: string) => (
                          <li key={item} className="pl-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <div className="bg-[#caffc0]/[0.06] px-5 py-6 md:pl-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#00baff]">
                      With <span className="font-semibold">2Stack</span>
                    </p>
                    <div className="mt-3 space-y-1 text-sm leading-[1.275rem] text-white">
                      {card.withLines.map((line: string) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    {card.withBullets ? (
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-[1.275rem] text-white marker:text-[#caffc0]">
                        {card.withBullets.map((item: string) => (
                          <li key={item} className="pl-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          <div className="hidden px-2 lg:block">
            <div className="ml-[174px] h-6 border-l border-dashed border-[#caffc0]/35" />
          </div>
        </div>
      </Section>

      <Section
        id="systems"
        title="What 2Stack Actually Does"
        subtitle={
          <>
            We build simple systems that keep your pipeline moving. No complicated software.
            <br />
            No Fluff. Just tools that help service companies run better.
          </>
        }
        eyebrow="Systems Overview"
        headerStyle="centeredDivider"
        childrenClassName="mt-8"
      >
        <div className="space-y-5">
          {systemsPyramidTiers.map((tier, tierIndex) => (
            <div key={`tier-${tierIndex}`} className="flex flex-col items-center gap-5 md:flex-row md:justify-center">
              {tier.map((systemIndex) => {
                const system = systems[systemIndex];
                if (!system) return null;
                const tierToneClasses =
                  tierIndex === 0
                    ? "relative overflow-hidden border-[#caffc0]/45 bg-[#caffc0]/[0.05] before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-[#caffc0]/60 md:max-w-2xl"
                    : tierIndex === 1
                      ? "relative overflow-hidden border-[#9fe9dd]/30 bg-[#9fe9dd]/[0.035] before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-[#9fe9dd]/55 md:max-w-[420px]"
                      : "relative overflow-hidden border-white/12 bg-[#8ad3ff]/[0.02] before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-[#8ad3ff]/45 md:max-w-[360px]";
                const tierTitleClasses =
                  tierIndex === 0 ? "text-[#caffc0]" : tierIndex === 1 ? "text-[#aee9de]" : "text-[#9ddfff]";

                return (
                  <motion.article
                    key={system.title}
                    {...fadeIn}
                    className={`${cardClass} ${tierToneClasses} w-full p-5 pt-3.5`}
                  >
                    <h3 className={`w-full text-center font-[var(--font-display)] text-2xl font-semibold ${tierTitleClasses}`}>
                      <span className="leading-none">{system.title}</span>
                    </h3>
                    <p className="mt-3 whitespace-pre-line text-center text-sm leading-[1.4rem] text-white/78">
                      {system.body}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          ))}
        </div>
      </Section>

      <Section id="owner-relief" title="Less chaos. More control.">
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <motion.article {...fadeIn} className={`${cardClass} h-full bg-white/[0.04] p-6 md:p-8 hover:shadow-none`}>
            <p className="mb-4 font-[var(--font-display)] text-2xl font-semibold text-[#44c5ff]">
              When your systems are solid...
            </p>
            <ul className="space-y-3">
              {[
                "leads get answered faster.",
                "customers feel taken care of.",
                "your crew stays focused on work.",
                "you see where the money is going."
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#1e2634]/45 px-3 py-2.5">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#caffc0]/45 bg-[#caffc0]/12 text-[11px] font-semibold text-[#caffc0]">
                    ✓
                  </span>
                  <span className="text-sm leading-6 text-white">{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article {...fadeIn} className={`${cardClass} h-full bg-white/[0.03] p-6 md:p-8 hover:shadow-none`}>
            <p className="font-[var(--font-display)] text-2xl font-semibold text-[#44c5ff]">
              Built for Owners Who Care
            </p>
            <p className="mt-3 max-w-[52ch] text-base font-medium leading-7 text-white/80">
              This is not for big corporate chains. This is for owners
              <br />
              who take pride in their work.
            </p>
            <p className="mt-5 max-w-[52ch] text-base font-medium leading-7 text-white/80">
              We build systems that remove headaches from the
              <br />
              office and keep jobs moving.
            </p>
          </motion.article>
        </div>
      </Section>

      <Section id="who" title="Best Fit For Companies With" sectionClassName="pt-10 pb-4 md:pt-12 md:pb-4">
        <motion.div {...fadeIn} className={`${cardClass} p-6 md:p-8 hover:shadow-none`}>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "2-20 field techs",
              "steady incoming leads",
              "A growing office team",
              "an owner tired of duct-taping systems together"
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/12 bg-[#222837]/80 p-4 text-sm text-white/86">
                <span className="mr-2 text-[#caffc0]">*</span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      <section id="cta" className="pb-10 pt-2 md:pb-12 md:pt-2">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-[#caffc0]/32 bg-white/[0.04] px-8 py-4 text-center backdrop-blur-[8px] md:px-12 md:py-6"
          >
            <h2 className="font-[var(--font-display)] text-3xl font-semibold text-[#caffc0] md:text-4xl">
              Find Out Where You&apos;re Losing Jobs
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-white">
              Most service companies lose 20-40% of jobs before the estimate even happens.
              <br />
              <span className="text-lg font-semibold">See if your business is one of them.</span>
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button
                id="lead-signal"
                type="button"
                onClick={openScanner}
                className="rounded-full border border-[#caffc0]/55 bg-[#caffc0] px-6 py-3 text-sm font-semibold text-[#172114] transition-all duration-300 hover:border-[#44c5ff] hover:bg-[#44c5ff] hover:text-[#102637]"
              >
                Run the Lead Response Scanner
              </button>
              <button
                type="button"
                onClick={openBooking}
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#caffc0]/55 hover:bg-[#caffc0]/10"
              >
                Book a Walkthrough
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isBookingOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setIsBookingOpen(false)}
          >
            <div className="flex min-h-full items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-5xl rounded-2xl border border-white/12 bg-[#1e2634] p-4 shadow-2xl md:p-5"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="font-[var(--font-display)] text-lg font-semibold text-[#caffc0]">
                    Book Your Home Services Systems Review
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(false)}
                    className="rounded-md border border-white/20 px-2.5 py-1 text-xs text-white/80 transition hover:border-[#44c5ff] hover:text-white"
                  >
                    Close
                  </button>
                </div>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
                  <iframe
                    title="Home Services Systems Review Booking"
                    src={homeServicesBookingUrl}
                    className="h-[72vh] w-full"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <LeadResponseScannerWidget />
    </main>
  );
}

function Section({
  id,
  title,
  subtitle,
  eyebrow,
  headerStyle = "default",
  childrenClassName,
  sectionClassName,
  children
}: {
  id: string;
  title: string;
  subtitle?: React.ReactNode;
  eyebrow?: string;
  headerStyle?: "default" | "panel" | "centeredDivider";
  childrenClassName?: string;
  sectionClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={sectionClassName ?? "py-10 md:py-12"}>
      <div className="mx-auto w-full max-w-6xl px-6">
        {headerStyle === "centeredDivider" ? (
          <motion.div {...fadeIn} className="text-center">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00baff]">{eyebrow}</p>
            ) : null}
            <h2 className="mt-2 font-[var(--font-display)] text-3xl font-semibold text-[#caffc0] md:text-4xl">{title}</h2>
            {subtitle ? (
              <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-white/80">{subtitle}</p>
            ) : null}
            <div className="mx-auto mt-8 h-px max-w-4xl bg-white/10" />
          </motion.div>
        ) : headerStyle === "panel" ? (
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center backdrop-blur-[8px]"
          >
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00baff]">{eyebrow}</p>
            ) : null}
            <h2 className="mt-2 font-[var(--font-display)] text-3xl font-semibold text-[#caffc0] md:text-4xl">{title}</h2>
            {subtitle ? (
              <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-white/80">{subtitle}</p>
            ) : null}
            <div className="mx-auto mt-5 h-px max-w-4xl bg-white/10" />
          </motion.div>
        ) : (
          <>
            <motion.h2
              {...fadeIn}
              className="font-[var(--font-display)] text-3xl font-semibold text-[#caffc0] md:text-4xl"
            >
              {title}
            </motion.h2>
            {subtitle ? (
              <motion.p {...fadeIn} className="mt-4 max-w-4xl text-base leading-8 text-white/80">
                {subtitle}
              </motion.p>
            ) : null}
          </>
        )}
        <div className={childrenClassName ?? "mt-6"}>{children}</div>
      </div>
    </section>
  );
}

function SpeedToLeadMeter() {
  const [selected, setSelected] = useState<(typeof speedOptions)[number]["value"]>("strong");

  const result = useMemo(() => {
    if (selected === "fast") {
      return {
        title: "Strong advantage",
        detail: "You are likely in the winning response window for high-intent homeowners."
      };
    }

    if (selected === "strong") {
      return {
        title: "Competitive, but vulnerable",
        detail: "You are still in range, but faster teams with tighter automation can steal jobs."
      };
    }

    if (selected === "risk") {
      return {
        title: "Leak risk rising",
        detail: "Many homeowners will already be talking to another company by this point."
      };
    }

    if (selected === "high-risk") {
      return {
        title: "High leakage window",
        detail: "Same-day response usually means your estimate request is no longer exclusive."
      };
    }

    return {
      title: "Critical leakage",
      detail: "Next-day callback timing often converts inquiries into lost revenue before you engage."
    };
  }, [selected]);

  return (
    <div className="mt-5">
      <div className="grid gap-2 sm:grid-cols-2">
        {speedOptions.map((option) => {
          const isActive = option.value === selected;
          return (
            <button
              key={option.label}
              type="button"
              onClick={() => setSelected(option.value)}
              className={`rounded-xl border bg-[#1e2634] px-3.5 py-2.5 text-left text-sm leading-6 transition-colors duration-200 ${
                isActive
                  ? "border-[#caffc0]/55 text-white"
                  : "border-white/12 text-white/82 hover:border-[#caffc0]/40 hover:text-white"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="relative mt-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-4 pl-5">
        <span className="absolute inset-y-0 left-0 w-1 bg-[#caffc0]/75" />
        <p className="text-sm font-semibold text-[#caffc0]">{result.title}</p>
        <p className="mt-2 text-sm leading-7 text-white">{result.detail}</p>
      </div>
    </div>
  );
}
