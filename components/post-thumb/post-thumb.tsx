import Link from "next/link";
import Image from "next/image";

import "./post-thumb.css";
import ScrambledText from "../scrambled-text/scrambled-text";

interface PostThumbProps {
    align?: "left" | "right";
}

export default function PostThumb({ align = "left" }: PostThumbProps){

    return (
        <Link href="#" className="post-thumb">

            <div className="post-thumb-container">

                {align === "left" ? (
                    <>
                        <div className="post-thumb-pic">
                            <Image 
                                src="/images/blog-example.jpg"
                                width={560}
                                height={290}
                                alt=""
                                className="post-thumb-img post-thumb-img-styled"
                            />
                        </div>

                        <div className="post-thumb-content">
                            <h3 className="post-thumb-title">Fresh Visual Trends in 2026</h3>
                            <div className="post-thumb-text">In 2026, calm, systemic visuals dominate: strict grids, duo-palettes, mono-typography, and micromotion as feedback. Subtle 3D gradients, material textures.</div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="post-thumb-content">
                            <h3 className="post-thumb-title">Fresh Visual Trends in 2026</h3>
                            <div className="post-thumb-text">In 2026, calm, systemic visuals dominate: strict grids, duo-palettes, mono-typography, and micromotion as feedback. Subtle 3D gradients, material textures.</div>
                        </div>

                        <div className="post-thumb-pic">
                            <Image 
                                src="/images/blog-example.jpg"
                                width={560}
                                height={290}
                                alt=""
                                className="post-thumb-img post-thumb-img-styled"
                            />
                        </div>
                    </>
                )}

            </div>

            <div className="post-thumb-more">
                <div className="post-thumb-more-inner">[ Jetzt lesen ]</div>
            </div>

        </Link>
    );

}
