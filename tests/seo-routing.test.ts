import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { seoRedirects } from "../lib/seo-routing.ts";

test("redirects duplicate main-domain vertical routes to canonical subdomains", () => {
  assert.deepEqual(seoRedirects, [
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
    }
  ]);
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
