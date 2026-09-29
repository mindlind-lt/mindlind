import type { Metadata } from "next";
import DnaHelix from "@/components/dna-helix/dna-helix";

export const metadata: Metadata = {
  title: "Demo",
  // A scratch page for trying components out — keep it out of search.
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  return (
    <main>
      <DnaHelix />
    </main>
  );
}
