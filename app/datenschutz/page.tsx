import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("/datenschutz");

export default function PagePrivacy(){
    return(
        <>
        </>
    )
}