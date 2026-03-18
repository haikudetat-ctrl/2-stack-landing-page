"use client";

import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ScannerOption = {
  label: string;
  score: 1 | 2 | 3 | 4;
};

type ScannerQuestion = {
  prompt: string;
  options: ScannerOption[];
};

type LeadState = {
  name: string;
  email: string;
  organization: string;
  role: string;
};

const questions: ScannerQuestion[] = [
  {
    prompt: "How are post-surgery symptoms typically captured?",
    options: [
      { label: "Patient phone call if something feels wrong", score: 2 },
      { label: "Nurse or staff follow-up calls", score: 3 },
      { label: "Digital check-ins or symptom reporting", score: 4 },
      { label: "Symptoms are rarely captured between visits", score: 1 }
    ]
  },
  {
    prompt: "How quickly would your team know if a patient’s pain level suddenly increased?",
    options: [
      { label: "Immediately through monitoring signals", score: 4 },
      { label: "Within a day through follow-up", score: 3 },
      { label: "Several days later during scheduled contact", score: 2 },
      { label: "Only at the next appointment", score: 1 }
    ]
  },
  {
    prompt: "Do providers receive alerts when recovery signals indicate possible complications?",
    options: [
      { label: "Yes, automated alerts notify providers", score: 4 },
      { label: "Staff manually escalate concerns", score: 3 },
      { label: "Sometimes, depending on the case", score: 2 },
      { label: "No structured alert system exists", score: 1 }
    ]
  },
  {
    prompt: "Can providers see recovery progress between visits?",
    options: [
      { label: "Real-time recovery dashboards", score: 4 },
      { label: "Periodic updates from staff", score: 3 },
      { label: "Only patient-reported during visits", score: 2 },
      { label: "No visibility between visits", score: 1 }
    ]
  },
  {
    prompt: "How confident are you that recovery issues are caught early?",
    options: [
      { label: "Very confident", score: 4 },
      { label: "Moderately confident", score: 3 },
      { label: "Somewhat concerned", score: 2 },
      { label: "Often unsure", score: 1 }
    ]
  }
];

const initialLead: LeadState = {
  name: "",
  email: "",
  organization: "",
  role: ""
};

