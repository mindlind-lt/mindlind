import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { PageTransitionProvider } from "@/components/page-transition/page-transition-provider";
import { SmoothScrollProvider } from "@/components/smooth-scroll/smooth-scroll-provider";
import { Preloader } from "@/components/preloader/preloader";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const generalSans = localFont({
  variable: "--font-general-sans",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/general-sans/WEB/fonts/GeneralSans-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/general-sans/WEB/fonts/GeneralSans-VariableItalic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {

  // Disable indexing
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

  title: "Mindlind Werbeagentur",
  description: "Unser 360° Ansatz für Projektmanagement umfasst fünf Kernphasen, um herausragende Ergebnisse zu erzielen",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${generalSans.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Preloader />
          <SmoothScrollProvider>
            <PageTransitionProvider>

              {children}

            </PageTransitionProvider>
          </SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
