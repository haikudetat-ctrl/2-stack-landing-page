import Image from "next/image";
import Link from "next/link";

const attentionItems = [
  "5 missed calls that never got a same-day text",
  "9 new leads waiting longer than 15 minutes",
  "7 estimates older than 14 days",
  "4 completed jobs missing review requests",
  "2 lead sources spending without clear job attribution"
];

const visibilityQuestions = [
  "Which missed calls need a response",
  "Which new leads are aging too long",
  "Which lead sources work",
  "Which salespeople close",
  "Which jobs are profitable",
  "Which customers generate referrals",
  "Which crews create callbacks",
  "Which neighborhoods convert best",
  "Which estimates sit too long",
  "Which services generate margin"
];

const scatteredTools = ["CRM", "Accounting", "Email", "Phone", "Spreadsheets", "Production", "Marketing"];

const engines = [
  ["Lead Response Engine", "Surface missed calls, slow responses, and new leads before they turn into lost jobs."],
  ["Profitability Engine", "Show the most profitable jobs, customers, crews, and lead sources."],
  ["Referral Engine", "Know who should be asked for a review or referral today."],
  ["Estimate Recovery Engine", "See which estimates are most likely to close if contacted this week."],
  ["Owner Scorecard", "One morning view of what is happening in the business."]
];

const metrics = [
  ["Revenue", "$412,000"],
  ["Projected Revenue", "$687,000"],
  ["Close Rate", "38%"],
  ["Average Job Size", "$14,800"],
  ["Referral Rate", "17%"],
  ["Gross Margin", "31%"],
  ["Open Estimates", "42"]
];

const lifecycle = ["Lead", "Estimate", "Job", "Customer", "Referral", "Lifetime Value"];

export function RakePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#07111f] text-white selection:bg-[#1f67b1]/45">
      <RakeNav />
      <Hero />
      <LaunchSystemPath />
      <VisibilityProblem />
      <SingleSource />
      <BusinessHealth />
      <Lifecycle />
      <Engines />
      <FinalCta />
    </main>
  );
}

function RakeNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/86 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6" aria-label="RAKE navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="2Stack home">
          <Image src="/navbar_logo.png" alt="2Stack" width={1500} height={509} className="h-8 w-auto" priority />
        </Link>
        <div className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/62 md:flex">
          <a href="#visibility" className="transition hover:text-white">
            Visibility
          </a>
          <Link href="/launch-system" className="transition hover:text-white">
            Launch System
          </Link>
          <a href="#health" className="transition hover:text-white">
            Health
          </a>
          <a href="#engines" className="transition hover:text-white">
            Engines
          </a>
        </div>
        <a
          href="mailto:team@2stackops.com?subject=RAKE%20Walkthrough"
          className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#07111f] transition hover:bg-[#d8ecff]"
        >
          Book a RAKE Walkthrough
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[calc(100dvh-73px)] max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
      <div className="absolute inset-x-0 top-0 -z-10 h-[580px] bg-[radial-gradient(circle_at_18%_16%,rgba(64,139,219,0.32),transparent_36%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_30%)]" />

      <div>
        <Image
          src="/rake-logo-mark.svg"
          alt="RAKE"
          width={620}
          height={176}
          priority
          className="h-16 w-auto brightness-0 invert sm:h-20"
        />
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#9ecbff]">
          Operational intelligence for contractors and home-service operators
        </p>
        <h1 className="mt-5 max-w-4xl font-[var(--font-display)] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
          Contractors do not need another CRM.
          <span className="block text-[#9ecbff]">They need visibility.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
          RAKE connects the signals contractors and home-service teams already have so owners can see what is working,
          which leads are stuck, and where money is leaking.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#health"
            className="rounded-md bg-[#1f67b1] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_42px_rgba(31,103,177,0.32)] transition hover:bg-[#2f7dcd]"
          >
            See the owner scorecard
          </a>
          <a
            href="#visibility"
            className="rounded-md border border-white/16 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.06]"
          >
            The problem RAKE solves
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.04] shadow-[0_28px_110px_rgba(0,0,0,0.42)]">
        <Image
          src="/rake-vertical-ad.png"
          alt="RAKE contractor business operations"
          width={900}
          height={1334}
          priority
          className="aspect-[4/5] w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/92 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="rounded-lg border border-white/12 bg-[#07111f]/78 p-4 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9ecbff]">Owner view</p>
            <p className="mt-2 text-xl font-semibold">More certainty. Less digging.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LaunchSystemPath() {
  return (
    <section className="border-y border-white/10 bg-[#d8ecff] text-[#07111f]">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1f67b1]">Newer contractor path</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-4xl">
            If the foundation is not built yet, start here.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <p className="max-w-3xl text-base leading-7 text-[#26445f]">
            RAKE is for established companies ready for deeper visibility. For newer contractors still running on
            memory, spreadsheets, missed calls, and disconnected tools, 2Stack installs the operating system first.
          </p>
          <Link
            href="/launch-system"
            className="inline-flex justify-center rounded-md bg-[#07111f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12243b]"
          >
            Explore Launch System
          </Link>
        </div>
      </div>
    </section>
  );
}

