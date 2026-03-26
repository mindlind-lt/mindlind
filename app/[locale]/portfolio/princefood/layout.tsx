import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prince Food – Portfolio | Mindlind",
  description: "Webdesign und Entwicklung für Prince Food. Ein Projekt von Mindlind.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
