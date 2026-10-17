export const rakeBookingUrl =
  "https://calendly.com/2-stack-founders/home-services-systems-review-meet-the-founders";

export type RakeBookingPlacement = "nav" | "hero" | "final";

const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

/**
 * Builds the Calendly link for the Rake page, carrying the visitor's UTM tags through so the
 * booking records where they came from (LinkedIn post, DM, email). Calendly stores utm_* params
 * on the scheduled event. Visitors who arrive untagged are marked as coming from the site itself.
 */
export function buildRakeBookingHref(search: string, placement: RakeBookingPlacement) {
  const incoming = new URLSearchParams(search);
  const url = new URL(rakeBookingUrl);

  for (const key of utmKeys) {
    const value = incoming.get(key);
    if (value) url.searchParams.set(key, value.slice(0, 120));
  }

  if (!url.searchParams.has("utm_source")) url.searchParams.set("utm_source", "2stack-site");
  if (!url.searchParams.has("utm_medium")) url.searchParams.set("utm_medium", "web");
  if (!url.searchParams.has("utm_campaign")) url.searchParams.set("utm_campaign", "rake-landing");
  if (!url.searchParams.has("utm_content")) url.searchParams.set("utm_content", `rake-${placement}`);

  return url.toString();
}
