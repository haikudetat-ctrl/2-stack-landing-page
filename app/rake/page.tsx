import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { RakePage } from "@/components/rake/RakePage";
import { verticalSites } from "@/lib/seo";

const title = "RAKE by 2Stack | Operational Intelligence for Contractors";
const description =
  "RAKE gives contractors one owner view across leads, estimates, jobs, customers, referrals, margin, and business health.";
const url = verticalSites.rake.url;

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
    siteName: "RAKE by 2Stack",
    type: "website",
    images: [
      {
        url: "/rake-vertical-ad.png",
        width: 900,
        height: 1334,
        alt: "RAKE contractor operational intelligence"
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
    "@type": "Organization",
    name: "RAKE by 2Stack",
    url,
    logo: `${url}/rake-logo-mark.svg`,
    description
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RAKE",
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
      <RakePage />
    </>
  );
}
