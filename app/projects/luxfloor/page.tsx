import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("/projects/luxfloor");

export default function PageCaseLuxfloor() {
  return (
    <>

      <div className="text-center font-mono h-dvh flex items-center justify-center">COMING SOON</div>

    </>
  )
}

