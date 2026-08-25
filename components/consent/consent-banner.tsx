'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import {
  acceptAll,
  closeConsentSettings,
  openConsentSettings,
  rejectAll,
  saveConsent,
  useConsent,
  type ConsentChoices,
  type OptionalCategory,
} from '@/lib/consent';
import './consent-banner.css';

/**
 * Two-layer consent dialog (§ 25 TDDDG / Art. 6 Abs. 1 lit. a DSGVO).
 *
 * Deliberate choices that the German supervisory authorities actually enforce:
 *  - "Alle ablehnen" sits on the FIRST layer, same size and same visual weight
 *    as "Alle akzeptieren". Burying reject one level down behind a grey text
 *    link is the single most-cited dark pattern in DSK decisions.
 *  - Nothing is pre-ticked; both optional categories start off.
 *  - No backdrop and no focus trap. A cookie wall is unlawful, and Impressum
 *    and Datenschutz have to stay reachable while the banner is open — so the
 *    banner is a card the visitor can simply ignore and scroll past, and the
 *    rest of the page stays interactive.
 *  - Dismissing with Escape returns to the first layer without recording
 *    anything. Silence is never consent, so there is no close "X".
 */

type CategoryCopy = {
  id: OptionalCategory;
  title: string;
  body: string;
};

const CATEGORIES: readonly CategoryCopy[] = [
  {
    id: 'statistics',
    title: 'Statistik',
    body:
      'Google Analytics 4 (Google Ireland Limited, Irland). Misst anonymisiert, welche Seiten aufgerufen werden, damit wir die Website verbessern können. Setzt Cookies auf Ihrem Endgerät und überträgt Daten an Google, auch in die USA.',
  },
  {
    id: 'externalMedia',
    title: 'Externe Medien',
    body:
      'Interaktive 3D-Szenen von Spline (Spline, Inc., USA). Beim Laden der Szenen wird Ihre IP-Adresse an Spline übertragen. Ohne Ihre Einwilligung zeigen wir stattdessen ein Vorschaubild.',
  },
];

export default function ConsentBanner() {
  const { ready, decision, settingsOpen } = useConsent();
  // Both default to off. Pre-ticked boxes are not consent (EuGH C-673/17,
  // "Planet49"), so this is the one initial value the component may have.
  const [choices, setChoices] = useState<ConsentChoices>({
    statistics: false,
    externalMedia: false,
  });
  const [detailsShown, setDetailsShown] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const undecided = ready && decision === null;
  const open = undecided || settingsOpen;

  // Reopening the settings from the footer has to show what is currently
  // stored, not whatever the toggles were left at last time. This component
  // never unmounts — it returns null while closed — so the state does not
  // reset on its own and has to be re-seeded here.
  //
  // Derived during render rather than in an effect: an effect would paint the
  // stale toggles for a frame before correcting them, and React re-runs this
  // render before touching the DOM. See "You Might Not Need an Effect".
  if (settingsOpen !== detailsShown) {
    setDetailsShown(settingsOpen);
    if (settingsOpen) {
      setChoices({
        statistics: decision?.statistics === true,
        externalMedia: decision?.externalMedia === true,
      });
    }
  }

  // Move focus to the dialog when it appears so keyboard and screen-reader
  // users land on it instead of having to tab through the whole page first.
  useEffect(() => {
    if (open) dialogRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!settingsOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeConsentSettings();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [settingsOpen]);

  const showDetails = settingsOpen;

  // Deliberately NOT `if (!open) return null`. React removing the node from the
  // DOM cancels any exit transition — the card would vanish on the frame the
  // visitor clicks. Instead the element stays mounted and `data-open` drives
  // the whole enter/exit cycle in CSS, including the final `display: none`
  // (via `transition-behavior: allow-discrete`), which is what keeps it out of
  // the accessibility tree and off the tab order while closed.
  return (
    <div
      ref={dialogRef}
      className="consent"
      data-open={open ? 'true' : 'false'}
      role="dialog"
      aria-labelledby="consent-title"
      aria-describedby="consent-intro"
      tabIndex={-1}
    >
      <div className="consent-card">
        <h2 id="consent-title" className="consent-title">
          Datenschutz-Einstellungen
        </h2>

        <p id="consent-intro" className="consent-intro">
          Wir setzen technisch notwendige Cookies ein, damit diese Website
          funktioniert. Statistik- und Mediendienste nutzen wir nur mit Ihrer
          Einwilligung. Dabei können Daten an Anbieter in den USA übermittelt
          werden — mit „Alle akzeptieren“ willigen Sie zugleich gemäß Art. 49
          Abs. 1 lit. a DSGVO in diese Übermittlung ein. Sie können Ihre
          Auswahl jederzeit im Footer unter „Cookie-Einstellungen“ ändern.
        </p>

        {/* Animating to `height: auto` is not transitionable, so the panel uses
            the grid 0fr → 1fr technique: universally supported, GPU-cheap, and
            it lets the card grow with whatever the copy actually measures.
            `inert` keeps the collapsed toggles off the tab order — the panel is
            still in the DOM, so `display: none` is not doing that job here. */}
        <div className="consent-details" data-expanded={showDetails ? 'true' : 'false'}>
          <div className="consent-details-clip">
            <div className="consent-categories" inert={!showDetails}>
            <div className="consent-category" style={{ '--row': 0 } as CSSProperties}>
              <div className="consent-category-head">
                <span className="consent-category-title">Notwendig</span>
                <span className="consent-always">Immer aktiv</span>
              </div>
              <p className="consent-category-body">
                Speichert ausschließlich Ihre Entscheidung auf dieser Seite,
                damit wir Sie nicht bei jedem Besuch erneut fragen. Für diese
                Speicherung ist nach § 25 Abs. 2 Nr. 2 TDDDG keine Einwilligung
                erforderlich.
              </p>
            </div>

            {CATEGORIES.map((category, index) => (
              <div
                className="consent-category"
                key={category.id}
                style={{ '--row': index + 1 } as CSSProperties}
              >
                <div className="consent-category-head">
                  <label
                    className="consent-category-title"
                    htmlFor={`consent-${category.id}`}
                  >
                    {category.title}
                  </label>
                  <input
                    id={`consent-${category.id}`}
                    className="consent-switch"
                    type="checkbox"
                    checked={choices[category.id]}
                    onChange={(event) =>
                      setChoices((current) => ({
                        ...current,
                        [category.id]: event.target.checked,
                      }))
                    }
                  />
                </div>
                <p className="consent-category-body">{category.body}</p>
              </div>
            ))}
            </div>
          </div>
        </div>

        <div className="consent-actions">
          <button type="button" className="consent-btn consent-btn-accept" onClick={acceptAll}>
            Alle akzeptieren
          </button>
          <button type="button" className="consent-btn consent-btn-reject" onClick={rejectAll}>
            Alle ablehnen
          </button>
          {showDetails ? (
            <button
              type="button"
              className="consent-btn consent-btn-quiet"
              onClick={() => saveConsent(choices)}
            >
              Auswahl speichern
            </button>
          ) : (
            <button
              type="button"
              className="consent-btn consent-btn-quiet"
              onClick={openConsentSettings}
            >
              Einstellungen
            </button>
          )}
        </div>

        <div className="consent-links">
          <Link href="/datenschutz">Datenschutzerklärung</Link>
          <Link href="/impressum">Impressum</Link>
        </div>
      </div>
    </div>
  );
}
