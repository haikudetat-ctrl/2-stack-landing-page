import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LoamPage } from "@/components/loam/LoamPage";
import { verticalSites } from "@/lib/seo";

const title = "LOAM by 2Stack | Landscaping Operations and Management";
const description =
  "LOAM helps small landscaping companies start the day organized with routes, job status, photos, invoicing, payments, and follow-ups in one operating layer.";
const url = verticalSites.loam.url;

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
    siteName: "LOAM by 2Stack",
    type: "website",
    images: [
      {
        url: "/loam-vertical-ad.png",
        width: 900,
        height: 1334,
        alt: "LOAM landscaping operations and management"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/loam-vertical-ad.png"]
  }
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LOAM by 2Stack",
    url,
    logo: `${url}/loam-logo-white.svg`,
    description
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LOAM",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    publisher: {
      "@type": "Organization",
      name: "2Stack"
    },
    url,
    description
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <LoamPage />
    </>
  );
}
