import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host");
  const host = hostname ? hostname.split(":")[0] : "";

  const isMainDomain =
    !host ||
    host === "localhost" ||
    host === "127.0.0.1" ||
    host.endsWith(".run.app");

  const url = request.nextUrl.clone();

  // THE BOUNCER: Prevent direct access to the portfolio routing folder from the main domain.
  // If a user types localhost:3000/portfolio/john, force a 404 Not Found.
  if (isMainDomain && url.pathname.startsWith("/portfolio")) {
    url.pathname = "/404";
    return NextResponse.rewrite(url);
  }

  // If it's the main domain and a valid path, let it resolve normally.
  if (isMainDomain) {
    return NextResponse.next();
  }

  // If it's a subdomain, extract it.
  const subdomain = host.split(".")[0];

  // Rewrite the subdomain traffic to our now-visible portfolio folder
  url.pathname = `/portfolio/${subdomain}${url.pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
