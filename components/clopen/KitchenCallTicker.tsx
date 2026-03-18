"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type KitchenCallTickerProps = {
  calls?: string[];
  intervalMs?: number;
};

const defaultCalls = ["Hands!", "86 Chaos", "Order Up", "Fire the Schedule", "Service Please"];

export default function KitchenCallTicker({ calls = defaultCalls, intervalMs = 4000 }: KitchenCallTickerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (calls.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % calls.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [calls, intervalMs]);

  return (
    <div className="relative h-5 overflow-hidden" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.p
          key={calls[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 text-xs uppercase tracking-[0.14em] text-[#fff2dd]"
        >
          {calls[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
