import { VerticalCardsCarousel } from "@/components/VerticalCards";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["600"]
});

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-6xl animate-fade-in flex-col items-center px-6 pb-8 pt-6 text-center md:pt-6">
      <p className="mb-6 inline-flex items-center border-y border-white/30 px-5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
        More Business. More Clarity. Guaranteed.
      </p>

      <h1
        className={`${roboto.className} max-w-4xl text-[1.6875rem] font-semibold leading-tight tracking-[-2px] text-white md:text-[2.8125rem] md:leading-[1.08]`}
      >
        Stack up against anyone.
      </h1>

      <div className="mt-10 w-full">
        <VerticalCardsCarousel compact />
      </div>
    </section>
  );
}
