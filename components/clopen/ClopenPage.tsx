"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ClopenVideoPlayer } from "@/components/clopen/ClopenVideoPlayer";
import { trackBookingCta } from "@/lib/analytics";

const clopenBookingUrl = "https://calendly.com/2-stack-founders/clopen_walkthrough";

const images = {
  hero:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=82",
  service:
    "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1800&q=82",
  table:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=82",
  cellar:
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=82",
  chef:
    "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1600&q=82",
  final:
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=2200&q=82"
};

const trustIndicators = [
  "Built by Restaurant Operators",
  "Keep Standards In The Building",
  "Make New Hires Useful Faster",
  "Run Service With Less Guesswork"
];

const storyLines = [
  "The regulars.",
  "The allergies.",
  "The pacing.",
  "The wine pairings.",
  "How Chef likes dishes described.",
  "How to recover a table before it becomes a bad review.",
  "And then they quit.",
  "Now the restaurant is running on scattered notes, verbal handoffs, and whoever happened to work last Friday.",
  "That is the real cost of front-of-house turnover.",
  "Not labor.",
  "Loss of tribal knowledge.",
  "The difference between hospitality and order taking."
];

const fragments = ["Group texts", "Sticky notes", "SOP PDFs", "Screenshots", "Printed binders", "Handwritten notes"];

const turnoverCards = [
  ["Knowledge Loss", "The service language, guest context, and recovery instincts leave with the person."],
  ["Manager Burnout", "Leadership becomes the operating system, repeating the same corrections every shift."],
  ["Slow Ramp Time", "New hires learn from whoever has time, not from the house standard."],
  ["Revenue Leakage", "Pairings, upgrades, callbacks, and recovery moments get missed at the table."]
];

const ecosystemNodes = [
  "Lineups",
  "SOPs",
  "Guest Preferences",
  "Wine Notes",
  "Recipe References",
  "Service Standards",
  "Certifications",
  "Training",
  "Menu Knowledge",
  "Shift Readiness"
];

const featureModules = [
  ["Dynamic Lineups", "Pre-shift focus that sounds like the house, not a corporate memo."],
  ["Guest Intelligence", "VIP preferences, allergies, celebrations, and service notes ready before the first table sits."],
  ["Service Standards", "The way you expect things done, documented clearly enough for the team to follow."],
  ["Knowledge Library", "Wine notes, recipes, pairings, menu details, and operating references in one place."],
  ["Certifications & Training", "A clear view of who is ready, who is close, and who needs coaching."],
  ["Service-Time Support", "The right information available during service, when asking a manager is already too late."]
];

const withoutClopen = [
  "Five group chats",
  "Printed binders",
  "Sticky notes",
  "SOP PDFs nobody opens",
  "Verbal handoffs",
  "Constant retraining"
];

const withClopen = [
  "One source of service truth",
  "Standards that hold",
  "Faster onboarding",
  "Better guest moments",
  "Less manager repetition",
  "More confident staff"
];

const outcomes = [
  ["Consistency", "The house standard survives turnover.", images.table],
  ["Speed", "New hires stop waiting for someone to explain the obvious.", images.service],
  ["Hospitality", "The small details show up at the table more often.", images.cellar]
];

