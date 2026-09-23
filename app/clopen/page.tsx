import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ClopenPage } from "@/components/clopen/ClopenPage";
import { JsonLd } from "@/components/JsonLd";
import { verticalSites } from "@/lib/seo";

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

const title = "Restaurant Operations System for Independent Restaurants | Clopen";
const description =
  "Clopen builds custom restaurant operating systems for standards, staff training, inventory, beverage cost, and daily management through a 90-day rollout.";
const url = verticalSites.clopen.url;

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    absolute: title
  },
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
  },
  robots: {
    index: true,
    follow: true
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Brand", "@id": `${url}/#brand`, name: "Clopen", url, logo: `${url}/clopen-logo.svg`, description },
    { "@type": "WebSite", "@id": `${url}/#website`, name: "Clopen by 2Stack", url, description, inLanguage: "en-US" },
    {
      "@type": "Service",
      "@id": `${url}/#service`,
      name: "Custom restaurant operations systems",
      serviceType: "Restaurant operations system design and implementation",
      url,
      description,
      provider: { "@type": "Organization", "@id": "https://2-stack.com/#organization", name: "2Stack", url: "https://2-stack.com" },
      audience: { "@type": "BusinessAudience", audienceType: "Independent restaurants and small groups around $3–5 million in annual revenue" },
      areaServed: { "@type": "Country", name: "United States" }
    }
  ]
};

export default function Page() {
  return (
    <div
      className={`${clopenSans.variable} ${clopenDisplay.variable} [--font-sans:var(--font-clopen-sans)] [--font-display:var(--font-clopen-display)] font-[var(--font-sans)]`}
    >
      <JsonLd data={structuredData} />
      <ClopenPage />
    </div>
  );
}
