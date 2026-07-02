import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { BusinessLaunchPage } from "@/components/rake/BusinessLaunchPage";
import { verticalSites } from "@/lib/seo";

const title = "Business Launch System by 2Stack | Operating Systems for New Contractors";
const description =
  "2Stack installs the systems, software, automation, and operational backbone newer contractors need to stop running the business from memory.";
const url = `${verticalSites.rake.url}/launch-system`;

export const metadata: Metadata = {
  metadataBase: new URL(verticalSites.rake.url),
  title: {
    absolute: title
  },
  description,
  alternates: {
    canonical: "/launch-system"
  },
  openGraph: {
    title,
    description,
    url,
    siteName: "RAKE by 2Stack",
    type: "website",
    images: [
      {
        url: "/rake-vertical-ad.png",
        width: 900,
        height: 1334,
        alt: "2Stack Business Launch System for contractors"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/rake-vertical-ad.png"]
  }
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Launch System",
    provider: {
      "@type": "Organization",
      name: "2Stack",
      url: verticalSites.rake.url
    },
    areaServed: "United States",
    serviceType: "Business operations systems implementation",
    url,
    description
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <BusinessLaunchPage />
    </>
  );
}
