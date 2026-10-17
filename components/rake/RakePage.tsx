import "@fontsource/barlow/latin-400.css";
import "@fontsource/barlow/latin-500.css";
import "@fontsource/barlow/latin-600.css";
import "@fontsource/barlow-condensed/latin-600.css";
import "@fontsource/barlow-condensed/latin-700.css";
import Image from "next/image";
import Link from "next/link";
import { RakeBookingLink } from "@/components/rake/RakeBookingLink";
import { RakeVideoPlayer } from "@/components/rake/RakeVideoPlayer";
import { rakeSeoPages } from "@/lib/seo-content";

// Palette: asphalt #16181b, tar #1f2226, seam #30343a, galvanized #9ba2a9, chalk #ece9e2,
// chalk-line blue #5c9ce6 (used only for leaks, the one thing the page wants you to see).

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

const display = "font-['Barlow_Condensed'] font-bold tracking-[-0.01em]";
const primaryButton =
  "inline-flex items-center justify-center rounded-[3px] bg-[#ece9e2] px-6 py-3.5 text-base font-semibold text-[#16181b] transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5c9ce6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16181b]";

export function RakePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#16181b] font-['Barlow'] text-[17px] leading-relaxed text-[#ece9e2] antialiased selection:bg-[#5c9ce6]/40">
      <Nav />
      <Hero />
      <LeakPath />
      <Installs />
      <Proof />
      {rakeVslPlaybackId ? <Video playbackId={rakeVslPlaybackId} /> : null}
      <HowItWorks />
      <Founders />
      <FinalCta />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#30343a] bg-[#16181b]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6" aria-label="Rake">
        <Link href="/rake" className="flex items-baseline gap-2.5 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5c9ce6]" aria-label="Rake by 2Stack">
          <Image src="/rake-logo-mark.svg" alt="" width={1915} height={543} priority className="h-[18px] w-auto brightness-0 invert" />
          <span className="text-sm text-[#9ba2a9]">by 2Stack</span>
        </Link>
        <RakeBookingLink
          placement="nav"
          className="rounded-[3px] border border-[#4a4f56] px-3.5 py-2 text-sm font-semibold text-[#ece9e2] transition-colors hover:border-[#ece9e2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5c9ce6]"
        >
          Book the audit
        </RakeBookingLink>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:pb-24 lg:pt-28">
      <p className="text-[15px] text-[#9ba2a9]">For owner-run roofing companies running paid ads</p>
      <h1 className={`${display} mt-5 max-w-[15ch] text-[3.4rem] leading-[0.92] sm:text-7xl lg:text-[6.75rem]`}>
        You paid for the lead. Somebody else signed the roof.
      </h1>
      <div className="mt-10 grid gap-8 border-t border-[#30343a] pt-8 lg:grid-cols-[minmax(0,34rem)_auto] lg:items-end lg:justify-between">
        <p className="text-lg leading-8 text-[#c9ccd0] sm:text-xl sm:leading-9">
          Rake finds where your paid leads leak between the ad click and the signed contract, then installs the fix.
          Built by two guys from roofing: one ran operations for an $8M shop, the other sold roofs.
        </p>
        <div className="flex flex-col items-start gap-3">
          <RakeBookingLink placement="hero" className={primaryButton}>
            Book the free audit
          </RakeBookingLink>
          <p className="text-sm text-[#9ba2a9]">If it isn&apos;t worth fixing, we&apos;ll tell you.</p>
        </div>
      </div>
    </section>
  );
}

function LeakPath() {
  return (
    <section id="leaks" aria-labelledby="leaks-heading" className="border-t border-[#30343a] bg-[#1f2226]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20 lg:py-24">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 id="leaks-heading" className={`${display} text-5xl leading-[0.95] sm:text-6xl`}>
            Where paid leads leak
          </h2>
          <p className="mt-5 text-[#c9ccd0]">
            Most roofers don&apos;t have a lead problem. They have four leaks between the click and the contract, and every
            one of them is a lead you already paid for.
          </p>
        </div>

        <ol className="relative" aria-label="The path of a paid lead">
          <span className="absolute bottom-4 left-4 top-4 w-px -translate-x-1/2 bg-[#4a4f56]" aria-hidden="true" />
          {leadPath.map((step) =>
            step.kind === "stop" ? (
              <li key={step.label} className="relative grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-4 py-3">
                <span className="relative mx-auto block h-3 w-3 bg-[#ece9e2] ring-[6px] ring-[#1f2226]" aria-hidden="true" />
                <span className={`${display} text-2xl font-semibold tracking-normal sm:text-[1.7rem]`}>{step.label}</span>
              </li>
            ) : (
              <li key={step.title} className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-4 py-5">
                <span className="relative flex justify-center pt-2" aria-hidden="true">
                  <span className="block h-3.5 w-3.5 rotate-45 rounded-[0_50%_50%_50%] bg-[#5c9ce6] ring-[6px] ring-[#1f2226]" />
                </span>
                <div className="border-l-2 border-[#5c9ce6]/35 pl-5">
                  <p className="text-sm font-medium text-[#5c9ce6]">Leak {step.number}</p>
                  <h3 className="mt-1 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 max-w-[60ch] text-[#c9ccd0]">{step.body}</p>
                </div>
              </li>
            )
          )}
        </ol>
      </div>
    </section>
  );
}

