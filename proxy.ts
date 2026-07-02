import { NextResponse, type NextRequest } from "next/server";
import { verticalSites } from "@/lib/seo";

const hostRoutes = {
  clopen: "clopen.2-stack.com",
  loam: "loam.2-stack.com",
  rake: "rake.2-stack.com",
  main: "2-stack.com"
} as const;

function isMainHost(hostname: string) {
  return hostname === hostRoutes.main || hostname === `www.${hostRoutes.main}`;
}

function redirectTo(url: string, request: NextRequest) {
  return NextResponse.redirect(new URL(url, request.url), 308);
}

function rewriteTo(pathname: string, request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  return NextResponse.rewrite(url);
}

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0] ?? "";
  const { pathname } = request.nextUrl;

  if (isMainHost(hostname)) {
    if (pathname === "/clopen" || pathname === "/restaurants") return redirectTo(verticalSites.clopen.url, request);
    if (pathname === "/loam") return redirectTo(verticalSites.loam.url, request);
    if (pathname === "/rake" || pathname === "/home-services") return redirectTo(verticalSites.rake.url, request);
    if (pathname === "/rake/launch-system" || pathname === "/launch-system") {
      return redirectTo(`${verticalSites.rake.url}/launch-system`, request);
    }
  }

  if (hostname === hostRoutes.clopen) {
    if (pathname === "/") return rewriteTo("/clopen", request);
    if (pathname === "/clopen" || pathname === "/restaurants") return redirectTo("/", request);
    if (pathname === "/rake") return redirectTo(verticalSites.rake.url, request);
    if (pathname.startsWith("/rake/")) return redirectTo(`${verticalSites.rake.url}${pathname.slice("/rake".length)}`, request);
    if (pathname === "/loam") return redirectTo(verticalSites.loam.url, request);
  }

  if (hostname === hostRoutes.rake) {
    if (pathname === "/") return rewriteTo("/rake", request);
    if (pathname === "/launch-system") return rewriteTo("/rake/launch-system", request);
    if (pathname === "/rake") return redirectTo("/", request);
    if (pathname === "/rake/launch-system") return redirectTo("/launch-system", request);
    if (pathname === "/clopen" || pathname === "/restaurants") return redirectTo(verticalSites.clopen.url, request);
    if (pathname === "/loam") return redirectTo(verticalSites.loam.url, request);
  }

  if (hostname === hostRoutes.loam && pathname === "/") {
    return rewriteTo("/loam", request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"]
};
