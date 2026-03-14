import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const CANONICAL_HOST = 'www.auto-bud.com.pl';
const PRODUCTION_HOSTS = new Set([
  'auto-bud.com.pl',
  'www.auto-bud.com.pl',
  'm.auto-bud.com.pl',
]);
const TRACKING_QUERY_PARAMS = new Set([
  'dclid',
  'fbclid',
  'gbraid',
  'gclid',
  'gclsrc',
  'mc_cid',
  'mc_eid',
  'msclkid',
  'wbraid',
  'yclid',
  'yandex-source',
  'ysclid',
]);
const TRACKING_QUERY_PARAM_PREFIXES = ['utm_'];
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

const isTrackingParam = (param: string) =>
  TRACKING_QUERY_PARAMS.has(param) ||
  TRACKING_QUERY_PARAM_PREFIXES.some(prefix => param.startsWith(prefix));

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (isStaticAssetRequest(url.pathname)) {
    return NextResponse.next();
  }

  let normalizedPathname = url.pathname;
  let shouldRedirect = false;

  for (const [legacyPrefix, destination] of LEGACY_LOCATION_REDIRECTS) {
    if (
      url.pathname === legacyPrefix ||
      url.pathname.startsWith(`${legacyPrefix}/`)
    ) {
      normalizedPathname = destination;
      url.search = '';
      shouldRedirect = true;
      break;
    }
  }

  if (
    normalizedPathname === '/katowice' ||
    normalizedPathname === '/katowice/'
  ) {
    normalizedPathname = '/slask';
    shouldRedirect = true;
  } else {
    const pathnameWithoutTrailingSlash =
      normalizeTrailingSlash(normalizedPathname);

    if (pathnameWithoutTrailingSlash !== normalizedPathname) {
      normalizedPathname = pathnameWithoutTrailingSlash;
      shouldRedirect = true;
    }
  }

  if (PRODUCTION_HOSTS.has(url.hostname) && url.hostname !== CANONICAL_HOST) {
    url.hostname = CANONICAL_HOST;
    shouldRedirect = true;
  }

  if (PRODUCTION_HOSTS.has(url.hostname) && url.protocol !== 'https:') {
    url.protocol = 'https:';
    shouldRedirect = true;
  }

  for (const param of [...url.searchParams.keys()]) {
    if (isTrackingParam(param)) {
      url.searchParams.delete(param);
      shouldRedirect = true;
    }
  }

  if (shouldRedirect) {
    url.pathname = normalizedPathname;

    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
