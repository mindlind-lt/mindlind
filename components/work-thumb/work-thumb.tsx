import './work-thumb.css'

interface WorkThumbProps {
  href: string
  imageSrc: string
  imageAlt?: string
  title: string
  pills: string[]
}

export default function WorkThumb({ href, imageSrc, imageAlt = '', title, pills }: WorkThumbProps) {
    return (
        <a className="work-thumb" href={href}>
            <div className="work-thumb-figure">
                <img
                    src={imageSrc}
                    alt={imageAlt}
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