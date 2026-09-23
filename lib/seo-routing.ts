type SeoRedirect = {
  source: string;
  destination: string;
  permanent: true;
  has: Array<{
    type: "host";
    value: string;
  }>;
};

type SeoRewrite = {
  source: string;
  destination: string;
  has: Array<{
    type: "host";
    value: string;
  }>;
};

export type SitemapEntry = {
  url: string;
  priority: number;
  changeFrequency: "weekly" | "monthly";
};

const verticalPaths = {
  "clopen.2-stack.com": [
    "restaurant-operations-system",
    "restaurant-inventory-management",
    "beverage-cost-control",
    "restaurant-staff-training-sops"
  ],
  "rake.2-stack.com": [
    "contractor-speed-to-lead",
    "contractor-operations-software",
    "contractor-estimate-follow-up",
    "contractor-job-costing",
    "contractor-review-referral-automation"
  ],
  "loam.2-stack.com": []
} as const;

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
  },
  ...Object.entries(verticalPaths).flatMap(([host, paths]) =>
    paths.map((slug) => ({
      source: `/${host.split(".")[0]}/${slug}`,
      destination: `https://${host}/${slug}`,
      permanent: true as const,
      has: [{ type: "host" as const, value: "(?:www\\.)?2-stack\\.com" }]
    }))
  )
];

export const seoRewrites: SeoRewrite[] = Object.entries(verticalPaths).flatMap(([host, paths]) => [
  {
    source: "/",
    destination: `/${host.split(".")[0]}`,
    has: [{ type: "host" as const, value: host }]
  },
  ...paths.map((slug) => ({
    source: `/${slug}`,
    destination: `/${host.split(".")[0]}/${slug}`,
    has: [{ type: "host" as const, value: host }]
  }))
]);

export function getVerticalRewrite(hostname: string, pathname: string) {
  const normalizedHost = hostname.toLowerCase().split(":")[0];
  const vertical = normalizedHost.split(".")[0] as keyof typeof verticalPaths;
  const paths = verticalPaths[normalizedHost as keyof typeof verticalPaths];

  if (!paths) return null;
  if (pathname === "/") return `/${vertical}`;

  const slug = pathname.replace(/^\//, "").replace(/\/$/, "");
  if (!(paths as readonly string[]).includes(slug)) return null;
  return `/${vertical}/${slug}`;
}

export function getSitemapEntries(hostname: string): SitemapEntry[] {
  const normalizedHost = hostname === "www.2-stack.com" ? "2-stack.com" : hostname.toLowerCase();
  const paths = verticalPaths[normalizedHost as keyof typeof verticalPaths];

  if (paths) {
    return [
      { url: `https://${normalizedHost}/`, priority: 1, changeFrequency: "weekly" },
      ...(paths as readonly string[]).map((slug) => ({
        url: `https://${normalizedHost}/${slug}`,
        priority: 0.8,
        changeFrequency: "monthly" as const
      }))
    ];
  }

  return [
    { url: "https://2-stack.com/", priority: 1, changeFrequency: "weekly" },
    { url: "https://2-stack.com/home-services", priority: 0.8, changeFrequency: "monthly" }
  ];
}
