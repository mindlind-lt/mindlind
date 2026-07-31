'use client';

import { FormEvent, useState } from 'react';

import "./contact-form.css";
import DoorButton from "../door-button/door-button";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "d8810d7e-7830-4042-8d07-71a617dfd351");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Message sent." : "Something went wrong. Please try again.");
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>

        <div className="contact-form-body">

            <div className="contact-form-row">
                <div className="contact-form-field">
                <label className="contact-form-label" htmlFor="name">IHR NAME</label>
                <input
                    className="contact-form-input"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Max Mustermann"
                    required
                />
                </div>
                <div className="contact-form-field">
                <label className="contact-form-label" htmlFor="email">IHRE E-MAIL</label>
                <input
                    className="contact-form-input"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="mail@unternehmen.de"
                    required
                />
                </div>
            </div>

            <div className="contact-form-field contact-form-field--full">
                <label className="contact-form-label" htmlFor="message">NACHRICHT</label>
                <textarea
                className="contact-form-textarea"
                id="message"
                name="message"
                placeholder="Worum geht es bei Ihrem Projekt?"
                required
                />
            </div>

            <div className="contact-form-submit-wrap">
                <DoorButton as="button" size="lg" fullWidth type="submit">ANFRAGE SENDEN</DoorButton>
                {result && <p className="contact-form-result">{result}</p>}
            </div>

        </div>

        <div className="contact-form-footer">Mit dem Absenden akzeptieren Sie unsere{' '} <a href="#">AGB</a> und <a href="#">Datenschutzerklärung</a>.</div>

    </form>
  );
}