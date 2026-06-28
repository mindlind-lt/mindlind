import Image from "next/image";
import "./person-card.css";

export default function PersonCard() {
  return (
    <div className="person-card">

        <Image 
            src="/images/team-1.jpg"
            alt="John Doe"
            width={440}
            height={440}
            className="person-card-image"
        />

        <div className="person-card-content">
            <div className="person-card-name">John Doe</div>
            <div className="person-card-whois">
                <div className="pills">
                    <div className="pills-item">Director</div>
                </div>
            </div>
            <div className="person-card-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        </div>

    </div>
  );
}
