/**
 * Resource hints for the homepage's critical path.
 *
 * These are rendered as plain <link> elements rather than via the
 * `ReactDOM.preload`/`preconnect` helpers the Next docs suggest: under
 * `cacheComponents` those calls did not survive into the prerendered static
 * HTML (the emitted hints were nowhere in the served document), whereas React
 * hoists <link> elements rendered in the tree into <head> reliably. Verify
 * with `curl -s <url> | grep '<link'` after changing anything here.
 */
export default function PreloadResources() {
  return (
    <>
      {/* No hint for the Spline scenes on purpose. They are served from our own
          origin now (public/scenes, see scripts/sync-spline-assets.mjs), so
          there is no third-party handshake left to warm up — and preloading the
          scenes themselves would defeat the point of gating them behind the
          visitor's first gesture (see lib/use-first-interaction). */}

      {/* The homepage LCP element is the hero CTA video's poster frame. A
          `poster` attribute is only discovered once the parser reaches the
          <video>, so hoist it out of the critical path. */}
      <link
        rel="preload"
        as="image"
        href="/images/cta-poster.webp"
        type="image/webp"
        fetchPriority="high"
      />
    </>
  );
}
