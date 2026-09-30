/**
 * Resource hints for the homepage's critical path.
 *
 * These are rendered as plain <link> elements rather than via the
 * `ReactDOM.preload`/`preconnect` helpers the Next docs suggest: those calls
 * did not survive into the prerendered HTML (the emitted hints were nowhere in
 * the served document), whereas React hoists <link> elements rendered in the
 * tree into <head> reliably. With `output: "export"` the prerendered HTML is
 * the only HTML there is, so verify in the built file after changing anything
 * here: `grep '<link' out/index.html`.
 */
export default function PreloadResources() {
  return (
    <>
      {/* SplineMedusa owns its scene preload so it only appears on the
          homepage. Other scenes remain gated behind the first interaction. */}

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
