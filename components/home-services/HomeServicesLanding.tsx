"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { LeadResponseScannerWidget } from "@/components/home-services/LeadResponseScannerWidget";

const scenarioCards = [
  {
    moment: "Moment 1",
    timeTitle: "8:12 AM - Website Lead",
    withoutLines: [
      "A homeowner fills out your website form.",
      "Nobody sees it for 45 minutes.",
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
    timeTitle: "10:37 AM - Missed Call",
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
    timeTitle: "1:24 PM - Ad Money Mystery",
    withoutLines: ["Leads come in from ads.", "But you do not know:"],
    withoutBullets: ["which ads work", "which leads turn into jobs", "where your money is going"],
    withLines: ["Every lead gets tracked.", "You can see:"],
    withBullets: ["where it came from", "which ones turn into jobs", "what marketing actually makes money"]
  },
  {
    moment: "Moment 4",
    timeTitle: "4:18 PM - No Review Request",
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
    timeTitle: "6:02 PM - Dispatcher Out",
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
    body: "Leads, calls, estimates, and follow-ups all stay connected so jobs move smoothly from first contact to finished work."
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
  "rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-[8px] transition-all duration-[250ms] ease-in-out hover:border-[#7aff60]/55 hover:bg-[#222837] hover:shadow-[0_0_18px_rgba(122,255,96,0.25)]";

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
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7aff60]">
            2Stack | Home Services Systems
          </Link>
          <div className="hidden items-center gap-5 text-xs uppercase tracking-[0.12em] text-white/70 md:flex">
            <a href="#familiar" className="transition hover:text-[#7aff60]">
              Familiar Moments
            </a>
            <a href="#systems" className="transition hover:text-[#7aff60]">
              Systems
            </a>
            <a href="#cta" className="transition hover:text-[#7aff60]">
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
            <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-tight text-[#7aff60] md:text-5xl">
              Stop losing jobs because your systems are messy.
            </h1>

            <div className="mt-6">
              <div className="relative overflow-hidden rounded-xl border border-[#7aff60]/30 bg-white/[0.04] px-4 py-4 pl-5 backdrop-blur-[6px]">
                <span className="absolute inset-y-0 left-0 w-1 bg-[#7aff60]" />

                <ul className="space-y-2.5">
                  {["Missed calls.", "Slow lead response.", "Forgotten follow-ups."].map((line) => (
                    <li key={line} className="flex items-center gap-2.5">
                      <span className="h-2 w-2 rounded-full bg-[#7aff60]" />
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
                className="rounded-full border border-[#7aff60]/45 bg-[#7aff60] px-6 py-3 text-sm font-semibold text-[#172114] transition-all duration-300 hover:border-[#44c5ff] hover:bg-[#44c5ff] hover:text-[#102637]"
              >
                Check Your Lead Response
              </button>
              <button
                type="button"
                onClick={openBooking}
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#7aff60]/55 hover:bg-[#7aff60]/10"
              >
                See How It Works
              </button>
            </div>
          </motion.div>

          <motion.aside {...fadeIn} className={`self-start ${cardClass} p-6 md:p-7`}>
            <p className="text-xs uppercase tracking-[0.16em] text-[#44c5ff]">Speed-to-Lead Meter</p>
            <h2 className="mt-3 font-[var(--font-display)] text-2xl font-semibold text-white">
              How fast are you calling new leads?
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Most homeowners contact 3-5 companies. The first company to respond usually wins the job.
            </p>
            <p className="mt-2 text-sm font-semibold text-[#7aff60]">How fast are you?</p>

            <SpeedToLeadMeter />

            <div className="mt-6 rounded-xl border border-[#7aff60]/28 bg-[#7aff60]/10 p-4">
              <p className="text-sm leading-7 text-white/85">
                If it is not fast, jobs are slipping away. Fast response is not about working harder. It is about
                having the right system in place.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>

      <Section
        id="familiar"
        title="Where Most Service Companies Lose Jobs"
        subtitle="These moments happen every day."
      >
        <div className="space-y-4">
          {scenarioCards.map((card, index) => (
            <motion.article key={card.timeTitle} {...fadeIn} className={`${cardClass} overflow-hidden p-0`}>
              <div className="grid gap-0 lg:grid-cols-[180px_1fr]">
                <div className="relative border-b border-white/10 bg-[#1e2634] px-5 py-6 lg:border-b-0 lg:border-r">
                  <span className="absolute -right-[5px] top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#7aff60] lg:block" />
                  <p className="text-xs uppercase tracking-[0.14em] text-[#44c5ff]">{card.moment ?? `Moment ${index + 1}`}</p>
                  <p className="mt-2 text-sm font-semibold text-[#7aff60]">{card.timeTitle}</p>
                </div>

                <div className="grid gap-0 md:grid-cols-2">
                  <div className="border-b border-white/10 px-5 py-6 md:border-b-0 md:border-r">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/65">Without 2Stack</p>
                    <div className="mt-3 space-y-1.5 text-sm leading-7 text-white/80">
                      {card.withoutLines.map((line: string) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    {card.withoutBullets ? (
                      <ul className="mt-2 space-y-1 text-sm leading-7 text-white/80">
                        {card.withoutBullets.map((item: string) => (
                          <li key={item}>* {item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <div className="bg-[#7aff60]/[0.06] px-5 py-6">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#44c5ff]">With 2Stack</p>
                    <div className="mt-3 space-y-1.5 text-sm leading-7 text-white/90">
                      {card.withLines.map((line: string) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    {card.withBullets ? (
                      <ul className="mt-2 space-y-1 text-sm leading-7 text-white/90">
                        {card.withBullets.map((item: string) => (
                          <li key={item}>* {item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          <div className="hidden px-2 lg:block">
            <div className="ml-[174px] h-6 border-l border-dashed border-[#7aff60]/35" />
          </div>
        </div>
      </Section>

      <Section
        id="systems"
        title="What 2Stack Actually Does"
        subtitle="We build simple systems that keep your pipeline moving. No complicated software. No fluff. Just tools that help service companies run better."
      >
        <div className="mt-1 space-y-5">
          {systemsPyramidTiers.map((tier, tierIndex) => (
            <div key={`tier-${tierIndex}`} className="flex flex-col items-center gap-5 md:flex-row md:justify-center">
              {tier.map((systemIndex) => {
                const system = systems[systemIndex];
                if (!system) return null;

                return (
                  <motion.article
                    key={system.title}
                    {...fadeIn}
                    className={`${cardClass} w-full p-6 ${
                      tierIndex === 0
                        ? "border-[#7aff60]/40 shadow-[0_0_20px_rgba(122,255,96,0.16)] md:max-w-2xl"
                        : tierIndex === 1
                          ? "md:max-w-[420px]"
                          : "md:max-w-[360px]"
                    }`}
                  >
                    <h3 className="font-[var(--font-display)] text-2xl font-semibold text-[#7aff60]">{system.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/78">{system.body}</p>
                  </motion.article>
                );
              })}
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="owner-relief"
        title="Less chaos. More control."
        subtitle="When your systems are solid:"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article {...fadeIn} className={`${cardClass} p-6 md:p-8`}>
            <ul className="space-y-3 text-sm leading-7 text-white/86">
              {[
                "Leads get answered faster",
                "Customers feel taken care of",
                "Your crew stays focused on work",
                "You see where the money is going"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#7aff60]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article {...fadeIn} className={`${cardClass} p-6 md:p-8`}>
            <p className="font-[var(--font-display)] text-2xl font-semibold text-[#44c5ff]">
              Built for Owners Who Care
            </p>
            <p className="mt-4 text-sm leading-7 text-white/80">
              This is not for big corporate chains. This is for owners who take pride in their work.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/80">
              We build systems that remove headaches from the office and keep jobs moving.
            </p>
          </motion.article>
        </div>
      </Section>

      <Section id="who" title="Best Fit For Companies With">
        <motion.div {...fadeIn} className={`${cardClass} p-6 md:p-8`}>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "2-20 field techs",
              "steady incoming leads",
              "A growing office team",
              "an owner tired of duct-taping systems together"
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/12 bg-[#222837]/80 p-4 text-sm text-white/86">
                <span className="mr-2 text-[#7aff60]">*</span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      <section id="cta" className="py-10 md:py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-[#7aff60]/32 bg-white/[0.04] p-8 text-center backdrop-blur-[8px] md:p-12"
          >
            <h2 className="font-[var(--font-display)] text-3xl font-semibold text-[#7aff60] md:text-4xl">
              Find Out Where You&apos;re Losing Jobs
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-white/82">
              Most service companies lose 20-40% of jobs before the estimate even happens. See if your business is one
              of them.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button
                id="lead-signal"
                type="button"
                onClick={openScanner}
                className="rounded-full border border-[#7aff60]/55 bg-[#7aff60] px-6 py-3 text-sm font-semibold text-[#172114] transition-all duration-300 hover:border-[#44c5ff] hover:bg-[#44c5ff] hover:text-[#102637]"
              >
                Run the Lead Response Scanner
              </button>
              <button
                type="button"
                onClick={openBooking}
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#7aff60]/55 hover:bg-[#7aff60]/10"
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
                  <p className="font-[var(--font-display)] text-lg font-semibold text-[#7aff60]">
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
  children
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-10 md:py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.h2 {...fadeIn} className="font-[var(--font-display)] text-3xl font-semibold text-[#7aff60] md:text-4xl">
          {title}
        </motion.h2>
        {subtitle ? (
          <motion.p {...fadeIn} className="mt-4 max-w-4xl text-base leading-8 text-white/80">
            {subtitle}
          </motion.p>
        ) : null}
        <div className="mt-6">{children}</div>
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
              className={`rounded-lg border px-3 py-2 text-left text-sm transition-all duration-300 ${
                isActive
                  ? "border-[#7aff60] bg-[#7aff60]/12 text-white shadow-[0_0_16px_rgba(122,255,96,0.2)]"
                  : "border-white/16 bg-[#1d2432] text-white/80 hover:border-[#7aff60]/45 hover:text-white"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4 rounded-lg border border-white/12 bg-[#1d2432] p-4">
        <p className="text-sm font-semibold text-[#7aff60]">{result.title}</p>
        <p className="mt-2 text-sm leading-7 text-white/80">{result.detail}</p>
      </div>
    </div>
  );
}
