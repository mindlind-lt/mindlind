import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match German, Latvian, and all other internal paths
  matcher: ['/', '/(de|lv)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
