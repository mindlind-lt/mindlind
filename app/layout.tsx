import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Preloader from "@/components/preloader/preloader";
import PreloadResources from "@/components/preload-resources";
import TopProgressBar from "@/components/progress-bar/top-progress-bar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
    variable: "--font-space-mono",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mindlind Werbeagentur",
  description: "Unser 360° Ansatz für Projektmanagement umfasst fünf Kernphasen, um herausragende Ergebnisse zu erzielen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceMono.variable} antialiased`}
    >
      <body>
        <TopProgressBar />
        <PreloadResources />
        <Preloader />

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  );
}
