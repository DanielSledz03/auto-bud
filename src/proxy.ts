import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = '/slask';

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ['/katowice', '/katowice/'],
};
