import assert from "node:assert/strict";
import test from "node:test";
import { buildRakeBookingHref, rakeBookingUrl } from "../lib/rake-booking.ts";

test("carries the visitor's UTM tags through to the Rake booking link", () => {
  const href = new URL(
    buildRakeBookingHref("?utm_source=linkedin&utm_medium=social&utm_campaign=rake-oct26&fbclid=abc", "hero")
  );

  assert.equal(`${href.origin}${href.pathname}`, rakeBookingUrl);
  assert.equal(href.searchParams.get("utm_source"), "linkedin");
  assert.equal(href.searchParams.get("utm_medium"), "social");
  assert.equal(href.searchParams.get("utm_campaign"), "rake-oct26");
  assert.equal(href.searchParams.get("utm_content"), "rake-hero");
  assert.equal(href.searchParams.get("fbclid"), null);
});

test("marks untagged visitors as coming from the site, by placement", () => {
  const href = new URL(buildRakeBookingHref("", "final"));

  assert.equal(href.searchParams.get("utm_source"), "2stack-site");
  assert.equal(href.searchParams.get("utm_campaign"), "rake-landing");
  assert.equal(href.searchParams.get("utm_content"), "rake-final");
});