const transcript = [
  "Every restaurant has one.",
  "That server who knows everything.",
  "The regulars.",
  "The allergies.",
  "The pacing.",
  "The wine pairings.",
  "How Chef likes dishes described.",
  "How to recover a table before it becomes a bad review.",
  "And then they quit.",
  'Now your "system" lives in scattered notes, verbal handoffs, and whoever happened to work last Friday.',
  "That's the real cost of front-of-house turnover.",
  "Not labor.",
  "Loss of tribal knowledge.",
  "The difference between hospitality and order taking.",
  "Clopen was built for operators who take standards personally.",
  "Not just scheduling.",
  "Not just training.",
  "Operational intelligence.",
  "Clopen becomes the operating layer between ownership and service.",
  "Lineups. Wine notes. Recipe references. Guest preferences. SOPs. Service standards. Certifications. Pre-shift focus points.",
  "All centralized.",
  "So every server performs more like your best server.",
  "Not because they memorized everything over three years...",
  "...but because the system supports them in real time.",
  "Your team gets more consistent.",
  "New hires become useful faster.",
  "Managers repeat themselves less.",
  "Guests feel the details immediately.",
  "Because great restaurants shouldn't rely on memory alone.",
  "They should run on systems.",
  "Clopen by 2Stack.",
  "Built by operators, for operators."
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export function ClopenPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isNavCompact, setIsNavCompact] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsNavCompact(latest > 48);
  });

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

  const openBooking = () => {
    trackBookingCta("restaurants", "clopen_booking_event");
    setIsBookingOpen(true);
  };

  const watchOverview = () => {
    document.getElementById("clopen-overview-video")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0B0B] text-[#F5F5F5] selection:bg-[#D97736]/40 selection:text-white">
      <StickyNav compact={isNavCompact} onBook={openBooking} />
      <Hero onBook={openBooking} onWatch={watchOverview} />
      <SocialProofBar />
      <StorySection />
      <TurnoverSection />
      <SolutionSection />
      <FeatureModules />
      <TransformationSection />
      <ResultsSection />
      <FounderSection />
      <TranscriptSection />
      <FinalCta onBook={openBooking} onWatch={watchOverview} />
      <Footer />
      <MobileStickyCta onBook={openBooking} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}

