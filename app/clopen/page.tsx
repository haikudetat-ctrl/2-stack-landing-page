import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ClopenPage } from "@/components/clopen/ClopenPage";

const clopenSans = Inter({
  subsets: ["latin"],
  variable: "--font-clopen-sans",
  weight: ["400", "500", "600", "700"]
});

const clopenDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-clopen-display",
  weight: ["500", "600", "700"]
});

const title = "Clopen by 2Stack | Preserve Restaurant Standards";
const description =
  "Clopen captures the operational intelligence that lives in your best people and turns it into systems your entire hospitality team can execute.";
const url = "https://clopen.2-stack.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title,
    description,
    url,
    siteName: "Clopen by 2Stack",
    type: "website",
    images: [
      {
        url: "/clopen/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Clopen by 2Stack"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/clopen/opengraph-image"]
  }
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Clopen by 2Stack",
    url,
    logo: `${url}/clopen-logo.svg`,
    description
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Clopen",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    publisher: {
      "@type": "Organization",
      name: "2Stack"
    },
    description,
    offers: {
      "@type": "Offer",
      category: "Discovery call"
    }
  }
];

export default function Page() {
  return (
    <div
      className={`${clopenSans.variable} ${clopenDisplay.variable} [--font-sans:var(--font-clopen-sans)] [--font-display:var(--font-clopen-display)] font-[var(--font-sans)]`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ClopenPage />
    </div>
  );
}
