import Image from "next/image";
import Link from "next/link";

const chaosItems = ["Sticky notes", "Whiteboards", "Missed calls", "Gmail inbox", "Paper estimates", "Spreadsheets"];

const dashboardItems = [
  ["Leads", "18 new"],
  ["Jobs", "34 active"],
  ["Calendar", "Synced"],
  ["Pipeline", "$284k"],
  ["Reviews", "4.8 avg"],
  ["AI assistant", "Online"]
];

const systemAreas = [
  ["Professional Presence", "Brand cleanup, website, email, Google Business Profile, and review foundation."],
  ["Sales Infrastructure", "CRM, pipeline, lead routing, scheduling, AI receptionist, and estimate workflow."],
  ["Operations", "Job tracking, team scheduling, customer communication, documentation, and SOPs."],
  ["Finance", "Estimates, invoices, payment workflows, job-costing framework, and executive dashboards."],
  ["Automation", "Lead follow-up, reminders, referrals, reporting, owner alerts, and AI-assisted workflows."]
];

const beforeItems = ["Missed opportunities", "Owner answers every question", "Manual scheduling", "Disconnected software", "Constant firefighting"];
const afterItems = ["One system", "Clear workflows", "Automated follow-up", "Team accountability", "Real reporting", "Predictable growth"];

const timeline = [
  ["Week 1", "Discovery", "We learn how your business actually operates, not how software companies think it should."],
  ["Week 2", "Build", "CRM, website, automation, communications, workflows, and reporting are configured around your business."],
  ["Week 3", "Migration", "Customers, jobs, contacts, estimates, and workflows move into the new operating system."],
  ["Week 4", "Launch", "Training, documentation, testing, and go-live. By Monday morning, the business operates differently."]
];

type PricingCardData = {
  name: string;
  audience: string;
  eyebrow?: string;
  price: string;
  featured?: boolean;
  features: string[];
  callout?: string;
  cta: string;
  href: string;
};

const pricingCards: PricingCardData[] = [
  {
    name: "Foundation",
    audience: "Small businesses getting serious.",
    eyebrow: "Starting at",
    price: "$8,500",
    features: [
      "Professional Website",
      "Business Email",
      "CRM Setup",
      "Lead Pipeline",
      "Google Business",
      "Estimate Templates",
      "Calendar Integration",
      "Review System",
      "Team Training"
    ],
    cta: "Start Building",
    href: "mailto:team@2stackops.com?subject=Foundation%20Build"
  },
  {
    name: "Business Launch System",
    audience: "Everything needed to modernize your company in 30-45 days.",
    eyebrow: "Starting at",
    price: "$15,000",
    featured: true,
    features: [
      "Professional Brand Presence",
      "High-Converting Website",
      "CRM & Sales Pipeline",
      "AI Receptionist",
      "Business Phone System",
      "Lead Routing",
      "Customer Communication",
      "Estimates & Invoicing",
      "Automated Follow-up",
      "Dashboards",
      "SOP Documentation",
      "Team Training",
      "Launch Support"
    ],
    callout: "By Monday morning, your business runs differently than it did Friday.",
    cta: "Book an Operating Systems Review",
    href: "mailto:team@2stackops.com?subject=Operating%20Systems%20Review"
  },
  {
    name: "Enterprise Operations",
    audience: "For businesses ready to optimize every department.",
    price: "Custom",
    features: [
      "Custom Software",
      "Advanced Reporting",
      "Inventory Systems",
      "Production Tracking",
      "AI Knowledge Base",
      "Accounting Integrations",
      "Executive Dashboards",
      "Workflow Automation",
      "Multi-location Support",
      "Fractional Operations Consulting"
    ],
    cta: "Talk With Us",
    href: "mailto:team@2stackops.com?subject=Enterprise%20Operations"
  }
];

const engagementColumns = [
  ["Discovery", "Business audit", "Workflow mapping", "Owner interviews", "Implementation plan"],
  ["Infrastructure", "CRM", "Website", "Phone", "Email", "Domains", "Automation"],
  ["Operations", "Documentation", "Training", "Dashboards", "Reporting", "Standard Operating Procedures"],
  ["Launch", "Migration", "Go-live support", "QA", "Optimization", "Owner walkthrough"]
];

