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
      {/* Spline scenes are fetched cross-origin; open the connection early so
          the scene download doesn't wait on DNS + TLS. */}
      <link rel="preconnect" href="https://prod.spline.design" crossOrigin="anonymous" />

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
