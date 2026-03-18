"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Category =
  | "Communication"
  | "Scheduling"
  | "Training Systems"
  | "Financial Visibility"
  | "Operational Consistency";

type QuestionOption = {
  label: string;
  value: 1 | 2 | 3 | 4;
};

type DiagnosticQuestion = {
  category: Category;
  prompt: string;
  options: QuestionOption[];
};

const questions: DiagnosticQuestion[] = [
  {
    category: "Communication",
    prompt: "How consistently does your team receive pre-shift notes before service?",
    options: [
      { label: "Always, documented and acknowledged", value: 4 },
      { label: "Usually, with occasional misses", value: 3 },
      { label: "Inconsistently, mostly verbal", value: 2 },
      { label: "Rarely, mostly reactive", value: 1 }
    ]
  },
  {
    category: "Scheduling",
    prompt: "How efficient is your weekly schedule build process?",
    options: [
      { label: "Under 1 hour with clear constraints", value: 4 },
      { label: "1–2 hours with minor adjustments", value: 3 },
      { label: "2–4 hours with frequent rework", value: 2 },
      { label: "4+ hours and constant fire drills", value: 1 }
    ]
  },
  {
    category: "Training Systems",
    prompt: "How standardized is onboarding and role training?",
    options: [
      { label: "Structured modules + sign-offs", value: 4 },
      { label: "Mostly structured, some manager variance", value: 3 },
      { label: "Manager-dependent and uneven", value: 2 },
      { label: "No repeatable system", value: 1 }
    ]
  },
  {
    category: "Financial Visibility",
    prompt: "How confidently can you track recipe cost versus actual usage?",
    options: [
      { label: "Live visibility with routine audits", value: 4 },
      { label: "Weekly visibility with minor lag", value: 3 },
      { label: "Partial tracking, gaps in data", value: 2 },
      { label: "Minimal tracking, mostly estimates", value: 1 }
    ]
  },
  {
    category: "Operational Consistency",
    prompt: "How consistent is execution between open, peak, and close?",
    options: [
      { label: "Highly consistent with clear handoffs", value: 4 },
      { label: "Generally stable with occasional drift", value: 3 },
      { label: "Noticeable variation by shift lead", value: 2 },
      { label: "Frequent breakdowns during transitions", value: 1 }
    ]
  },
  {
    category: "Communication",
    prompt: "How are menu changes and 86s communicated during service?",
    options: [
      { label: "Centralized system used by all stations", value: 4 },
      { label: "Mostly documented, some verbal fallback", value: 3 },
      { label: "Mix of verbal + ad hoc messaging", value: 2 },
      { label: "Primarily group text or word-of-mouth", value: 1 }
    ]
  },
  {
    category: "Operational Consistency",
    prompt: "How clearly can leadership see service performance day-to-day?",
    options: [
      { label: "Dashboard-driven with regular review", value: 4 },
      { label: "Basic reporting with periodic review", value: 3 },
      { label: "Fragmented data, manual compilation", value: 2 },
      { label: "Low visibility until issues escalate", value: 1 }
    ]
  }
];

