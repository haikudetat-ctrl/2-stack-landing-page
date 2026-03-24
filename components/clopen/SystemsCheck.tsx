"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { scoreSystemsCheck } from "@/lib/scoring";
import type { SystemsCheckFormData, SystemsCheckOption, SystemsCheckQuestion } from "@/types";

const questions: [
  SystemsCheckQuestion<"seats">,
  SystemsCheckQuestion<"scheduleTime">,
  SystemsCheckQuestion<"menuCommunication">,
  SystemsCheckQuestion<"recipeTracking">
] = [
  {
    key: "seats",
    prompt: "How many seats does your restaurant have?",
    options: ["<50", "50-100", "100+"]
  },
  {
    key: "scheduleTime",
    prompt: "How long does it take to build a weekly schedule?",
    options: ["<1 hour", "1-3 hours", "3+ hours"]
  },
  {
    key: "menuCommunication",
    prompt: "How do staff communicate menu updates?",
    options: ["group text", "verbal", "documentation system", "not consistent"]
  },
  {
    key: "recipeTracking",
    prompt: "Do you track recipe cost vs actual inventory?",
    options: ["yes", "somewhat", "no"]
  }
];

export function SystemsCheck() {
  const pathname = usePathname();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<SystemsCheckFormData>>({});
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "saved" | "error">("idle");
  const [leadId, setLeadId] = useState<string | null>(null);

  const progress = Math.round((step / questions.length) * 100);
  const isComplete = step >= questions.length;
  const currentQuestion = questions[step];
  const completeAnswers = useMemo(() => (isCompleteAnswers(answers) ? answers : null), [answers]);
  const result = useMemo(() => (completeAnswers ? scoreSystemsCheck(completeAnswers) : null), [completeAnswers]);

  const selectOption = (value: SystemsCheckOption) => {
    if (!currentQuestion) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.key]: value
    }));
    setStep((prev) => prev + 1);
  };

  const goBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setSubmissionStatus("idle");
    setLeadId(null);
  };

  useEffect(() => {
    if (!result || !completeAnswers || submissionStatus !== "idle") return;
    let cancelled = false;

    const submitLead = async () => {
      try {
        setSubmissionStatus("submitting");

        const response = await fetch("/api/clopen-leads", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            sourcePath: pathname === "/restaurants" ? "/restaurants" : "/clopen",
            answers: completeAnswers
          })
        });

        if (!response.ok) {
          throw new Error("Submission failed");
        }

        const payload = (await response.json()) as { leadId?: string };
        if (cancelled) return;
        setLeadId(payload.leadId ?? null);
        setSubmissionStatus("saved");
      } catch {
        if (!cancelled) setSubmissionStatus("error");
      }
    };

    void submitLead();
    return () => {
      cancelled = true;
    };
  }, [completeAnswers, pathname, result, submissionStatus]);

  return (
    <section id="systems-check" className="pt-20">
      <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm md:p-8">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-[#6b7280]">Lead Capture</p>
            <h2 className="mt-2 font-[var(--font-display)] text-2xl font-semibold text-[#1f2933] md:text-3xl">
              Restaurant Systems Check
            </h2>
          </div>
          <span className="text-sm font-medium text-[#6b7280]">{isComplete ? "Complete" : `${progress}% complete`}</span>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-[#f1efe9]">
          <div
            className="h-full rounded-full bg-gradient-to-b from-[#ffa339] to-[#c27c2c] transition-all duration-300"
            style={{ width: `${isComplete ? 100 : progress}%` }}
          />
        </div>

        {!isComplete && currentQuestion ? (
          <div className="mt-7">
            <h3 className="text-xl font-semibold text-[#1f2933]">{currentQuestion.prompt}</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => selectOption(option)}
                  className="rounded-md border border-[#d1d5db] bg-white px-4 py-3 text-left text-sm font-medium text-[#374151] transition hover:bg-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-[#c27c2c]"
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={goBack}
                className="rounded-lg border border-[#d1d5db] bg-white px-4 py-2 text-sm text-[#4b5563] transition hover:bg-[#f3f4f6] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={step === 0}
              >
                Back
              </button>
            </div>
          </div>
        ) : (
          result && (
            <div className="mt-7 rounded-xl border border-[#e5e7eb] bg-[#f7f6f3] p-6">
              <p className="text-sm uppercase tracking-[0.16em] text-[#6b7280]">Assessment Result</p>
              <p className="mt-3 text-2xl font-semibold text-[#1f2933]">{result.level}</p>
              <p className="mt-2 text-sm text-[#6b7280]">Friction score: {result.score}</p>
              <p className="mt-5 max-w-3xl text-[#4b5563]">{result.message}</p>
              {submissionStatus === "submitting" ? (
                <p className="mt-3 text-sm text-[#6b7280]">Saving your systems check...</p>
              ) : null}
              {submissionStatus === "saved" ? (
                <p className="mt-3 text-sm text-[#6b8e23]">Saved. Reference ID: {leadId ?? "generated"}.</p>
              ) : null}
              {submissionStatus === "error" ? (
                <p className="mt-3 text-sm text-[#c27c2c]">
                  We could not save automatically right now. You can still request your walkthrough below.
                </p>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:hello@2stack.co?subject=${encodeURIComponent("Book a Clopen Systems Walkthrough")}&body=${encodeURIComponent(`Friction level: ${result.level}\nScore: ${result.score}${leadId ? `\nReference ID: ${leadId}` : ""}`)}`}
                  className="rounded-lg bg-gradient-to-b from-[#ffa339] to-[#c27c2c] px-6 py-3 text-sm font-medium text-white transition hover:from-[#ffb24d] hover:to-[#b8772b] hover:opacity-95"
                >
                  Book a Clopen Systems Walkthrough
                </a>
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-lg border border-[#d1d5db] bg-white px-6 py-3 text-sm font-medium text-[#4b5563] transition hover:bg-[#f3f4f6]"
                >
                  Run Again
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

function isCompleteAnswers(value: Partial<SystemsCheckFormData>): value is SystemsCheckFormData {
  return (
    value.seats !== undefined &&
    value.scheduleTime !== undefined &&
    value.menuCommunication !== undefined &&
    value.recipeTracking !== undefined
  );
}
