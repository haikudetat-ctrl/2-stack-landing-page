"use client";

import { motion } from "framer-motion";

type RatingCategory = {
  label: string;
  score: number;
};

const categories: RatingCategory[] = [
  { label: "Communication", score: 3 },
  { label: "Scheduling", score: 2 },
  { label: "Training Systems", score: 3 },
  { label: "Financial Visibility", score: 2 },
  { label: "Operational Consistency", score: 3 }
];

const maxStars = 5;

export default function ClopenGuideRating() {
  const average = categories.reduce((sum, item) => sum + item.score, 0) / categories.length;
  const overallStars = Math.max(1, Math.min(5, Math.round(average)));
  const summary = getSummary(overallStars);
  const commentary = getCommentary(overallStars);

  return (
    <section id="systems-check" className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto w-full max-w-3xl rounded-xl border border-gray-200 bg-white p-10 shadow-lg"
      >
        <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#1f2933] md:text-3xl">
          The Clopen Guide Review
        </h2>
        <p className="mt-2 text-[#6b7280]">An operational review of your restaurant.</p>

        <div className="mt-8 space-y-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: 0.12 + index * 0.08 }}
              className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3"
            >
              <p className="text-sm font-medium text-[#1f2933]">{category.label}</p>
              <Stars value={category.score} sizeClassName="text-lg" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.62 }}
          className="mt-8 rounded-lg border border-gray-200 bg-[#f7f6f3] p-5"
        >
          <p className="text-xs uppercase tracking-[0.14em] text-[#6b7280]">Overall Rating</p>
          <div className="mt-2">
            <Stars value={overallStars} sizeClassName="text-2xl tracking-[0.12em]" spaced />
          </div>
          <p className="mt-3 text-sm font-medium text-[#1f2933]">{summary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.74 }}
          className="mt-6"
        >
          <p className="text-xs uppercase tracking-[0.14em] text-[#6b7280]">Critic Commentary</p>
          <p className="mt-2 text-sm leading-7 text-[#4b5563]">{commentary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.86 }}
          className="mt-8 flex flex-wrap gap-3"
        >
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
        </motion.div>
      </motion.div>
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
      {Array.from({ length: maxStars }).map((_, index) => {
        const isFilled = index < value;
        return (
          <span key={index} className={`${sizeClassName} leading-none ${isFilled ? "text-[#c27c2c]" : "text-gray-300"}`}>
            ★
          </span>
        );
      })}
    </div>
  );
}

function getSummary(score: number) {
  if (score >= 5) return "5 Stars — Elite operational precision across every service window.";
  if (score === 4) return "4 Stars — Excellent execution with only minor friction between shifts.";
  if (score === 3) return "3 Stars — A strong restaurant with operational friction during peak service.";
  if (score === 2) return "2 Stars — Promising kitchen rhythm, but systems gaps disrupt consistency.";
  return "1 Star — Core operating systems are under strain and need immediate attention.";
}

function getCommentary(score: number) {
  if (score >= 5) {
    return "A disciplined operation with mature systems behind the pass. Communication, labor planning, and service standards are tightly aligned across the team.";
  }
  if (score === 4) {
    return "An excellent restaurant with dependable fundamentals. Small refinements in cross-shift communication and training reinforcement would push performance to elite consistency.";
  }
  if (score === 3) {
    return "A promising restaurant with strong fundamentals. However, operational coordination still leans on manual workarounds that create friction during peak service windows.";
  }
  if (score === 2) {
    return "The team is working hard, but system reliability is uneven. Scheduling pressure and process drift are reducing throughput and creating avoidable service strain.";
  }
  return "The concept has potential, but operational architecture is currently limiting outcomes. A structured systems rebuild is needed to restore service consistency and control.";
}

