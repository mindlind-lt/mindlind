"use client";

import Link, { useLinkStatus } from "next/link";
import { useEffect, type ComponentProps } from "react";

import { startProgress, doneProgress } from "./progress-store";

// Renders nothing — it exists only to read the parent <Link>'s pending state
// (useLinkStatus must run inside a Link) and report it to the global store.
function LinkPending() {
  const { pending } = useLinkStatus();

  useEffect(() => {
    if (!pending) return;
    startProgress();
    return () => doneProgress();
  }, [pending]);

  return null;
}

// Drop-in replacement for `next/link`: same props, plus it drives the top
// progress bar while navigation is in flight.
export default function ProgressLink({
  children,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link {...props}>
      {children}
      <LinkPending />
    </Link>
  );
}
