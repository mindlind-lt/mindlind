import Link from "next/link";
import Image from "next/image";

import "./post-thumb.css";
import ScrambledText from "../scrambled-text/scrambled-text";

export default function PostThumb(){

    return (
        <Link href="#" className="post-thumb">

            <div className="bg-white rounded-lg p-1 flex gap-1">

                <div className="post-thumb-pic">
                    <Image 
                        src="/images/blog-example.jpg"
                        width={560}
                        height={290}
                        alt=""
                        className="post-thumb-img object-cover rounded-lg"
                    />
                </div>

                <div className="rounded-lg bg-background p-[60px]">
                    <h3 className="text-4xl uppercase font-mono mb-5">Fresh Visual Trends in 2026</h3>
                    <div className="text-muted-foreground">In 2026, calm, systemic visuals dominate: strict grids, duo-palettes, mono-typography, and micromotion as feedback. Subtle 3D gradients, material textures.</div>
                </div>

            </div>

            <div className="post-thumb-more">
                <div className="post-thumb-more-inner">[ Jetzt lesen ]</div>
            </div>

        </Link>
    );

}
