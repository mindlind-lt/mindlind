'use client';

import { useSyncExternalStore } from 'react';

/**
 * Consent state for § 25 TDDDG (ex-TTDSG) and Art. 6 Abs. 1 lit. a DSGVO.
 *
 * Everything here is deliberately client-side. Reading the cookie on the
 * server (`cookies()` from next/headers) opts the route out of the static
 * prerender under `cacheComponents: true` — the documented fix is a
 * <Suspense> boundary that streams the dynamic part at request time, which for
 * a purely presentational banner buys nothing and costs the whole site its
 * static shell. So the cookie is read in the browser after hydration and
 * nothing consent-dependent is ever server-rendered.
 *
 * The store is a module-level singleton in the same shape as
 * lib/use-first-interaction.ts: one source of truth shared by the banner, the
 * footer link, the analytics loader and every gated embed, so a component
 * mounted later still sees a decision that was already made.
 */

export const CONSENT_COOKIE = 'ml_consent';

/**
 * Bump whenever the services behind a category change (a new analytics tool, a
 * new embed provider). A decision recorded against an older service list is
 * not consent for the current one, so an older version reads back as
 * "undecided" and the banner asks again.
 */
export const CONSENT_VERSION = 1;

/**
 * "Notwendig" is not in this list on purpose: strictly necessary storage needs
 * no consent under § 25 Abs. 2 Nr. 2 TDDDG, so there is nothing to record and
 * nothing to toggle.
 *
 * `externalMedia` used to sit here for the Spline 3D scenes. The scenes are
 * self-hosted now (see scripts/sync-spline-assets.mjs), so rendering one
 * contacts nobody and there is nothing left to ask about. CONSENT_VERSION is
 * deliberately NOT bumped for that removal: the services behind `statistics`
 * did not change, so an existing decision about it stays valid, and a stored
 * `externalMedia` flag is simply ignored on read. Re-prompting everyone would
 * cost goodwill for no gain — dropping a recipient can only improve a
 * visitor's position.
 */
export const OPTIONAL_CATEGORIES = ['statistics'] as const;

export type OptionalCategory = (typeof OPTIONAL_CATEGORIES)[number];

export type ConsentChoices = Record<OptionalCategory, boolean>;

export type ConsentDecision = ConsentChoices & {
  /** CONSENT_VERSION this decision was recorded against. */
  v: number;
  /**
   * When the visitor decided, ISO-8601. Together with `v` and the flags this
   * cookie *is* the Art. 7 Abs. 1 record of consent — what was agreed to, in
   * which wording, and when.
   */
  ts: string;
};

export type ConsentSnapshot = {
  /** The cookie has been read. Before this, render nothing consent-dependent. */
  ready: boolean;
  /** `null` = the visitor has not decided yet, so the banner is due. */
  decision: ConsentDecision | null;
  /** Second layer (per-category toggles) is open. */
  settingsOpen: boolean;
};

/** Six months. The DSK expects consent to be renewed rather than kept forever. */
const MAX_AGE_SECONDS = 60 * 60 * 24 * 180;

const EMPTY: ConsentSnapshot = { ready: false, decision: null, settingsOpen: false };

let snapshot: ConsentSnapshot = EMPTY;
const subscribers = new Set<() => void>();

function emit() {
  for (const notify of subscribers) notify();
}

function readCookie(): ConsentDecision | null {
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${CONSENT_COOKIE}=([^;]*)`)
  );
  if (!match) return null;

  try {
    const parsed: unknown = JSON.parse(decodeURIComponent(match[1]));
    if (typeof parsed !== 'object' || parsed === null) return null;

    const record = parsed as Partial<ConsentDecision>;
    if (record.v !== CONSENT_VERSION) return null;

    // Read every flag defensively: a hand-edited or truncated cookie must fall
    // back to "not consented", never to "consented".
    return {
      v: CONSENT_VERSION,
      ts: typeof record.ts === 'string' ? record.ts : new Date().toISOString(),
      statistics: record.statistics === true,
    };
  } catch {
    return null;
  }
}

function writeCookie(decision: ConsentDecision) {
  const encoded = encodeURIComponent(JSON.stringify(decision));
  // `Secure` is dropped on plain http so the cookie still works on
  // http://localhost in development; production is https-only anyway.
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${CONSENT_COOKIE}=${encoded}; Path=/; Max-Age=${MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
}

function deleteCookie(name: string) {
  const expired = 'Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/';
  document.cookie = `${name}=; ${expired}`;
  // Analytics cookies are set on the registrable domain (".mindlind.de"), which
  // the host-only delete above does not reach. Walk the suffixes and clear both
  // the bare and the dot-prefixed form of each.
  const labels = location.hostname.split('.');
  for (let i = 0; i < labels.length - 1; i++) {
    const domain = labels.slice(i).join('.');
    document.cookie = `${name}=; ${expired}; Domain=${domain}`;
    document.cookie = `${name}=; ${expired}; Domain=.${domain}`;
  }
}

/** GA's own cookies: `_ga`, one `_ga_<STREAM>` per property, and the legacy pair. */
function clearAnalyticsCookies() {
  for (const pair of document.cookie.split(';')) {
    const name = pair.split('=')[0]?.trim();
    if (!name) continue;
    if (name === '_ga' || name === '_gid' || name.startsWith('_ga_') || name.startsWith('_gat')) {
      deleteCookie(name);
    }
  }
}

function ensureHydrated() {
  if (snapshot.ready) return;
  snapshot = { ready: true, decision: readCookie(), settingsOpen: false };
}

function subscribe(onStoreChange: () => void) {
  ensureHydrated();
  subscribers.add(onStoreChange);
  return () => {
    subscribers.delete(onStoreChange);
  };
}

export function useConsent(): ConsentSnapshot {
  return useSyncExternalStore(
    subscribe,
    () => snapshot,
    () => EMPTY
  );
}

/** True only once the visitor has actively allowed this category. */
export function useConsentFor(category: OptionalCategory): boolean {
  return useConsent().decision?.[category] === true;
}

export function saveConsent(choices: ConsentChoices) {
  const previous = snapshot.decision;
  const decision: ConsentDecision = {
    v: CONSENT_VERSION,
    ts: new Date().toISOString(),
    statistics: choices.statistics,
  };

  writeCookie(decision);

  const revoked = OPTIONAL_CATEGORIES.some(
    (category) => previous?.[category] === true && decision[category] === false
  );
  if (previous?.statistics === true && !decision.statistics) clearAnalyticsCookies();

  snapshot = { ready: true, decision, settingsOpen: false };
  emit();

  // Withdrawal has to be as effective as consent was (Art. 7 Abs. 3). Unmounting
  // the React tree does not unload gtag.js — it is already in the document and
  // has already written to the device. A reload is the only way back to the
  // pre-consent state, and it only happens on an actual downgrade, never on a
  // first decision or when a category is being switched on.
  if (revoked) location.reload();
}

export function acceptAll() {
  saveConsent({ statistics: true });
}

export function rejectAll() {
  saveConsent({ statistics: false });
}

export function openConsentSettings() {
  ensureHydrated();
  snapshot = { ...snapshot, settingsOpen: true };
  emit();
}

export function closeConsentSettings() {
  snapshot = { ...snapshot, settingsOpen: false };
  emit();
}
