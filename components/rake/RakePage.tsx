import Image from "next/image";
import Link from "next/link";
import { RakeBookingLink } from "@/components/rake/RakeBookingLink";
import { RakeVideoPlayer } from "@/components/rake/RakeVideoPlayer";
import { rakeSeoPages } from "@/lib/seo-content";

// Set to the Mux playback ID once the Rake VSL is uploaded. The section stays hidden until then.
const rakeVslPlaybackId: string | null = null;

type PathStep =
  | { kind: "stop"; label: string }
  | { kind: "leak"; number: number; title: string; body: string };

const leadPath: PathStep[] = [
  { kind: "stop", label: "Ad click" },
  {
    kind: "leak",
    number: 1,
    title: "Slow first touch",
    body: "The form comes in at 7pm and the first call goes out the next afternoon. By then they've talked to two other roofers."
  },
  { kind: "stop", label: "Appointment set" },
  {
    kind: "leak",
    number: 2,
    title: "No-shows",
    body: "The appointment gets set, nobody confirms it, and your rep drives out to an empty driveway."
  },
  { kind: "stop", label: "The sit" },
  {
    kind: "leak",
    number: 3,
    title: "No follow-up after the sit",
    body: "They didn't sign at the kitchen table, and nobody has called them since."
  },
  {
    kind: "leak",
    number: 4,
    title: "The quoted pile",
    body: "Months of quotes nobody has touched. Some of those homeowners still need a roof, and they'll buy it from whoever calls."
  },
  { kind: "stop", label: "Signed job" }
];

const installs = [
  {
    title: "Instant quote site",
    body: "Homeowners put in their address and see a real price range on the spot. Your team gets a warmer lead and knows the number they saw.",
    closes: "Closes leak 1"
  },
  {
    title: "Fast first touch",
    body: "Every new lead gets a text within minutes and lands in front of your own setters to call. Appointments get confirmed before anyone drives out.",
    closes: "Closes leaks 1 and 2"
  },
  {
    title: "Quoted-pile reactivation",
    body: "Follow-up after every sit, plus a steady pass back through old quotes, so homeowners who still need a roof hear from you first.",
    closes: "Closes leaks 3 and 4"
  },
  {
    title: "Ad spend to signed job tracking",
    body: "Every lead tied to the ad that brought it, all the way to the signed contract. You see what a signed job really costs you and where the rest leaked.",
    closes: "Shows all four"
  }
];

// Illustrative numbers for the example owner view. Not client data.
const exampleMetrics = [
  ["Ad spend", "$4,200"],
  ["New leads", "61"],
  ["Called in 5 min", "92%"],
  ["Appointments", "24"],
  ["Show rate", "83%"],
  ["Signed jobs", "7"],
  ["Cost per signed job", "$600"]
];

const attentionItems = [
  "2 leads from last night still waiting on a first call",
  "3 appointments tomorrow not confirmed",
  "9 quotes older than 30 days with no follow-up",
  "1 ad bringing leads that never book"
];

// Anonymized on purpose. Add numbers here only once the owner has OK'd sharing them.
const proofItems = [
  "The instant quote site their ads point to",
  "Server-side tracking on every ad click, so nothing depends on a pixel firing",
  "One funnel from ad spend to signed job, pulled from the lead and CRM tools they already use",
  "Their Facebook and Instagram campaigns, with every ad approved by us before it runs"
];

const steps = [
  {
    title: "Free lead-control audit",
    body: "We look at your ads, your site, your quote flow and how fast leads get a call, then show you where they leak. It's yours to keep whether or not you hire us."
  },
  {
    title: "Fixed-fee install",
    body: "We build the pieces that fix your biggest leaks, scoped to what the audit found and priced before we start."
  },
  {
    title: "Smaller monthly retainer",
    body: "We keep it running, watch the numbers with you, and tune it as your ads and your season change."
  }
];

const founders = [
  {
    name: "Joe Biaselli",
    line: "Ran operations at an $8M roofing company, effectively the COO. Designs everything Rake puts in front of a homeowner."
  },
  {
    name: "Chris Boland",
    line: "Sold roofs after twelve years in restaurants, the last few as a general manager. Builds the systems."
  }
];

const eyebrow = "text-xs font-semibold uppercase tracking-[0.22em] text-[#9ecbff]";
const heading =
  "mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl";