export default function ClopenGuideDiagnostic() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Array<1 | 2 | 3 | 4>>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const isComplete = step >= questions.length;
  const current = questions[step];

  const averageScore = useMemo(() => {
    if (!answers.length) return 0;
    return answers.reduce((sum, score) => sum + score, 0) / answers.length;
  }, [answers]);

  const overallStars = useMemo(() => scoreToStars(averageScore), [averageScore]);
  const commentary = useMemo(() => getCommentary(averageScore), [averageScore]);

  const categoryBreakdown = useMemo(() => {
    const accumulator = new Map<Category, { total: number; count: number }>();

    answers.forEach((value, index) => {
      const category = categories[index];
      if (!category) return;
      const entry = accumulator.get(category) ?? { total: 0, count: 0 };
      entry.total += value;
      entry.count += 1;
      accumulator.set(category, entry);
    });

    return (["Communication", "Scheduling", "Training Systems", "Financial Visibility", "Operational Consistency"] as const).map(
      (category) => {
        const stats = accumulator.get(category);
        const avg = stats ? stats.total / stats.count : 0;
        return {
          category,
          avg,
          stars: scoreToStars(avg)
        };
      }
    );
  }, [answers, categories]);

  const answerQuestion = (value: 1 | 2 | 3 | 4) => {
    if (!current) return;
    setAnswers((prev) => [...prev, value]);
    setCategories((prev) => [...prev, current.category]);
    setStep((prev) => prev + 1);
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
    setCategories([]);
  };

  return (
    <section id="systems-check" className="pt-20">
      <div className="mx-auto w-full max-w-3xl rounded-xl border border-gray-200 bg-white p-10 shadow-lg">
        <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#1f2933] md:text-3xl">
          Clopen Guide Diagnostic
        </h2>
        <p className="mt-2 text-[#6b7280]">A Michelin-style review of your restaurant operations.</p>

        {!isComplete ? (
          <div className="mt-8">
            <div className="h-2 w-full overflow-hidden rounded-full bg-[#f1efe9]">
              <div
                className="h-full rounded-full bg-[#c27c2c] transition-all duration-300"
                style={{ width: `${Math.round((step / questions.length) * 100)}%` }}
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[#6b7280]">
              Question {step + 1} of {questions.length}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="mt-4"
              >
                <p className="text-lg font-semibold text-[#1f2933]">{current.prompt}</p>
                <div className="mt-5 grid gap-3">
                  {current.options.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => answerQuestion(option.value)}
                      className="rounded-md border border-gray-300 bg-white px-4 py-3 text-left text-sm font-medium text-[#374151] transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#c27c2c]"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-8"
          >
            <div className="rounded-lg border border-gray-200 bg-[#f7f6f3] p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-[#6b7280]">Overall Operational Rating</p>
              <div className="mt-2">
                <Stars value={overallStars} sizeClassName="text-3xl" spaced />
              </div>
              <p className="mt-3 text-sm font-medium text-[#1f2933]">{getSummary(overallStars)}</p>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.14em] text-[#6b7280]">Category Breakdown</p>
              <div className="mt-3 space-y-3">
                {categoryBreakdown.map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.06 }}
                    className="flex items-center justify-between border-b border-gray-100 pb-2"
                  >
                    <p className="text-sm font-medium text-[#1f2933]">{item.category}</p>
                    <Stars value={item.stars} sizeClassName="text-base" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.14em] text-[#6b7280]">Critic Commentary</p>
              <p className="mt-2 text-sm leading-7 text-[#4b5563]">{commentary}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/YOUR_LINK"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-[#c27c2c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Book Clopen Systems Walkthrough
              </a>
              <a
                href="/clopen#systems-overview"
                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                See How Clopen Works
              </a>
              <button
                type="button"
                onClick={restart}
                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Run Again
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function Stars({
  value,
  sizeClassName,
  spaced = false
}: {
  value: number;
  sizeClassName: string;
  spaced?: boolean;
}) {
  return (
    <div className={`inline-flex items-center ${spaced ? "gap-2" : "gap-0.5"}`} aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={`${sizeClassName} leading-none ${index < value ? "text-[#c27c2c]" : "text-gray-300"}`}>
          ★
        </span>
      ))}
    </div>
  );
}

function scoreToStars(score: number) {
  if (!score) return 0;
  return Math.max(1, Math.min(5, Math.round((score / 4) * 5)));
}

function getSummary(stars: number) {
  if (stars >= 5) return "5 Stars — Exceptional service architecture with elite consistency.";
  if (stars === 4) return "4 Stars — A well-run operation with minor service friction.";
  if (stars === 3) return "3 Stars — Strong fundamentals with pressure points during peak service.";
  if (stars === 2) return "2 Stars — Promising operation, but key systems remain under strain.";
  return "1 Star — Operational systems require immediate redesign.";
}

function getCommentary(score: number) {
  if (score >= 3.7) {
    return "A highly disciplined operation with strong communication rhythm and dependable execution from prep through close. Clopen would primarily be a force multiplier.";
  }
  if (score >= 3.1) {
    return "A capable restaurant with clear operational strengths. Some service windows still rely on manual coordination that can create avoidable variance.";
  }
  if (score >= 2.5) {
    return "A promising operation with solid team effort, but process consistency and shift alignment are limiting performance at peak volume.";
  }
  if (score >= 1.9) {
    return "The team is carrying heavy operational load. Scheduling, handoff quality, and systems reliability need structured reinforcement.";
  }
  return "Core operating systems are currently fragile. A focused rebuild of communication, training, and financial visibility would materially improve service control.";
}

