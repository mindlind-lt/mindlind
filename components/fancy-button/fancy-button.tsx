import './fancy-button.css';

export default function FancyButton() {
  return (
    <a className="fancy-button" href="#">
        <img className="fancy-button-icon fancy-button-icon-1" src="/assets/images/icon-phone.png" alt="" />
        <img className="fancy-button-icon fancy-button-icon-2" src="/assets/images/icon-email.png" alt="" />
        <img className="fancy-button-icon fancy-button-icon-3" src="/assets/images/cta-icon-1.png" alt="" />
        <div>Contact manager</div>
    </a>
  );
}