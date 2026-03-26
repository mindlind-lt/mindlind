import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autosl – Portfolio | Mindlind",
  description: "Webdesign und Entwicklung für Autosl. Ein Projekt von Mindlind.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