function StickyNav({ compact, onBook }: { compact: boolean; onBook: () => void }) {
  return (
    <motion.header
      animate={{ paddingTop: compact ? 10 : 18, paddingBottom: compact ? 10 : 18 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/[.08] bg-[#0B0B0B]/78 px-4 backdrop-blur-xl md:px-8"
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <a href="#top" className="flex items-center gap-3" aria-label="Clopen by 2Stack home">
          <Image src="/clopen-logo.svg" width={174} height={51} alt="Clopen" priority className="h-8 w-auto invert md:h-9" />
          <span className="hidden h-5 w-px bg-white/15 sm:block" aria-hidden="true" />
          <span className="hidden text-xs uppercase tracking-[0.28em] text-[#A3A3A3] sm:block">by 2Stack</span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-[#D8D8D8] lg:flex">
          <a className="transition hover:text-white" href="#product">
            Product
          </a>
          <a className="transition hover:text-white" href="#solutions">
            Solutions
          </a>
          <a className="transition hover:text-white" href="#about">
            About
          </a>
          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={onBook}
          className="rounded-full border border-[#D97736]/60 bg-[#D97736] px-4 py-2 text-sm font-semibold text-[#0B0B0B] shadow-[0_0_34px_rgba(217,119,54,.24)] transition hover:bg-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:ring-offset-2 focus:ring-offset-[#0B0B0B] md:px-5"
        >
          Book a Discovery Call
        </button>
      </nav>
    </motion.header>
  );
}

function Hero({ onBook, onWatch }: { onBook: () => void; onWatch: () => void }) {
  return (
    <section id="top" className="relative min-h-screen pt-28 md:pt-32">
      <Image
        src={images.hero}
        alt="Warm upscale restaurant dining room"
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover blur-sm"
      />
      <div className="absolute inset-0 bg-[#0B0B0B]/82 md:bg-[#0B0B0B]/74" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,.9)_0%,rgba(11,11,11,.64)_58%,rgba(11,11,11,.3)_100%)] md:bg-[linear-gradient(90deg,rgba(11,11,11,.82)_0%,rgba(11,11,11,.48)_46%,rgba(11,11,11,.12)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(217,119,54,.22),transparent_36%)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-5 pb-20 md:grid-cols-[0.45fr_0.55fr] md:px-8 lg:px-10">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }} className="order-1 max-w-2xl">
          <motion.p variants={fadeUp} className="mb-6 text-xs uppercase tracking-[0.32em] text-[#F4A261]">
            For operators who take standards personally
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-[var(--font-display)] text-5xl font-semibold leading-[0.92] text-white drop-shadow-[0_8px_28px_rgba(0,0,0,.72)] md:text-6xl lg:text-7xl"
          >
            When Your Best Server Leaves, Your Standards Shouldn&apos;t.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-xl text-lg leading-8 text-[#F1F1F1] drop-shadow-[0_4px_18px_rgba(0,0,0,.86)] md:text-xl">
            Clopen turns service knowledge into a system the whole house can run on: standards, lineups, guest notes, and training your team can actually use.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton onClick={onBook}>Book a Discovery Call</PrimaryButton>
            <SecondaryButton onClick={onWatch}>Watch the 90-Second Overview</SecondaryButton>
          </motion.div>
          <motion.ul variants={fadeUp} className="mt-8 hidden gap-3 text-sm text-[#DADADA] md:grid md:grid-cols-2">
            {trustIndicators.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#F4A261]" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="relative order-2"
        >
          <div className="absolute -inset-4 rounded-[32px] border border-white/[.08] bg-white/[.05] shadow-[0_34px_90px_rgba(0,0,0,.55)] backdrop-blur-md md:-inset-6" />
          <div
            id="clopen-overview-video"
            className="relative overflow-hidden rounded-[24px] border border-white/[.12] bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,.72)]"
          >
            <ClopenVideoPlayer />
          </div>
          <p className="relative mt-5 text-center text-sm leading-6 text-[#A3A3A3]">
            A short overview of how Clopen keeps restaurant standards from walking out the door.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.5 }}
          className="order-3 -mt-5 grid gap-3 text-sm text-[#DADADA] md:hidden"
        >
          {trustIndicators.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-[#F4A261]" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function SocialProofBar() {
  return (
    <section className="border-y border-white/[.08] bg-[#101010] px-5 py-6 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
        {["Built for restaurants where details matter.", "Designed for teams that move fast before service.", "Created so standards stay in the building."].map((item) => (
          <div
            key={item}
            className="rounded-full border border-white/[.08] bg-white/[.035] px-5 py-3 text-center text-sm uppercase tracking-[0.18em] text-[#D9D9D9]"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.55fr_0.45fr] md:items-center">
        <Reveal className="max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#F4A261]">The part nobody writes down</p>
          <h2 className="font-[var(--font-display)] text-5xl font-semibold leading-none md:text-7xl">Every Restaurant Has One.</h2>
          <div className="mt-9 space-y-5 text-2xl leading-tight text-[#E9E4DD] md:text-3xl">
            {storyLines.map((line, index) => (
              <p key={`${line}-${index}`} className={index >= 6 ? "text-white" : ""}>
                {line}
              </p>
            ))}
          </div>
        </Reveal>
        <KnowledgeFragments />
      </div>
    </section>
  );
}

function KnowledgeFragments() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end center"] });
  const opacity = useTransform(scrollYProgress, [0, 0.55, 0.86], [1, 0.7, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.86], [1, 0.92]);

  return (
    <div ref={ref} className="relative min-h-[520px] overflow-hidden rounded-[24px] border border-white/[.08] bg-[#121212] p-6 shadow-[0_30px_80px_rgba(0,0,0,.34)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(244,162,97,.12),transparent_45%)]" />
      {fragments.map((fragment, index) => {
        const top = [10, 22, 42, 57, 70, 32][index];
        const left = [8, 48, 18, 58, 28, 66][index];
        const x = reduceMotion ? 0 : [-20, 70, -90, 95, -55, 45][index];
        const y = reduceMotion ? 0 : [-40, -80, 90, 110, 130, -120][index];

        return (
          <motion.div
            key={fragment}
            animate={reduceMotion ? undefined : { x, y, rotate: [-4, 3, -2][index % 3] }}
            transition={{ duration: 1.8, ease: "easeOut", delay: index * 0.05 }}
            className="absolute rounded-2xl border border-white/[.09] bg-white/[.06] px-5 py-4 text-sm text-[#F5F5F5] shadow-[0_18px_40px_rgba(0,0,0,.32)] backdrop-blur-md"
            style={{ top: `${top}%`, left: `${left}%`, opacity, scale }}
          >
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[#F4A261]">Fragment</span>
            {fragment}
          </motion.div>
        );
      })}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0.62, 0.92], [0, 1]) }}
        className="absolute inset-0 grid place-items-center bg-[#0B0B0B]/72 p-8 text-center backdrop-blur-sm"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.36em] text-[#D97736]">What leaves with them</p>
          <p className="mt-4 font-[var(--font-display)] text-5xl font-semibold text-white md:text-6xl">Service Memory Lost</p>
        </div>
      </motion.div>
    </div>
  );
}

function TurnoverSection() {
  return (
    <section className="border-y border-white/[.08] bg-[#101010] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Turnover, measured correctly" title={"The Real Cost Isn't Replacing Staff."} />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {turnoverCards.map(([title, copy], index) => (
            <Reveal
              key={title}
              delay={index * 0.07}
              className="rounded-[8px] border border-white/[.08] bg-[#121212] p-6 shadow-[0_24px_60px_rgba(0,0,0,.22)]"
            >
              <p className="mb-10 text-4xl text-[#D97736]">0{index + 1}</p>
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-4 leading-7 text-[#A3A3A3]">{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section id="product" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The 2Stack way"
          title="Structure For Restaurants That Care About Standards"
          copy="Clopen is the operating layer between ownership, managers, and service."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:items-center">
          <Reveal className="rounded-[24px] border border-white/[.08] bg-[#121212] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-[#F4A261]">From standard to behavior</p>
            <div className="mt-8 space-y-5 text-3xl font-semibold text-white">
              <p>Ownership</p>
              <p className="text-[#D97736]">Managers</p>
              <p>Team</p>
            </div>
            <p className="mt-8 leading-7 text-[#A3A3A3]">
              The owner&apos;s standard becomes the manager&apos;s rhythm, then the team&apos;s behavior. Not because everyone remembers perfectly, but because the system keeps the work in front of them.
            </p>
          </Reveal>
          <Ecosystem />
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <Reveal className="relative min-h-[620px] overflow-hidden rounded-[24px] border border-white/[.08] bg-[#121212] p-5 md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(217,119,54,.16),transparent_40%)]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {ecosystemNodes.map((_, index) => {
          const angle = (index / ecosystemNodes.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * 36;
          const y = 50 + Math.sin(angle) * 34;

          return (
            <motion.line
              key={index}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="rgba(244,162,97,.34)"
              strokeWidth="0.18"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
            />
          );
        })}
      </svg>
      <div className="absolute left-1/2 top-1/2 z-10 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#D97736]/50 bg-[#0B0B0B] text-center shadow-[0_0_70px_rgba(217,119,54,.26)]">
        <div>
          <Image src="/clopen-logo.svg" width={116} height={34} alt="Clopen" className="mx-auto h-auto w-24 invert" />
          <span className="mt-2 block text-[10px] uppercase tracking-[0.24em] text-[#F4A261]">backbone</span>
        </div>
      </div>
      {ecosystemNodes.map((node, index) => {
        const angle = (index / ecosystemNodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * 36;
        const y = 50 + Math.sin(angle) * 34;

        return (
          <motion.div
            key={node}
            initial={{ opacity: 0, scale: 0.86 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.07 }}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[.1] bg-[#0B0B0B]/88 px-4 py-3 text-center text-xs font-medium text-[#EDEDED] shadow-[0_14px_34px_rgba(0,0,0,.34)] backdrop-blur-md md:text-sm"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            {node}
          </motion.div>
        );
      })}
    </Reveal>
  );
}

function FeatureModules() {
  return (
    <section id="solutions" className="bg-[#0F0F0F] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="How Clopen solves it" title="The House Standard, Made Usable." />
        <div className="mt-10 divide-y divide-white/[.08] border-y border-white/[.08]">
          {featureModules.map(([title, copy], index) => (
            <Reveal key={title} className="grid gap-5 py-9 md:grid-cols-[0.34fr_0.66fr] md:items-baseline">
              <div className="flex items-baseline gap-4">
                <span className="text-sm text-[#D97736]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-[var(--font-display)] text-3xl font-semibold text-white">{title}</h3>
              </div>
              <p className="max-w-3xl text-xl leading-8 text-[#BDBDBD]">{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransformationSection() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="What changes operationally" title="The Difference Between Memory And Discipline" />
        <div className="mt-12 grid overflow-hidden rounded-[24px] border border-white/[.08] bg-[#121212] md:grid-cols-2">
          <ComparisonColumn label="Without Clopen" items={withoutClopen} muted />
          <ComparisonColumn label="With Clopen" items={withClopen} />
        </div>
      </div>
    </section>
  );
}

function ComparisonColumn({ label, items, muted = false }: { label: string; items: string[]; muted?: boolean }) {
  return (
    <Reveal className={`p-8 md:p-10 ${muted ? "bg-black/20" : "bg-[#D97736]/[.09]"}`}>
      <p className={`text-xs uppercase tracking-[0.32em] ${muted ? "text-[#A3A3A3]" : "text-[#F4A261]"}`}>{label}</p>
      <ul className="mt-9 space-y-5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-4 text-xl text-white">
            <span className={muted ? "text-[#777]" : "text-[#F4A261]"} aria-hidden="true">
              {muted ? "×" : "✓"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function ResultsSection() {
  return (
    <section className="bg-[#101010] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Outcomes" title="Your Team Starts Moving With The Same Standard." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {outcomes.map(([title, copy, image], index) => (
            <Reveal key={title} delay={index * 0.08} className="group relative min-h-[360px] overflow-hidden rounded-[16px] border border-white/[.08] p-7">
              <Image src={image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover opacity-[.34] transition duration-500 group-hover:scale-105 group-hover:opacity-45" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-[#0B0B0B]/15" />
              <div className="relative z-10 flex h-full min-h-[304px] flex-col justify-end">
                <h3 className="font-[var(--font-display)] text-4xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-xl leading-8 text-[#E0E0E0]">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section id="about" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.48fr_0.52fr] md:items-center">
        <div className="grid grid-cols-2 gap-4">
          {[0, 1].map((item) => (
            <Reveal key={item} delay={item * 0.08} className="relative min-h-[360px] overflow-hidden rounded-[18px] border border-white/[.08] bg-[#121212]">
              <Image src={item === 0 ? images.chef : images.service} alt="Founder photography placeholder" fill sizes="(min-width: 768px) 24vw, 50vw" className="object-cover opacity-72" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/84 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[#F4A261]">Founder photo</p>
                <p className="mt-2 text-sm text-[#D5D5D5]">Operator portrait placeholder</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#F4A261]">Why we built it</p>
          <h2 className="font-[var(--font-display)] text-5xl font-semibold leading-none md:text-7xl">Built By People Who Know The Feeling.</h2>
          <div className="mt-8 space-y-5 text-2xl leading-tight text-[#E5E5E5]">
            <p>We spent years in restaurants.</p>
            <p>We know the pit in your stomach when a great employee leaves and takes years of quiet knowledge with them.</p>
            <p>Clopen exists to keep the standard with the restaurant.</p>
            <p>Not the employee.</p>
            <p>Built by operators, for operators who care about the details.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TranscriptSection() {
  return (
    <section className="border-y border-white/[.08] bg-[#0F0F0F] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.34fr_0.66fr]">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#F4A261]">Overview transcript</p>
          <h2 className="font-[var(--font-display)] text-5xl font-semibold leading-none">Clopen by 2Stack.</h2>
        </Reveal>
        <Reveal className="columns-1 gap-10 space-y-4 text-xl leading-8 text-[#DCDCDC] md:columns-2">
          {transcript.map((line, index) => (
            <p key={`${line}-${index}`} className="break-inside-avoid">
              {line}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta({ onBook, onWatch }: { onBook: () => void; onWatch: () => void }) {
  return (
    <section id="contact" className="relative min-h-[760px] px-5 py-28 md:px-8">
      <Image src={images.final} alt="Beautiful restaurant service scene" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[#0B0B0B]/72" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(217,119,54,.2),transparent_40%)]" />
      <Reveal className="relative z-10 mx-auto flex min-h-[520px] max-w-5xl flex-col items-center justify-center text-center">
        <Image src="/clopen-logo.svg" width={250} height={73} alt="Clopen" className="mb-10 h-auto w-52 invert" />
        <h2 className="font-[var(--font-display)] text-5xl font-semibold leading-none text-white md:text-7xl">
          Great Restaurants Shouldn&apos;t Run On Memory Alone.
        </h2>
        <p className="mt-7 max-w-3xl text-xl leading-8 text-[#E5E5E5]">
          Build the structural discipline that keeps standards intact, makes new hires useful faster, and lets hospitality feel intentional every night.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton onClick={onBook}>Book a Discovery Call</PrimaryButton>
          <SecondaryButton onClick={onWatch}>Watch Overview</SecondaryButton>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[.08] px-5 pb-24 pt-10 md:px-8 md:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[#A3A3A3] md:flex-row md:items-center md:justify-between">
        <div>
          <Image src="/clopen-logo.svg" width={154} height={45} alt="Clopen" className="h-8 w-auto invert" />
          <p className="mt-3">Clopen by 2Stack</p>
        </div>
        <p>Built by operators, for operators.</p>
      </div>
    </footer>
  );
}

function MobileStickyCta({ onBook }: { onBook: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/[.08] bg-[#0B0B0B]/88 p-3 backdrop-blur-xl md:hidden">
      <button
        type="button"
        onClick={onBook}
        className="w-full rounded-full bg-[#D97736] px-5 py-3 text-sm font-semibold text-[#0B0B0B] shadow-[0_0_32px_rgba(217,119,54,.28)]"
      >
        Book a Discovery Call
      </button>
    </div>
  );
}

function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Book a Clopen discovery call"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="flex min-h-full items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-5xl rounded-[24px] border border-white/[.1] bg-[#121212] p-4 shadow-2xl md:p-5"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="font-[var(--font-display)] text-2xl font-semibold text-white">Book a Discovery Call</p>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-white/[.12] px-4 py-2 text-sm text-[#DCDCDC] transition hover:bg-white/[.06] focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:ring-offset-2 focus:ring-offset-[#121212]"
                >
                  Close
                </button>
              </div>
              <div className="overflow-hidden rounded-[18px] border border-white/[.08] bg-white">
                <iframe title="Clopen Discovery Call Booking" src={clopenBookingUrl} className="h-[72vh] w-full" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <Reveal className="max-w-4xl">
      <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#F4A261]">{eyebrow}</p>
      <h2 className="font-[var(--font-display)] text-5xl font-semibold leading-none text-white md:text-7xl">{title}</h2>
      {copy ? <p className="mt-6 max-w-2xl text-xl leading-8 text-[#BDBDBD]">{copy}</p> : null}
    </Reveal>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUp}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PrimaryButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full bg-[#D97736] px-6 py-3 text-sm font-semibold text-[#0B0B0B] shadow-[0_0_34px_rgba(217,119,54,.24)] transition hover:bg-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:ring-offset-2 focus:ring-offset-[#0B0B0B]"
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-white/[.12] bg-white/[.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-[#F4A261]/60 hover:text-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:ring-offset-2 focus:ring-offset-[#0B0B0B]"
    >
      {children}
    </button>
  );
}
