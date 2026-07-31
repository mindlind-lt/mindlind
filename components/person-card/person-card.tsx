import Image from "next/image";
import "./person-card.css";

interface PersonCardProps {
  imageSrc: string;
  name: string;
  role: string;
  bio?: string;
}

export default function PersonCard({ imageSrc, name, role, bio }: PersonCardProps) {
  return (
    <div className="person-card">

        <Image
            src={imageSrc}
            alt={name}
            width={440}
            height={440}
            className="person-card-image"
        />

        <div className="person-card-content">
            <div className="person-card-name">{name}</div>
            <div className="person-card-whois">
                <div className="pills">
                    <div className="pills-item">{role}</div>
                </div>
            </div>
            <div className="person-card-bio">{bio}</div>
        </div>

    </div>
  );
}
