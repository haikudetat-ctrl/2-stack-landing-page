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
  cardStrokeClass,
  dotClass,
  buttonGradientClass,
  buttonHoverClass,
  onButtonClick
}: ProductCardProps) {
  return (
    <article
      className={`group flex h-full flex-col rounded-xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${cardStrokeClass}`}
    >
      <h3
        className={`text-center font-[var(--font-display)] text-[1.275rem] font-semibold leading-tight ${accentClass} md:whitespace-nowrap`}
      >
        {title}
      </h3>
      <div className="mt-3 h-px w-full bg-[#e8eaef]" />
      <div className="mt-3 min-h-[5.5rem]">
        <p className="whitespace-pre-line text-sm leading-[1.3125rem] text-[#6b7280]">{description}</p>
      </div>

      <ul className="mt-4 space-y-[0.28125rem] pl-20 text-sm leading-[1.3125rem] text-[#374151]">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-[0.28125rem]">
            <span className={`mt-[7px] h-1.5 w-1.5 rounded-full ${dotClass}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex justify-center pt-6">
        <button
          type="button"
          onClick={onButtonClick}
          className={`flex w-3/4 items-center justify-center rounded-lg border px-4 py-2.5 text-center text-sm font-semibold text-white transition-all duration-200 ${buttonGradientClass} ${buttonHoverClass}`}
        >
          {buttonLabel}
        </button>
      </div>
    </article>
  );
}
