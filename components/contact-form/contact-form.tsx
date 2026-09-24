'use client';

import { FormEvent, ReactNode, useState } from 'react';

import "./contact-form.css";
import DoorButton from "../door-button/door-button";

const ACCESS_KEY = "f468242c-5a67-475c-b609-984b59fa5e28";

type Status = "idle" | "pending" | "success" | "error";

const DEFAULT_SUCCESS = "Danke — Ihre Nachricht wurde gesendet.";
const ERROR_MESSAGE =
  "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben Sie an info@mindlind.de.";

export type ContactFormField = {
  /** Submitted field name; doubles as the input id and the label's `htmlFor`. */
  name: string;
  label: string;
  /** Any text-like input type. `text` when omitted. */
  type?: string;
  placeholder?: string;
  required?: boolean;
};

interface ContactFormProps {
  /**
   * Extra inputs between the name/e-mail row and the message box. They pair up
   * into rows the way name and e-mail do, and a trailing odd one spans the row.
   * Defaults to none — the three-field form every page but /praxis-marketing uses.
   */
  extraFields?: ContactFormField[];
  messageLabel?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
  /** Shown in the live region after a successful send. */
  successMessage?: string;
  /** The small print under the fields. Takes nodes so it can carry its own links. */
  privacyNote?: ReactNode;
}

export default function ContactForm({
  extraFields = [],
  messageLabel = "NACHRICHT",
  messagePlaceholder = "Worum geht es bei Ihrem Projekt?",
  submitLabel = "ANFRAGE SENDEN",
  successMessage = DEFAULT_SUCCESS,
  privacyNote,
}: ContactFormProps = {}) {
  const [status, setStatus] = useState<Status>("idle");

  // Two per row, so the extras line up with the name/e-mail pair above them.
  const extraRows: ContactFormField[][] = [];
  for (let i = 0; i < extraFields.length; i += 2) {
    extraRows.push(extraFields.slice(i, i + 2));
  }

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

            {extraRows.map((row) => (
                <div
                    key={row[0].name}
                    className={
                        row.length === 1
                            ? "contact-form-row contact-form-row--single"
                            : "contact-form-row"
                    }
                >
                    {row.map((field) => (
                        <div className="contact-form-field" key={field.name}>
                            <label className="contact-form-label" htmlFor={field.name}>
                                {field.label}
                            </label>
                            <input
                                className="contact-form-input"
                                id={field.name}
                                type={field.type ?? "text"}
                                name={field.name}
                                placeholder={field.placeholder}
                                required={field.required}
                            />
                        </div>
                    ))}
                </div>
            ))}

            <div className="contact-form-field contact-form-field--full">
                <label className="contact-form-label" htmlFor="message">{messageLabel}</label>
                <textarea
                className="contact-form-textarea"
                id="message"
                name="message"
                placeholder={messagePlaceholder}
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

            <div className="contact-form-footer">
                {privacyNote ?? (
                    <>Mit dem Absenden akzeptieren Sie unsere <a href="/datenschutz">Datenschutzerklärung</a></>
                )}
            </div>

            <div className="contact-form-submit-wrap">
                <DoorButton
                    as="button"
                    size="lg"
                    fullWidth
                    type="submit"
                    disabled={status === "pending"}
                >
                    {status === "pending" ? "WIRD GESENDET…" : submitLabel}
                </DoorButton>
                {/* Rendered unconditionally so the live region exists in the DOM
                    before its content changes — otherwise nothing is announced. */}
                <p
                    className="contact-form-result"
                    data-state={status}
                    role="status"
                    aria-live="polite"
                >
                    {status === "success" ? successMessage : ""}
                    {status === "error" ? ERROR_MESSAGE : ""}
                </p>
            </div>

        </div>

    </form>
  );
}
