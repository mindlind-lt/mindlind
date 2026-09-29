import Image from 'next/image'
import type { CSSProperties } from 'react'
import ThumbMorph from './thumb-morph'
import './work-thumb.css'

interface WorkThumbProps {
  href: string
  imageSrc: string
  /**
   * Second image, swapped in while the card is hovered or focused. Omit it and
   * the card keeps the one image. It is drawn `cover` into the box the first
   * image sizes, so pick one with a similar aspect ratio — a portrait shot
   * behind a landscape thumbnail shows as a cropped sliver of itself.
   */
  hoverImageSrc?: string
  imageAlt?: string
  /** Intrinsic pixel width of the source image (used to preserve aspect ratio). */
  imageWidth: number
  /** Intrinsic pixel height of the source image (used to preserve aspect ratio). */
  imageHeight: number
  title: string
  pills: string[]
  /**
   * Heading level for the title. Pick the one that follows the nearest
   * preceding heading so levels never skip (axe `heading-order`): `h3` under a
   * section `h2`, `h2` when the thumbs sit directly under the page `h1`.
   */
  headingLevel?: 'h2' | 'h3' | 'h4'
}

export default function WorkThumb({ href, imageSrc, hoverImageSrc, imageAlt = '', imageWidth, imageHeight, title, pills, headingLevel: Heading = 'h3' }: WorkThumbProps) {
    return (
        <a className="work-thumb" href={href}>
            <div className="work-thumb-figure">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="work-thumb-pic"
                />
                {/* Two ways of showing the second image, and only one of them
                    runs on any given card. ThumbMorph flows one image into the
                    other on a shader and claims the card by setting
                    `data-morph`; where it cannot run — no pointer, no WebGL,
                    reduced motion — the layer below does a plain swap from a CSS
                    background. Both are inert to the pointer and carry no alt
                    text, because they show the same project the image under them
                    already describes. */}
                {hoverImageSrc ? (
                    <>
                        <div
                            className="work-thumb-swap"
                            aria-hidden="true"
                            style={{ '--work-thumb-swap': `url("${hoverImageSrc}")` } as CSSProperties}
                        />
                        <ThumbMorph src={imageSrc} hoverSrc={hoverImageSrc} />
                    </>
                ) : null}
            </div>
            <div className="work-thumb-content">
                <Heading className="work-thumb-title">{title}</Heading>
                <div className="pills">
                    {pills.map((pill, index) => (
                        <div key={index} className="pills-item">{pill}</div>
                    ))}
                </div>
            </div>
        </a>
    )
}
