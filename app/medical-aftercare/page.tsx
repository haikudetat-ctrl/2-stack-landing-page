import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MedicalAftercareLanding } from "@/components/medical-aftercare/MedicalAftercareLanding";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Medical Aftercare Systems | 2Stack",
  description:
    "Modern aftercare infrastructure for clinics and surgical practices to improve recovery visibility and outcomes."
};

export default function MedicalAftercarePage() {
  return <div className={inter.className}><MedicalAftercareLanding /></div>;
}
