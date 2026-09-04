'use client';

import { FormEvent, useState } from 'react';

import "./contact-form.css";
import DoorButton from "../door-button/door-button";

const ACCESS_KEY = "d8810d7e-7830-4042-8d07-71a617dfd351";

type Status = "idle" | "pending" | "success" | "error";

const MESSAGES: Record<"success" | "error", string> = {
  success: "Danke — Ihre Nachricht wurde gesendet.",
  error:
    "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben Sie an info@mindlind.de.",
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "pending") return;

    // Capture the element now: React pools nothing here, but `currentTarget` is
    // null once the handler yields at the first `await`, so `form.reset()`
    // afterwards would throw.
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);

    setStatus("pending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // A failing request can return an HTML error page rather than JSON, so a
      // parse failure has to count as a send failure instead of throwing.
      const data = await response.json().catch(() => null);
      const sent = response.ok && data?.success === true;

      if (sent) form.reset();
      setStatus(sent ? "success" : "error");
    } catch {
      // Network-level failure: offline, DNS, CORS, request aborted.
      setStatus("error");
    }
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

            {/* Web3Forms spam trap: real users never see or tab to this, so a
                checked box means a bot filled the form in. */}
            <input
                type="checkbox"
                name="botcheck"
                className="contact-form-botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
            />

            <div className="contact-form-submit-wrap">
                <DoorButton
                    as="button"
                    size="lg"
                    fullWidth
                    type="submit"
                    disabled={status === "pending"}
                >
                    {status === "pending" ? "WIRD GESENDET…" : "ANFRAGE SENDEN"}
                </DoorButton>
                {/* Rendered unconditionally so the live region exists in the DOM
                    before its content changes — otherwise nothing is announced. */}
                <p
                    className="contact-form-result"
                    data-state={status}
                    role="status"
                    aria-live="polite"
                >
                    {status === "success" || status === "error" ? MESSAGES[status] : ""}
                </p>
            </div>

        </div>

        <div className="contact-form-footer">Mit dem Abesenden akzeptieren Sie unsere <a href="/datenschutz">Datenschutzerklärung</a></div>

    </form>
  );
}