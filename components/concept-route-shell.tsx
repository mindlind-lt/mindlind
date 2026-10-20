"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Concept previews reuse the site header inside their static content, without
 * mounting the preloader or canvas footer. Other routes keep their existing
 * server-rendered shell. */
export default function ConceptRouteShell({
  children,
  standard,
}: {
  children: ReactNode;
  standard: ReactNode;
}) {
  const pathname = usePathname();
  if (/^\/concept-[123]\/?$/.test(pathname)) {
    return <main className="concept-main" id="concept-main" tabIndex={-1}>{children}</main>;
  }
  return standard;
}
