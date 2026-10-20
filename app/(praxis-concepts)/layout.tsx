import type { Metadata } from "next";
import "./concepts.css";

export const metadata: Metadata = {
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function ConceptsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
