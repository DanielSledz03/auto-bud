import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const TRACKING_QUERY_PARAMS = new Set(['yandex-source']);

const isStaticAssetRequest = (pathname: string) =>
  pathname.startsWith('/_next') ||
  pathname.startsWith('/api') ||
  pathname.startsWith('/assets') ||
  /\.[a-zA-Z0-9]+$/.test(pathname);

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (url.pathname === '/katowice' || url.pathname === '/katowice/') {
    url.pathname = '/slask';
    return NextResponse.redirect(url, 301);
  }

  if (isStaticAssetRequest(url.pathname)) {
    return NextResponse.next();
  }

  let hasRemovedTrackingParam = false;

  TRACKING_QUERY_PARAMS.forEach(param => {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param);
      hasRemovedTrackingParam = true;
    }
  });

  if (hasRemovedTrackingParam) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
