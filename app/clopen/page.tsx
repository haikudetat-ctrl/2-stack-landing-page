import type { Metadata } from "next";
import { ClopenPage } from "@/components/clopen/ClopenPage";

export const metadata: Metadata = {
  title: "Clopen by 2Stack | Restaurant Systems",
  description:
    "Clopen helps restaurant owners, chefs, and GMs run communication, scheduling, and financial operations with less chaos."
};

export default function Page() {
  return <ClopenPage />;
}

