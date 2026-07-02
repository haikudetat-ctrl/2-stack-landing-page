import { verticalSites } from "./seo.ts";

type SeoRedirect = {
  source: string;
  destination: string;
  permanent: true;
  has: Array<{
    type: "host";
    value: string;
  }>;
};

export const seoRedirects: SeoRedirect[] = [
  {
    source: "/clopen",
    destination: verticalSites.clopen.url,
    permanent: true,
    has: [{ type: "host", value: "(?:www\\.)?2-stack\\.com" }]
  },
  {
    source: "/loam",
    destination: verticalSites.loam.url,
    permanent: true,
    has: [{ type: "host", value: "(?:www\\.)?2-stack\\.com" }]
  },
  {
    source: "/rake",
    destination: verticalSites.rake.url,
    permanent: true,
    has: [{ type: "host", value: "(?:www\\.)?2-stack\\.com" }]
  },
  {
    source: "/rake/launch-system",
    destination: `${verticalSites.rake.url}/launch-system`,
    permanent: true,
    has: [{ type: "host", value: "(?:www\\.)?2-stack\\.com" }]
  },
  {
    source: "/launch-system",
    destination: `${verticalSites.rake.url}/launch-system`,
    permanent: true,
    has: [{ type: "host", value: "(?:www\\.)?2-stack\\.com" }]
  },
  {
    source: "/home-services",
    destination: verticalSites.rake.url,
    permanent: true,
    has: [{ type: "host", value: "(?:www\\.)?2-stack\\.com" }]
  },
  {
    source: "/clopen",
    destination: "/",
    permanent: true,
    has: [{ type: "host", value: "clopen\\.2-stack\\.com" }]
  },
  {
    source: "/restaurants",
    destination: "/",
    permanent: true,
    has: [{ type: "host", value: "clopen\\.2-stack\\.com" }]
  },
  {
    source: "/rake",
    destination: verticalSites.rake.url,
    permanent: true,
    has: [{ type: "host", value: "clopen\\.2-stack\\.com" }]
  },
  {
    source: "/rake/:path*",
    destination: `${verticalSites.rake.url}/:path*`,
    permanent: true,
    has: [{ type: "host", value: "clopen\\.2-stack\\.com" }]
  },
  {
    source: "/loam",
    destination: verticalSites.loam.url,
    permanent: true,
    has: [{ type: "host", value: "clopen\\.2-stack\\.com" }]
  },
  {
    source: "/rake",
    destination: "/",
    permanent: true,
    has: [{ type: "host", value: "rake\\.2-stack\\.com" }]
  },
  {
    source: "/rake/launch-system",
    destination: "/launch-system",
    permanent: true,
    has: [{ type: "host", value: "rake\\.2-stack\\.com" }]
  },
  {
    source: "/clopen",
    destination: verticalSites.clopen.url,
    permanent: true,
    has: [{ type: "host", value: "rake\\.2-stack\\.com" }]
  },
  {
    source: "/restaurants",
    destination: verticalSites.clopen.url,
    permanent: true,
    has: [{ type: "host", value: "rake\\.2-stack\\.com" }]
  },
  {
    source: "/loam",
    destination: verticalSites.loam.url,
    permanent: true,
    has: [{ type: "host", value: "rake\\.2-stack\\.com" }]
  }
];
