import type { PainPointIcon } from "@/types";

type RiskLevel = "high" | "medium" | "low";

type PainPointCard = {
  title: string;
  description: string;
  icon: PainPointIcon;
  impact: "High" | "Medium";
  frequency: "Daily" | "Weekly";
  risk: RiskLevel;
};

const painPoints: PainPointCard[] = [
  {
    title: "Communication Breakdowns",
    description: "Critical updates live in scattered texts and late-night message threads.",
    icon: "chat",
    impact: "High",
    frequency: "Daily",
    risk: "high"
  },
  {
    title: "Scheduling Chaos",
    description: "Shift coverage, availability changes, and call-outs create daily fire drills.",
    icon: "calendar",
    impact: "High",
    frequency: "Weekly",
    risk: "high"
  },
  {
    title: "Training Inconsistency",
    description: "Different managers train differently, so execution varies from shift to shift.",
    icon: "training",
    impact: "Medium",
    frequency: "Daily",
    risk: "medium"
  },
  {
    title: "Recipe Knowledge Loss",
    description: "Tribal knowledge disappears when key staff leaves or roles change.",
    icon: "recipe",
    impact: "Medium",
    frequency: "Weekly",
    risk: "medium"
  },
  {
    title: "Financial Blind Spots",
    description: "Without visibility, labor and food cost problems are found too late.",
    icon: "finance",
    impact: "High",
    frequency: "Weekly",
    risk: "high"
  }
];

export function PainPoints() {
  return (
    <section id="pain-points" className="pt-20">
      <h2 className="font-[var(--font-display)] text-4xl font-bold leading-[1.03] tracking-tight text-[#c27c2c] md:text-5xl">
        Most Restaurants
        <br />
        Run on Controlled Chaos
      </h2>
      <p className="mt-3 text-base font-medium leading-7 tracking-[0.01em] text-[#6b7280] md:text-lg md:whitespace-nowrap">
        Clopen replaces fragile workarounds with dependable systems your team can run every shift.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-12 lg:auto-rows-fr">
        {painPoints.map((item) => {
          const tone = toneClasses[item.risk];

          return (
            <article
              key={item.title}
              tabIndex={0}
              className={`group relative overflow-hidden rounded-xl border border-[#e5e7eb] bg-white p-5 shadow-sm outline-none transition duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#c27c2c]/45 lg:col-span-4 ${tone.hoverBorder}`}
            >
              <div className={`pointer-events-none absolute inset-y-0 left-0 w-[3px] ${tone.rail}`} />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(194,124,44,0.08),transparent_40%)] opacity-80" />

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className={`inline-flex rounded-md p-1.5 ${tone.icon}`}>
                    <Icon name={item.icon} />
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${tone.badge}`}>
                    {item.risk} risk
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-[#1f2933]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6b7280]">{item.description}</p>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <MetricChip label="Impact" value={item.impact} tone={tone.metric} />
                  <MetricChip label="Frequency" value={item.frequency} tone={tone.metric} />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

const toneClasses: Record<RiskLevel, { rail: string; icon: string; badge: string; metric: string; hoverBorder: string }> = {
  high: {
    rail: "bg-[#ff3300]",
    icon: "text-[#ff3300]",
    badge: "border-[#ff3300]/35 bg-[#ff3300]/10 text-[#b12400]",
    metric: "bg-[#ff3300]",
    hoverBorder: "hover:border-[#ff3300]/45 focus-visible:border-[#ff3300]/45"
  },
  medium: {
    rail: "bg-[#6b8e23]",
    icon: "text-[#6b8e23]",
    badge: "border-[#6b8e23]/30 bg-[#6b8e23]/10 text-[#4f6a1a]",
    metric: "bg-[#6b8e23]",
    hoverBorder: "hover:border-[#6b8e23]/40 focus-visible:border-[#6b8e23]/40"
  },
  low: {
    rail: "bg-[#94a3b8]",
    icon: "text-[#94a3b8]",
    badge: "border-[#94a3b8]/30 bg-[#94a3b8]/10 text-[#64748b]",
    metric: "bg-[#94a3b8]",
    hoverBorder: "hover:border-[#94a3b8]/45 focus-visible:border-[#94a3b8]/45"
  }
};

function MetricChip({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="rounded-md border border-[#e5e7eb] bg-[#f7f6f3] p-2.5">
      <p className="text-[11px] uppercase tracking-[0.12em] text-[#6b7280]">{label}</p>
      <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#1f2933]">
        <span className={`h-1.5 w-1.5 rounded-full ${tone}`} />
        {value}
      </p>
    </div>
  );
}

function Icon({ name }: { name: PainPointIcon }) {
  switch (name) {
    case "chat":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v5A2.5 2.5 0 0 1 16.5 15H10l-3.5 3v-3H7.5A2.5 2.5 0 0 1 5 12.5v-5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "calendar":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="4.5" y="6" width="15" height="13.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 4v4m8-4v4M4.5 10h15" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "training":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4.5 7.5h15v10.5H4.5z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 11h8M8 14h5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "recipe":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M7 4.5h9a2 2 0 0 1 2 2V19.5H7a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 9h7M9 12h7M9 15h5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "finance":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 18.5h14M7.5 16V11m4 5V8m4 8v-3" stroke="currentColor" strokeWidth="1.6" />
          <path d="m7.5 8.5 4-3 4 2.5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    default:
      return null;
  }
}
