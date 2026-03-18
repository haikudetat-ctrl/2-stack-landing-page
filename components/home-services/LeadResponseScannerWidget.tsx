"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ScannerOption = {
  label: string;
  score: 1 | 2 | 3 | 4;
};

type ScannerQuestion = {
  prompt: string;
  options: ScannerOption[];
};

type LeadCapture = {
  name: string;
  email: string;
  company: string;
  phone: string;
};

const questions: ScannerQuestion[] = [
  {
    prompt: "How quickly does your team respond to inbound leads during business hours?",
    options: [
      { label: "Under 5 minutes", score: 4 },
      { label: "Within 15 minutes", score: 3 },
      { label: "Within 1 hour", score: 2 },
      { label: "Same day or next day", score: 1 }
    ]
  },
  {
    prompt: "What happens when a form fill or missed call comes in after hours?",
    options: [
      { label: "Instant routing + notification workflow", score: 4 },
      { label: "Assigned to office follow-up queue", score: 3 },
      { label: "Voicemail and manual callback list", score: 2 },
      { label: "No consistent process", score: 1 }
    ]
  },
  {
    prompt: "How is estimate follow-up handled when homeowners do not answer right away?",
    options: [
      { label: "Automated multi-touch follow-up", score: 4 },
      { label: "Manual process with reminders", score: 3 },
      { label: "Inconsistent manual follow-up", score: 2 },
      { label: "Rarely tracked after first attempt", score: 1 }
    ]
  },
  {
    prompt: "Can you see which lead sources actually turn into booked jobs?",
    options: [
      { label: "Yes, full lead-to-job tracking", score: 4 },
      { label: "Partial reporting", score: 3 },
      { label: "Spreadsheet-level visibility", score: 2 },
      { label: "No clear source-to-revenue tracking", score: 1 }
    ]
  }
];

const initialLead: LeadCapture = {
  name: "",
  email: "",
  company: "",
  phone: ""
};

