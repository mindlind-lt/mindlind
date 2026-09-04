import Link from "next/link";
import type { Metadata } from "next";

// Next emits its own <meta name="robots" content="noindex"> for this route and
// there is no way to suppress it, so a second tag is unavoidable — the job is
// to make it agree. Dropping `robots` entirely is worse than setting it: the
// root layout's `index, follow` is then inherited and the page ships one tag
// saying noindex and another saying index.
//
// `follow: true` is deliberate. The previous `nofollow` told crawlers to
// ignore the links back into the site, which is the opposite of what a 404
// page is for.
export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-32">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-[var(--primary-500)]">
          Fehler 404
        </p>

        <h1 className="mt-6 font-mono font-bold tracking-tight text-6xl sm:text-8xl">
          404
        </h1>

        <p className="mt-8 text-xl sm:text-2xl">
          Diese Seite gibt es nicht — oder nicht mehr.
        </p>

        <p className="mt-4 text-base opacity-70">
          Vielleicht wurde der Link geändert oder die Adresse enthält einen
          Tippfehler.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-[var(--primary-500)] px-8 py-4 font-mono text-sm uppercase tracking-wide text-black transition-colors hover:bg-[var(--primary-600)]"
          >
            Zur Startseite
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-current/20 px-8 py-4 font-mono text-sm uppercase tracking-wide transition-colors hover:border-current/50"
          >
            Projekte ansehen
          </Link>
        </div>
      </div>
    </main>
  );
}
