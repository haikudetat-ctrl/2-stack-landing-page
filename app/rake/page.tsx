import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { RakePage } from "@/components/rake/RakePage";
import { siteConfig, verticalSites } from "@/lib/seo";

const title = "Rake by 2Stack | Stop Losing Paid Roofing Leads";
const description =
  "Rake finds where your paid roofing leads leak between the ad click and the signed contract, then installs the fix. Start with a free lead-control audit.";
const url = verticalSites.rake.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    absolute: title
  },
  description,
  alternates: {
    canonical: "/rake"
  },
  openGraph: {
    title,
    description,
    url,
    siteName: "Rake by 2Stack",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: "en-US",
      about: { "@id": `${url}#service` }
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Rake lead-control install for roofing contractors",
      serviceType: "Lead response, follow-up, and ad-to-contract tracking for roofing contractors",
      url,
      description,
      provider: { "@type": "Organization", "@id": `${siteConfig.url}/#organization`, name: "2Stack", url: siteConfig.url },
      audience: { "@type": "BusinessAudience", audienceType: "Owner-operated roofing contractors running paid ads" },
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
