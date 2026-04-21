import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { ClopenPage } from "@/components/clopen/ClopenPage";

const clopenSans = Inter({
  subsets: ["latin"],
  variable: "--font-clopen-sans",
  weight: ["400", "500", "600", "700"]
});

const clopenDisplay = Sora({
  subsets: ["latin"],
  variable: "--font-clopen-display",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Clopen by 2Stack | Restaurant Systems",
  description:
    "Clopen helps restaurant owners, chefs, and GMs run communication, scheduling, and financial operations with less chaos."
};

export default function Page() {
  return (
    <div
      className={`${clopenSans.variable} ${clopenDisplay.variable} [--font-sans:var(--font-clopen-sans)] [--font-display:var(--font-clopen-display)] font-[var(--font-sans)]`}
    >
      <ClopenPage />
    </div>
  );
}
