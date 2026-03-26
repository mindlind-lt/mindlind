import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muafaktur – Portfolio | Mindlind",
  description: "Webdesign und Entwicklung für Muafaktur. Ein Projekt von Mindlind.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
