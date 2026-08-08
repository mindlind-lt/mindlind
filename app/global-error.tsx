"use client";

import { useEffect } from "react";

/**
 * Replaces the root layout when it is itself the thing that crashed, so it
 * must render its own <html>/<body>. Global styles and fonts are NOT applied
 * here — everything below is inline on purpose.
 */
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="de">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#17130d",
          color: "#ffffff",
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "36rem" }}>
          <p
            style={{
              margin: 0,
              fontSize: "0.875rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#0fd680",
            }}
          >
            Fehler
          </p>

          <h1
            style={{
              margin: "1.5rem 0 0",
              fontSize: "clamp(1.75rem, 6vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Da ist etwas schiefgelaufen.
          </h1>

          <p
            style={{
              margin: "1.5rem 0 0",
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "#a5a09a",
            }}
          >
            Bitte laden Sie die Seite neu. Bleibt der Fehler bestehen, erreichen
            Sie uns unter{" "}
            <a href="mailto:info@mindlind.de" style={{ color: "#0fd680" }}>
              info@mindlind.de
            </a>
            .
          </p>

          {error.digest && (
            <p
              style={{
                margin: "1rem 0 0",
                fontSize: "0.75rem",
                color: "#6b665f",
              }}
            >
              Referenz: {error.digest}
            </p>
          )}

          <button
            type="button"
            onClick={() => retry()}
            style={{
              marginTop: "2.5rem",
              cursor: "pointer",
              borderRadius: "999px",
              border: "none",
              backgroundColor: "#0fd680",
              color: "#000000",
              padding: "1rem 2rem",
              font: "inherit",
              fontSize: "0.875rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Erneut versuchen
          </button>
        </div>
      </body>
    </html>
  );
}
