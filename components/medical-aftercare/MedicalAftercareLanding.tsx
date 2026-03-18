"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AftercareRiskScannerWidget } from "@/components/medical-aftercare/AftercareRiskScannerWidget";

const hiddenGapCards = [
  {
    title: "Patient Recovery Happens Out of Sight",
    body: "The most critical recovery signals often show up at home, long after discharge."
  },
  {
    title: "Complications Appear Days Later",
    body: "By the time symptoms are noticed, intervention windows can already be narrowing."
  },
  {
    title: "Care Teams Lack Visibility",
    body: "Providers have limited insight between visits when patient risk is still evolving."
  },
  {
    title: "Manual Follow-Ups Consume Staff Time",
    body: "Care coordinators spend hours chasing updates instead of prioritizing high-risk cases."
  },
  {
    title: "Patient Compliance Is Inconsistent",
    body: "Without structured recovery guidance, adherence drops and outcomes become less predictable."
  }
];

const costBlocks = [
  {
    title: "Preventable complications",
    severity: "Critical",
    detail: "Delayed signal detection increases clinical risk before intervention begins.",
    mitigation: "Early warning alerts flag risk patterns sooner so providers can intervene before escalation."
  },
  {
    title: "Unnecessary readmissions",
    severity: "High",
    detail: "Without early monitoring, avoidable escalations become expensive return visits.",
    mitigation: "Daily check-ins and triage workflows surface deterioration before a return visit is required."
  },
  {
    title: "Lower patient satisfaction",
    severity: "High",
    detail: "Patients feel unsupported when follow-up is inconsistent after discharge.",
    mitigation: "Structured communication keeps patients informed and reassured during recovery."
  },
  {
    title: "Delayed recovery timelines",
    severity: "Moderate",
    detail: "Small setbacks compound when recovery drift is identified too late.",
    mitigation: "Progress tracking identifies drift early so protocols can be adjusted quickly."
  },
  {
    title: "Administrative workload increases",
    severity: "Moderate",
    detail: "Care teams spend time chasing updates instead of prioritizing high-risk patients.",
    mitigation: "Automation reduces manual follow-up effort and prioritizes teams around the highest-risk cases."
  }
];

const severityOrder = ["Critical", "High", "Moderate"] as const;

const features = [
  {
    phase: "Plan",
    title: "Digital Recovery Plans",
    body: "Patients receive clear post-surgery recovery instructions, timelines, and exercises.",
    impact: "Standardized expectations from day one",
    signal: "Data captured: protocol acknowledgment • Owner: care coordinator"
  },
  {
    phase: "Monitor",
    title: "Daily Recovery Check-Ins",
    body: "Patients report pain levels, symptoms, and recovery progress.",
    impact: "Continuous recovery visibility outside visits",
    signal: "Data captured: pain, symptoms, mobility • Owner: patient + care team"
  },
  {
    phase: "Detect",
    title: "Early Warning Alerts",
    body: "Care teams are notified if recovery signals indicate possible complications.",
    impact: "Faster triage before complications escalate",
    signal: "Alert trigger: threshold variance • Owner: assigned provider"
  },
  {
    phase: "Intervene",
    title: "Patient Progress Tracking",
    body: "Providers gain visibility into recovery trends between visits.",
    impact: "Interventions guided by trend data, not guesswork",
    signal: "Data captured: trajectory over time • Owner: provider team"
  },
  {
    phase: "Coordinate",
    title: "Care Team Communication",
    body: "Secure messaging between patients and providers when support is needed.",
    impact: "Fewer dropped handoffs across teams and patients",
    signal: "Alert trigger: unresolved concern • Owner: care ops + clinician"
  }
];

const journey = [
  {
    day: "Day 1 — Patient Discharged",
    body: "Patient receives digital recovery plan and daily check-ins."
  },
  {
    day: "Day 3 — Symptom Spike",
    body: "Patient reports increased pain during daily check-in."
  },
  {
    day: "Day 4 — Alert Triggered",
    body: "System flags symptoms for provider review."
  },
  {
    day: "Day 5 — Intervention",
    body: "Provider responds and resolves issue early."
  },
  {
    day: "Week 2 — Recovery Progress",
    body: "Mobility improves and recovery stays on track."
  }
];