export function LeadResponseScannerWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Array<1 | 2 | 3 | 4>>([]);
  const [leadCapture, setLeadCapture] = useState<LeadCapture>(initialLead);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 8000);

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const depth = window.scrollY / scrollable;
      if (depth >= 0.3) setIsVisible(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const onOpen = () => {
      setIsVisible(true);
      setIsOpen(true);
    };

    window.addEventListener("openLeadScanner", onOpen as EventListener);
    return () => window.removeEventListener("openLeadScanner", onOpen as EventListener);
  }, []);

  const progressPct = Math.round((Math.min(step, questions.length) / questions.length) * 100);
  const totalScore = answers.reduce((sum, answer) => sum + answer, 0);
  const result = useMemo(() => classifyLeadRisk(totalScore), [totalScore]);

  const reset = () => {
    setIsOpen(false);
    setStep(0);
    setAnswers([]);
    setLeadCapture(initialLead);
    setIsSubmitted(false);
  };

  const selectOption = (score: 1 | 2 | 3 | 4) => {
    if (step >= questions.length) return;
    setAnswers((prev) => [...prev, score]);
    setStep((prev) => prev + 1);
  };

  const goBack = () => {
    if (isSubmitted) {
      setIsSubmitted(false);
      return;
    }

    if (step === 0) return;

    setStep((prev) => prev - 1);
    setAnswers((prev) => prev.slice(0, -1));
  };

  const submitLead = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!leadCapture.name || !leadCapture.email || !leadCapture.company || !leadCapture.phone) return;
    setIsSubmitted(true);
  };

  const openEmbeddedBooking = () => {
    window.dispatchEvent(new CustomEvent("openHomeServicesBooking"));
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 26 }}
            className="fixed bottom-6 right-4 z-[90] md:right-6"
          >
            <motion.button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open lead response scanner"
              animate={{
                boxShadow: [
                  "0 8px 18px rgba(122,255,96,0.24)",
                  "0 10px 26px rgba(122,255,96,0.38)",
                  "0 8px 18px rgba(122,255,96,0.24)"
                ]
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="group rounded-xl border border-[#7aff60]/35 bg-[#7aff60] px-4 py-3 text-left text-[#182015] transition-all duration-300 hover:border-[#44c5ff] hover:bg-[#44c5ff] hover:text-[#0d2230]"
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <PhonePulseIcon />
                Check The Punchlist
              </span>
              <span className="mt-1 block text-xs text-[#182015]/0 transition-all duration-300 group-hover:text-[#0d2230]/90">
                Run a Lead Response Scan &#8594;
              </span>
            </motion.button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/65 p-4 backdrop-blur-sm"
          >
            <div className="flex min-h-full items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full max-w-3xl rounded-2xl border border-white/10 bg-[#222837] p-6 text-white md:p-8"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#7aff60]">
                      Lead Response Scanner
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-white/78">
                      Most home service companies lose jobs before they ever give an estimate. See how your current
                      lead handling system performs.
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#44c5ff]">
                      Answer 4 quick questions and get your score
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={reset}
                    className="rounded-md border border-white/20 px-2.5 py-1 text-xs text-white/80 transition hover:border-[#7aff60]/55 hover:text-white"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#44c5ff] shadow-[0_0_12px_rgba(68,197,255,0.55)] transition-all duration-300"
                    style={{ width: `${isSubmitted ? 100 : progressPct}%` }}
                  />
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/70">
                  {isSubmitted ? "Report complete" : `Signal Check ${Math.min(step + 1, questions.length)} / ${questions.length}`}
                </p>

                <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.035] p-4 md:p-5">
                  {step < questions.length ? (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <p className="text-base font-semibold text-white">{questions[step].prompt}</p>
                        <div className="mt-4 grid gap-2.5">
                          {questions[step].options.map((option) => (
                            <button
                              key={option.label}
                              type="button"
                              onClick={() => selectOption(option.score)}
                              className="rounded-lg border border-white/20 bg-[#1b2230] px-4 py-3 text-left text-sm text-white transition-all duration-300 hover:border-[#7aff60] hover:bg-[#7aff60]/12"
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  ) : isSubmitted ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                      <p className="text-sm font-semibold text-[#7aff60]">Submission confirmed.</p>
                      <p className="text-sm leading-7 text-white/80">
                        Your Lead Response Report is on the way. Want to walk through your results live with the
                        founders?
                      </p>
                      <button
                        type="button"
                        onClick={openEmbeddedBooking}
                        className="inline-flex rounded-lg bg-[#7aff60] px-4 py-2 text-sm font-semibold text-[#182015] transition-all duration-300 hover:bg-[#44c5ff] hover:text-[#0d2230]"
                      >
                        Book a Walkthrough
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <div className="rounded-xl border border-[#7aff60]/30 bg-[#7aff60]/8 p-4">
                        <p className="text-xs uppercase tracking-[0.12em] text-[#44c5ff]">Your score</p>
                        <p className="mt-2 text-xl font-semibold text-[#7aff60]">{result.label}</p>
                        <p className="mt-2 text-sm leading-7 text-white/80">{result.message}</p>
                      </div>

                      <form onSubmit={submitLead} className="mt-4 grid gap-3">
                        <p className="text-sm font-semibold text-white">Get your full Lead Response Report</p>
                        <label className="text-xs uppercase tracking-[0.14em] text-white/70">
                          Name
                          <input
                            value={leadCapture.name}
                            onChange={(event) =>
                              setLeadCapture((prev) => ({ ...prev, name: event.target.value }))
                            }
                            className="mt-1 w-full rounded-lg border border-white/18 bg-[#1b2230] px-3 py-2 text-sm text-white outline-none transition-all duration-300 focus:border-[#44c5ff] focus:ring-2 focus:ring-[#44c5ff]/35"
                          />
                        </label>
                        <label className="text-xs uppercase tracking-[0.14em] text-white/70">
                          Email
                          <input
                            type="email"
                            value={leadCapture.email}
                            onChange={(event) =>
                              setLeadCapture((prev) => ({ ...prev, email: event.target.value }))
                            }
                            className="mt-1 w-full rounded-lg border border-white/18 bg-[#1b2230] px-3 py-2 text-sm text-white outline-none transition-all duration-300 focus:border-[#44c5ff] focus:ring-2 focus:ring-[#44c5ff]/35"
                          />
                        </label>
                        <label className="text-xs uppercase tracking-[0.14em] text-white/70">
                          Company
                          <input
                            value={leadCapture.company}
                            onChange={(event) =>
                              setLeadCapture((prev) => ({ ...prev, company: event.target.value }))
                            }
                            className="mt-1 w-full rounded-lg border border-white/18 bg-[#1b2230] px-3 py-2 text-sm text-white outline-none transition-all duration-300 focus:border-[#44c5ff] focus:ring-2 focus:ring-[#44c5ff]/35"
                          />
                        </label>
                        <label className="text-xs uppercase tracking-[0.14em] text-white/70">
                          Phone
                          <input
                            value={leadCapture.phone}
                            onChange={(event) =>
                              setLeadCapture((prev) => ({ ...prev, phone: event.target.value }))
                            }
                            className="mt-1 w-full rounded-lg border border-white/18 bg-[#1b2230] px-3 py-2 text-sm text-white outline-none transition-all duration-300 focus:border-[#44c5ff] focus:ring-2 focus:ring-[#44c5ff]/35"
                          />
                        </label>
                        <button
                          type="submit"
                          className="mt-1 rounded-lg bg-[#7aff60] px-5 py-3 text-sm font-semibold text-[#182015] transition-all duration-300 hover:bg-[#44c5ff] hover:text-[#0d2230]"
                        >
                          Send My Report
                        </button>
                      </form>
                    </motion.div>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={step === 0 && !isSubmitted}
                    className="rounded-md border border-white/20 px-3 py-1.5 text-xs text-white/85 transition disabled:cursor-not-allowed disabled:opacity-35 hover:border-[#44c5ff]"
                  >
                    Back
                  </button>
                  <p className="text-xs text-white/60">Score range: {totalScore} / 16</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function classifyLeadRisk(score: number) {
  if (score >= 13) {
    return {
      label: "Strong Lead System",
      message:
        "Your lead handling process is disciplined, fast, and visible. Focus now on conversion optimization and scaling what already works."
    };
  }

  if (score >= 9) {
    return {
      label: "Leads Slipping Through",
      message:
        "You have some reliable process in place, but follow-up speed and handoff consistency are creating preventable leakage in your pipeline."
    };
  }

  return {
    label: "High Revenue Leak Risk",
    message:
      "Your current lead workflow likely loses jobs before the estimate stage. Tightening speed-to-lead and follow-up automation should be immediate priorities."
  };
}

function PhonePulseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6.8 2.8c.8-.8 2-.9 2.9-.2l2.2 1.8c.9.7 1.2 1.9.8 2.9l-.9 2a1.6 1.6 0 0 0 .3 1.8l2.8 2.8c.5.5 1.3.7 1.9.3l1.9-.9c1-.5 2.2-.2 2.9.7l1.8 2.2c.7.9.6 2.1-.2 2.9l-1.5 1.5c-1.8 1.8-4.5 2.5-7 1.8-2.8-.8-5.9-3-8.6-5.6-2.6-2.7-4.8-5.8-5.6-8.6-.7-2.5 0-5.2 1.8-7L6.8 2.8Z" />
      <path d="M16.2 4.8a6 6 0 0 1 3.1 5.2" />
      <path d="M14.9 7.1a3.6 3.6 0 0 1 1.9 3.1" />
    </svg>
  );
}
