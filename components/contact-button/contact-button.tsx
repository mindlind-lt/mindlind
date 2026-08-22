import Image from 'next/image';
import './contact-button.css';

export default function ContactButton() {
  return (
    <a className="fancy-button" href="#">
        <Image className="fancy-button-icon fancy-button-icon-1" src="/assets/images/icon-phone.png" alt="" width={356} height={356} sizes="80px" />
        <Image className="fancy-button-icon fancy-button-icon-2" src="/assets/images/icon-email.png" alt="" width={289} height={288} sizes="52px" />
        <Image className="fancy-button-icon fancy-button-icon-3" src="/images/character-1.webp" alt="" width={1024} height={1007} sizes="120px" />
        <div>Contact manager</div>
    </a>
  );
}
