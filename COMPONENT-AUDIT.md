# Component audit — `components/`

Review of all 50 component files (~6,200 lines). Findings are grouped by severity.
Line references are to the state of the tree at commit `60ee83f`, except where a finding is
marked ✅ **FIXED** — those describe the change that was made.

**Tool-verified baseline:** `npx eslint components` → **9 errors, 7 warnings**. Those are
called out inline below and marked _[lint]_.

---

## 1. Critical — bugs that change behaviour

### 1.1 ~~Preloader releases the page before assets finish loading~~ — ✅ **FIXED**

`markDone` decremented one shared counter that any asset could reach twice — a video fires
both `loadedmetadata` and `canplaythrough`, a cached image fires `onload` *and* reports
`complete` synchronously. With 2 assets in the list, either one resolving twice lifted the
overlay while the other was still downloading.

Each asset now carries its own `assetSettled` flag (`preloader.tsx:64–91`); `clearTimeout`
moved onto the same guarded path as the decrement. Verified against both cache orderings:
the overlay previously lifted one event early in each, and now waits for both assets.

### 1.2 `<form>` submit has no error handling and can hang forever
`components/contact-form/contact-form.tsx:11–23`

`fetch` is un-`try/catch`ed. On any network failure (offline, DNS, CORS, 5xx returning
non-JSON) the promise rejects, `setResult` never runs, and the user sees a form that
silently did nothing. Also missing: a pending/disabled state (the form can be submitted
repeatedly), `event.currentTarget.reset()` on success, and `aria-live` on the result
message (line 68) so screen readers announce it.

### 1.3 Web3Forms access key hardcoded in a client component
`components/contact-form/contact-form.tsx:14`

```ts
formData.append("access_key", "d8810d7e-7830-4042-8d07-71a617dfd351");
```

This ships in the client bundle and is committed to git. Web3Forms keys are semi-public by
design, but this one is unrotatable-in-place and unprotected: there is no honeypot field,
no captcha, and no rate limiting, so the endpoint is trivially spammable straight into the
agency inbox. Move it to `NEXT_PUBLIC_*` env at minimum, add `botcheck` honeypot, and
prefer a route handler that keeps the key server-side.

### 1.4 Truncated copy shipped to production
`components/section-contact/section-contact.tsx:51`

```
answer: "Wir verbinden Design, Performance und Online-Marketing zu einer"
```

The last FAQ answer ends mid-sentence.

### 1.5 Placeholder Vimeo video in the showreel
`components/showreel/showreel.tsx:91`

`https://player.vimeo.com/video/76979871` is a Vimeo sample clip, not agency content. The
whole "Showreel" section currently plays a stranger's video.

### 1.6 Reading/writing a ref during render _[lint error]_
`components/spline-scene.tsx:47`

```ts
const liveActiveRef = useRef(active);
liveActiveRef.current = active;   // ← during render
```

Flagged by `react-hooks/refs`. Under concurrent rendering, a render that React discards
still mutates the ref, so `onLoad` can read a visibility value that was never committed.
The correct fix is a small `useEffect` that mirrors `active`.

### 1.7 Two refs bound to one node by hand
`components/spline-scene.tsx:83–86`

```tsx
ref={(node) => { loadRef.current = node; activeRef.current = node; }}
```

`activeRef` is a `RefObject` owned by `useRenderActive`, whose observer effect runs with
deps `[rootMargin]` and reads `ref.current` exactly once. Assigning through the callback
happens to work on first mount only — if the node is ever swapped, the IntersectionObserver
keeps watching the detached element and `active` freezes. Use a merged-ref helper, or have
`useRenderActive` expose a callback ref.

---

## 2. High — performance

### 2.1 ~~Four byte-identical hero files~~ — ✅ **FIXED**

`hero-{agency,services,projects,contact}.tsx` (338 lines each, 1,352 total) differed only in
the function name and the `<h1>` string. Collapsed into `components/hero.tsx` taking a
`title` prop; the four originals are deleted and all four pages updated. **−1,011 lines.**
The capture effect's deps went `[]` → `[title]` so the refracted texture tracks the headline.
`tsc --noEmit` and `next build` both clean; all 23 routes still prerender static.

### 2.2 `useEffect` that runs on every single render
`components/canvasui/GlassObject.tsx:1243–1245`

