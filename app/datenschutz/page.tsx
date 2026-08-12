import type { Metadata } from "next";

// The page has no content yet — `noindex` until it does.
export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Mindlind Werbeagentur.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/datenschutz",
    siteName: "Mindlind Werbeagentur",
    title: "Datenschutz | Mindlind Werbeagentur",
    description: "Datenschutzerklärung der Mindlind Werbeagentur.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datenschutz | Mindlind Werbeagentur",
    description: "Datenschutzerklärung der Mindlind Werbeagentur.",
  },
};

export default function PagePrivacy(){
    return(
        <>
        </>
    )
}