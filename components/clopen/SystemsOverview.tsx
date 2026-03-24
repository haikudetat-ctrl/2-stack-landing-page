"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductCard } from "@/components/clopen/ProductCard";
import type { ProductFeatureCard } from "@/types";

type ProductWithId = ProductFeatureCard & {
  id: "communication" | "scheduling" | "financial";
};

type ExpandedDetail = {
  title: string;
  subheadline: string;
  paragraphs: string[];
  solves: Array<{ title: string; body: string }>;
  tools: string[];
  accentClass: string;
};

const products: ProductWithId[] = [
  {
    id: "communication",
    title: "Communication & Training Hub",
    description:
      "Centralize daily lineup notes, menu changes,\nand training so every shift runs from the same playbook. Increase sales through better communication and knowledge.",
    features: ["lineup notes", "menu updates", "recipe library", "training modules", "staff certifications"],
    buttonLabel: "See How Teams Use It",
    accentClass: "text-[#c27c2c]",
    cardStrokeClass: "border-[0.5px] border-[#c27c2c]/40 hover:border-[#c27c2c]/40",
    dotClass: "bg-gradient-to-b from-[#ffa339] to-[#c27c2c]",
    buttonGradientClass: "border-[#b8772b] bg-gradient-to-b from-[#ffa339] to-[#c27c2c]",
    buttonHoverClass: "hover:border-[#aa6e26] hover:from-[#ffb24d] hover:to-[#b8772b]"
  },
  {
    id: "scheduling",
    title: "Intelligent Scheduling System",
    description:
      "Build schedules that don't fall apart mid-week. Clopen tracks staff availability, certifications, and coverage needs so managers stop scrambling when someone calls out.",
    features: [
      "AI schedule builder",
      "availability tracking",
      "certification based shifts",
      "call-out automation",
      "coverage notifications"
    ],
    buttonLabel: "Explore Scheduling",
    accentClass: "text-[#6b8e23]",
    cardStrokeClass: "border-[0.5px] border-[#6b8e23]/40 hover:border-[#6b8e23]/40",
    dotClass: "bg-[#6b8e23]",
    buttonGradientClass: "border-[#5f7d1f] bg-gradient-to-b from-[#89b334] to-[#6b8e23]",
    buttonHoverClass: "hover:border-[#4f6819] hover:from-[#94bf3a] hover:to-[#5f7d1f]"
  },
  {
    id: "financial",
    title: "Financial Command Center",
    description:
      "Track the numbers that drive margin and performance, from recipe cost variance to labor efficiency. Honed over years of operations for James Beard and Michelin Guide restaurateurs.",
    features: ["recipe costing", "inventory tracking", "variance monitoring", "labor analytics", "forecasting"],
    buttonLabel: "Explore Financial Tools",
    accentClass: "text-[#1f2933]",
    cardStrokeClass: "border-[0.5px] border-black/40 hover:border-black/40",
    dotClass: "bg-gradient-to-b from-[#ffa339] to-[#c27c2c]",
    buttonGradientClass: "border-[#111827] bg-gradient-to-b from-[#334155] to-[#1f2933]",
    buttonHoverClass: "hover:border-[#020617] hover:from-[#3b4d66] hover:to-[#111827]"
  }
];

