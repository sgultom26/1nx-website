import { NextResponse, type NextRequest } from "next/server";
import { decideLocale } from "@/lib/locale";

/**
 * Locale routing: English at the root, Indonesian under /id/*.
 * First-time Indonesian-looking visitors are redirected /→/id; a NEXT_LOCALE
 * cookie (set by the switcher) always wins so the choice is sticky.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname === "/id" ||
    pathname.startsWith("/id/") ||
    pathname.startsWith("/opengraph-image")
  ) {
    return NextResponse.next();
  }

  const locale = decideLocale({
    cookie: req.cookies.get("NEXT_LOCALE")?.value,
    country: req.headers.get("cf-ipcountry") || req.headers.get("x-vercel-ip-country"),
    acceptLanguage: req.headers.get("accept-language"),
  });

  if (locale === "id") {
    const url = req.nextUrl.clone();
    url.pathname = pathname === "/" ? "/id" : `/id${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\.).*)"],
};
