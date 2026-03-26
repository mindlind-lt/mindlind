import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muafaktur – Portfolio | Mindlind",
  description: "Webdesign und Entwicklung für Muafaktur. Ein Projekt von Mindlind.",
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
