import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { seoRedirects } from "../lib/seo-routing.ts";
import { verticalSites } from "../lib/seo.ts";

test("redirects duplicate main-domain vertical routes to canonical subdomains", () => {
  assert.deepEqual(seoRedirects, [
    {
      source: "/clopen",
      destination: verticalSites.clopen.url,
      permanent: true,
      has: [{ type: "host", value: "(?:www\\.)?2-stack\\.com" }]
    },
    {
      source: "/loam",
      destination: verticalSites.loam.url,
      permanent: true,
      has: [{ type: "host", value: "(?:www\\.)?2-stack\\.com" }]
    },
    {
      source: "/rake",
      destination: verticalSites.rake.url,
      permanent: true,
      has: [{ type: "host", value: "(?:www\\.)?2-stack\\.com" }]
    },
    {
      source: "/home-services",
      destination: verticalSites.rake.url,
      permanent: true,
      has: [{ type: "host", value: "(?:www\\.)?2-stack\\.com" }]
    }
  ]);
});

test("main site vertical links use canonical subdomain destinations", async () => {
  const navbar = await readFile(new URL("../components/Navbar.tsx", import.meta.url), "utf8");
  const footer = await readFile(new URL("../components/Footer.tsx", import.meta.url), "utf8");
  const verticalCards = await readFile(new URL("../components/VerticalCards.tsx", import.meta.url), "utf8");

  for (const source of [navbar, footer, verticalCards]) {
    assert.match(source, /verticalSites\.loam\.url/);
    assert.match(source, /verticalSites\.clopen\.url/);
    assert.match(source, /verticalSites\.rake\.url/);
  }

  assert.doesNotMatch(`${navbar}\n${footer}\n${verticalCards}`, /href:\s*"\/loam"/);
});

test("home services is folded into RAKE", async () => {
  const homeServicesPage = await readFile(new URL("../app/home-services/page.tsx", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../app/sitemap.xml/route.ts", import.meta.url), "utf8");
  const rakePage = await readFile(new URL("../components/rake/RakePage.tsx", import.meta.url), "utf8");

  assert.match(homeServicesPage, /permanentRedirect\(verticalSites\.rake\.url\)/);
  assert.doesNotMatch(sitemap, /home-services/);
  assert.match(rakePage, /missed calls/);
  assert.match(rakePage, /Book a RAKE Walkthrough/);
});

test("defers the heavy Mux player until the visitor requests playback", async () => {
  const clopenPage = await readFile(new URL("../components/clopen/ClopenPage.tsx", import.meta.url), "utf8");
  const videoPlayer = await readFile(
    new URL("../components/clopen/ClopenVideoPlayer.tsx", import.meta.url),
    "utf8"
  );

  assert.doesNotMatch(clopenPage, /from "@mux\/mux-player-react"/);
  assert.match(videoPlayer, /dynamic\(\(\) => import\("@mux\/mux-player-react"\)/);
  assert.match(videoPlayer, /isPlaying \? /);
});