function Installs() {
  return (
    <section aria-labelledby="installs-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="max-w-2xl">
        <h2 id="installs-heading" className={`${display} text-5xl leading-[0.95] sm:text-6xl`}>
          What we install
        </h2>
        <p className="mt-5 text-[#c9ccd0]">
          We build the system and keep it running. Your people keep making the calls.
        </p>
      </div>
      <div className="mt-12 grid gap-x-12 sm:grid-cols-2">
        {installs.map((item) => (
          <article key={item.title} className="border-t border-[#30343a] py-7">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 max-w-[52ch] text-[#c9ccd0]">{item.body}</p>
            <p className="mt-4 text-sm font-medium text-[#5c9ce6]">{item.closes}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section aria-labelledby="proof-heading" className="border-y border-[#30343a] bg-[#1f2226]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20 lg:py-24">
        <div>
          <h2 id="proof-heading" className={`${display} text-5xl leading-[0.95] sm:text-6xl`}>
            Running now for a New Jersey roofer
          </h2>
          <p className="mt-5 text-[#c9ccd0]">
            An owner-run roofing company spending on Facebook and Instagram ads. We keep their name private, and we&apos;ll
            walk you through the real setup on the call.
          </p>
        </div>
        <ul className="self-end">
          {proofItems.map((item) => (
            <li key={item} className="flex gap-4 border-b border-[#30343a] py-4 first:border-t">
              <span className="mt-[0.6rem] block h-2 w-2 shrink-0 bg-[#ece9e2]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Video({ playbackId }: { playbackId: string }) {
  return (
    <section aria-labelledby="video-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <h2 id="video-heading" className={`${display} text-5xl leading-[0.95] sm:text-6xl`}>
        Hear it from us
      </h2>
      <div className="mt-8 overflow-hidden rounded-[3px] border border-[#30343a]">
        <RakeVideoPlayer playbackId={playbackId} title="Rake by 2Stack" />
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <h2 id="how-heading" className={`${display} text-5xl leading-[0.95] sm:text-6xl`}>
        How it works
      </h2>
      <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {steps.map((step, index) => (
          <li key={step.title} className="border-t-2 border-[#ece9e2] pt-5">
            <span className={`${display} text-5xl leading-none text-[#4a4f56]`} aria-hidden="true">
              {index + 1}
            </span>
            <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
            <p className="mt-3 text-[#c9ccd0]">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Founders() {
  return (
    <section aria-labelledby="founders-heading" className="border-t border-[#30343a]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <h2 id="founders-heading" className={`${display} text-5xl leading-[0.95] sm:text-6xl`}>
          Who you&apos;d be talking to
        </h2>
        <p className="mt-5 max-w-2xl text-[#c9ccd0]">Two of us, and we take every call ourselves.</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-12">
          {founders.map((founder) => (
            <div key={founder.name}>
              <p className={`${display} text-3xl font-semibold tracking-normal`}>{founder.name}</p>
              <p className="mt-2 max-w-[44ch] text-[#c9ccd0]">{founder.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section aria-labelledby="book-heading" className="bg-[#ece9e2] text-[#16181b]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:py-24">
        <div>
          <h2 id="book-heading" className={`${display} max-w-[16ch] text-5xl leading-[0.95] sm:text-7xl`}>
            Got a few minutes to talk it through?
          </h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-8 text-[#3a3e44]">
            Book the audit and we&apos;ll look at your ads, your site and how fast your leads get a call before we talk. If
            now&apos;s not the time, we totally get it.
          </p>
        </div>
        <RakeBookingLink
          placement="final"
          className="inline-flex items-center justify-center rounded-[3px] bg-[#16181b] px-6 py-3.5 text-base font-semibold text-[#ece9e2] transition-colors hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16181b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#ece9e2]"
        >
          Book the free audit
        </RakeBookingLink>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-12 text-sm text-[#9ba2a9] sm:px-6">
      <div className="grid gap-8 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="text-[#ece9e2]">
            Rake is built by <Link href="/" className="underline underline-offset-4 hover:text-white">2Stack</Link>.
          </p>
          <ul className="mt-4 space-y-1.5">
            {rakeSeoPages.map((page) => (
              <li key={page.slug}>
                <Link href={`/rake/${page.slug}`} className="hover:text-[#ece9e2]">
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-1.5 sm:text-right">
          <a href="mailto:team@2stackops.com" className="block hover:text-[#ece9e2]">
            team@2stackops.com
          </a>
          <Link href="/privacy" className="block hover:text-[#ece9e2]">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
