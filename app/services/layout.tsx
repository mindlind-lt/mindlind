import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";

// `app/services/page.tsx` is a Client Component, and Client Components cannot
// export `metadata` — so the route's metadata lives in this layout instead.
export const metadata: Metadata = buildMetadata("/services");

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