export function RakePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#07111f] text-white selection:bg-[#1f67b1]/45">
      <RakeNav />
      <Hero />
      <LeakPath />
      <Installs />
      <OwnerView />
      <Proof />
      {rakeVslPlaybackId ? <Video playbackId={rakeVslPlaybackId} /> : null}
      <HowItWorks />
      <Founders />
      <FinalCta />
      <RakeFooter />
    </main>
  );
}

function RakeNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/86 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6" aria-label="Rake navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="2Stack home">
          <Image src="/navbar_logo.png" alt="2Stack" width={1500} height={509} className="h-8 w-auto" priority />
        </Link>
        <div className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/62 md:flex">
          <a href="#leaks" className="transition hover:text-white">
            The leaks
          </a>
          <a href="#install" className="transition hover:text-white">
            What we install
          </a>
          <a href="#how" className="transition hover:text-white">
            How it works
          </a>
        </div>
        <RakeBookingLink
          placement="nav"
          className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#07111f] transition hover:bg-[#d8ecff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9ecbff]"
        >
          Book the audit
        </RakeBookingLink>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:min-h-[calc(100dvh-73px)] lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
      <div className="absolute inset-x-0 top-0 -z-10 h-[580px] bg-[radial-gradient(circle_at_18%_16%,rgba(64,139,219,0.32),transparent_36%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_30%)]" />

      <div>
        <Image src="/rake-logo-mark.svg" alt="Rake" width={620} height={176} priority className="h-14 w-auto brightness-0 invert sm:h-16" />
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#9ecbff]">
          Lead control for roofing contractors
        </p>
        <h1 className="mt-5 max-w-4xl font-[var(--font-display)] text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
          You paid for the lead.
          <span className="block text-[#9ecbff]">Somebody else signed the roof.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
          Rake finds where your paid leads leak between the ad click and the signed contract, then installs the fix.
          Built by two guys from roofing: one ran operations for an $8M shop, the other sold roofs.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <RakeBookingLink
            placement="hero"
            className="rounded-md bg-[#1f67b1] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_42px_rgba(31,103,177,0.32)] transition hover:bg-[#2f7dcd] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9ecbff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]"
          >
            Book the free audit
          </RakeBookingLink>
          <a
            href="#leaks"
            className="rounded-md border border-white/16 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.06]"
          >
            See where leads leak
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-400">If it isn&apos;t worth fixing, we&apos;ll tell you.</p>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.04] shadow-[0_28px_110px_rgba(0,0,0,0.42)]">
        <Image
          src="/rake-vertical-ad.png"
          alt="Rake for roofing contractors"
          width={900}
          height={1334}
          priority
          className="aspect-[4/5] w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/92 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="rounded-lg border border-white/12 bg-[#07111f]/78 p-4 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9ecbff]">Owner view</p>
            <p className="mt-2 text-xl font-semibold">Every lead, from ad click to signed job.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeakPath() {
  return (
    <section id="leaks" className="mx-auto grid max-w-7xl scroll-mt-20 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 lg:py-24">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className={eyebrow}>The leak</p>
        <h2 className={heading}>Most roofers don&apos;t have a lead problem.</h2>
        <p className="mt-6 max-w-xl text-xl leading-8 text-slate-300">
          They have four leaks between the click and the contract. Every one is a lead you already paid for.
        </p>
      </div>

      <ol className="relative" aria-label="The path of a paid lead">
        <span className="absolute bottom-5 left-4 top-5 w-px -translate-x-1/2 bg-white/15" aria-hidden="true" />
        {leadPath.map((step) =>
          step.kind === "stop" ? (
            <li key={step.label} className="relative grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-4 py-3">
              <span className="relative mx-auto block h-3 w-3 rounded-sm bg-white ring-[6px] ring-[#07111f]" aria-hidden="true" />
              <span className="font-[var(--font-display)] text-xl font-semibold tracking-[-0.02em]">{step.label}</span>
            </li>
          ) : (
            <li key={step.title} className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-4 py-2">
              <span className="relative flex justify-center pt-5" aria-hidden="true">
                <span className="block h-3.5 w-3.5 rotate-45 rounded-[0_50%_50%_50%] bg-[#5f9de0] ring-[6px] ring-[#07111f]" />
              </span>
              <div className="rounded-lg border border-[#1f67b1]/40 bg-[#0d1c31] p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9ecbff]">Leak {step.number}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step.body}</p>
              </div>
            </li>
          )
        )}
      </ol>
    </section>
  );
}

