# Visual / Mobile Rendering Audit — new.mindlind.de

Tool: Playwright (Chromium), automated via a one-off Python script (no capture_screenshot.py/render_page.py
found in the environment, so a Playwright script was written to replicate the same checks: viewport
screenshots, above-the-fold DOM geometry, tap-target sizing, horizontal-scroll and layout-shift (CLS)
detection). Pages tested: `/` (home), `/services` (nav label "LEISTUNGEN"), `/projects` (nav label
"PROJEKTE"). Note: `/leistungen` and `/projekte` (German URL slugs) both 404 — the site uses English
slugs with German nav labels; if the orchestrator specifically wants those URLs checked, they don't
resolve.

Viewports: Desktop 1920x1080, Mobile 375x812 (iPhone-class, `is_mobile`/`has_touch` emulated, iOS Safari
UA), device_scale_factor 2. All pages returned HTTP 200, zero console errors, zero page errors, no
horizontal overflow (`hasHorizontalScroll: false` on every page/viewport), and `performance.getEntriesByType('layout-shift')`
summed to `0` roughly 1.5s after `networkidle` on every page/viewport (see reasoning below).

Screenshots saved to:
- `/Users/almaz/PROJECTS/mindlind/mindlind/.audit/screenshots/home_desktop.png`
- `/Users/almaz/PROJECTS/mindlind/mindlind/.audit/screenshots/home_mobile.png`
- `/Users/almaz/PROJECTS/mindlind/mindlind/.audit/screenshots/services_desktop.png`
- `/Users/almaz/PROJECTS/mindlind/mindlind/.audit/screenshots/services_mobile.png`
- `/Users/almaz/PROJECTS/mindlind/mindlind/.audit/screenshots/projects_desktop.png`
- `/Users/almaz/PROJECTS/mindlind/mindlind/.audit/screenshots/projects_mobile.png`
- `/Users/almaz/PROJECTS/mindlind/mindlind/.audit/screenshots/home_mobile_menu_open_v2.png` (mobile nav opened, supporting evidence for finding #4)

---

## Findings

### 1. Home page above-the-fold is clear and effective — POSITIVE
**Severity:** N/A (positive finding)
**Observation:** On both desktop (1920x1080) and mobile (375x812), the homepage shows the logo, nav,
a value-prop card ("IHR WACHSTUM BEGINNT HIER" / "Ob Website, SEO oder Performance Marketing – wir
begleiten Sie vom ersten Gespräch bis zum langfristigen Erfolg.") and a primary CTA ("JETZT ANFRAGEN")
fully visible without scrolling, plus the brand wordmark and category label ("DIGITALE KREATIVAGENTUR").
On mobile the CTA sits at `top:476px, height:40px` and the H1 text at `top:580–720px`, both comfortably
inside the 812px viewport.
**Falsifiability check:** Re-run `page.goto('https://new.mindlind.de/')` at 375x812 and 1920x1080, take
a viewport-only screenshot (not full-page), and visually confirm the CTA button and headline text are
inside the capture. If either is absent from the crop, this finding is false.
**Caveat:** This 812px CSS-viewport-height test does not include a real mobile browser's collapsible
address/toolbar chrome. On first load in real Safari/Chrome (before the user scrolls to collapse the
URL bar), effective visible height is often ~650–700px, not the full 812px. At that reduced height the
CTA (bottom edge ~516px) still fits, but it will feel very close to the bottom edge. Not a hard failure,
but worth spot-checking on a real device.

---

### 2. /services and /projects pages have no CTA or supporting copy above the fold
**Severity:** Moderate
**Observation:** Unlike the homepage, both `/services` (LEISTUNGEN) and `/projects` (PROJEKTE) show only
the logo, nav, a large decorative 3D-render hero background (the same abstract ribbon/torus image reused
on both pages), and the oversized page title. There is no supporting sentence, subheading, or CTA button
visible above the fold on either desktop or mobile — the first real content (a pricing card on
`/services`, a project thumbnail on `/projects`) is cropped at the very bottom edge of the viewport or
fully below it. For a services page in particular, this means a visitor has to scroll before learning
anything about what's offered or before seeing any next-step action.
**Falsifiability check:** Screenshot `/services` and `/projects` at 1920x1080 and 375x812 (viewport-only,
no scroll) and check whether any element other than the nav and the H1 ("LEISTUNGEN"/"PROJEKTE") contains
readable body text or a clickable CTA. If a CTA/description is found inside the crop, this finding is
false. (Reproduced in `services_desktop.png`, `services_mobile.png`, `projects_desktop.png`,
`projects_mobile.png` — first pricing card / project image only partially visible at the very bottom
edge or entirely cut off.)

---

### 3. Interactive tap targets below recommended 44–48px minimum
**Severity:** Moderate (accessibility/UX best practice, not a hard WCAG failure)
**Observation:** Measured via `getBoundingClientRect()` on mobile (375x812) for all visible `a`/`button`
elements:
- Mobile nav menu links (open-state): HOME 69×28, AGENCY 103×28, LEISTUNGEN 171×28, PROJECTS 137×28,
  CONTACT 120×28 — all 28px tall.
- Home page service filter/tab buttons ("WEB DESIGN" 177×24, "BRANDING" 148×24, "CONTENT" 133×24,
  "MOBILE" 118×24) — real interactive controls (`<button>` elements), 24px tall.
- Primary CTA buttons "JETZT ANFRAGEN": 185×40 (home) and 177×40 (services/projects footer CTA) — under
  the 44px guideline, though close.
- Instagram social icon: 30×30.
- Footer legal links (AGB 27×16, Datenschutzerklärung 135×16, Terms 35×18, Privacy Policy 79×18) — likely
  exempt from WCAG 2.5.8 as inline text links, but still small for thumb tapping.
All of the above pass the WCAG 2.2 SC 2.5.8 *minimum* (24×24px, AA) except none actually fail that
specific SC, but all fall below the 44×44 (Apple HIG) / 48×48 (Material) *recommended* touch target
size, which is the practical bar for comfortable one-handed mobile use.
**Falsifiability check:** In a mobile emulation session, open the nav menu and the homepage service tabs,
and read `getBoundingClientRect().height` for each link/button. If all measured heights are ≥44px, this
finding is false. Raw data reproduced in this session's script output (see nav/tab measurements above).

---

### 4. Mobile menu close control loses its visual affordance when open
**Severity:** Low–Moderate
**Observation:** Closed state: the hamburger control is a clear rounded white button (82×54px) containing
three lines plus a "Menu" text label — a strong, unambiguous affordance. Once tapped, the label
(`.burger-label`) collapses to a 0×0 bounding box and the three `.burger-line` elements end up
overlapping at the same `top` coordinate with only 2px height and no rotation transform applied in the
computed geometry, rendering as a single short, unlabeled horizontal dash near the top-right corner (see
`home_mobile_menu_open_v2.png`). There is no visible button background/box in the open state, no "X" or
"close" icon, and no text label. The underlying clickable container (`.hdr-burger`, 82×92px) is still
present and functional (confirmed: clicking the same coordinate a second time is the intended close
action), but the visual cue for "tap here to close" is materially weaker than the visual cue for
"tap here to open."
**Falsifiability check:** Open the mobile menu, then run
`document.querySelectorAll('.burger-line')` → read each line's `getBoundingClientRect()`. If the three
lines show distinct rotation (i.e., bounding boxes forming a clear "X" rather than three near-identical
2px-tall horizontal rects at the same `top`), or if a visible background box remains around the control,
this finding is false. Also inspect the screenshot directly for a visible button boundary — if a box is
visible, this finding is false.

---

### 5. Repeated hero background across sub-pages
**Severity:** Low (cosmetic/brand consistency, not a defect)
**Observation:** `/services` and `/projects` use the identical decorative 3D ribbon/torus background
image as their page-title hero, differing only in overlaid title text. This isn't broken, but it reduces
visual distinction between sections and may read as generic/templated rather than page-specific,
somewhat undercutting the "digitale Kreativagentur" positioning where visual differentiation is part of
the value proposition.
**Falsifiability check:** Diff the hero background images/CSS backgrounds of `/services` and `/projects`
pixel-for-pixel or by asset URL. If they resolve to different image assets, this finding is false.
(Reproduced visually in `services_desktop.png` vs `projects_desktop.png` — same swirl graphic, same
composition.)

---

### 6. No horizontal scroll, no console/page JS errors, no measured layout shift
**Severity:** N/A (positive finding / clean bill of health on these specific checks)
**Observation:** For all 3 pages × 2 viewports: `document.documentElement.scrollWidth` never exceeded
`window.innerWidth`; zero browser console errors; zero uncaught page errors; `layout-shift` performance
entries summed to 0 measured ~1.5s post-`networkidle`.
**Falsifiability check:** Re-run with `page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)`
on each page/viewport — any `true` result falsifies the no-horizontal-scroll claim. Attach a
`page.on('console'/'pageerror', ...)` listener during a fresh load — any captured error falsifies the
clean-console claim. Note the CLS reading is a coarse post-hoc snapshot (not a full Web Vitals CLS
session score from first paint through 5s of interaction), so it should be treated as "no shift observed
in this window," not a certified Core Web Vitals CLS score.

---

## Summary

| # | Finding | Severity |
|---|---|---|
| 1 | Home page ATF value prop + CTA visible on both viewports | Positive |
| 2 | /services and /projects have no ATF copy/CTA, only hero image + title | Moderate |
| 3 | Multiple interactive elements under 44px touch target guideline | Moderate |
| 4 | Mobile menu close affordance visually degrades when open | Low–Moderate |
| 5 | Identical hero background reused across sub-pages | Low |
| 6 | No horizontal scroll / console errors / measured CLS | Positive |

No overlapping-element or text-cutoff bugs were observed in any of the six screenshots reviewed.