export function BusinessLaunchPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#050b14] text-white selection:bg-[#1f67b1]/35">
      <LaunchNav />
      <Hero />
      <TrustSection />
      <Solution />
      <SystemGrid />
      <Transformation />
      <Timeline />
      <PricingSection />
    </main>
  );
}

function LaunchNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050b14]/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6" aria-label="Business Launch System navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="Back to RAKE">
          <Image src="/navbar_logo.png" alt="2Stack" width={1500} height={509} className="h-8 w-auto" priority />
        </Link>
        <div className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 md:flex">
          <a href="#system" className="transition hover:text-white">
            System
          </a>
          <a href="#timeline" className="transition hover:text-white">
            Timeline
          </a>
          <a href="#investment" className="transition hover:text-white">
            Investment
          </a>
        </div>
        <a
          href="mailto:team@2stackops.com?subject=Operating%20Systems%20Review"
          className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#07111f] transition hover:bg-[#d8ecff]"
        >
          Book Review
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[calc(100dvh-73px)] max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <div className="absolute inset-x-[-20vw] top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_18%_16%,rgba(31,103,177,0.34),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(158,203,255,0.13),transparent_30%),linear-gradient(180deg,#07111f_0%,#050b14_78%)]" />
      <div>
        <p className="text-sm font-semibold text-[#9ecbff]">Business Launch System by 2Stack</p>
        <h1 className="mt-5 max-w-4xl font-[var(--font-display)] text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
          Your business should not depend on memory.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          We install the systems, software, automation, and backbone that make service businesses run like mature companies.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:team@2stackops.com?subject=Operating%20Systems%20Review"
            className="rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-[#07111f] shadow-[0_18px_48px_rgba(158,203,255,0.2)] transition hover:-translate-y-0.5 hover:bg-[#d8ecff] active:translate-y-0"
          >
            Book an Operating Systems Review
          </a>
          <a
            href="#investment"
            className="rounded-md border border-white/14 bg-white/[0.06] px-5 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-[#9ecbff]/50 hover:bg-white/[0.1] active:translate-y-0"
          >
            See What&apos;s Included
          </a>
        </div>
      </div>
      <HeroVisual />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-[0_34px_120px_rgba(0,0,0,0.34)] backdrop-blur-xl">
      <div className="grid gap-4 md:grid-cols-[0.86fr_auto_1.14fr] md:items-stretch">
        <div className="rounded-lg border border-white/10 bg-[#07111f]/72 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Chaos</p>
          <div className="mt-4 grid gap-3">
            {chaosItems.map((item, index) => (
              <div
                key={item}
                className="rounded-md border border-white/10 bg-white/[0.055] px-3 py-3 text-sm font-semibold text-slate-300"
                style={{ transform: `translateX(${index % 2 === 0 ? "-2px" : "3px"}) rotate(${index % 2 === 0 ? "-0.4deg" : "0.5deg"})` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden items-center px-1 md:flex">
          <div className="h-px w-10 bg-[#9ecbff]" />
        </div>
        <div className="rounded-lg border border-[#b9d2ef] bg-[#07111f] p-4 text-white">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9ecbff]">Operating dashboard</p>
              <h2 className="mt-1 text-xl font-semibold">Everything. Connected.</h2>
            </div>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-[#d8ecff]">Live</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {dashboardItems.map(([label, value]) => (
              <div key={label} className="rounded-md border border-white/10 bg-white/[0.06] p-3">
                <p className="text-xs font-semibold text-[#9ecbff]">{label}</p>
                <p className="mt-2 text-lg font-semibold">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-md border border-[#1f67b1]/50 bg-[#1f67b1]/20 p-3 text-sm font-semibold">
            Team assignments, customer communication, revenue, reviews, and follow-up in one owner view.
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustSection() {
  return (
    <section className="border-y border-white/10 bg-[#07111f]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-20">
        <div className="max-w-3xl">
          <h2 className="font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
            Great businesses are not built on great memory.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Growth does not create systems. It exposes the lack of them: too many subscriptions, too many calendars,
            lost leads, manual data entry, and employees asking the same questions.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {["Disconnected tools", "Owner as source of truth", "No reliable reporting"].map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/[0.055] px-4 py-4 text-sm font-semibold text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:py-20">
      <div className="rounded-lg border border-[#9ecbff]/20 bg-[#9ecbff]/10 p-5 shadow-[0_24px_90px_rgba(31,103,177,0.16)] backdrop-blur">
        <p className="text-sm font-semibold text-[#d8ecff]">30-45 day install</p>
        <p className="mt-3 font-[var(--font-display)] text-5xl font-semibold tracking-[-0.05em] text-[#1f67b1]">1 system</p>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          Built around the way your business actually runs, then documented and launched with your team.
        </p>
      </div>
      <div>
        <h2 className="font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
          Meet the Business Launch System.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          This is not consulting, and it is not another CRM install. It is the operational infrastructure your service
          business should have had from day one.
        </p>
      </div>
    </section>
  );
}

function SystemGrid() {
  return (
    <section id="system" className="border-y border-white/10 bg-[#050b14] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <h2 className="max-w-3xl font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
          The backbone of a business that can scale.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {systemAreas.map(([title, body]) => (
            <article key={title} className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-[#9ecbff]/30">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Transformation() {
  return (
    <section className="mx-auto grid max-w-7xl gap-5 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
      <TransformationList title="Before" items={beforeItems} muted />
      <TransformationList title="After" items={afterItems} />
    </section>
  );
}

function TransformationList({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <div className={`rounded-lg border p-5 shadow-[0_22px_80px_rgba(0,0,0,0.2)] ${muted ? "border-white/10 bg-white/[0.045]" : "border-[#9ecbff]/24 bg-[#9ecbff]/10"}`}>
      <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-[-0.04em]">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-md border border-white/10 bg-[#07111f]/70 px-4 py-3 text-sm font-semibold text-slate-200">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <section id="timeline" className="border-y border-white/10 bg-[#07111f]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <h2 className="max-w-3xl font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
          From chaos to control in four weeks.
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {timeline.map(([week, title, body]) => (
            <article key={week} className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <p className="text-sm font-bold text-[#9ecbff]">{week}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section
      id="investment"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-[#050b14] px-4 py-14 text-white sm:px-6 lg:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_6%,rgba(31,103,177,0.34),transparent_34%),radial-gradient(circle_at_16%_42%,rgba(158,203,255,0.13),transparent_28%),linear-gradient(180deg,#07111f_0%,#050b14_52%,#07111f_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9ecbff]/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#9ecbff]">Investment</p>
          <h2 className="mt-3 font-[var(--font-display)] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-5xl">
            Build the Business You Wish You Had Started With.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Every engagement replaces years of operational guesswork with proven systems. You&apos;re investing in the
            infrastructure your business will run on for years.
          </p>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.2fr_0.9fr] lg:items-center">
          {pricingCards.map((card) => (
            <PricingCard key={card.name} card={card} />
          ))}
        </div>

        <EngagementStrip />

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <p className="font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.055em] sm:text-5xl md:text-7xl">
            We don&apos;t sell websites.
          </p>
          <div className="mx-auto my-8 h-px w-28 bg-gradient-to-r from-transparent via-[#9ecbff] to-transparent" />
          <p className="font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.055em] text-[#9ecbff] sm:text-5xl md:text-7xl">
            We install businesses.
          </p>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-300">
            When we&apos;re finished, your company has the systems, documentation, automation, and operational discipline
            typically found in businesses years ahead of where you are today.
          </p>
          <a
            href="mailto:team@2stackops.com?subject=Let%27s%20Build%20Yours"
            className="mt-8 inline-flex rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#07111f] shadow-[0_20px_60px_rgba(158,203,255,0.22)] transition hover:-translate-y-0.5 hover:bg-[#d8ecff] active:translate-y-0"
          >
            Let&apos;s Build Yours
          </a>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ card }: { card: PricingCardData }) {
  const featured = card.featured === true;

  return (
    <article className={`group relative ${featured ? "z-10 lg:scale-[1.02]" : ""}`}>
      {featured ? (
        <div className="absolute -inset-3 rounded-lg bg-[#1f67b1]/22 blur-2xl motion-safe:animate-pulse" />
      ) : null}
      <div
        className={`relative overflow-hidden rounded-lg p-px transition duration-500 group-hover:-translate-y-1 ${
          featured
            ? "bg-white/10 shadow-[0_34px_120px_rgba(31,103,177,0.34)]"
            : "bg-white/14 shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
        }`}
      >
        {featured ? (
          <div className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_120deg,transparent_0deg,#9ecbff_80deg,#1f67b1_145deg,transparent_230deg)] motion-safe:animate-[spin_9s_linear_infinite]" />
        ) : null}
        <div
          className={`relative h-full rounded-lg border p-4 backdrop-blur-xl ${
            featured ? "border-[#9ecbff]/28 bg-[#07111f]/94" : "border-white/10 bg-white/[0.055]"
          }`}
        >
          {featured ? (
            <div className="absolute right-4 top-4 rounded-full border border-[#9ecbff]/40 bg-[#9ecbff]/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d8ecff] shadow-[0_0_34px_rgba(158,203,255,0.28)]">
              Most Popular
            </div>
          ) : null}

          <div className={featured ? "pr-28" : ""}>
            <h3 className="text-xl font-semibold tracking-[-0.035em] sm:text-2xl">{card.name}</h3>
            <p className="mt-2 text-sm leading-5 text-slate-300">{card.audience}</p>
          </div>

          <div className="mt-4 border-y border-white/10 py-3">
            {card.eyebrow ? <p className="text-xs font-semibold text-[#9ecbff]">{card.eyebrow}</p> : null}
            <p className="font-[var(--font-display)] text-4xl font-semibold tracking-[-0.06em]">
              {card.price}
            </p>
          </div>

          <div className={`mt-4 grid gap-x-4 gap-y-1.5 ${featured ? "sm:grid-cols-2" : "xl:grid-cols-2"}`}>
            {card.features.map((feature, index) => (
              <div key={feature} className="flex items-start gap-2 text-[12px] font-medium leading-5 text-slate-200">
                <span
                  className="mt-1 inline-flex size-3 shrink-0 items-center justify-center rounded-full border border-[#9ecbff]/40 bg-[#9ecbff]/12 text-[8px] font-bold text-[#d8ecff] motion-safe:animate-pulse"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  ✓
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {card.callout ? (
            <div className="mt-4 rounded-lg border border-[#9ecbff]/24 bg-[#9ecbff]/10 p-3 text-[12px] font-semibold leading-5 text-[#d8ecff]">
              {card.callout}
            </div>
          ) : null}

          <a
            href={card.href}
            className={`mt-4 inline-flex w-full justify-center rounded-md px-4 py-2.5 text-center text-sm font-semibold transition active:translate-y-px ${
              featured
                ? "bg-white text-[#07111f] shadow-[0_18px_46px_rgba(158,203,255,0.22)] hover:bg-[#d8ecff]"
                : "border border-white/14 bg-white/[0.07] text-white hover:border-[#9ecbff]/50 hover:bg-white/[0.11]"
            }`}
          >
            {card.cta}
          </a>
        </div>
      </div>
    </article>
  );
}

function EngagementStrip() {
  return (
    <div className="mt-16 rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6">
      <h3 className="font-[var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
        What&apos;s Included in Every Engagement
      </h3>
      <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {engagementColumns.map(([title, ...items], columnIndex) => (
          <div key={title} className="rounded-lg border border-white/10 bg-[#07111f]/72 p-5">
            <h4 className="text-lg font-semibold">{title}</h4>
            <div className="mt-5 grid gap-3">
              {items.map((item, itemIndex) => (
                <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                  <span
                    className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-[#9ecbff]/14 text-[10px] font-bold text-[#9ecbff] motion-safe:animate-pulse"
                    style={{ animationDelay: `${(columnIndex * 5 + itemIndex) * 85}ms` }}
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