export function AftercareRiskScannerWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Array<1 | 2 | 3 | 4>>([]);
  const [lead, setLead] = useState<LeadState>(initialLead);
  const [showResult, setShowResult] = useState(false);

  const isQuestionPhase = step < questions.length;
  const totalScore = answers.reduce((sum, value) => sum + value, 0);
  const progressPct = Math.round((Math.min(step, questions.length) / questions.length) * 100);
  const result = useMemo(() => classifyRisk(totalScore), [totalScore]);

  const openScanner = () => setIsOpen(true);

  const closeScanner = () => {
    setIsOpen(false);
    setStep(0);
    setAnswers([]);
    setLead(initialLead);
    setShowResult(false);
  };

  const selectOption = (score: 1 | 2 | 3 | 4) => {
    if (!isQuestionPhase) return;
    setAnswers((prev) => [...prev, score]);
    setStep((prev) => prev + 1);
  };

  const goBack = () => {
    if (showResult) {
      setShowResult(false);
      return;
    }

    if (step === 0) return;
    setStep((prev) => prev - 1);
    setAnswers((prev) => prev.slice(0, -1));
  };

  const submitLead = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!lead.name || !lead.email || !lead.organization || !lead.role) return;
    setShowResult(true);
  };

  return (
    <>
      <div className="fixed bottom-6 right-4 z-[90] md:right-6">
        <button
          type="button"
          onClick={openScanner}
          className="group rounded-xl border border-transparent bg-[#ff66aa] px-4 py-3 text-left text-white shadow-[0_12px_26px_rgba(255,102,170,0.35)] transition-all duration-[250ms] ease-in-out hover:border-[rgba(255,102,170,0.45)] hover:bg-[#44c5ff] hover:shadow-[0_0_14px_rgba(255,102,170,0.45)]"
        >
          <span className="flex items-center gap-2 text-sm font-semibold">
            <PulseIcon />
            Check a Patient Signal
          </span>
          <span className="mt-1 block text-xs text-white/0 transition-all duration-[250ms] ease-in-out group-hover:text-white/90">
            Run an Aftercare Risk Scan &#8594;
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/55 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex min-h-full items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full max-w-3xl rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[#222837] p-6 text-white md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#ff66aa]">
                      Aftercare Risk Scanner
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-[rgba(255,255,255,0.75)]">
                      How Early Would Your Team Detect a Complication?
                    </p>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-[rgba(255,255,255,0.75)]">
                      Many surgical complications begin with small signals that go unnoticed for days. Run a quick
                      scan to see how visible those signals are in your current aftercare process.
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#44c5ff]">Estimated time: 30 seconds</p>
                  </div>

                  <button
                    type="button"
                    onClick={closeScanner}
                    className="rounded-md border border-[rgba(255,255,255,0.18)] px-2.5 py-1 text-xs text-[rgba(255,255,255,0.85)] transition hover:border-[#44c5ff] hover:text-white"
                    aria-label="Close scanner"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#44c5ff] shadow-[0_0_12px_rgba(68,197,255,0.6)] transition-all duration-300"
                    style={{ width: `${showResult ? 100 : progressPct}%` }}
                  />
                </div>

                <div className="mt-2 text-xs uppercase tracking-[0.14em] text-[rgba(255,255,255,0.75)]">
                  {showResult ? "Visibility Report" : `Signal Check ${Math.min(step + 1, questions.length)} / ${questions.length}`}
                </div>

                {!showResult ? (
                  <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_210px]">
                    <div className="rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.035)] p-4">
                      {isQuestionPhase ? (
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
                                  className="rounded-lg border border-[rgba(255,255,255,0.16)] bg-[rgba(34,40,55,0.65)] px-4 py-3 text-left text-sm text-white transition-all duration-[250ms] ease-in-out hover:border-[#44c5ff] hover:bg-[rgba(68,197,255,0.14)]"
                                >
                                  {option.label}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      ) : (
                        <form onSubmit={submitLead} className="grid gap-3">
                          <p className="text-sm font-semibold text-white">Get your full Aftercare Visibility Report</p>
                          <label className="text-xs uppercase tracking-[0.14em] text-[rgba(255,255,255,0.75)]">
                            Name
                            <input
                              value={lead.name}
                              onChange={(e) => setLead((prev) => ({ ...prev, name: e.target.value }))}
                              className="mt-1 w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-[rgba(34,40,55,0.6)] px-3 py-2 text-sm text-white outline-none transition-all duration-[250ms] ease-in-out focus:border-[#44c5ff] focus:ring-2 focus:ring-[#44c5ff]/40"
                            />
                          </label>
                          <label className="text-xs uppercase tracking-[0.14em] text-[rgba(255,255,255,0.75)]">
                            Email
                            <input
                              type="email"
                              value={lead.email}
                              onChange={(e) => setLead((prev) => ({ ...prev, email: e.target.value }))}
                              className="mt-1 w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-[rgba(34,40,55,0.6)] px-3 py-2 text-sm text-white outline-none transition-all duration-[250ms] ease-in-out focus:border-[#44c5ff] focus:ring-2 focus:ring-[#44c5ff]/40"
                            />
                          </label>
                          <label className="text-xs uppercase tracking-[0.14em] text-[rgba(255,255,255,0.75)]">
                            Organization
                            <input
                              value={lead.organization}
                              onChange={(e) => setLead((prev) => ({ ...prev, organization: e.target.value }))}
                              className="mt-1 w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-[rgba(34,40,55,0.6)] px-3 py-2 text-sm text-white outline-none transition-all duration-[250ms] ease-in-out focus:border-[#44c5ff] focus:ring-2 focus:ring-[#44c5ff]/40"
                            />
                          </label>
                          <label className="text-xs uppercase tracking-[0.14em] text-[rgba(255,255,255,0.75)]">
                            Role
                            <input
                              value={lead.role}
                              onChange={(e) => setLead((prev) => ({ ...prev, role: e.target.value }))}
                              className="mt-1 w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-[rgba(34,40,55,0.6)] px-3 py-2 text-sm text-white outline-none transition-all duration-[250ms] ease-in-out focus:border-[#44c5ff] focus:ring-2 focus:ring-[#44c5ff]/40"
                            />
                          </label>
                          <button
                            type="submit"
                            className="mt-1 rounded-lg bg-[#ff66aa] px-5 py-3 text-sm font-semibold text-white transition-all duration-[250ms] ease-in-out hover:bg-[#44c5ff]"
                          >
                            View Full Explanation
                          </button>
                        </form>
                      )}
                    </div>

                    <aside className="rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.035)] p-4">
                      <p className="text-xs uppercase tracking-[0.14em] text-[#44c5ff]">Monitoring Signals</p>
                      <ul className="mt-3 space-y-2 text-sm text-white">
                        <li className="rounded-md border border-[rgba(255,255,255,0.12)] bg-[rgba(34,40,55,0.5)] px-3 py-2">
                          Pain Signal <span className="text-[#ff66aa]">&#8593;</span>
                        </li>
                        <li className="rounded-md border border-[rgba(255,255,255,0.12)] bg-[rgba(34,40,55,0.5)] px-3 py-2">
                          Mobility <span className="text-[#ff66aa]">&#8595;</span>
                        </li>
                        <li className="rounded-md border border-[rgba(255,255,255,0.12)] bg-[rgba(34,40,55,0.5)] px-3 py-2">
                          Medication Missed
                        </li>
                      </ul>
                    </aside>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    className="mt-6 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.035)] p-5"
                  >
                    <p className="text-lg font-semibold text-[#ff66aa]">{result.label}</p>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgba(255,255,255,0.82)]">{result.message}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[#44c5ff]">
                      Risk score: {totalScore} / 20
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href={result.ctaHref}
                        className="rounded-lg bg-[#ff66aa] px-5 py-3 text-sm font-semibold text-white transition-all duration-[250ms] ease-in-out hover:bg-[#44c5ff]"
                      >
                        {result.ctaLabel}
                      </a>
                      <button
                        type="button"
                        onClick={closeScanner}
                        className="rounded-lg border border-[rgba(255,255,255,0.18)] px-5 py-3 text-sm font-semibold text-white transition-all duration-[250ms] ease-in-out hover:border-[#44c5ff] hover:bg-[rgba(68,197,255,0.14)]"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                )}

                <div className="mt-5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={goBack}
                    className="rounded-md border border-[rgba(255,255,255,0.16)] px-3 py-1.5 text-xs text-[rgba(255,255,255,0.9)] transition hover:border-[#44c5ff] hover:text-white"
                    disabled={step === 0 && !showResult}
                  >
                    Back
                  </button>
                  <p className="text-xs text-[rgba(255,255,255,0.75)]">
                    {showResult ? "Scan Complete" : `Answer ${Math.min(step + 1, questions.length)} of ${questions.length}`}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function classifyRisk(score: number) {
  if (score >= 16) {
    return {
      label: "Low Risk Aftercare System",
      message:
        "Your team has strong visibility into patient recovery signals. Modern monitoring and early alerts help detect complications quickly and support better outcomes.",
      ctaLabel: "Download the Surgical Aftercare Playbook",
      ctaHref: "/medical-aftercare#playbook"
    };
  }
  if (score >= 11) {
    return {
      label: "Moderate Risk Aftercare System",
      message:
        "Your team has partial visibility into recovery signals. Some complications may go unnoticed between visits, which can delay intervention.",
      ctaLabel: "See How Modern Aftercare Systems Work",
      ctaHref: "/medical-aftercare#modern-aftercare"
    };
  }
  return {
    label: "High Risk Aftercare System",
    message:
      "Many recovery signals may go undetected between visits. Without structured monitoring, complications often appear only after symptoms worsen.",
    ctaLabel: "Download the Aftercare Playbook",
    ctaHref: "/medical-aftercare#playbook"
  };
}

function PulseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 12h4l2.2-5.2 4.1 10.4L16 12h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

