import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import PreloadResources from "@/components/preload-resources";
import TopProgressBar from "@/components/progress-bar/top-progress-bar";
import PagePreloader from "@/components/page-preloader/page-preloader";
import ConsentBanner from "@/components/consent/consent-banner";
import GoogleAnalytics from "@/components/analytics/google-analytics";
import GoogleTagManager from "@/components/analytics/google-tag-manager";
import { siteConfig } from "@/lib/site";
import { organizationSchema } from "@/lib/schema";

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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.legalName,
    // Page titles render as "Leistungen | Mindlind Werbeagentur".
    template: `%s | ${siteConfig.legalName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.legalName,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: siteConfig.legalName,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.legalName,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.lang}
      className={`${inter.variable} ${spaceMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </head>
      <body>
        <PagePreloader />
        <noscript><style>{`.page-preloader { display: none !important; }`}</style></noscript>
        <TopProgressBar />
        <PreloadResources />

        <div id="site-content">
          <Header />

          <main tabIndex={-1}>{children}</main>

          <Footer />

          <ConsentBanner />
        </div>

        {/* These read the consent cookie in the browser after hydration.
            That is what keeps them compatible with `output: "export"`, which
            has no request-time server to read a cookie on.
            GoogleAnalytics renders nothing at all until NEXT_PUBLIC_GA_ID is
            set AND the visitor has accepted the Statistik category;
            GoogleTagManager waits for the same consent. */}
        <GoogleAnalytics />
        <GoogleTagManager />

      </body>
    </html>
  );
}
