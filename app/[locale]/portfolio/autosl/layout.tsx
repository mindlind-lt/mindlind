import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autosl – Portfolio | Mindlind",
  description: "Webdesign und Entwicklung für Autosl. Ein Projekt von Mindlind.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
