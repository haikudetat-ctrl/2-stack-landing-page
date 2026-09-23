import type { NextRequest } from "next/server";
import { getPricingText } from "@/lib/ai-discovery";

export function GET(request: NextRequest) {
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "2-stack.com";
  return new Response(getPricingText(host), {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
