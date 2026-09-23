import Image from "next/image";
import Link from "next/link";
import type { SeoLandingPage as SeoLandingPageData } from "@/lib/seo-content";

const bookingUrls = {
  clopen: "https://calendly.com/2-stack-founders/clopen_walkthrough",
  rake: "https://calendly.com/2-stack-founders/home-services-systems-review-meet-the-founders"
} as const;

export function SeoLandingPage({ page }: { page: SeoLandingPageData }) {
  const isClopen = page.vertical === "clopen";
  const colors = isClopen
    ? {
        page: "bg-[#f7f1e7] text-[#1f2933]",
        nav: "border-[#d8c8b2] bg-[#f7f1e7]/92",
        accent: "text-[#a95c17]",
        button: "bg-[#a95c17] text-white hover:bg-[#87470f]",
        panel: "border-[#d8c8b2] bg-[#fffaf1]",
        soft: "bg-[#efe2cf]",
        muted: "text-[#5c6570]"
      }
    : {
        page: "bg-[#07111f] text-white",
        nav: "border-white/10 bg-[#07111f]/92",
        accent: "text-[#9ecbff]",
        button: "bg-[#1f67b1] text-white hover:bg-[#2f7dcd]",
        panel: "border-white/10 bg-white/[0.04]",
        soft: "bg-[#0d1c31]",
        muted: "text-slate-300"
      };

  return (
    <main className={`min-h-screen ${colors.page}`}>
      <header className={`sticky top-0 z-50 border-b backdrop-blur-xl ${colors.nav}`}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4" aria-label={`${page.brand} resources`}>
          <Link href="/" className="flex items-center gap-3" aria-label={`${page.brand} home`}>
            <Image
              src={isClopen ? "/clopen-logo.svg" : "/rake-logo-mark.svg"}
              alt={page.brand}
              width={isClopen ? 174 : 220}
              height={isClopen ? 51 : 64}
              className={`h-8 w-auto ${isClopen ? "" : "brightness-0 invert"}`}
              priority
            />
          </Link>
          <a href={bookingUrls[page.vertical]} className={`rounded-md px-4 py-2 text-sm font-semibold transition ${colors.button}`}>
            Book a discovery
          </a>
        </nav>
      </header>

      <article>
        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
          <div>
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${colors.accent}`}>{page.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl font-[var(--font-display)] text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
              {page.headline}
            </h1>
            <p className={`mt-7 max-w-3xl text-lg leading-8 ${colors.muted}`}>{page.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={bookingUrls[page.vertical]} className={`rounded-md px-5 py-3 text-center text-sm font-semibold transition ${colors.button}`}>
                Book a discovery call
              </a>
              <a href="#how-it-works" className={`rounded-md border px-5 py-3 text-center text-sm font-semibold ${colors.panel}`}>
                See the 90-day rollout
              </a>
            </div>
          </div>

          <aside className={`rounded-xl border p-6 shadow-2xl ${colors.panel}`} aria-label="Best fit">
            <p className={`text-xs font-bold uppercase tracking-[0.18em] ${colors.accent}`}>Best fit</p>
            <p className="mt-3 text-xl font-semibold leading-8">{page.idealFor}</p>
            <dl className="mt-7 grid gap-4 text-sm">
              <div>
                <dt className={colors.muted}>Engagement</dt>
                <dd className="mt-1 font-semibold">Custom-built operating system</dd>
              </div>
              <div>
                <dt className={colors.muted}>Rollout</dt>
                <dd className="mt-1 font-semibold">90 days with 30- and 60-day benchmarks</dd>
              </div>
              <div>
                <dt className={colors.muted}>First step</dt>
                <dd className="mt-1 font-semibold">Discovery and current-state assessment</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className={`border-y ${isClopen ? "border-[#d8c8b2]" : "border-white/10"}`}>
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <div className="max-w-3xl">
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${colors.accent}`}>What gets built</p>
              <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                A system shaped around the way your business actually works.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {page.sections.map((section) => (
                <section key={section.title} className={`rounded-xl border p-6 ${colors.panel}`}>
                  <h3 className="text-2xl font-semibold tracking-[-0.025em]">{section.title}</h3>
                  <p className={`mt-4 leading-7 ${colors.muted}`}>{section.body}</p>
                  <ul className="mt-6 space-y-3 text-sm font-medium">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className={colors.accent} aria-hidden>●</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className={`scroll-mt-24 ${colors.soft}`}>
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${colors.accent}`}>Implementation</p>
            <h2 className="mt-4 max-w-3xl font-[var(--font-display)] text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              A 90-day rollout with useful checkpoints before the finish line.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {page.rollout.map((phase) => (
                <section key={phase.label} className={`rounded-xl border p-6 ${colors.panel}`}>
                  <p className={`text-sm font-bold uppercase tracking-[0.16em] ${colors.accent}`}>{phase.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{phase.title}</h3>
                  <p className={`mt-4 leading-7 ${colors.muted}`}>{phase.body}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-16 lg:py-20">
          <p className={`text-xs font-bold uppercase tracking-[0.2em] ${colors.accent}`}>Questions owners ask</p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 divide-y divide-current/10 border-y border-current/10">
            {page.faqs.map((faq) => (
              <section key={faq.question} className="py-6">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className={`mt-3 leading-7 ${colors.muted}`}>{faq.answer}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-16">
          <div className={`rounded-xl border p-7 md:p-10 ${colors.panel}`}>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
              <div>
                <p className={`text-xs font-bold uppercase tracking-[0.2em] ${colors.accent}`}>{page.brand} by 2Stack</p>
                <h2 className="mt-4 font-[var(--font-display)] text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                  Start with the operational problem—not a software shopping list.
                </h2>
                <p className={`mt-5 max-w-2xl leading-7 ${colors.muted}`}>
                  In a discovery call, we will map the current constraint, the tools already in place, and what a useful first 30-day benchmark should look like.
                </p>
              </div>
              <a href={bookingUrls[page.vertical]} className={`rounded-md px-6 py-4 text-center font-semibold transition ${colors.button}`}>
                Book a discovery call
              </a>
            </div>
          </div>
        </section>

        <section className={`border-t ${isClopen ? "border-[#d8c8b2]" : "border-white/10"}`}>
          <div className="mx-auto max-w-6xl px-5 py-10">
            <p className={`text-xs font-bold uppercase tracking-[0.18em] ${colors.accent}`}>Related resources</p>
            <nav className="mt-4 flex flex-wrap gap-x-6 gap-y-3" aria-label="Related resources">
              {page.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="font-semibold underline decoration-current/30 underline-offset-4 hover:decoration-current">
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className={`mt-8 text-xs ${colors.muted}`}>
              Last updated <time dateTime="2026-09-23">September 23, 2026</time> · Questions?{" "}
              <a href="mailto:team@2stackops.com" className="underline underline-offset-4">team@2stackops.com</a>
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