function Installs() {
  return (
    <section id="install" className="scroll-mt-20 border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-3xl">
          <p className={eyebrow}>What we install</p>
          <h2 className={heading}>We build the system. Your people keep making the calls.</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {installs.map((item) => (
            <article key={item.title} className="rounded-lg border border-white/10 bg-[#07111f] p-5 sm:p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.body}</p>
              <p className="mt-4 inline-flex rounded-full border border-[#1f67b1]/50 bg-[#1f67b1]/15 px-3 py-1 text-xs font-semibold text-[#9ecbff]">
                {item.closes}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OwnerView() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mb-8 max-w-3xl">
        <p className={eyebrow}>Ad spend to signed job</p>
        <h2 className={heading}>One morning view. No hunting.</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
        <div className="rounded-lg border border-white/10 bg-[#f7fbff] p-5 text-[#07111f] shadow-[0_30px_110px_rgba(0,0,0,0.36)] sm:p-6">
          <div className="flex items-center justify-between gap-4 border-b border-[#d9e5f2] pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1f67b1]">Lead control</p>
              <h3 className="mt-1 text-2xl font-semibold">Example roofing co.</h3>
            </div>
            <span className="rounded-full border border-[#c9d7e6] px-3 py-1 text-xs font-semibold text-[#42617f]">This week</span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {exampleMetrics.map(([label, value]) => (
              <div key={label} className="rounded-lg border border-[#d9e5f2] bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#60758a]">{label}</p>
                <p className="mt-2 text-2xl font-bold tracking-[-0.03em]">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#60758a]">Example numbers, not client data.</p>
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
            Every item on that list is a lead you paid for. Rake puts it in front of someone before it goes cold.
          </p>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:py-24">
        <div>
          <p className={eyebrow}>Running now</p>
          <h2 className={heading}>Built for a New Jersey roofer.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            An owner-run roofing company spending on Facebook and Instagram ads. We keep their name private, and we&apos;ll
            walk you through the real setup on the call.
          </p>
        </div>
        <div className="grid gap-3">
          {proofItems.map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-[#07111f] p-4 text-sm font-semibold leading-6 text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Video({ playbackId }: { playbackId: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <p className={eyebrow}>From the founders</p>
      <h2 className={heading}>Hear it from us.</h2>
      <div className="mt-8 overflow-hidden rounded-lg border border-white/10 shadow-[0_28px_110px_rgba(0,0,0,0.42)]">
        <RakeVideoPlayer playbackId={playbackId} title="Rake by 2Stack" />
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:py-24">
      <div className="max-w-3xl">
        <p className={eyebrow}>How it works</p>
        <h2 className={heading}>Audit first. Then we build.</h2>
      </div>
      <ol className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-6">
            <p className="text-xs font-semibold text-[#9ecbff]">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Founders() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-3xl">
          <p className={eyebrow}>Who you&apos;d be talking to</p>
          <h2 className={heading}>Two of us. We take every call ourselves.</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {founders.map((founder) => (
            <div key={founder.name} className="rounded-lg border border-white/10 bg-[#07111f] p-5 sm:p-6">
              <p className="font-[var(--font-display)] text-2xl font-semibold tracking-[-0.03em]">{founder.name}</p>
              <p className="mt-3 leading-7 text-slate-300">{founder.line}</p>
            </div>
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1f67b1]">Rake by 2Stack</p>
            <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-none tracking-[-0.045em] md:text-6xl">
              Got a few minutes to talk it through?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#26445f]">
              Book the audit and we&apos;ll look at your ads, your site and how fast your leads get a call before we talk.
            </p>
          </div>
          <div className="rounded-lg border border-[#9ecbff] bg-white p-5">
            <p className="text-sm font-semibold text-[#26445f]">If now&apos;s not the time, we totally get it. The audit will still be here.</p>
            <RakeBookingLink
              placement="final"
              className="mt-5 inline-flex w-full justify-center rounded-md bg-[#1f67b1] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#15528f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1f67b1] focus-visible:ring-offset-2"
            >
              Book the free audit
            </RakeBookingLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function RakeFooter() {
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-12 text-sm text-slate-400 sm:px-6">
      <div className="grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9ecbff]">Contractor guides</p>
          <ul className="mt-4 space-y-1.5">
            {rakeSeoPages.map((page) => (
              <li key={page.slug}>
                <Link href={`/rake/${page.slug}`} className="transition hover:text-white">
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-1.5 sm:text-right">
          <Link href="/" className="block transition hover:text-white">
            Rake is built by 2Stack
          </Link>
          <a href="mailto:team@2stackops.com" className="block transition hover:text-white">
            team@2stackops.com
          </a>
          <a href="https://2-stack.com/privacy" className="block underline underline-offset-4 transition hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