const expandedDetails: Record<ProductWithId["id"], ExpandedDetail> = {
  communication: {
    title: "Communication & Training Hub",
    subheadline: "One place for everything your team needs to know before service starts.",
    paragraphs: [
      "Restaurants lose critical information in group texts, verbal updates, and scattered documents. Clopen brings daily communication and training into a single operational hub so every shift starts with the same information.",
      "Managers share lineup notes, menu updates, and service changes in one place. Staff see what is new before their shift begins, and new hires learn from the same playbook every time."
    ],
    solves: [
      {
        title: "Lineup Notes That Actually Reach Everyone",
        body: "Managers post pre-shift notes once. Every scheduled staff member sees them before service."
      },
      {
        title: "Menu & Recipe Changes Without Confusion",
        body: "Update a dish, modifier, or prep spec and the kitchen and FOH see it instantly."
      },
      {
        title: "Training That Stays Consistent",
        body: "Instead of each manager training differently, staff complete standardized training modules."
      },
      {
        title: "Institutional Knowledge That Doesn't Disappear",
        body: "Recipes, cocktails, prep notes, and service procedures stay documented even when staff changes."
      }
    ],
    tools: [
      "digital lineup notes",
      "menu and recipe library",
      "shift announcements",
      "training modules",
      "staff certifications and skill tracking",
      "searchable knowledge base"
    ],
    accentClass: "text-[#c27c2c]"
  },
  scheduling: {
    title: "Intelligent Scheduling System",
    subheadline: "Schedules that hold up during the week - not just when they're posted.",
    paragraphs: [
      "Restaurant schedules often start organized and quickly fall apart due to call-outs, availability changes, and coverage gaps. Clopen helps managers build schedules that reflect real staffing constraints and automatically handles coverage when things change.",
      "Instead of juggling spreadsheets and group texts, managers can see availability, required certifications, and staffing needs in one system."
    ],
    solves: [
      {
        title: "Call-Outs Without Chaos",
        body: "When someone misses a shift, Clopen automatically notifies available staff to fill the position."
      },
      {
        title: "Schedules That Respect Availability",
        body: "Managers see real staff availability when building schedules, reducing conflicts and last-minute edits."
      },
      {
        title: "Certification-Based Shifts",
        body: "Certain positions require specific training or certifications. Clopen ensures the right staff are scheduled."
      },
      {
        title: "Faster Schedule Creation",
        body: "AI-assisted scheduling helps managers build balanced schedules in minutes instead of hours."
      }
    ],
    tools: [
      "AI schedule builder",
      "staff availability tracking",
      "certification-based shift rules",
      "automated call-out coverage",
      "coverage notifications",
      "schedule change alerts"
    ],
    accentClass: "text-[#6b8e23]"
  },
  financial: {
    title: "Financial Command Center",
    subheadline: "See the numbers that actually impact your restaurant's margins.",
    paragraphs: [
      "Most restaurants only discover food or labor problems after the damage is done. Clopen connects recipes, inventory, and labor data so operators can see cost issues early and respond before margins slip.",
      "Instead of digging through spreadsheets and invoices, chefs and operators can monitor key metrics from one financial dashboard."
    ],
    solves: [
      {
        title: "Food Cost Drift",
        body: "Recipe costing tracks ingredient prices so operators can see when menu margins start slipping."
      },
      {
        title: "Inventory Visibility",
        body: "Track inventory movement and identify where waste or over-ordering may be happening."
      },
      {
        title: "Labor Efficiency",
        body: "Monitor labor percentage and scheduling efficiency across shifts."
      },
      {
        title: "Variance Alerts",
        body: "Clopen highlights when food or labor costs start deviating from targets."
      }
    ],
    tools: [
      "recipe costing system",
      "inventory tracking",
      "variance monitoring",
      "labor analytics",
      "cost forecasting",
      "margin visibility dashboards"
    ],
    accentClass: "text-[#1f2933]"
  }
};

export function SystemsOverview() {
  const [activeId, setActiveId] = useState<ProductWithId["id"] | null>(null);
  const openBooking = () => window.dispatchEvent(new CustomEvent("openClopenBooking"));

  const activeDetail = useMemo(() => {
    if (!activeId) return null;
    return expandedDetails[activeId];
  }, [activeId]);

  useEffect(() => {
    if (!activeId) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeId]);

  return (
    <>
      <section id="systems-overview" className="pt-20">
        <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#1f2933] md:text-3xl">
          Three Systems That Keep Restaurants Running Smoothly
        </h2>
        <p className="mt-2 max-w-3xl text-[#6b7280]">
          Each module is designed for how restaurant teams actually operate during prep, service, and close.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onButtonClick={() => setActiveId(product.id)} />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeDetail ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-[#111827]/55 p-4 backdrop-blur-sm"
            onClick={() => setActiveId(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-2xl md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className={`font-[var(--font-display)] text-3xl font-semibold ${activeDetail.accentClass}`}>
                    {activeDetail.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#4b5563]">{activeDetail.subheadline}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  className="rounded-lg border border-[#d1d5db] px-3 py-1.5 text-xs font-medium text-[#4b5563] transition hover:bg-[#f7f6f3]"
                >
                  Close
                </button>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-7 text-[#6b7280]">
                {activeDetail.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-7">
                <p className="text-sm font-semibold text-[#1f2933]">What this solves in a real restaurant</p>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {activeDetail.solves.map((item) => (
                    <div key={item.title} className="rounded-lg border border-[#e5e7eb] bg-[#f7f6f3] p-4">
                      <p className="text-sm font-semibold text-[#1f2933]">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-[#6b7280]">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-lg border border-[#e5e7eb] bg-[#f7f6f3] p-4">
                <p className="text-sm font-semibold text-[#1f2933]">
                  {activeDetail.title === "Financial Command Center"
                    ? "Tools inside the Financial Command Center"
                    : activeDetail.title === "Intelligent Scheduling System"
                      ? "Tools inside the Scheduling System"
                      : "Tools inside the Communication Hub"}
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {activeDetail.tools.map((tool) => (
                    <li key={tool} className="flex items-start gap-2 text-sm text-[#4b5563]">
                      <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-gradient-to-b from-[#ffa339] to-[#c27c2c]" />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={openBooking}
                  className="rounded-lg bg-gradient-to-b from-[#ffa339] to-[#c27c2c] px-4 py-2.5 text-sm font-semibold text-white transition hover:from-[#ffb24d] hover:to-[#b8772b] hover:opacity-95"
                >
                  See This in a Live Walkthrough -&gt;
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
