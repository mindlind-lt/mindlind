'use client';

import Script from 'next/script';
import { useConsentFor } from '@/lib/consent';

/**
 * Google Analytics 4, loaded only after the visitor has accepted the
 * "Statistik" category.
 *
 * Inert until NEXT_PUBLIC_GA_ID is set, so this can sit in the layout before
 * the property exists. The id has to be NEXT_PUBLIC_ because the decision to
 * render is made in the browser.
 *
 * Nothing is requested from Google before consent — not gtag.js, not a
 * preconnect. Consent Mode v2 is still declared denied-by-default in the
 * bootstrap below, because the defaults have to be in the dataLayer before
 * gtag.js processes its queue; the `update` call immediately after is what
 * actually turns analytics_storage on. Keeping both means switching to
 * "load always, denied until consent" later is a one-line change rather than a
 * rewrite.
 *
 * Ad-related signals stay denied even after consent: this site runs no ads, the
 * banner does not ask for them, and consent not asked for is consent not given.
 */
export default function GoogleAnalytics() {
  const allowed = useConsentFor('statistics');
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;

  if (!allowed || !measurementId) return null;

  return (
    <>
      <Script
        id="ga-consent-bootstrap"
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
            gtag('js', new Date());
            gtag('config', '${measurementId}', { anonymize_ip: true });
          `,
        }}
      />
      <Script
        id="ga-gtag"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
    </>
  );
}
