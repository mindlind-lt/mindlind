import Image from 'next/image'
import './work-thumb.css'

interface WorkThumbProps {
  href: string
  imageSrc: string
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

export default function WorkThumb({ href, imageSrc, imageAlt = '', imageWidth, imageHeight, title, pills, headingLevel: Heading = 'h3' }: WorkThumbProps) {
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
