import type { ProductFeatureCard } from "@/types";

type ProductCardProps = ProductFeatureCard & {
  onButtonClick?: () => void;
};

export function ProductCard({
  title,
  description,
  features,
  buttonLabel,
  accentClass,
  dotClass,
  buttonHoverClass,
  onButtonClick
}: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <h3 className={`font-[var(--font-display)] text-2xl font-semibold ${accentClass}`}>{title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#6b7280]">{description}</p>

      <ul className="mt-5 space-y-2 text-sm text-[#374151]">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className={`mt-[7px] h-1.5 w-1.5 rounded-full ${dotClass}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={onButtonClick}
          className={`inline-flex rounded-lg border border-[#d1d5db] bg-white px-4 py-2 text-sm font-medium text-[#374151] transition hover:bg-[#f3f4f6] ${buttonHoverClass}`}
        >
          {buttonLabel}
        </button>
      </div>
    </article>
  );
}