```tsx
useEffect(() => {
  instanceRef.current?.setOptions(options);
});   // ← no dependency array
```

`options` is a fresh object from rest-spread each render. Worse, `setOptions`
(lines 1171–1190) calls `loadAsset()` on *any* detected change — so changing `ior` or
`tint` re-downloads and re-parses the GLB/SVG from scratch. Any inline prop
(`onLoad={() => …}` is skipped, but an inline object or array is not) turns this into a
reload-per-render loop.

### 2.3 rAF loops that call `setState` every frame, forever
`components/showreel/showreel.tsx:41–55` and `components/service-dropdown/service-dropdown.tsx:78–98`

Both follow the same anti-pattern:

```tsx
useEffect(() => {
  const animate = () => {
    setCursorPosition(prev => ({ x: prev.x + (target.x - prev.x) * 0.15, … }));
    id = requestAnimationFrame(animate);
  };
  id = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(id);
}, [cursorTarget]);          // ← restarts on every mousemove
```

Three compounding problems:
1. **A full React re-render 60×/second**, for the lifetime of the component, to move one
   absolutely-positioned div. This should write `element.style.transform` from inside the
   rAF and never touch state.
2. **The loop never terminates.** Showreel's runs even when the cursor is nowhere near the
   section and even when `isPlaying` is true and the cursor is unmounted.
3. **The effect is torn down and rebuilt on every `mousemove`** because the target position
   is in the dependency array.

`service-dropdown` has the same shape with `[isHovering, cursorPos]` deps (line 98) — and
one `ServiceDropdown` instance is rendered per service card, so the cost multiplies.

### 2.4 `LogoLoop` rebuilds its ResizeObserver on every render
`components/logo-loop/LogoLoop.tsx:74` and `:108`

```ts
}, [callback, elements, dependencies]);
```

`elements` is the array literal `[containerRef, seqRef]` (line 257) and `dependencies` is
the literal `[logos, gap, logoHeight, isVertical]` (line 257/259) — both allocated fresh on
every render, so both effects re-run every render: disconnect + reconstruct two
`ResizeObserver`s, re-scan and re-bind load/error listeners on every `<img>`, and call
`updateDimensions()` (which does `getBoundingClientRect()` → forced layout). Spread the
dependency values into the array instead of passing the array as one dep.

### 2.5 `html2canvas` rasterizes the hero on every resize
`components/hero.tsx:287–291`

A 250 ms-debounced full-DOM rasterization at up to 2× DPR runs on each resize, allocating a
new `CanvasTexture` each time. `html2canvas-pro` is also a heavyweight dependency to ship
to four route entrypoints for what is one word of text — an offscreen-canvas `fillText` or a
pre-baked texture would do the same job for a fraction of the bytes. (Unaffected by the
§2.1 fix — the same effect now just lives in one file instead of four.)

### 2.6 Per-frame `setState` in the counter
`components/count-up-on-view.tsx:58–69`

`setDisplayValue` on each rAF for `duration` (default 1400 ms) ≈ 85 renders per counter,
and `section-feat-works` renders two of them. Same fix: write `textContent` via a ref.
Bonus: the interpolation is linear (`value * progress`) with no easing, so the count-up
stops dead rather than settling.

### 2.7 `<video autoPlay>` with no `preload` gate
`components/cta-box/cta-box.tsx:10–17`

`/videos/cta.mp4` autoplays in the footer CTA on every page. There is no `preload="none"`
/ `preload="metadata"`, no `prefers-reduced-motion` check, and no IntersectionObserver —
so the full video downloads and decodes even when the footer is 10 screens below the fold.
Note `preloader.tsx` *also* explicitly blocks first paint on this same file.

---

## 3. High — accessibility

### 3.1 Closed mobile drawer stays in the tab order
`components/header/burger.tsx:47–86` + `components/header/header.css:225–245`

The drawer is hidden purely with `width: 0; height: 0; overflow: hidden`. There is no
`display: none`, `visibility: hidden`, `hidden`, or `inert`. Every link, phone number, and
the Instagram link inside it remain focusable — a keyboard user tabbing through the header
falls into an invisible menu. Additionally the drawer has no `role="dialog"`, no focus
trap, no focus restore, no Escape handler, and no body-scroll lock.

### 3.2 Burger button announces nothing
`components/header/burger.tsx:35–38`