const cardClass =
  "rounded-2xl border border-[#e5e7eb] bg-white/95 backdrop-blur-[8px] transition-all duration-[250ms] ease-in-out hover:border-[rgba(255,102,170,0.45)] hover:shadow-[0_0_14px_rgba(255,102,170,0.28)]";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.36, ease: "easeOut" }
} as const;

const medicalAftercareBookingUrl = "https://calendly.com/2-stack-founders/aftercare-systems-review";

export function MedicalAftercareLanding() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);

  useEffect(() => {
    const onOpenBooking = () => setIsBookingOpen(true);
    window.addEventListener("openMedicalAftercareBooking", onOpenBooking as EventListener);
    return () => window.removeEventListener("openMedicalAftercareBooking", onOpenBooking as EventListener);
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
    <main className="relative min-h-screen bg-[#f6f8fc] text-[#1f2933]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(68,197,255,0.12),transparent_32%),radial-gradient(circle_at_92%_10%,rgba(255,102,170,0.10),transparent_34%),radial-gradient(circle_at_60%_98%,rgba(68,197,255,0.08),transparent_38%)]" />

      <section className="relative py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <motion.div {...fadeIn}>
            <h1 className="font-[var(--font-display)] text-4xl font-semibold leading-tight text-[#1f2933] md:text-5xl">
              The Surgery Isn&apos;t the End of Care
              <br />
              It&apos;s the Start of Recovery
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6b7280]">
              2Stack helps clinics, surgical practices, and care providers manage the critical weeks after surgery.
              Improve recovery outcomes, reduce complications, and give care teams better visibility outside the clinic.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#playbook"
                className="rounded-lg bg-[#ff66aa] px-6 py-3 text-sm font-semibold text-white transition-all duration-[250ms] ease-in-out hover:bg-[#44c5ff]"
              >
                Download the Aftercare Playbook
              </a>
              <a
                href="#modern-aftercare"
                className="rounded-lg border border-[#d1d5db] px-6 py-3 text-sm font-semibold text-[#374151] transition-all duration-[250ms] ease-in-out hover:border-[#44c5ff] hover:bg-[rgba(68,197,255,0.08)]"
              >
                See How the System Works
              </a>
            </div>
          </motion.div>

          <motion.aside {...fadeIn} className={`${cardClass} p-6`}>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[#44c5ff]">Recovery Command View</p>
              <span className="rounded-full border border-[#e5e7eb] px-2 py-1 text-xs text-[#6b7280]">
                Live
              </span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[#e5e7eb] bg-[#f8fafc] p-4">
                <p className="text-xs text-[#6b7280]">Patient recovery signals</p>
                <p className="mt-2 text-sm text-[#1f2933]">Stable for 84%, elevated risk for 16%</p>
              </div>
              <div className="rounded-xl border border-[#e5e7eb] bg-[#f8fafc] p-4">
                <p className="text-xs text-[#6b7280]">Daily symptom check-ins</p>
                <p className="mt-2 text-sm text-[#1f2933]">143 submitted today</p>
              </div>
              <div className="rounded-xl border border-[#e5e7eb] bg-[#f8fafc] p-4">
                <p className="text-xs text-[#6b7280]">Complication alerts</p>
                <p className="mt-2 text-sm text-[#ff66aa]">5 cases require review</p>
              </div>
              <div className="rounded-xl border border-[#e5e7eb] bg-[#f8fafc] p-4">
                <p className="text-xs text-[#6b7280]">Recovery progress tracking</p>
                <p className="mt-2 text-sm text-[#1f2933]">Week-over-week trend improving</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <Section id="hidden-gap" title="The Most Important Part of Recovery Happens After the Patient Goes Home">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {hiddenGapCards.map((item) => (
            <motion.article key={item.title} {...fadeIn} className={`${cardClass} p-5`}>
              <h3 className="text-base font-semibold text-[#ff66aa]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6b7280]">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="cost-of-aftercare" title="When Aftercare Breaks Down, The Consequences Are Real">
        <div className="space-y-8">
          {severityOrder.map((level) => {
            const items = costBlocks.filter((item) => item.severity === level);
            if (!items.length) return null;

            return (
              <div key={level}>
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] ${
                      level === "Critical"
                        ? "bg-[#ff66aa]/15 text-[#d43f84]"
                        : level === "High"
                          ? "bg-[#44c5ff]/14 text-[#2a89b7]"
                          : "bg-[#eef2ff] text-[#6b7280]"
                    }`}
                  >
                    {level}
                  </span>
                  <div className="h-px flex-1 bg-[#e5e7eb]" />
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <motion.article key={item.title} {...fadeIn} className={`${cardClass} flex h-full flex-col p-6`}>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-[#6b7280]">Consequence</p>
                      <p className="mt-2 text-lg font-semibold text-[#44c5ff]">{item.title}</p>
                      <p className="mt-3 text-sm leading-7 text-[#6b7280]">{item.detail}</p>

                      <div className="mt-4 rounded-xl border border-[#dbe7f5] bg-[#f8fbff] p-3">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-[#2a89b7]">Mitigation with Clopen</p>
                        <p className="mt-2 text-sm leading-6 text-[#4b5563]">{item.mitigation}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section id="modern-aftercare" title="Recovery Shouldn&apos;t Be Guesswork">
        <motion.div
          {...fadeIn}
          className="mb-8 rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm"
        >
          <p className="text-xs uppercase tracking-[0.14em] text-[#6b7280]">System Flow</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#1f2933]">
            {["Plan", "Monitor", "Detect", "Intervene", "Coordinate"].map((phase, index) => (
              <span key={phase} className="inline-flex items-center">
                <span className="rounded-full border border-[#d1d5db] bg-[#f8fafc] px-3 py-1">{phase}</span>
                {index < 4 ? <span className="px-2 text-[#9ca3af]">&#8594;</span> : null}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <motion.article key={feature.title} {...fadeIn} className={`${cardClass} p-5`}>
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-[#f1efe9] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6b7280]">
                  {feature.phase}
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-[#ff66aa]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6b7280]">{feature.body}</p>
              <p className="mt-3 text-sm font-medium text-[#1f2933]">{feature.impact}</p>
              <p className="mt-2 text-xs leading-6 text-[#6b7280]">{feature.signal}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="journey" title="Example Patient Recovery Journey">
        <div className={`${cardClass} p-6 md:p-8`}>
          <ol className="space-y-5">
            {journey.map((step) => (
              <motion.li key={step.day} {...fadeIn} className="relative border-l border-[#d1d5db] pl-6">
                <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[#ff66aa]" />
                <h3 className="text-base font-semibold text-[#44c5ff]">{step.day}</h3>
                <p className="mt-2 text-sm leading-7 text-[#6b7280]">{step.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="operations" title="Built to Support Care Teams — Not Burden Them">
        <motion.div {...fadeIn} className={`${cardClass} p-6 md:p-8`}>
          <ul className="space-y-3 text-sm leading-7 text-[#1f2933]">
            {[
              "Reduce manual patient follow-ups",
              "Monitor recovery without additional staff workload",
              "Identify complications earlier",
              "Improve patient adherence to recovery plans",
              "Give providers visibility between visits"
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#ff66aa]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </Section>

      <Section id="playbook" title="The Surgical Aftercare Playbook">
        <motion.div {...fadeIn} className={`${cardClass} grid gap-8 p-6 md:grid-cols-2 md:p-8`}>
          <div>
            <p className="text-sm leading-7 text-[#6b7280]">
              Learn how leading clinics improve recovery outcomes and reduce complications through better post-surgery
              monitoring.
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-[#1f2933]">
              {[
                "The Post-Surgery Monitoring Framework",
                "Early Warning Signs of Complications",
                "Recovery Compliance Tracking",
                "Care Team Workflow Design",
                "Recommended Technology Stack"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#ff66aa]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <form className="grid gap-3">
            <label className="text-xs uppercase tracking-[0.14em] text-[#6b7280]">
              Name
              <input
                type="text"
                name="name"
                className="mt-1 w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-2 text-sm text-[#1f2933] outline-none transition-all duration-[250ms] ease-in-out focus:border-[#44c5ff] focus:ring-2 focus:ring-[#44c5ff]/30"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.14em] text-[#6b7280]">
              Email
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-2 text-sm text-[#1f2933] outline-none transition-all duration-[250ms] ease-in-out focus:border-[#44c5ff] focus:ring-2 focus:ring-[#44c5ff]/30"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.14em] text-[#6b7280]">
              Role
              <input
                type="text"
                name="role"
                className="mt-1 w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-2 text-sm text-[#1f2933] outline-none transition-all duration-[250ms] ease-in-out focus:border-[#44c5ff] focus:ring-2 focus:ring-[#44c5ff]/30"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.14em] text-[#6b7280]">
              Organization
              <input
                type="text"
                name="organization"
                className="mt-1 w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-2 text-sm text-[#1f2933] outline-none transition-all duration-[250ms] ease-in-out focus:border-[#44c5ff] focus:ring-2 focus:ring-[#44c5ff]/30"
              />
            </label>
            <button
              type="submit"
              className="mt-2 rounded-lg bg-[#ff66aa] px-6 py-3 text-sm font-semibold text-white transition-all duration-[250ms] ease-in-out hover:bg-[#44c5ff]"
            >
              Download the Playbook
            </button>
          </form>
        </motion.div>
      </Section>

      <Section id="why-2stack" title="Operators Helping Operators">
        <motion.div {...fadeIn} className={`${cardClass} p-6 md:p-8`}>
          <p className="text-sm leading-7 text-[#6b7280]">
            2Stack works with organizations that care deeply about the work they do.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#6b7280]">
            We believe healthcare teams don&apos;t need more software. They need better systems that support the care
            they already provide.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#6b7280]">
            Our work focuses on building practical tools that extend care beyond the clinic and improve recovery
            visibility.
          </p>
        </motion.div>
      </Section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            {...fadeIn}
            className="rounded-2xl border border-[#e5e7eb] bg-gradient-to-br from-white to-[#f4f7fc] p-8 text-center shadow-sm md:p-12"
          >
            <h2 className="font-[var(--font-display)] text-3xl font-semibold text-[#1f2933] md:text-4xl">
              Better Recovery Starts With Better Visibility
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={openBooking}
                className="rounded-lg bg-[#ff66aa] px-6 py-3 text-sm font-semibold text-white transition-all duration-[250ms] ease-in-out hover:bg-[#44c5ff]"
              >
                Schedule a Conversation
              </button>
              <a
                href="#playbook"
                className="rounded-lg border border-[#d1d5db] px-6 py-3 text-sm font-semibold text-[#374151] transition-all duration-[250ms] ease-in-out hover:border-[#44c5ff] hover:bg-[rgba(68,197,255,0.08)]"
              >
                Download the Aftercare Playbook
              </a>
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
            className="fixed inset-0 z-[120] bg-black/55 p-4 backdrop-blur-sm"
            onClick={() => setIsBookingOpen(false)}
          >
            <div className="flex min-h-full items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-5xl rounded-2xl border border-[#e5e7eb] bg-white p-4 shadow-2xl md:p-5"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="font-[var(--font-display)] text-lg font-semibold text-[#1f2933]">
                    Book Your Aftercare Systems Review
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(false)}
                    className="rounded-md border border-[#d1d5db] px-2.5 py-1 text-xs text-[#4b5563] transition hover:bg-[#f3f4f6]"
                  >
                    Close
                  </button>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#e5e7eb] bg-white">
                  <iframe
                    title="Aftercare Systems Review Booking"
                    src={medicalAftercareBookingUrl}
                    className="h-[72vh] w-full"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AftercareRiskScannerWidget />
    </main>
  );
}

function Section({
  id,
  title,
  children
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.h2
          {...fadeIn}
          className="font-[var(--font-display)] text-3xl font-semibold text-[#1f2933] md:text-4xl"
        >
          {title}
        </motion.h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
