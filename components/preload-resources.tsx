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
      {/* No preconnect to prod.spline.design here on purpose: Spline scenes now
          wait for the visitor's first gesture (see lib/use-first-interaction),
          so an eager preconnect would sit unused through the whole load — a
          wasted handshake that Lighthouse flags. SplineScene opens the
          connection itself the moment its gate unlocks. */}

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
