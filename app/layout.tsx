import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mondragon – Digital Creative Agency – Framer Template",
  description: "Framer Template for Digital Creative Agency with Future Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Module Preloads */}
        <link rel="modulepreload" href="/assets/react.CQg9dmOM.mjs" />
        <link rel="modulepreload" href="/assets/rolldown-runtime.DsXBSD_B.mjs" />
        <link rel="modulepreload" href="/assets/motion.VNkKVxJm.mjs" />
        <link rel="modulepreload" href="/assets/framer.CkI1Tnt1.mjs" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}

        {/* Framer runtime (hydrates #main from page exports) */}
        <script type="module" async src="/assets/script_main.DJGiwIHr.mjs" />
      </body>
    </html>
  );
}
