import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { HomeServicesLanding } from "@/components/home-services/HomeServicesLanding";
import { siteConfig } from "@/lib/seo";

const title = "Home Services Lead Response and Operations Systems";
const description =
  "2Stack helps roofing, HVAC, plumbing, and home-service teams respond to leads faster, automate follow-up, track marketing, and protect their pipeline.";
const url = `${siteConfig.url}/home-services`;

export const metadata: Metadata = {
  title: {
    absolute: `${title} | 2Stack`
  },
  description,
  alternates: {
    canonical: url
  },
  openGraph: {
    title: `${title} | 2Stack`,
    description,
    url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/rake-vertical-ad.png",
        width: 900,
        height: 1334,
        alt: "2Stack systems for home-service contractors"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | 2Stack`,
    description,
    images: ["/rake-vertical-ad.png"]
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${url}/#service`,
      name: "Home Services Operations Systems",
      description,
      url,
      provider: {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url
      },
      areaServed: {
        "@type": "Country",
        name: "United States"
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Roofing, HVAC, plumbing, and home-service companies"
      }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "2Stack",
          item: siteConfig.url
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Home Services",
          item: url
        }
      ]
    }
  ]
};

export default function HomeServicesPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <HomeServicesLanding />
    </>
  );
}
