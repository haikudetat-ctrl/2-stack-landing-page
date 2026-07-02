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
    source: "/home-services",
    destination: verticalSites.rake.url,
    permanent: true,
    has: [{ type: "host", value: "(?:www\\.)?2-stack\\.com" }]
  }
];