function VisibilityProblem() {
  return (
    <section id="visibility" className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:py-24">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9ecbff]">The real purchase</p>
        <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
          Most contractors do not have a sales problem.
        </h2>
        <p className="mt-6 max-w-xl text-xl leading-8 text-slate-300">They have a visibility problem.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {visibilityQuestions.map((question) => (
          <div key={question} className="rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-slate-200">
            {question}
          </div>
        ))}
      </div>
    </section>
  );
}

function SingleSource() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9ecbff]">The owner bottleneck</p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
            The data exists. It is just scattered.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Every contractor has tools. CRM, accounting, email, phone logs, spreadsheets, production software,
            marketing reports. What they do not have is one place where the truth lives.
          </p>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white">
            So the owner becomes the source of truth. That works until it does not.
          </p>
        </div>

        <div className="rounded-lg border border-white/10 bg-[#07111f] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
          <div className="grid grid-cols-2 gap-3">
            {scatteredTools.map((tool) => (
              <div key={tool} className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200">
                {tool}
              </div>
            ))}
            <div className="rounded-md border border-[#1f67b1]/60 bg-[#1f67b1]/18 px-4 py-3 text-sm font-semibold text-white">
              Owner memory
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessHealth() {
  return (
    <section id="health" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9ecbff]">First screen</p>
        <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
          One morning view. No hunting.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
        <div className="rounded-lg border border-white/10 bg-[#f7fbff] p-5 text-[#07111f] shadow-[0_30px_110px_rgba(0,0,0,0.36)] sm:p-6">
          <div className="flex items-center justify-between gap-4 border-b border-[#d9e5f2] pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1f67b1]">Business Health</p>
              <h3 className="mt-1 text-2xl font-semibold">RAKE Services</h3>
            </div>
            <span className="rounded-full border border-[#c9d7e6] px-3 py-1 text-xs font-semibold text-[#42617f]">This week</span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map(([label, value]) => (
              <div key={label} className="rounded-lg border border-[#d9e5f2] bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#60758a]">{label}</p>
                <p className="mt-2 text-2xl font-bold tracking-[-0.03em]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#1f67b1]/40 bg-[#0d1c31] p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9ecbff]">What needs attention</p>
          <div className="mt-5 space-y-3">
            {attentionItems.map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/[0.045] p-4 text-sm font-semibold text-slate-100">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-300">
            No spreadsheets. No digging through reports. Just operational awareness.
          </p>
        </div>
      </div>
    </section>
  );
}

function Lifecycle() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9ecbff]">The bigger business</p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
            Stop ending the story at the invoice.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Everyone can track lead to estimate to job to invoice. RAKE helps owners see what happens before and after:
            the missed call, slow follow-up, customer, referral, review, and lifetime value.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {lifecycle.map((step, index) => (
            <div key={step} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <p className="text-xs font-semibold text-[#9ecbff]">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-lg font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Engines() {
  return (
    <section id="engines" className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9ecbff]">After the first view</p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
            Not gimmicks. Engines owners can use.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {engines.map(([title, body]) => (
            <article key={title} className="rounded-lg border border-white/10 bg-[#07111f] p-5">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#d8ecff] text-[#07111f] shadow-[0_30px_110px_rgba(0,0,0,0.32)]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1f67b1]">RAKE by 2Stack</p>
            <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
              Certainty comes from visibility.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#26445f]">
              Good contractors do not need more noise. They need one place that shows what is happening in the business.
            </p>
          </div>
          <div className="rounded-lg border border-[#9ecbff] bg-white p-5">
            <p className="text-sm font-semibold text-[#26445f]">Built for owners who want the truth without another meeting.</p>
            <a
              href="mailto:team@2stackops.com?subject=RAKE%20Walkthrough"
              className="mt-5 inline-flex w-full justify-center rounded-md bg-[#1f67b1] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#15528f]"
            >
              Book a RAKE Walkthrough
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
