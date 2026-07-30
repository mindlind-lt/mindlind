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
}

export default function WorkThumb({ href, imageSrc, imageAlt = '', imageWidth, imageHeight, title, pills }: WorkThumbProps) {
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
                <h6 className="work-thumb-title">{title}</h6>
                <div className="pills">
                    {pills.map((pill, index) => (
                        <div key={index} className="pills-item">{pill}</div>
                    ))}
                </div>
            </div>
        </a>
    )
}