No `type="button"` (it's outside a form so it defaults harmlessly, but it's still wrong),
no `aria-expanded`, no `aria-controls`, no `aria-label`. Screen-reader users get "Menu,
button" with no indication of state.

### 3.3 Accordion is not an accordion
`components/faq-accordion/faq-accordion.tsx:26–38`

- No `aria-expanded`, no `aria-controls`, no `type="button"` on the trigger.
- `.faq-answer` is **always in the DOM and never `hidden`** — collapsed answers are read
  aloud by screen readers and are keyboard-reachable, so all 8 FAQ answers are announced
  regardless of visual state.
- `key={index}`.

### 3.4 Interactive `<div>`s with no keyboard path
`components/service-dropdown/service-dropdown.tsx:102–108` and `components/showreel/showreel.tsx:57–65`

Both attach `onClick` to a plain `<div>` with no `role`, no `tabIndex`, and no key handler.

`service-dropdown` is the worse case: it contains a real `<button className="service-dropdown-header">`
(line 110) that has **no `onClick` of its own** — it's decoration, and the actual toggle
relies on the click bubbling to the wrapper div. So the one focusable element in the
component does nothing when activated by keyboard (Enter/Space on a button fires a click
that bubbles… only because it's nested; remove the nesting and it breaks). There's no
`aria-expanded` either.

### 3.5 Lightbox has no focus management
`components/hover-video/hover-video.tsx:243–281`

`role="dialog" aria-modal="true"` is declared but nothing enforces it: focus is never moved
into the dialog on open, never trapped, and never restored to the trigger on close. Escape
is handled (line 187), which is the one thing that is right.

### 3.6 `role="img"` with an empty accessible name
`components/ui/parallax-image.tsx:65–66`

```tsx
role="img" aria-label={alt}    // alt defaults to ""
```

Every call site in `app/projects/*` relies on the default, producing a nameless `img` role —
worse than no role at all. Either drop the role or make `alt` required.

### 3.7 `target="_blank"` without `rel`
`components/header/burger.tsx:77`, `components/socials-icons/socials-icons.tsx:7`

Missing `rel="noopener noreferrer"`. `door-button.tsx:41` gets this right, so the codebase
already knows better.

---

## 4. Medium — dead code and duplication

### 4.1 `agency-header.tsx` + `agency-header.css` are unreferenced
Zero imports anywhere in `app/` or `components/`. 140 lines of TSX plus a stylesheet plus
its own r3f `<Canvas>`, `MeshTransmissionMaterial` and lighting rig. Three of its symbols
are dead even inside the dead file _[lint]_: `Text` (line 7), `INK` (17), `PLATINUM` (18).

Its doc comment (lines 32–36) also lies about the code:

> The headline lives inside the WebGL scene (not in HTML) … An sr-only `<h1>` in the
> overlay carries the semantics.

There is no `<Text>` in the scene and the `<h1>` at line 126 is a normal visible heading.

### 4.2 Other unreferenced or commented-out components
| File | Status |
|---|---|
| `glass-cube-about.tsx` (211 lines) | only import is commented out — `app/page.tsx:23` |
| `spline-footer.tsx` | only import is commented out — `footer/footer.tsx:3` |
| `spline-agency-hero.tsx` | only import is commented out — `app/agency/page.tsx:6` |

`glass-cube-about.tsx` is a near-copy of the glass-cube code now consolidated in §2.1 — the
last remaining duplicate of it — with a
module-level mutable `pointer` (line 23) that would be shared across instances if it were
ever rendered twice.

### 4.3 Eight single-line Spline wrapper files
`spline-torus`, `spline-medusa`, `spline-cubes`, `spline-footer`, `spline-agency-hero`,
`spline-agency-2`, `spline-contact-hero`, `spline-projects-hero` — each exists solely to
hardcode one `prod.spline.design` URL. This is a config map, not eight components.

`lazy-spline.tsx` adds a ninth layer that forwards three props to `SplineScene` with
`disablePointerEvents` preset. Its own doc comment tells you to use `SplineScene` directly.

### 4.4 Hardcoded content that should be props or data
- `review-card.tsx` — the entire testimonial, the author ("Alex Chen, Founder, Nova AI") and
  the logo are baked in; the only prop is `className`. Rendering two of these renders the
  same quote twice.
- `post-thumb.tsx` — the title and body are hardcoded, and the `align` prop is implemented
  by **duplicating the whole markup block in both ternary branches** (lines 18–52) when
  `flex-direction: row-reverse` would do it. Also imports `ScrambledText` and never uses it
  _[lint]_ (line 5).
- `section-services.tsx` — three visually identical pricing cards, 20 lines of markup each,
  copy-pasted with different strings and prices. Note the first card's wrapper uses
  `bg-neutral-900`/`bg-white` while cards 2 and 3 use `bg-white`/`bg-background` — likely an
  unintended inconsistency introduced by the copy-paste.
- Contact details (`Žirgų g. 18-6…`, `info@mindlind.de`, both phone numbers) are duplicated
  verbatim in `header/burger.tsx:58–67` and `footer/footer.tsx:66–76`.

### 4.5 The two navigations disagree
`header/header.tsx:24–31` lists Home / Agency / **Leistungen** / Projekte / Contact.
`header/burger.tsx:50–54` lists Home / Agency / **Projects** / Contact — the Services page
is unreachable from mobile, and "Projekte" is labelled "Projects". `footer-menu.tsx` has
its own third copy of the list (which matches the desktop header).

---

## 5. Medium — correctness and hygiene

### 5.1 Silently dead Tailwind class
`components/showreel/showreel.tsx:74` — `ml-0.6` is not a valid spacing token (the scale
has `0.5` and `1`, not `0.6`). It compiles to nothing.

### 5.2 Unescaped interpolation into a CSS `url()`
`components/ui/parallax-image.tsx:74` — `backgroundImage: \`url(${src})\`` breaks on any
`src` containing `)`, `'`, or `"`. Wrap in quotes and encode. Using a CSS background also
opts every project hero image out of `next/image` optimization and lazy loading.

### 5.3 `<Image>` with a fabricated aspect ratio and no `sizes`
`components/ui/image-carousel.tsx:47–54` — hardcoded `width={1000} height={1000}` for
arbitrary slides means the reserved layout box is square regardless of the real image,
causing CLS on load. No `sizes` prop, so Next serves an oversized candidate. Index keys at
line 44.

### 5.4 `<a>` instead of `<Link>` in the project grid
`components/work-thumb/work-thumb.tsx:18` — a raw `<a href>` triggers a full document
navigation with no prefetch, while the rest of the app routes through `ProgressLink`. The
top progress bar also won't fire for these.

### 5.5 `href="#"` as a default and as real links
`door-button.tsx:8` defaults `href` to `"#"`, so any `DoorButton` rendered without an href
is a no-op link that jumps to top. Live instances: `cta-box.tsx:24` ("JETZT ANFRAGEN" — the
primary CTA), `contact-button.tsx:6`, `footer.tsx:43–44` (Terms, Privacy Policy — legally
required pages), `footer.tsx:66`, `post-thumb.tsx:14`, `section-feat-works.tsx:106`
("Alle Projekte").

### 5.6 `any` escape hatches _[lint errors]_
`components/scrambled-text/scrambled-text.tsx:12` (`[key: string]: any`) and `:53`
(`Component as any`). The index signature also disables all prop typechecking on a component
that spreads `restProps` straight onto a polymorphic element. Use
`ComponentPropsWithoutRef<ElementType>`.

Same file, line 28: `clearInterval(intervalRef.current!)` — a non-null assertion on a value
initialised to `null`. Harmless at runtime, but it's asserting away the exact case the code
is handling.

### 5.7 The scramble effect doesn't resolve
`components/scrambled-text/scrambled-text.tsx:39–41` — every frame replaces the *entire*
string with random glyphs, then frame 15 snaps back to the original. The characteristic
left-to-right settle of this effect is missing; it currently reads as "flicker garbage, then
pop". Also fires on `mouseenter` only — no touch or keyboard-focus trigger.

### 5.8 `setState` directly in effect bodies _[7 lint errors]_
`react-hooks/set-state-in-effect` fires in: `burger.tsx:14`, `hover-video.tsx:52`,
`top-progress-bar.tsx:51`, `service-dropdown.tsx:51`, `showreel.tsx:32`,
`spline-scene.tsx:55`. Each is a cascading render that could be derived state, a lazy
`useState` initialiser, or a `useSyncExternalStore`.

`hover-video.tsx:52` (`useEffect(() => setMounted(true), [])`) is the classic
portal-hydration guard — `typeof document !== "undefined"` at the `createPortal` call site
avoids the extra render pass entirely.

### 5.9 Unused destructured value _[lint warning]_
`components/team-carousel/team-carousel.tsx:14` — `emblaApi` is destructured and never used.

### 5.10 Raw `<img>` where `next/image` is used everywhere else _[2 lint warnings]_
`burger.tsx:78` and `LogoLoop.tsx:329`.

### 5.11 `ProgressLink` injects a child into every anchor
`components/progress-bar/progress-link.tsx:28–33` renders `<LinkPending />` as a sibling of
`children` inside every `<Link>`. It returns `null`, so it's invisible — but it is a real
child in the React tree, which will break any CSS relying on `:only-child`, `:last-child`,
or a fixed flex/grid child count inside a link. `.hdr-menu a` and `.ftr-menu-item a` are
both candidates.

### 5.12 Progress bar can strand itself at 100%
`components/progress-bar/top-progress-bar.tsx:46–58` — if a second navigation starts while
the finish sequence is mid-flight, `clearFinishTimers()` runs but `visible` is still `true`,
so the `if (!visible)` guard skips resetting `progress` and `startedAtRef`. The bar stays at
`scaleX(1)` for the whole of the next navigation.

### 5.13 Third-party CDN dependency at runtime
`components/canvasui/GlassObject.tsx:105` — `dracoDecoderPath` defaults to
`https://www.gstatic.com/draco/versioned/decoders/1.5.7/`. Any GLB with Draco compression
pulls a decoder from Google at runtime: a third-party request on a German agency site
(GDPR-relevant), plus a hard external dependency for a core render path. Vendor the decoder
into `public/`.

### 5.14 Vendored code left unattributed / unmarked
`components/logo-loop/LogoLoop.tsx:409` ends with `// Made with Bob`. `LogoLoop` and
`canvasui/GlassObject.tsx` (1,265 lines — 20% of the entire component directory, and by far
the largest file) are both clearly third-party/generated. Neither is marked as vendored, so
both look like maintained first-party code and will be "cleaned up" by someone eventually.
`GlassObject.tsx` also mixes a framework-agnostic imperative Three.js library
(`createGlassObject`, lines 675–1216) and a React wrapper (lines 1219–1263) in one module.

### 5.15 Empty layout divs
`components/header/header.tsx:13` (`<div className="hdr-overlay"></div>`) and
`components/footer/footer.tsx:49–51` (an empty `hidden lg:flex items-center justify-center
text-3xl` div) — grid spacers doing work that belongs in CSS.

### 5.16 Language mixing in the UI
`hover-video.tsx:39` defaults `linkLabel` to `"Learn more"` and `contact-button.tsx:10` says
"Contact manager", on an otherwise German site. The header nav mixes both ("Leistungen",
"Projekte", "Contact"). `review-card.tsx` and `post-thumb.tsx` are entirely in English.

---

## Summary

| Area | Count | Worst offenders |
|---|---|---|
| Behavioural bugs | 6 open, 1 fixed | `contact-form.tsx`, `spline-scene.tsx` |
| Performance | 6 open, 1 fixed | `showreel.tsx`, `service-dropdown.tsx`, `LogoLoop.tsx` |
| Accessibility | 7 | `burger.tsx` drawer, `faq-accordion.tsx`, `service-dropdown.tsx` |
| Dead / duplicated code | ~550 lines left | `glass-cube-about.tsx` (211), `agency-header.tsx` (140) |
| Lint | 9 errors, 7 warnings | `react-hooks/set-state-in-effect` ×6 |

**Done**

1. ~~Collapse the four hero files into one parameterised component.~~ ✅ §2.1 — `components/hero.tsx`, −1,011 lines.
2. ~~Fix the preloader's double-decrement.~~ ✅ §1.1 — per-asset `settled` guard.

**Highest leverage remaining, in order:**

3. Wrap the contact form submit in `try/catch` with a pending state (§1.2) — it is the
   site's only conversion path.
4. Convert the two per-frame-`setState` rAF loops to direct style writes (§2.3).
5. Make the mobile drawer `inert` when closed (§3.1).
6. Delete `agency-header.{tsx,css}`, `glass-cube-about.tsx`, `spline-footer.tsx`,
   `spline-agency-hero.tsx`.
