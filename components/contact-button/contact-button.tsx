import './contact-button.css';

export default function ContactButton() {
  return (
    <a className="fancy-button" href="#">
        <img className="fancy-button-icon fancy-button-icon-1" src="/assets/images/icon-phone.png" alt="" />
        <img className="fancy-button-icon fancy-button-icon-2" src="/assets/images/icon-email.png" alt="" />
        <img className="fancy-button-icon fancy-button-icon-3" src="/images/character-1.png" alt="" />
        <div>Contact manager</div>
    </a>
  );
}