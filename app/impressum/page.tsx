import type { Metadata } from "next";

// The page has no content yet — `noindex` until it does.
export const metadata: Metadata = {
  title: "Impressum",
  description: "Anbieterkennzeichnung der Mindlind Werbeagentur.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/impressum",
    siteName: "Mindlind Werbeagentur",
    title: "Impressum | Mindlind Werbeagentur",
    description: "Anbieterkennzeichnung der Mindlind Werbeagentur.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impressum | Mindlind Werbeagentur",
    description: "Anbieterkennzeichnung der Mindlind Werbeagentur.",
  },
};

export default function PageImprint(){
    return(
        <>
        </>
    )
}