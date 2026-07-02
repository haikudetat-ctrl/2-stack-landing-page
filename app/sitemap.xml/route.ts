import type { NextRequest } from "next/server";

type SitemapEntry = {
  url: string;
  priority: number;
  changeFrequency: "weekly" | "monthly";
};

const verticalHosts = new Set(["clopen.2-stack.com", "loam.2-stack.com", "rake.2-stack.com"]);

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (character) => {
    const entities: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;"
    };
    return entities[character];
  });
}

export function GET(request: NextRequest) {
  const requestHost = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "2-stack.com";
  const hostname = requestHost.split(":")[0].toLowerCase();

  const entries: SitemapEntry[] = verticalHosts.has(hostname)
    ? [
        { url: `https://${hostname}/`, priority: 1, changeFrequency: "weekly" },
        ...(hostname === "rake.2-stack.com"
          ? [{ url: `https://${hostname}/launch-system`, priority: 0.8, changeFrequency: "monthly" } as const]
          : [])
      ]
    : [{ url: "https://2-stack.com/", priority: 1, changeFrequency: "weekly" }];

  const urls = entries
    .map(
      ({ url, priority, changeFrequency }) => `  <url>
    <loc>${escapeXml(url)}</loc>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
