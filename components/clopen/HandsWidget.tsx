"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ChefAvatar from "@/components/clopen/ChefAvatar";
import HandsPanel from "@/components/clopen/HandsPanel";
import KitchenCallTicker from "@/components/clopen/KitchenCallTicker";

const calls = ["Hands!", "86 Chaos", "Order Up", "Fire the Schedule", "Service Please"];

export default function HandsWidget() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timerDone = false;
    let scrollDone = false;
    let observer: IntersectionObserver | null = null;
    let sentinel: HTMLDivElement | null = null;

    const maybeReveal = () => {
      if (timerDone || scrollDone) setIsVisible(true);
    };

    const timerId = window.setTimeout(() => {
      timerDone = true;
      maybeReveal();
    }, 8000);

    const createSentinel = () => {
      if (sentinel) {
        sentinel.style.top = `${Math.max(document.body.scrollHeight * 0.3, 1)}px`;
        return;
      }
      sentinel = document.createElement("div");
      sentinel.setAttribute("aria-hidden", "true");
      sentinel.style.position = "absolute";
      sentinel.style.left = "0px";
      sentinel.style.top = `${Math.max(document.body.scrollHeight * 0.3, 1)}px`;
      sentinel.style.width = "1px";
      sentinel.style.height = "1px";
      sentinel.style.pointerEvents = "none";
      sentinel.style.opacity = "0";
      document.body.appendChild(sentinel);
    };

    createSentinel();

    if (sentinel) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            scrollDone = true;
            maybeReveal();
            observer?.disconnect();
          }
        },
        { threshold: 0 }
      );
      observer.observe(sentinel);
    }

    const onResize = () => createSentinel();
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(timerId);
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
      if (sentinel?.parentNode) sentinel.parentNode.removeChild(sentinel);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!rootRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div ref={rootRef} className="fixed bottom-5 right-4 z-[80] md:bottom-7 md:right-7">
      <div className="mb-3 flex justify-end">
        <HandsPanel isOpen={isOpen} />
      </div>

      <motion.button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-label="Toggle Hands panel"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 rounded-full border border-[#a76b24] bg-gradient-to-b from-[#ffa339] to-[#c27c2c] px-3 py-2.5 text-left text-white shadow-lg backdrop-blur-sm"
      >
        <ChefAvatar />
        <div className="min-w-[142px] pr-1">
          <p className="font-[var(--font-display)] text-sm font-semibold leading-5 text-white">Hands!</p>
          <KitchenCallTicker calls={calls} intervalMs={4000} />
        </div>
      </motion.button>
    </div>
  );
}
