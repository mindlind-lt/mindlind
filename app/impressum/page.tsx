import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("/impressum");

export default function PageImprint(){
    return(
        <>
        </>
    )
}