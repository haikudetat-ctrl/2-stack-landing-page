import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { RakePage } from "@/components/rake/RakePage";
import { verticalSites } from "@/lib/seo";

const title = "Contractor Operations Software and Internal Tools | RAKE";
const description =
  "RAKE builds custom contractor operations software that connects leads, estimates, jobs, margin, follow-up, and owner reporting through a 90-day rollout.";
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Brand", "@id": `${url}/#brand`, name: "RAKE", url, logo: `${url}/rake-logo-mark.svg`, description },
    { "@type": "WebSite", "@id": `${url}/#website`, name: "RAKE by 2Stack", url, description, inLanguage: "en-US" },
    {
      "@type": "Service",
      "@id": `${url}/#service`,
      name: "Custom contractor operations software",
      serviceType: "Contractor operations systems and internal tools",
      url,
      description,
      provider: { "@type": "Organization", "@id": "https://2-stack.com/#organization", name: "2Stack", url: "https://2-stack.com" },
      audience: { "@type": "BusinessAudience", audienceType: "Roofing and service contractors around $1–6 million in annual revenue" },
      areaServed: { "@type": "Country", name: "United States" }
    }
  ]
};

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <RakePage />
    </>
  );
}
