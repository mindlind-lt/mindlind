import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./framer-generated.css";

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
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
