import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { getSeoPage, getSeoTitle, rakeSeoPages } from "@/lib/seo-content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return rakeSeoPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage("rake", slug);
  if (!page) return {};

  return {
    metadataBase: new URL("https://rake.2-stack.com"),
    title: { absolute: getSeoTitle(page) },
    description: page.description,
    alternates: { canonical: page.canonicalUrl },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.canonicalUrl,
      siteName: "RAKE by 2Stack",
      type: "website",
      images: [{ url: "/rake-vertical-ad.png", width: 900, height: 1334, alt: `${page.title} from RAKE` }]
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: ["/rake-vertical-ad.png"] },
    robots: { index: true, follow: true }
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage("rake", slug);
  if (!page) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${page.canonicalUrl}#webpage`,
        url: page.canonicalUrl,
        name: page.title,
        description: page.description,
        dateModified: "2026-09-23",
        inLanguage: "en-US",
        about: { "@id": `${page.canonicalUrl}#service` }
      },
      {
        "@type": "Service",
        "@id": `${page.canonicalUrl}#service`,
        name: page.title,
        serviceType: page.primaryKeyword,
        description: page.description,
        url: page.canonicalUrl,
        provider: { "@type": "Organization", "@id": "https://2-stack.com/#organization", name: "2Stack", url: "https://2-stack.com" },
        audience: { "@type": "BusinessAudience", audienceType: page.idealFor },
        areaServed: { "@type": "Country", name: "United States" }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "RAKE", item: "https://rake.2-stack.com/" },
          { "@type": "ListItem", position: 2, name: page.title, item: page.canonicalUrl }
        ]
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer }
        }))
      }
    ]
  };

  return <><JsonLd data={structuredData} /><SeoLandingPage page={page} /></>;
}
