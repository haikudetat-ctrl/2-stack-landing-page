"use client";

import { FormEvent, useMemo, useState } from "react";

type OperatingModelAnswers = {
  locations: "1" | "2-3" | "3+" | "";
  employeesPerLocation: "1-15" | "16-50" | "50+" | "";
  manualScheduling: "yes" | "partial" | "no" | "";
  updatesLive: "text" | "slack" | "verbal" | "none" | "";
};

const initialAnswers: OperatingModelAnswers = {
  locations: "",
  employeesPerLocation: "",
  manualScheduling: "",
  updatesLive: ""
};

export function PricingOptions() {
  const [answers, setAnswers] = useState<OperatingModelAnswers>(initialAnswers);
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"questions" | "lead" | "result">("questions");
  const flowSteps: Array<{ key: "questions" | "lead" | "result"; label: string }> = [
    { key: "questions", label: "Profile" },
    { key: "lead", label: "Unlock" },
    { key: "result", label: "Recommendation" }
  ];

  const allAnswered = Object.values(answers).every(Boolean);
  const recommendation = useMemo(() => recommendOperatingModel(answers), [answers]);

  const goToLead = () => {
    if (!allAnswered) return;
    setStep("lead");
  };

  const runCheck = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setStep("result");
  };

  const openBooking = () => {
    window.dispatchEvent(new CustomEvent("openClopenBooking"));
  };

  return (
    <section id="pricing" className="pt-20">
      <h2 className="font-[var(--font-display)] text-4xl font-bold leading-[1.03] tracking-tight text-[#c27c2c] md:text-5xl">
        Run Clopen Your Way
      </h2>
      <p className="mt-3 max-w-3xl text-base font-medium leading-7 tracking-[0.01em] text-[#6b7280] md:text-lg">
        Choose the operating model that matches your team and your growth stage.
      </p>

      <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2">
        <article className="flex h-full flex-col rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition hover:shadow-md">
          <p className="text-xs uppercase tracking-[0.14em] text-[#c27c2c]">Friends and Family</p>
          <h3 className="mt-2 font-[var(--font-display)] text-2xl font-semibold text-[#1f2933]">
            Custom Setup. You Run It.
          </h3>
          <div className="mt-4 flex flex-1 flex-col gap-5">
            <div className="space-y-3 text-[#6b7280]">
              <p className="leading-7">
                We configure Clopen to match how your restaurant actually operates - from scheduling and communication
                to training and cost tracking. Once the system is in place, your team runs it internally as part of
                daily service.
              </p>
              <p className="leading-7">
                This option gives operators full control while still starting with a system built for their kitchen,
                staff structure, and workflows.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#1f2933]">Best for</p>
              <ul className="mt-2 space-y-1.5 text-sm text-[#6b7280]">
                <li>* Independent restaurants</li>
                <li>* Owner-operators who like running systems internally</li>
                <li>* Teams comfortable managing schedules and communication</li>
                <li>* Restaurants that want operational control</li>
              </ul>
            </div>

            <div className="rounded-lg border border-[#e5e7eb] bg-[#f7f6f3] p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-[#6b7280]">Typical restaurants using this</p>
              <p className="mt-1 text-sm font-medium text-[#1f2933]">1-3 locations</p>
              <p className="text-sm font-medium text-[#1f2933]">10-50 staff</p>
            </div>

            <div className="rounded-lg border border-[#e5e7eb] bg-[#f7f6f3] p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-[#6b7280]">What your team manages</p>
              <ul className="mt-2 space-y-1.5 text-sm text-[#6b7280]">
                <li>* daily lineup notes and communication</li>
                <li>* weekly scheduling and coverage</li>
                <li>* training modules and certifications</li>
                <li>* recipe documentation and updates</li>
                <li>* cost tracking and operational reporting</li>
              </ul>
            </div>
          </div>

          <a
            href="#systems-overview"
            className="mt-5 inline-flex w-[75%] self-center justify-center rounded-lg bg-gradient-to-b from-[#ffa339] to-[#c27c2c] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:from-[#ffb24d] hover:to-[#b8772b] hover:opacity-95"
          >
            Explore the Platform
          </a>
        </article>

        <article className="flex h-full flex-col rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition hover:shadow-md">
          <p className="text-xs uppercase tracking-[0.14em] text-[#6b8e23]">Critics Choice</p>
          <h3 className="mt-2 font-[var(--font-display)] text-2xl font-semibold text-[#1f2933]">Managed by 2Stack</h3>
          <div className="mt-4 flex flex-1 flex-col gap-5">
            <div className="space-y-3 text-[#6b7280]">
              <p className="leading-7">
                We implement the system and help keep it running across your restaurants.
              </p>
              <p className="leading-7">
                Our team configures Clopen around your operations, trains your managers, and supports the system as
                your restaurants grow. You get a structured operational system that evolves with your team.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#1f2933]">Best for:</p>
              <ul className="mt-2 space-y-1.5 text-sm text-[#6b7280]">
                <li>* Multi-location operators</li>
                <li>* Restaurant groups scaling quickly</li>
                <li>* Owners who want systems handled instead of managed internally</li>
                <li>* Teams that want consistency across locations</li>
              </ul>
            </div>

            <div className="rounded-lg border border-[#e5e7eb] bg-[#f7f6f3] p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-[#6b7280]">Typical restaurants using this</p>
              <p className="mt-1 text-sm font-medium text-[#1f2933]">3+ locations</p>
              <p className="text-sm font-medium text-[#1f2933]">50-200+ staff</p>
            </div>

            <div className="rounded-lg border border-[#e5e7eb] bg-[#f7f6f3] p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-[#6b7280]">What 2Stack helps manage</p>
              <ul className="mt-2 space-y-1.5 text-sm text-[#6b7280]">
                <li>* system setup and configuration</li>
                <li>* rollout across locations</li>
                <li>* manager training and onboarding</li>
                <li>* scheduling and communication workflows</li>
                <li>* ongoing operational optimization</li>
              </ul>
            </div>
          </div>

          <button
            type="button"
            onClick={openBooking}
            className="mt-5 inline-flex w-[75%] self-center justify-center rounded-lg bg-gradient-to-b from-[#ffa339] to-[#c27c2c] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:from-[#ffb24d] hover:to-[#b8772b] hover:opacity-95"
          >
            Book an Implementation Call
          </button>
        </article>
      </div>

      <div
        id="systems-check"
        className="relative mt-10 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-gradient-to-b from-white to-[#f8f7f4] p-6 shadow-[0_16px_36px_rgba(17,24,39,0.08)] md:p-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(194,124,44,0.10),transparent_46%),radial-gradient(circle_at_88%_20%,rgba(107,142,35,0.08),transparent_44%)]" />

        <div className="relative">
          <div className="flex flex-col gap-4 border-b border-[#e5e7eb] pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="inline-flex items-center rounded-full border border-[#eadbc3] bg-[#fffaf1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#8b5d24]">
                60-second diagnostic
              </p>
              <h3 className="mt-3 font-[var(--font-display)] text-4xl font-bold leading-[1.03] tracking-tight text-[#c27c2c] md:text-5xl">
                Find Your Restaurant Operating Model
              </h3>
              <p className="mt-3 max-w-3xl text-base font-medium leading-7 tracking-[0.01em] text-[#6b7280] md:text-lg">
                Not sure which setup fits your restaurant? Run a quick systems check and we&apos;ll recommend the best
                Clopen setup for your team.
              </p>
            </div>

            <div className="rounded-full border border-[#e5e7eb] bg-white/90 px-3 py-2 shadow-sm">
              <div className="flex items-center gap-1.5">
                {flowSteps.map((flowStep, index) => {
                  const currentIndex = flowSteps.findIndex((candidate) => candidate.key === step);
                  const isActive = index <= currentIndex;

                  return (
                    <div key={flowStep.key} className="flex items-center gap-1.5">
                      <span
                        className={`inline-flex h-6 w-6 items-center justify-center rounded-full border text-[11px] font-semibold transition ${
                          isActive
                            ? "border-[#c27c2c] bg-gradient-to-b from-[#ffa339] to-[#c27c2c] text-white"
                            : "border-[#d1d5db] bg-white text-[#9ca3af]"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className={`hidden text-xs font-medium md:block ${isActive ? "text-[#1f2933]" : "text-[#9ca3af]"}`}>
                        {flowStep.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {step === "questions" ? (
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <QuestionBlock
              number={1}
              label="How many locations do you operate?"
              options={[
                { label: "1", value: "1" },
                { label: "2-3", value: "2-3" },
                { label: "3+", value: "3+" }
              ]}
              value={answers.locations}
              onChange={(value) => setAnswers((prev) => ({ ...prev, locations: value as OperatingModelAnswers["locations"] }))}
            />

            <QuestionBlock
              number={2}
              label="How many employees per location?"
              options={[
                { label: "1-15", value: "1-15" },
                { label: "16-50", value: "16-50" },
                { label: "50+", value: "50+" }
              ]}
              value={answers.employeesPerLocation}
              onChange={(value) =>
                setAnswers((prev) => ({ ...prev, employeesPerLocation: value as OperatingModelAnswers["employeesPerLocation"] }))
              }
            />

            <QuestionBlock
              number={3}
              label="Do you build schedules manually today?"
              options={[
                { label: "Yes", value: "yes" },
                { label: "Partially", value: "partial" },
                { label: "No", value: "no" }
              ]}
              value={answers.manualScheduling}
              onChange={(value) =>
                setAnswers((prev) => ({ ...prev, manualScheduling: value as OperatingModelAnswers["manualScheduling"] }))
              }
            />

            <QuestionBlock
              number={4}
              label="Where do daily updates live?"
              options={[
                { label: "Text", value: "text" },
                { label: "Slack", value: "slack" },
                { label: "Verbal", value: "verbal" },
                { label: "None", value: "none" }
              ]}
              value={answers.updatesLive}
              onChange={(value) => setAnswers((prev) => ({ ...prev, updatesLive: value as OperatingModelAnswers["updatesLive"] }))}
            />

            <div className="md:col-span-2">
              <button
                type="button"
                onClick={goToLead}
                disabled={!allAnswered}
                className="rounded-lg bg-gradient-to-b from-[#ffa339] to-[#c27c2c] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(194,124,44,0.26)] transition hover:from-[#ffb24d] hover:to-[#b8772b] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Run My Systems Check
              </button>
            </div>
          </div>
        ) : null}

        {step === "lead" ? (
          <form onSubmit={runCheck} className="mt-7 max-w-xl rounded-xl border border-[#eadbc3] bg-[#fffaf1] p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.12em] text-[#8b5d24]">Unlock recommendation</p>
            <p className="mt-1.5 text-sm text-[#6b7280]">Enter your email to view your operating model recommendation.</p>
            <label className="mt-4 block text-xs uppercase tracking-[0.12em] text-[#6b7280]">
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-1.5 w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-2.5 text-sm text-[#1f2933] outline-none transition focus:border-[#c27c2c] focus:ring-2 focus:ring-[#c27c2c]/20"
                required
              />
            </label>

            <div className="mt-4 flex items-center gap-2">
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-b from-[#ffa339] to-[#c27c2c] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(194,124,44,0.26)] transition hover:from-[#ffb24d] hover:to-[#b8772b] hover:opacity-95"
              >
                Show My Recommendation
              </button>
              <button
                type="button"
                onClick={() => setStep("questions")}
                className="rounded-lg border border-[#d1d5db] px-4 py-3 text-sm font-medium text-[#4b5563] transition hover:bg-[#f7f6f3]"
              >
                Back
              </button>
            </div>
          </form>
        ) : null}

        {step === "result" ? (
          <div className="mt-7 rounded-xl border border-[#eadbc3] bg-gradient-to-b from-[#fffaf1] to-[#f7f6f3] p-5 shadow-sm md:p-6">
            <p className="text-xs uppercase tracking-[0.12em] text-[#8b5d24]">Recommended model</p>
            <p className="mt-2 font-[var(--font-display)] text-2xl font-semibold text-[#1f2933]">{recommendation.model}</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6b7280]">{recommendation.reason}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#d1d5db] bg-white px-3 py-1 text-xs text-[#4b5563]">
                {recommendation.signalA}
              </span>
              <span className="rounded-full border border-[#d1d5db] bg-white px-3 py-1 text-xs text-[#4b5563]">
                {recommendation.signalB}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={openBooking}
                className="rounded-lg bg-gradient-to-b from-[#ffa339] to-[#c27c2c] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(194,124,44,0.26)] transition hover:from-[#ffb24d] hover:to-[#b8772b] hover:opacity-95"
              >
                Book Clopen Walkthrough
              </button>
              <button
                type="button"
                onClick={() => {
                  setStep("questions");
                  setEmail("");
                }}
                className="rounded-lg border border-[#d1d5db] px-4 py-2.5 text-sm font-medium text-[#4b5563] transition hover:bg-white"
              >
                Run Again
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function QuestionBlock({
  number,
  label,
  options,
  value,
  onChange
}: {
  number: number;
  label: string;
  options: Array<{ label: string; value: string }>;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-[0_8px_16px_rgba(17,24,39,0.04)] transition hover:border-[#c27c2c]/30 hover:shadow-[0_12px_26px_rgba(17,24,39,0.08)]">
      <div className="flex items-start gap-2">
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-[#d1d5db] bg-[#f7f6f3] text-[11px] font-semibold text-[#6b7280]">
          {number}
        </span>
        <p className="text-sm font-semibold leading-6 text-[#1f2933]">{label}</p>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {options.map((option) => {
          const isActive = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition ${
                isActive
                  ? "border-[#c27c2c]/50 bg-[#fff6ea] text-[#8b5d24]"
                  : "border-[#d1d5db] bg-white text-[#4b5563] hover:border-[#c27c2c]/40"
              }`}
            >
              <span
                className={`inline-flex h-2 w-2 rounded-full transition ${
                  isActive ? "bg-[#c27c2c]" : "bg-[#d1d5db]"
                }`}
              />
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function recommendOperatingModel(answers: OperatingModelAnswers) {
  let managedScore = 0;

  if (answers.locations === "2-3") managedScore += 1;
  if (answers.locations === "3+") managedScore += 2;

  if (answers.employeesPerLocation === "16-50") managedScore += 1;
  if (answers.employeesPerLocation === "50+") managedScore += 2;

  if (answers.manualScheduling === "yes") managedScore += 2;
  if (answers.manualScheduling === "partial") managedScore += 1;

  if (answers.updatesLive === "text") managedScore += 1;
  if (answers.updatesLive === "verbal" || answers.updatesLive === "none") managedScore += 2;

  if (managedScore >= 5) {
    return {
      model: "Managed by 2Stack",
      reason:
        "Your answers indicate higher operational complexity and coordination overhead. A managed implementation gives your team faster stabilization and cleaner execution across shifts.",
      signalA: "Higher complexity",
      signalB: "Coordination overhead"
    };
  }

  return {
    model: "Run It Yourself",
    reason:
      "Your operation profile suggests you can run Clopen effectively in-house with a clear system and lightweight support from our team when needed.",
    signalA: "Lean footprint",
    signalB: "Strong internal ownership"
  };
}
