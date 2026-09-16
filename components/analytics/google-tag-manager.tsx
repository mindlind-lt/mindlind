'use client';

import Script from 'next/script';
import { GoogleTagManager as NextGoogleTagManager } from '@next/third-parties/google';
import { useConsentFor } from '@/lib/consent';

/** Public container id — it ships in every page's JS anyway, so no env var. */
const GTM_ID = 'GTM-TCCBJFML';

/**
 * Google Tag Manager container, loaded only after the visitor has accepted the
 * "Statistik" category — same gate as GoogleAnalytics, for the same reason:
 * gtm.js talks to Google and lets the container set cookies, so it may not
 * load before consent (§ 25 Abs. 1 TDDDG).
 *
 * Uses @next/third-parties rather than the snippet Google hands out: it loads
 * gtm.js via next/script after hydration instead of blocking the <head>.
 *
 * The <noscript> iframe from Google's snippet is deliberately left out. Without
 * JavaScript the consent banner cannot run, so there is never consent to fire
 * it on.
 *
 * Consent Mode v2 defaults are pushed before gtm.js so tags inside the
 * container see analytics granted and ad signals denied. Ad-related consent is
 * not asked for by the banner, so it stays denied here — if the container ever
 * gets ad tags (Google Ads conversions, remarketing), the banner needs a
 * category for them first.
 */
export default function GoogleTagManager() {
  const allowed = useConsentFor('statistics');

  if (!allowed) return null;

  return (
    <>
      <Script
        id="gtm-consent-bootstrap"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              functionality_storage: 'denied',
              personalization_storage: 'denied',
              security_storage: 'granted'
            });
            gtag('consent', 'update', { analytics_storage: 'granted' });
          `,
        }}
      />
      <NextGoogleTagManager gtmId={GTM_ID} />
    </>
  );
}
