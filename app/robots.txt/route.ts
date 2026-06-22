import type { NextRequest } from "next/server";

const supportedHosts = new Set([
  "2-stack.com",
  "www.2-stack.com",
  "clopen.2-stack.com",
  "loam.2-stack.com",
  "rake.2-stack.com"
]);

export function GET(request: NextRequest) {
  const requestHost = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "2-stack.com";
  const hostname = requestHost.split(":")[0].toLowerCase();
  const canonicalHost = hostname === "www.2-stack.com" ? "2-stack.com" : hostname;
  const sitemapHost = supportedHosts.has(hostname) ? canonicalHost : "2-stack.com";

  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "",
    `Sitemap: https://${sitemapHost}/sitemap.xml`,
    `Host: ${sitemapHost}`,
    ""
  ].join("\n");

  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
