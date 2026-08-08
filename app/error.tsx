"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    // Swap for a reporting service (Sentry, Vercel observability) when one exists.
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-32">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-[var(--primary-500)]">
          Fehler
        </p>

        <h1 className="mt-6 font-mono font-bold tracking-tight text-4xl sm:text-6xl">
          Da ist etwas schiefgelaufen.
        </h1>

        <p className="mt-8 text-lg opacity-70">
          Bitte versuchen Sie es erneut. Bleibt der Fehler bestehen, erreichen
          Sie uns direkt unter{" "}
          <a
            className="underline underline-offset-4"
            href="mailto:info@mindlind.de"
          >
            info@mindlind.de
          </a>
          .
        </p>

        {error.digest && (
          <p className="mt-6 font-mono text-xs opacity-50">
            Referenz: {error.digest}
          </p>
        )}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => retry()}
            className="rounded-full bg-[var(--primary-500)] px-8 py-4 font-mono text-sm uppercase tracking-wide text-black transition-colors hover:bg-[var(--primary-600)]"
          >
            Erneut versuchen
          </button>
          <Link
            href="/"
            className="rounded-full border border-current/20 px-8 py-4 font-mono text-sm uppercase tracking-wide transition-colors hover:border-current/50"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
