import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { VerticalCards } from "@/components/VerticalCards";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Why2Stack } from "@/components/Why2Stack";
import { siteConfig } from "@/lib/seo";

const title = "Operating Systems for Owner-Operators";

export const metadata: Metadata = {
  title: {
    absolute: `${title} | 2Stack`
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${title} | 2Stack`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "2Stack operating systems for owner-operators"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | 2Stack`,
    description: siteConfig.description,
    images: ["/opengraph-image"]
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      logo: `${siteConfig.url}/navbar_logo.png`,
      description: siteConfig.description
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`
      },
      inLanguage: "en-US"
    }
  ]
};

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen overflow-x-clip text-[#e7ecff]"
      style={{
        background:
          "linear-gradient(135deg, rgba(24, 34, 48, 0.98) 0%, rgba(13, 19, 29, 1) 48%, rgba(23, 30, 41, 1) 100%)"
      }}
    >
      <JsonLd data={structuredData} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <Navbar />
      <Hero />
      <VerticalCards />
      <WhatWeDo />
      <Why2Stack />
      <Footer />
    </main>
  );
}
