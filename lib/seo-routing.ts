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
    destination: "https://clopen.2-stack.com",
    permanent: true,
    has: [{ type: "host", value: "(?:www\\.)?2-stack\\.com" }]
  },
  {
    source: "/loam",
    destination: "https://loam.2-stack.com",
    permanent: true,
    has: [{ type: "host", value: "(?:www\\.)?2-stack\\.com" }]
  },
  {
    source: "/rake",
    destination: "https://rake.2-stack.com",
    permanent: true,
    has: [{ type: "host", value: "(?:www\\.)?2-stack\\.com" }]
  }
];
