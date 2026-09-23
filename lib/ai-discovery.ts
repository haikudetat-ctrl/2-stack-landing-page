import { clopenSeoPages, rakeSeoPages } from "./seo-content.ts";

function normalizeHost(hostname: string) {
  const host = hostname.toLowerCase().split(":")[0];
  return host === "www.2-stack.com" ? "2-stack.com" : host;
}

export function getLlmsText(hostname: string) {
  const host = normalizeHost(hostname);

  if (host === "clopen.2-stack.com") {
    return [
      "# Clopen by 2Stack",
      "",
      "> Custom restaurant operating systems for independent restaurants and small groups, primarily around $3–5 million in annual revenue.",
      "",
      "Clopen turns restaurant standards, inventory and cost-control workflows, staff training, SOPs, and daily management routines into a connected operating system. Engagements are custom built through a 90-day rollout with benchmarks at days 30 and 60.",
      "",
      "## Primary pages",
      "",
      "- [Clopen overview](https://clopen.2-stack.com/)",
      ...clopenSeoPages.map((page) => `- [${page.title}](${page.canonicalUrl})`),
      "- [Engagement and pricing](https://clopen.2-stack.com/pricing.txt)",
      "",
      "## Contact",
      "",
      "- Book discovery: https://calendly.com/2-stack-founders/clopen_walkthrough",
      "- Email: team@2stackops.com",
      ""
    ].join("\n");
  }

  if (host === "rake.2-stack.com") {
    return [
      "# RAKE by 2Stack",
      "",
      "> Custom contractor operating systems and internal tools for roofing and service contractors, primarily around $1–6 million in annual revenue.",
      "",
      "RAKE connects leads, estimates, jobs, customers, margin, follow-up, and reporting across a contractor's existing stack. Engagements are custom built through a 90-day rollout with benchmarks at days 30 and 60.",
      "",
      "## Primary pages",
      "",
      "- [RAKE overview](https://rake.2-stack.com/)",
      ...rakeSeoPages.map((page) => `- [${page.title}](${page.canonicalUrl})`),
      "- [Engagement and pricing](https://rake.2-stack.com/pricing.txt)",
      "",
      "## Contact",
      "",
      "- Book discovery: https://calendly.com/2-stack-founders/home-services-systems-review-meet-the-founders",
      "- Email: team@2stackops.com",
      ""
    ].join("\n");
  }

  return [
    "# 2Stack",
    "",
    "> Custom operating systems for owner-led restaurant, contractor, and home-service businesses.",
    "",
    "## Business lines",
    "",
    "- [Clopen for restaurants](https://clopen.2-stack.com/)",
    "- [RAKE for contractors](https://rake.2-stack.com/)",
    "- [LOAM for landscaping](https://loam.2-stack.com/)",
    "- [Home services](https://2-stack.com/home-services)",
    "",
    "## Contact",
    "",
    "- Email: team@2stackops.com",
    ""
  ].join("\n");
}

export function getPricingText(hostname: string) {
  const host = normalizeHost(hostname);
  const brand = host === "clopen.2-stack.com" ? "Clopen" : host === "rake.2-stack.com" ? "RAKE" : "2Stack";
  const bookingUrl =
    host === "clopen.2-stack.com"
      ? "https://calendly.com/2-stack-founders/clopen_walkthrough"
      : "https://calendly.com/2-stack-founders/home-services-systems-review-meet-the-founders";

  return [
    `# ${brand} engagement and pricing`,
    "",
    "## Pricing model",
    "",
    "- Price: Custom, scoped after a discovery call and current-state assessment",
    "- Delivery: 90-day rollout",
    "- Checkpoints: operating baseline and blueprint by day 30; working priority systems by day 60; completed rollout and ownership by day 90",
    "- Scope may include workflow design, internal tools, integrations, reporting, automation, documentation, and adoption support",
    "",
    "## Next step",
    "",
    `- Book a discovery call: ${bookingUrl}`,
    "- Email: team@2stackops.com",
    ""
  ].join("\n");
}
