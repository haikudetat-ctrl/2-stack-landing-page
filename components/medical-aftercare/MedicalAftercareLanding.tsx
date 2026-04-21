"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AftercareRiskScannerWidget } from "@/components/medical-aftercare/AftercareRiskScannerWidget";
import { trackBookingCta } from "@/lib/analytics";

const hiddenGapCards = [
  {
    title: "Patient Recovery Happens Off Site",
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
    title: "Manual Follow-Ups Consume Time",
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
    body: "Patient gets digital recovery plan and daily check-ins.",
    links: ["Discharge Instructions", "Medication Schedule", "Daily Check-In Setup"]
  },
  {
    day: "Day 3 — Symptom Spike",
    body: "Patient reports increased pain during daily check-in.",
    links: ["Pain Trend", "Symptom Log", "Escalation Criteria"]
  },
  {
    day: "Day 4 — Alert Triggered",
    body: "System flags symptoms for provider review.",
    links: ["Provider Alert", "Risk Classification", "Triage Notes"]
  },
  {
    day: "Day 5 — Intervention",
    body: "Provider responds and resolves issue early.",
    links: ["Care Plan Update", "Medication Adjustment", "Follow-Up Tasks"]
  },
  {
    day: "Week 2 — Recovery Progress",
    body: "Mobility improves and recovery stays on track.",
    links: ["Mobility Progress", "Adherence Report", "Next Visit Prep"]
  }
];

