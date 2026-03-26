import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factorysl – Portfolio | Mindlind",
  description: "Webdesign und Entwicklung für Factorysl. Ein Projekt von Mindlind.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
