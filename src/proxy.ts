import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const TRACKING_QUERY_PARAMS = new Set(['yandex-source']);
const LEGACY_LOCATION_REDIRECTS = new Map([
  ['/obiekty/bykowina', '/bykowina'],
  ['/obiekty/godula', '/godula'],
  ['/obiekty/swietochlowice', '/swietochlowice'],
]);

const isStaticAssetRequest = (pathname: string) =>
  pathname.startsWith('/_next') ||
  pathname.startsWith('/api') ||
  pathname.startsWith('/assets') ||
  /\.[a-zA-Z0-9]+$/.test(pathname);

const normalizeTrailingSlash = (pathname: string) =>
  pathname.length > 1 && pathname.endsWith('/')
    ? pathname.replace(/\/+$/, '')
    : pathname;

const createRedirectUrl = (request: NextRequest, pathname: string) => {
  const redirectUrl = new URL(request.url);

  redirectUrl.pathname = pathname;

  return redirectUrl;
};

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  for (const [legacyPrefix, destination] of LEGACY_LOCATION_REDIRECTS) {
    if (
      url.pathname === legacyPrefix ||
      url.pathname.startsWith(`${legacyPrefix}/`)
    ) {
      const redirectUrl = createRedirectUrl(request, destination);
      redirectUrl.search = '';

      return NextResponse.redirect(redirectUrl, 301);
    }
  }

  if (url.pathname === '/katowice' || url.pathname === '/katowice/') {
    return NextResponse.redirect(createRedirectUrl(request, '/slask'), 301);
  }

  if (isStaticAssetRequest(url.pathname)) {
    return NextResponse.next();
  }

  let shouldRedirect = false;

  TRACKING_QUERY_PARAMS.forEach(param => {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param);
      shouldRedirect = true;
    }
  });

  const normalizedPathname = normalizeTrailingSlash(url.pathname);

  if (normalizedPathname !== url.pathname) {
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    const redirectUrl = createRedirectUrl(request, normalizedPathname);

    redirectUrl.search = url.search;

    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