const careTeamChartRows = [
  {
    item: "Reduce manual patient follow-ups",
    effect: "Automation takes over routine outreach and check-ins.",
    status: "Improved"
  },
  {
    item: "Monitor recovery without additional staff workload",
    effect: "Signals are captured continuously without adding call burden.",
    status: "Tracked"
  },
  {
    item: "Identify complications earlier",
    effect: "Alert logic surfaces risk before escalation points.",
    status: "Escalation-Ready"
  },
  {
    item: "Improve patient adherence to recovery plans",
    effect: "Patients receive structured tasks and reminders daily.",
    status: "Stabilized"
  },
  {
    item: "Give providers visibility between visits",
    effect: "Recovery trend data remains visible across the full care window.",
    status: "Visible"
  }
] as const;

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

  const openBooking = () => {
    trackBookingCta("medical_aftercare", "medical_aftercare_booking_button");
    setIsBookingOpen(true);
  };

  useEffect(() => {
    const onOpenBooking = () => {
      trackBookingCta("medical_aftercare", "medical_aftercare_booking_event");
      setIsBookingOpen(true);
    };
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

      <header className="sticky inset-x-0 top-0 z-50 border-b border-[#e5e7eb] bg-white/95 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6" aria-label="Medical Aftercare navigation">
          <a href="#top" className="font-[var(--font-display)] text-base font-semibold tracking-tight text-[#1f2933]">
            2Stack Aftercare
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium text-[#4b5563] md:flex">
            <a href="#hidden-gap" className="transition-colors hover:text-[#ff66aa]">
              Recovery Gaps
            </a>
            <a href="#modern-aftercare" className="transition-colors hover:text-[#ff66aa]">
              System
            </a>
            <a href="#journey" className="transition-colors hover:text-[#ff66aa]">
              Journey
            </a>
            <a href="#playbook" className="transition-colors hover:text-[#ff66aa]">
              Playbook
            </a>
            <button
              type="button"
              onClick={openBooking}
              className="rounded-lg bg-[#ff66aa] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#44c5ff]"
            >
              Schedule a Conversation
            </button>
          </div>

          <button
            type="button"
            onClick={openBooking}
            className="rounded-lg bg-[#ff66aa] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#44c5ff] md:hidden"
          >
            Schedule
          </button>
        </nav>
      </header>

      <section id="top" className="relative border-b border-[#e8edf5] bg-gradient-to-b from-[#f9fbff] to-[#f6f8fc] py-20">
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

          <motion.aside {...fadeIn} className={`${cardClass} overflow-hidden p-0`}>
            <div className="flex items-center justify-between border-b border-[#e5e7eb] bg-gradient-to-r from-white to-[#f6fbff] px-4 py-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6b7280]">Clopen Aftercare OS</p>
                <p className="mt-1 text-sm font-semibold text-[#1f2933]">Recovery Command View</p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-[#44c5ff]/40 bg-[#ecf9ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1e7ea8] shadow-[0_0_0_1px_rgba(68,197,255,0.22),0_0_14px_rgba(68,197,255,0.24)]"
                aria-label="Live sync active"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#44c5ff]/70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#44c5ff]" />
                </span>
                Live Sync
              </button>
            </div>

            <div className="p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[#44c5ff]/35 bg-[#edf9ff] px-3 py-1 text-[11px] font-semibold text-[#1e7ea8]">
                  Signals
                </span>
                <span className="rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-[11px] font-medium text-[#6b7280]">
                  Patients
                </span>
                <span className="rounded-full border border-[#e5e7eb] bg-white px-3 py-1 text-[11px] font-medium text-[#6b7280]">
                  Alerts
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-[#e5e7eb] bg-[#f8fbff] p-3">
                  <p className="text-[11px] text-[#6b7280]">Daily check-ins</p>
                  <p className="mt-1 text-sm font-semibold text-[#1f2933]">143 submitted</p>
                </div>
                <div className="rounded-xl border border-[#e5e7eb] bg-[#fff8fc] p-3">
                  <p className="text-[11px] text-[#6b7280]">Alert queue</p>
                  <p className="mt-1 text-sm font-semibold text-[#ff66aa]">5 needs review</p>
                </div>
                <div className="rounded-xl border border-[#e5e7eb] bg-[#f6fbff] p-3">
                  <p className="text-[11px] text-[#6b7280]">Recovery trend</p>
                  <p className="mt-1 text-sm font-semibold text-[#1f2933]">84% stable</p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-xl border border-[#e5e7eb] bg-white p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6b7280]">Patient signal queue</p>
                  <div className="mt-3 space-y-2">
                    {[
                      { name: "P-2184", signal: "Pain spike + mobility drop", status: "Escalated" },
                      { name: "P-1742", signal: "Medication missed", status: "Flagged" },
                      { name: "P-2110", signal: "Recovery on track", status: "Stable" }
                    ].map((item) => (
                      <div key={item.name} className="rounded-lg border border-[#edf1f7] bg-[#f9fbff] px-3 py-2">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs font-semibold text-[#1f2933]">{item.name}</p>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                              item.status === "Escalated"
                                ? "bg-[#ff66aa]/15 text-[#d43f84]"
                                : item.status === "Flagged"
                                  ? "bg-[#44c5ff]/15 text-[#2a89b7]"
                                  : "bg-[#e9f8f1] text-[#2b8c67]"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] text-[#6b7280]">{item.signal}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-[#e5e7eb] bg-white p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6b7280]">Intervention feed</p>
                  <div className="mt-3 space-y-2.5">
                    <div className="rounded-lg border border-[#edf1f7] bg-[#f9fbff] px-3 py-2">
                      <p className="text-[11px] text-[#6b7280]">2 min ago</p>
                      <p className="mt-1 text-xs text-[#1f2933]">Nurse review assigned for P-2184</p>
                    </div>
                    <div className="rounded-lg border border-[#edf1f7] bg-[#f9fbff] px-3 py-2">
                      <p className="text-[11px] text-[#6b7280]">8 min ago</p>
                      <p className="mt-1 text-xs text-[#1f2933]">Symptom alert triggered from daily check-in</p>
                    </div>
                    <div className="rounded-lg border border-[#edf1f7] bg-[#f9fbff] px-3 py-2">
                      <p className="text-[11px] text-[#6b7280]">14 min ago</p>
                      <p className="mt-1 text-xs text-[#1f2933]">Care plan acknowledgement completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <Section
        id="hidden-gap"
        title="Recovery Happens After the Patient Goes Home."
        tone="white"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {hiddenGapCards.map((item) => (
            <motion.article key={item.title} {...fadeIn} className={`${cardClass} flex h-full flex-col p-5`}>
              <h3 className="min-h-[4.5rem] text-base font-semibold text-[#ff66aa]">{item.title}</h3>
              <p className="mt-3 text-sm leading-[1.3rem] text-[#6b7280]">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="cost-of-aftercare" title="When Aftercare Breaks Down, The Consequences Are Real" tone="cool">
        <div className="grid gap-4 lg:grid-cols-3">
          {severityOrder.map((level) => {
            const items = costBlocks.filter((item) => item.severity === level);
            if (!items.length) return null;

            return (
              <motion.article key={level} {...fadeIn} className={`${cardClass} flex h-full flex-col p-4 md:p-5`}>
                <div className="flex items-center gap-2.5 border-b border-[#e5e7eb] pb-3">
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
                  <p className="text-[11px] font-medium text-[#6b7280]">{items.length} signals</p>
                </div>

                <div className="mt-3 space-y-2.5">
                  {items.map((item) => (
                    <div key={item.title} className="rounded-lg border border-[#e5e7eb] bg-white p-3.5">
                      <p
                        className={`text-sm font-semibold ${
                          level === "Critical" ? "text-[#d43f84]" : level === "High" ? "text-[#2a89b7]" : "text-[#1f2933]"
                        }`}
                      >
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#6b7280]">{item.detail}</p>
                      <div className="mt-2 rounded-md border border-[#dbe7f5] bg-[#f8fbff] px-2.5 py-2">
                        <p className="text-[11px] leading-5 text-[#4b5563]">
                          <span className="font-semibold text-[#2a89b7]">Mitigation:</span> {item.mitigation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Section>

      <Section id="modern-aftercare" title="Recovery Shouldn&apos;t Be Guesswork" tone="rose">
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

      <Section id="journey" title="Example Patient Recovery Journey" tone="white">
        <motion.div {...fadeIn} className={`${cardClass} overflow-hidden p-0`}>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e5e7eb] bg-gradient-to-r from-white to-[#f6fbff] px-4 py-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6b7280]">Recovery Calendar</p>
              <p className="mt-1 text-sm font-semibold text-[#1f2933]">Post-op Monitoring Window</p>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="rounded-full border border-[#44c5ff]/30 bg-[#ecf9ff] px-2.5 py-1 font-semibold text-[#2a89b7]">
                Week View
              </span>
              <span className="rounded-full border border-[#e5e7eb] bg-white px-2.5 py-1 font-medium text-[#6b7280]">
                Active Tracking
              </span>
            </div>
          </div>

          <div className="p-4 md:p-5">
            <div className="hidden grid-cols-5 gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6b7280] md:grid">
              <p className="rounded-md border border-[#ff66aa] bg-gradient-to-b from-[#ff9cc8] to-[#ff66aa] px-2 py-1 text-center text-white">
                Day 1
              </p>
              <p className="rounded-md border border-[#ff66aa] bg-gradient-to-b from-[#ff9cc8] to-[#ff66aa] px-2 py-1 text-center text-white">
                Day 3
              </p>
              <p className="rounded-md border border-[#ff66aa] bg-gradient-to-b from-[#ff9cc8] to-[#ff66aa] px-2 py-1 text-center text-white">
                Day 4
              </p>
              <p className="rounded-md border border-[#ff66aa] bg-gradient-to-b from-[#ff9cc8] to-[#ff66aa] px-2 py-1 text-center text-white">
                Day 5
              </p>
              <p className="rounded-md border border-[#ff66aa] bg-gradient-to-b from-[#ff9cc8] to-[#ff66aa] px-2 py-1 text-center text-white">
                Week 2
              </p>
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-5">
              {journey.map((step) => (
                <motion.article
                  key={step.day}
                  {...fadeIn}
                  className="flex h-full flex-col rounded-xl border border-[#e5e7eb] bg-white p-3"
                >
                  <p className="text-xs font-semibold text-[#44c5ff]">{step.day}</p>
                  <p className="mt-2 text-xs leading-5 text-[#6b7280]">{step.body}</p>
                  <div className="mt-3 space-y-1.5">
                    {step.links.map((item) => (
                      <a
                        key={`${step.day}-${item}`}
                        href="#"
                        onClick={(event) => event.preventDefault()}
                        className="block rounded-md border border-[#e5e7eb] bg-[#f8fafc] px-2.5 py-1.5 text-[11px] font-medium text-[#2a89b7] transition hover:border-[#44c5ff]/45 hover:bg-[#edf9ff]"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      <Section id="operations" title="Built to Support Care Teams, Not Burden Them" tone="cool">
        <motion.div {...fadeIn} className={`${cardClass} overflow-hidden p-0`}>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e5e7eb] bg-gradient-to-r from-white to-[#f7fbff] px-4 py-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6b7280]">Patient Chart View</p>
              <p className="mt-1 text-sm font-semibold text-[#1f2933]">Aftercare Operations Summary</p>
            </div>
            <span className="rounded-full border border-[#44c5ff]/35 bg-[#ecf9ff] px-2.5 py-1 text-[11px] font-semibold text-[#2a89b7]">
              Active Care Plan
            </span>
          </div>

          <div className="p-4 md:p-5">
            <div className="hidden rounded-lg border border-[#dbe7f5] bg-[#f8fbff] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6b7280] md:grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_10.5rem]">
              <p className="pl-2">Care Objective</p>
              <p>Clinical Impact</p>
              <p className="text-right">Status</p>
            </div>

            <div className="mt-2 divide-y divide-[#edf1f7] rounded-xl border border-[#e5e7eb] bg-white">
              {careTeamChartRows.map((row) => (
                <div key={row.item} className="grid gap-1.5 px-3 py-3 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_10.5rem] md:items-start md:gap-3">
                  <p className="pl-2 text-sm leading-5 font-semibold text-[#1f2933]">{row.item}</p>
                  <p className="text-xs leading-5 text-[#6b7280] md:pt-0.5">{row.effect}</p>
                  <div className="flex md:justify-end">
                    <span className="rounded-full border border-[#ffd3e8] bg-[#fff5fb] px-2.5 py-1 text-[11px] font-semibold text-[#d43f84]">
                      {row.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      <Section id="playbook" title="The Surgical Aftercare Playbook" tone="rose">
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

      <Section id="why-2stack" title="Operators Helping Operators" tone="white">
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

      <section className="border-y border-[#e8edf5] bg-gradient-to-b from-[#f4f8ff] to-[#f9fbff] py-16">
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
  children,
  tone = "base",
  spacingClass = "pt-8 pb-8"
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  tone?: "base" | "white" | "cool" | "rose";
  spacingClass?: string;
}) {
  const toneClass = {
    base: "bg-transparent",
    white: "border-y border-[#edf1f7] bg-white",
    cool: "border-y border-[#e8edf5] bg-gradient-to-b from-[#f4f9ff] to-[#f8fbff]",
    rose: "border-y border-[#f2e8ef] bg-gradient-to-b from-[#fff8fc] to-white"
  } as const;

  return (
    <section id={id} className={`${spacingClass} ${toneClass[tone]}`}>
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
