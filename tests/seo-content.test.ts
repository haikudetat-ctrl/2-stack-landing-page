import assert from "node:assert/strict";
import test from "node:test";
import { clopenSeoPages, getSeoTitle, rakeSeoPages } from "../lib/seo-content.ts";
import { getSitemapEntries, getVerticalRewrite, seoRedirects, seoRewrites } from "../lib/seo-routing.ts";
import { getLlmsText, getPricingText } from "../lib/ai-discovery.ts";

test("each SEO landing page has a unique canonical URL and focused metadata", () => {
  const pages = [...clopenSeoPages, ...rakeSeoPages];
  const canonicals = pages.map((page) => page.canonicalUrl);
  const titles = pages.map((page) => page.title);

  assert.equal(new Set(canonicals).size, pages.length);
  assert.equal(new Set(titles).size, pages.length);

  for (const page of pages) {
    assert.match(page.canonicalUrl, /^https:\/\/(clopen|rake)\.2-stack\.com\/[a-z0-9-]+$/);
    assert.ok(page.title.length >= 30 && page.title.length <= 65, `${page.slug} title length`);
    assert.ok(page.description.length >= 120 && page.description.length <= 165, `${page.slug} description length`);
    assert.ok(page.faqs.length >= 4, `${page.slug} FAQ depth`);
    assert.equal(page.rollout.length, 3, `${page.slug} rollout checkpoints`);
  }
});

test("rendered SEO titles include the brand exactly once and stay within snippet length", () => {
  for (const page of [...clopenSeoPages, ...rakeSeoPages]) {
    const title = getSeoTitle(page);
    const brandMatches = title.match(new RegExp(`\\b${page.brand}\\b`, "gi")) ?? [];
    assert.equal(brandMatches.length, 1, `${page.slug} brand count`);
    assert.ok(title.length <= 65, `${page.slug} rendered title length`);
  }
});

test("host-aware sitemap entries expose only canonical pages for that host", () => {
  assert.deepEqual(
    getSitemapEntries("clopen.2-stack.com").map((entry) => entry.url),
    [
      "https://clopen.2-stack.com/",
      "https://clopen.2-stack.com/restaurant-operations-system",
      "https://clopen.2-stack.com/restaurant-inventory-management",
      "https://clopen.2-stack.com/beverage-cost-control",
      "https://clopen.2-stack.com/restaurant-staff-training-sops"
    ]
  );

  assert.deepEqual(
    getSitemapEntries("rake.2-stack.com").map((entry) => entry.url),
    [
      "https://rake.2-stack.com/",
      "https://rake.2-stack.com/contractor-speed-to-lead",
      "https://rake.2-stack.com/contractor-operations-software",
      "https://rake.2-stack.com/contractor-estimate-follow-up",
      "https://rake.2-stack.com/contractor-job-costing",
      "https://rake.2-stack.com/contractor-review-referral-automation"
    ]
  );

  assert.deepEqual(
    getSitemapEntries("2-stack.com").map((entry) => entry.url),
    ["https://2-stack.com/", "https://2-stack.com/home-services"]
  );
});

test("public vertical paths rewrite to their internal Next.js routes", () => {
  assert.equal(
    getVerticalRewrite("clopen.2-stack.com", "/beverage-cost-control"),
    "/clopen/beverage-cost-control"
  );
  assert.equal(
    getVerticalRewrite("rake.2-stack.com", "/contractor-speed-to-lead"),
    "/rake/contractor-speed-to-lead"
  );
  assert.equal(
    getVerticalRewrite("rake.2-stack.com", "/contractor-estimate-follow-up"),
    "/rake/contractor-estimate-follow-up"
  );
  assert.equal(getVerticalRewrite("2-stack.com", "/beverage-cost-control"), null);
  assert.equal(getVerticalRewrite("clopen.2-stack.com", "/not-a-real-page"), null);
});

test("Next routing rules expose public subdomain paths and redirect duplicate main-domain paths", () => {
  assert.ok(
    seoRewrites.some(
      (rule) =>
        rule.source === "/beverage-cost-control" &&
        rule.destination === "/clopen/beverage-cost-control" &&
        rule.has[0]?.value === "clopen.2-stack.com"
    )
  );
  assert.ok(
    seoRedirects.some(
      (rule) =>
        rule.source === "/clopen/beverage-cost-control" &&
        rule.destination === "https://clopen.2-stack.com/beverage-cost-control"
    )
  );
});

test("AI discovery files describe the correct vertical without claiming fixed pricing", () => {
  const clopenText = getLlmsText("clopen.2-stack.com");
  const rakeText = getLlmsText("rake.2-stack.com");

  assert.match(clopenText, /Clopen by 2Stack/);
  assert.match(clopenText, /https:\/\/clopen\.2-stack\.com\/beverage-cost-control/);
  assert.doesNotMatch(clopenText, /contractor-speed-to-lead/);
  assert.match(rakeText, /RAKE by 2Stack/);
  assert.match(rakeText, /https:\/\/rake\.2-stack\.com\/contractor-speed-to-lead/);
  assert.match(rakeText, /https:\/\/rake\.2-stack\.com\/contractor-estimate-follow-up/);
  assert.match(rakeText, /https:\/\/rake\.2-stack\.com\/contractor-job-costing/);
  assert.match(rakeText, /https:\/\/rake\.2-stack\.com\/contractor-review-referral-automation/);

  const pricingText = getPricingText("rake.2-stack.com");
  assert.match(pricingText, /custom/i);
  assert.match(pricingText, /90-day/i);
  assert.match(pricingText, /discovery/i);
});
