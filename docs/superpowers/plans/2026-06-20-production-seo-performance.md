# Production SEO and Performance Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deploy the SEO foundation, eliminate duplicate indexable routes, validate structured data, submit all sitemaps to Google Search Console, and improve measurable Core Web Vitals risks.

**Architecture:** Keep the four public hosts as the canonical SEO surfaces. Add permanent cross-domain redirects at the Next.js configuration layer, preserve host-aware sitemap and robots responses, and reduce above-the-fold payload through optimized source assets and selective client-side code loading. Validate both generated HTML and live production behavior before submitting sitemaps.

**Tech Stack:** Next.js 16 App Router, React 19, Vercel, Google Search Console, Google Rich Results Test, Schema.org Validator, PageSpeed Insights.

---

### Task 1: Establish production baseline

**Files:**
- Inspect: `.vercel/project.json`
- Inspect: `next.config.ts`

- [ ] Verify current DNS and HTTP status for `2-stack.com`, `clopen.2-stack.com`, `loam.2-stack.com`, and `rake.2-stack.com`.
- [ ] Run PageSpeed Insights for each canonical homepage and record mobile performance/Core Web Vitals diagnostics.
- [ ] Inspect the current production HTML for canonical links, metadata, JSON-LD, robots, and sitemap availability.

### Task 2: Add permanent duplicate-route redirects with a regression test

**Files:**
- Create: `lib/seo-routing.ts`
- Create: `tests/seo-routing.test.ts`
- Modify: `next.config.ts`
- Modify: `package.json`

- [ ] Write tests asserting `/clopen`, `/loam`, and `/rake` map to their HTTPS subdomain roots with permanent redirects.
- [ ] Run `node --experimental-strip-types --test tests/seo-routing.test.ts` and verify it fails before implementation.
- [ ] Add a shared redirect table and consume it from `next.config.ts`.
- [ ] Run the focused test and verify it passes.

### Task 3: Reduce high-impact page weight

**Files:**
- Modify: `components/clopen/ClopenPage.tsx`
- Modify: image assets under `public/` only when a lossless or visually equivalent optimized encoding is supported by the existing stack.

- [ ] Use build output and PageSpeed diagnostics to identify the largest initial JavaScript and image contributors.
- [ ] Lazy-load the Clopen video player so the heavy media component is not part of the immediate route bundle.
- [ ] Preserve the poster, accessible title, playback controls, and layout dimensions.
- [ ] Rebuild and compare route bundle/static asset sizes.

### Task 4: Verify locally and deploy

**Files:**
- Verify all changed files.

- [ ] Run the route test, `npm run lint`, `npm run build`, and `git diff --check`.
- [ ] Start the production server locally and verify status codes, redirects, canonical tags, JSON-LD, robots, and host-specific sitemaps.
- [ ] Deploy the current verified workspace to the linked Vercel production project.
- [ ] Confirm all four production domains resolve and serve the expected canonical page.

### Task 5: Validate search markup and submit sitemaps

**External systems:**
- Google Rich Results Test
- Schema.org Validator
- Google Search Console

- [ ] Validate all four canonical homepages plus `/home-services` in rendered browser output and the two public validation tools.
- [ ] Record warnings or errors and correct actionable implementation issues.
- [ ] Submit each host’s `/sitemap.xml` in the matching Search Console property.
- [ ] Confirm the Search Console UI reports each submission as accepted or successful.

### Task 6: Final live performance verification

**External systems:**
- PageSpeed Insights

- [ ] Re-run mobile PageSpeed Insights after deployment.
- [ ] Compare results to baseline and report remaining field-data or lab-data constraints.
- [ ] Provide exact production URLs, validation outcomes, sitemap submission status, and verification commands.
