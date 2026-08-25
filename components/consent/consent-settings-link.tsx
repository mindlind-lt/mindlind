'use client';

import { openConsentSettings } from '@/lib/consent';

/**
 * Permanent footer entry that reopens the consent dialog.
 *
 * Art. 7 Abs. 3 DSGVO requires withdrawing consent to be as easy as giving it,
 * which in practice means a link that is reachable from every page — not one
 * buried inside the Datenschutzerklärung. Styled to sit next to the Impressum
 * and Datenschutz links in .ftr-links, so it reads as a third legal link
 * rather than a control.
 */
export default function ConsentSettingsLink({
  className,
  children = 'Cookie-Einstellungen',
}: {
  /** The footer relies on `.ftr-links button`; other placements pass their own. */
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button type="button" className={className} onClick={openConsentSettings}>
      {children}
    </button>
  );
}
