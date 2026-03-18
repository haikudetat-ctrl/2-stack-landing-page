"use client";

import { AnimatePresence, motion } from "framer-motion";
import ChefAvatar from "@/components/clopen/ChefAvatar";

type HandsPanelProps = {
  isOpen: boolean;
};

export default function HandsPanel({ isOpen }: HandsPanelProps) {
  const openBooking = () => {
    window.dispatchEvent(new CustomEvent("openClopenBooking"));
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="w-[90vw] max-w-sm rounded-xl border border-[#e5e7eb] bg-white p-4 text-[#1f2933] shadow-lg md:w-[320px]"
        >
          <div className="flex items-start gap-3">
            <ChefAvatar className="h-10 w-10 text-[20px]" />
            <div>
              <p className="font-[var(--font-display)] text-base font-semibold">Chef here.</p>
              <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                Running a restaurant shouldn&apos;t feel like controlled chaos.
              </p>
              <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                Want to see how Clopen helps operators run smoother service?
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={openBooking}
              className="rounded-lg bg-[#c27c2c] px-4 py-3 text-center text-sm font-medium text-white transition-transform duration-150 hover:scale-105 hover:opacity-90"
            >
              Book Systems Walkthrough
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
