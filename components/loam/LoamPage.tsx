import Image from "next/image";
import Link from "next/link";

const loginUrl = "https://loam.2-stack.com/login?next=%2F";
const discoveryUrl = "mailto:team@2stackops.com?subject=LOAM%20Discovery%20Call";

const painBullets = [
  "Routes live in one place",
  "Crew updates live in another",
  "Photos are buried in phones",
  "Invoices happen later",
  "Payments are tracked manually",
  "The owner becomes the system"
];

const beforeLoam = [
  "Morning plans change through texts",
  "Crews ask what comes next",
  "Job completion is hard to verify",
  "Photos are disconnected from visits",
  "Invoices lag behind completed work",
  "Payments require owner memory"
];

const withLoam = [
  "Today’s Run",
  "Route sequencing",
  "Job status progression",
  "Completion photos",
  "Invoice drafts",
  "Expected payments",
  "Open issues",
  "Daily reporting"
];

const features = [
  ["Today’s Run", "Route, status, next stop, and next action in one place."],
  ["One-Click Job Progression", "Move from scheduled to en route, arrived, working, completed, and invoiced without guessing the next step."],
  ["Completion Photos", "Attach job proof directly to the service visit."],
  ["Invoice Drafts", "Turn completed work into a billing step immediately."],
  ["Payment Visibility", "Track what was earned, what is pending, and what needs follow-up."],
  ["Issues & Follow-Ups", "Capture property issues before they become forgotten promises."]
];

const dailySteps = [
  "Build the day",
  "Start the route",
  "Advance each job",
  "Capture proof",
  "Generate invoice",
  "Track payment",
  "Review performance"
];

const outcomes = [
  "Fewer missed stops",
  "Faster field communication",
  "Cleaner job completion",
  "Less owner intervention",
  "Better billing follow-through",
  "Clearer daily revenue visibility"
];

const stops = [
  ["8:00 AM", "Oak Ridge HOA", "Completed"],
  ["9:15 AM", "Pine Crest Lane", "Completed"],
  ["10:30 AM", "Maple Ave Residence", "Next stop"],
  ["12:00 PM", "Cedar Court", "Scheduled"]
];

export function LoamPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#10170f] text-white selection:bg-[#79a857]/40">
      <LoamNav />
      <Hero />
      <VideoStory />
      <PainSection />
      <BeforeAfter />
      <FeatureCards />
      <DailyWorkflow />
      <RevenueWorkflow />
      <OperatorOutcomes />
      <FinalCta />
    </main>
  );
}

function LoamNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10170f]/86 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6" aria-label="LOAM navigation">
        <Link href="/" aria-label="2Stack home">
          <Image src="/navbar_logo.png" alt="2Stack" width={1500} height={509} className="h-8 w-auto" priority />
        </Link>
        <div className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/58 md:flex">
          <a href="#system" className="transition hover:text-white">
            System
          </a>
          <a href="#daily-run" className="transition hover:text-white">
            Daily Run
          </a>
          <a href="#revenue" className="transition hover:text-white">
            Revenue
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a href={loginUrl} className="hidden rounded-md border border-white/12 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/[0.06] sm:inline-flex">
            Existing users
          </a>
          <a href={discoveryUrl} className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#10170f] transition hover:bg-[#e5f1dc]">
            Book a call
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[calc(100dvh-73px)] max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_14%_12%,rgba(121,168,87,0.34),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(214,236,187,0.18),transparent_30%)]" />

      <div>
        <Image src="/loam-logo-white.svg" alt="LOAM" width={620} height={180} priority className="h-16 w-auto sm:h-20" />
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#b7dc9a]">Landscaping Operations and Management</p>
        <h1 className="mt-5 max-w-4xl font-[var(--font-display)] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
          Start every landscaping day with a controlled run.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d7e4cf]">
          LOAM turns messy routes, job status updates, invoicing, payments, photos, and follow-ups into one operational system built for landscaping crews.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={discoveryUrl} className="rounded-md bg-[#79a857] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_42px_rgba(121,168,87,0.32)] transition hover:bg-[#8fbb69]">
            Book a LOAM Discovery Call
          </a>
          <a href="#system" className="rounded-md border border-white/16 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.06]">
            See the System
          </a>
        </div>
      </div>

      <DashboardMock />
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-white/12 bg-[#172216] p-4 shadow-[0_28px_110px_rgba(0,0,0,0.42)] sm:p-5">
      <div className="rounded-lg bg-[#f6fbf1] p-5 text-[#172216]">
        <div className="flex items-start justify-between gap-4 border-b border-[#d7e4cf] pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5e873f]">Today’s Run</p>
            <h2 className="mt-1 text-2xl font-semibold">HDZ Landscaping</h2>
            <p className="mt-1 text-sm text-[#607452]">Thursday Maintenance Route</p>
          </div>
          <span className="rounded-full bg-[#e5f1dc] px-3 py-1 text-xs font-bold text-[#4f7737]">Crew A</span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            ["Stops", "8"],
            ["Completed", "5"],
            ["Pending", "3"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border border-[#d7e4cf] bg-white p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#748569]">{label}</p>
              <p className="mt-2 text-2xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-2">
          {stops.map(([time, name, status]) => (
            <div key={name} className="grid grid-cols-[74px_1fr_auto] items-center gap-3 rounded-md border border-[#d7e4cf] bg-white px-3 py-3 text-sm">
              <span className="font-semibold text-[#607452]">{time}</span>
              <span className="font-semibold">{name}</span>
              <span className={`rounded-full px-2 py-1 text-[11px] font-bold ${status === "Next stop" ? "bg-[#79a857] text-white" : "bg-[#edf5e8] text-[#5e873f]"}`}>
                {status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-md border border-[#d7e4cf] bg-white p-3">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#5e873f]">Invoice Draft</p>
            <p className="mt-2 text-xl font-bold">$185</p>
          </div>
          <div className="rounded-md border border-[#d7e4cf] bg-white p-3">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#5e873f]">Open Issue</p>
            <p className="mt-2 text-sm font-semibold">Gate access note</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoStory() {
  return (
    <section id="system" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7dc9a]">The daily run</p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
            By 10 AM, the route should not be off the rails.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#d7e4cf]">
            LOAM gives the company a one-click-through-the-day flow. Today’s Run is structured, the next stop is clear, the next action is clear, and job status moves from start to complete without another text thread.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <StoryCard
            title="Daily chaos"
            body="The day starts full. Then rain changes, missed stops, and crews asking what comes next start pulling the owner back in."
            stat="10:00 AM"
            label="Route drift begins"
          />
          <StoryCard
            title="Cash still slow"
            body="The work is done, but completion and collection are disconnected. Invoices happen later, if someone remembers."
            stat="$185"
            label="Draft ready after completion"
          />
        </div>
      </div>
    </section>
  );
}

function StoryCard({ title, body, stat, label }: { title: string; body: string; stat: string; label: string }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b7dc9a]">{label}</p>
      <p className="mt-5 font-[var(--font-display)] text-5xl font-semibold tracking-[-0.05em]">{stat}</p>
      <h3 className="mt-6 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#d7e4cf]">{body}</p>
    </article>
  );
}

function PainSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7dc9a]">The core problem</p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
            Your operation is not broken. It is scattered.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {painBullets.map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-[#10170f] p-4 text-sm font-semibold text-[#edf6e8]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
      <CompareCard title="Before LOAM" intro="Most landscaping companies are not short on effort. They are short on operational structure." items={beforeLoam} muted />
      <CompareCard title="With LOAM" intro="One operating layer for the full landscaping day." items={withLoam} />
    </section>
  );
}

function CompareCard({ title, intro, items, muted = false }: { title: string; intro: string; items: string[]; muted?: boolean }) {
  return (
    <article className={`rounded-lg border p-6 ${muted ? "border-white/10 bg-white/[0.025]" : "border-[#79a857]/40 bg-[#79a857]/12"}`}>
      <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-[-0.04em]">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-[#d7e4cf]">{intro}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="rounded-md border border-white/10 bg-[#10170f] px-4 py-3 text-sm font-semibold">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function FeatureCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7dc9a]">What LOAM controls</p>
        <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
          The daily work, connected to the office.
        </h2>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map(([title, body]) => (
          <article key={title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-4 text-sm leading-6 text-[#d7e4cf]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DailyWorkflow() {
  return (
    <section id="daily-run" className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7dc9a]">Daily workflow</p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
            From morning chaos to a repeatable run.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {dailySteps.map((step, index) => (
            <div key={step} className="rounded-lg border border-white/10 bg-[#10170f] p-4">
              <p className="text-xs font-semibold text-[#b7dc9a]">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-lg font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RevenueWorkflow() {
  return (
    <section id="revenue" className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:py-24">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7dc9a]">Revenue workflow</p>
        <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
          Stop letting completed work sit unbilled.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d7e4cf]">
          LOAM closes the gap between work completed and money collected. Every completed visit becomes part of a clear billing and payment workflow, so owners can stop chasing revenue from memory.
        </p>
      </div>
      <div className="rounded-lg border border-white/10 bg-[#f6fbf1] p-5 text-[#172216]">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5e873f]">Revenue Today</p>
        <div className="mt-5 grid gap-3">
          {[
            ["Earned", "$1,480"],
            ["Open", "$555"],
            ["Follow-up", "$185"],
            ["Expected Payment", "Pending"]
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between rounded-md border border-[#d7e4cf] bg-white px-4 py-3">
              <span className="text-sm font-semibold text-[#607452]">{label}</span>
              <span className="text-lg font-bold">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OperatorOutcomes() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b7dc9a]">Operator outcomes</p>
        <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
          Cleaner days make stronger companies.
        </h2>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {outcomes.map((outcome) => (
          <div key={outcome} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 text-lg font-semibold">
            {outcome}
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#e5f1dc] text-[#172216] shadow-[0_30px_110px_rgba(0,0,0,0.32)]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5e873f]">LOAM by 2Stack</p>
            <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
              Run the day. Capture the work. See the money.
            </h2>
          </div>
          <div className="rounded-lg border border-[#bdd7aa] bg-white p-5">
            <p className="text-sm font-semibold text-[#4f6344]">
              Built as the operational backbone for small landscaping companies ready for cleaner structure.
            </p>
            <a href={discoveryUrl} className="mt-5 inline-flex w-full justify-center rounded-md bg-[#79a857] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#658f49]">
              Book a LOAM Discovery Call
            </a>
            <a href={loginUrl} className="mt-3 inline-flex w-full justify-center rounded-md border border-[#bdd7aa] px-5 py-3 text-sm font-semibold text-[#172216] transition hover:bg-[#f6fbf1]">
              Existing LOAM users login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
