# SEO launch and Search Console checklist

## Positioning and conversion goal

- Primary conversion: book a discovery call.
- Clopen audience: independent restaurants and small groups around $3–5 million in annual revenue.
- RAKE audience: roofing and service contractors around $1–6 million in annual revenue.
- Delivery promise: custom-built system with a 90-day rollout and operating checkpoints at days 30 and 60.

## Keyword-to-page map

| Search intent | Canonical page |
| --- | --- |
| Restaurant operations system | `https://clopen.2-stack.com/restaurant-operations-system` |
| Restaurant inventory management | `https://clopen.2-stack.com/restaurant-inventory-management` |
| Beverage cost control / beverage costing | `https://clopen.2-stack.com/beverage-cost-control` |
| Restaurant staff training / restaurant SOPs | `https://clopen.2-stack.com/restaurant-staff-training-sops` |
| Contractor speed to lead | `https://rake.2-stack.com/contractor-speed-to-lead` |
| Contractor operations software / internal tools | `https://rake.2-stack.com/contractor-operations-software` |
| Contractor estimate follow-up / unsold estimate recovery | `https://rake.2-stack.com/contractor-estimate-follow-up` |
| Contractor job costing / job profitability | `https://rake.2-stack.com/contractor-job-costing` |
| Contractor review and referral automation | `https://rake.2-stack.com/contractor-review-referral-automation` |

## Google Search Console setup

1. Open Google Search Console and confirm a Domain property exists for `2-stack.com`. A Domain property covers the root domain and all subdomains.
2. If DNS verification is requested, copy Google's TXT record into the DNS provider and complete verification.
3. In **Sitemaps**, submit each canonical sitemap:
   - `https://2-stack.com/sitemap.xml`
   - `https://clopen.2-stack.com/sitemap.xml`
   - `https://rake.2-stack.com/sitemap.xml`
   - `https://loam.2-stack.com/sitemap.xml`
4. After deployment, use **URL Inspection** on every URL in the keyword map. Confirm:
   - URL is available to Google.
   - User-declared canonical matches the inspected URL.
   - Page is not blocked by robots.txt.
   - Rendered page contains the visible page copy.
5. Request indexing for the six new pages. Do not repeatedly request indexing after the first successful submission.
6. Review **Page indexing** weekly for the first month. Investigate `Crawled - currently not indexed`, duplicate canonical, soft 404, or redirect errors.
7. Review **Performance → Search results** monthly. Filter by page and track impressions, clicks, click-through rate, and average position for each mapped query cluster.

## AI and answer-engine checks

- Confirm `/llms.txt`, `/pricing.txt`, `/robots.txt`, and `/sitemap.xml` return `200` on each production host.
- Check the six target questions monthly in Google, ChatGPT search, and Perplexity.
- Record whether Clopen or RAKE is mentioned or cited and which competing sources appear.
- Add real customer outcomes, named operator experience, and sourced original data when available. Do not publish invented benchmarks or anonymous performance claims.

## Next content inputs that would improve authority

- Named founder/operator biographies and relevant credentials.
- An anonymized implementation case study with baseline, day-30, day-60, and day-90 outcomes.
- A documented restaurant inventory or beverage-cost workflow using a real operating example.
- A contractor lead-response case study showing the current stack, workflow change, and measured response or appointment outcome.
- Confirmed integrations and the exact access method available for each supported platform.
