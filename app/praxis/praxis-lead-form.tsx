"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import { submitContact } from "@/lib/contact-request";

const GOALS = ["Passende Patienten erreichen", "Website erneuern", "Anmeldung entlasten", "Noch offen"];
type Status = "idle" | "pending" | "success" | "error";
type Errors = Partial<Record<"name" | "email", string>>;

export default function PraxisLeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const sending = useRef(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (status === "success" || status === "error") resultRef.current?.focus();
  }, [status]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending.current || status === "success") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const name = String(fields.get("name") ?? "").trim();
    const email = String(fields.get("email") ?? "").trim();
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Bitte geben Sie Ihren Namen ein.";
    if (!email || emailInput.validity.typeMismatch) {
      nextErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      (form.elements.namedItem(firstError) as HTMLInputElement).focus();
      return;
    }
    // Capture everything before disabling inputs, including optional details.
    fields.set("name", name);
    fields.set("email", email);
    fields.set("subject", "Erstgespräch Praxismarketing – MindLind");
    fields.set("from_name", "MindLind Website");
    fields.set("source", "/praxis");
    fields.set("goal", String(fields.get("goal") || "Noch offen"));
    if (!String(fields.get("message") ?? "").trim()) {
      fields.set("message", "Anfrage für ein Erstgespräch. Anliegen: " + fields.get("goal"));
    }
    sending.current = true;
    setStatus("pending");
    try {
      await submitContact(fields);
      form.reset();
      setStatus("success");
      window.dispatchEvent(new Event("praxis:lead-sent"));
    } catch {
      setStatus("error");
      window.dispatchEvent(new Event("praxis:lead-error"));
    } finally {
      sending.current = false;
    }
  };

  return (
    <div id="praxis-kontakt" tabIndex={-1} className="praxis-lead-card">
      <noscript>
        <style>{`[data-praxis-lead] { display: none; }`}</style>
        <p>Bitte aktivieren Sie JavaScript oder schreiben Sie direkt an <a href="mailto:info@mindlind.de">info@mindlind.de</a>.</p>
      </noscript>
      <div ref={resultRef} tabIndex={-1} className="praxis-form-feedback" role="status" aria-live="polite">
        {status === "success" && (
          <div className="praxis-form-success">
            <span className="praxis-success-icon" aria-hidden="true">✓</span>
            <h3>Vielen Dank. Ihre Anfrage wurde übermittelt.</h3>
            <p>Wir melden uns per E-Mail, um Ihr Anliegen und einen Termin für das Erstgespräch abzustimmen.</p>
            <p>Im Gespräch klären wir Ihr Praxisziel und den nächsten sinnvollen Schritt. Sie entscheiden danach, ob Sie mit uns weitergehen möchten.</p>
            <button type="button" className="praxis-evidence-link" onClick={() => {
              setStatus("idle");
              requestAnimationFrame(() => (formRef.current?.elements.namedItem("name") as HTMLInputElement | null)?.focus());
            }}>Weitere Anfrage stellen <span aria-hidden="true">→</span></button>
          </div>
        )}
        {status === "error" && (
          <div className="praxis-form-error">
            <strong>Die Übermittlung konnte nicht bestätigt werden.</strong>
            <p>Ihre Angaben sind noch da. Versuchen Sie es erneut oder schreiben Sie an <a href="mailto:info@mindlind.de">info@mindlind.de</a>.</p>
          </div>
        )}
      </div>

      <form ref={formRef} data-praxis-lead hidden={status === "success"} noValidate onSubmit={onSubmit} aria-busy={status === "pending"}>
        <div className="praxis-form-heading">
          <h3>Worum geht es in Ihrer Praxis?</h3>
          <p>Nur Name und E-Mail sind Pflichtfelder.</p>
        </div>
        <fieldset className="praxis-form-fields" disabled={status === "pending"}>
          <legend className="sr-only">Ihre Anfrage</legend>
          <fieldset className="praxis-goals">
            <legend>Was möchten Sie verbessern? <span>(optional)</span></legend>
            <div className="praxis-goal-options">
              {GOALS.map(goal => (
                <label key={goal} className="praxis-goal">
                  <input type="radio" name="goal" value={goal} />
                  <span>{goal}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="praxis-input-row">
            <div className="praxis-input-field">
              <label htmlFor="praxis-name">Ihr Name <span aria-hidden="true">*</span></label>
              <input id="praxis-name" name="name" autoComplete="name" required maxLength={120}
                placeholder="Vor- und Nachname" aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "praxis-name-error" : undefined}
                onChange={() => { if (errors.name) setErrors(current => ({...current, name:undefined})); }} />
              {errors.name && <p className="praxis-field-error" id="praxis-name-error">{errors.name}</p>}
            </div>
            <div className="praxis-input-field">
              <label htmlFor="praxis-email">Ihre E-Mail <span aria-hidden="true">*</span></label>
              <input id="praxis-email" name="email" type="email" autoComplete="email" required maxLength={254}
                placeholder="name@praxis.de" autoCapitalize="none" spellCheck={false} aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "praxis-email-error" : undefined}
                onChange={() => { if (errors.email) setErrors(current => ({...current, email:undefined})); }} />
              {errors.email && <p className="praxis-field-error" id="praxis-email-error">{errors.email}</p>}
            </div>
          </div>
          <div className="praxis-input-field">
            <label htmlFor="praxis-message">Was sollten wir vorab wissen? <span>(optional)</span></label>
            <textarea id="praxis-message" name="message" rows={3} maxLength={5000}
              placeholder="Zum Beispiel: Wir eröffnen eine Praxis in Köln und brauchen eine Website."
              aria-describedby="praxis-message-hint" />
            <p className="praxis-field-hint" id="praxis-message-hint">Ein paar Stichpunkte genügen. Bitte keine Patientendaten eintragen.</p>
          </div>
          <details className="praxis-form-details">
            <summary>Praxis, Website oder Telefonnummer ergänzen <span>(optional)</span></summary>
            <div className="praxis-optional-fields">
              <div className="praxis-input-field">
                <label htmlFor="praxis-practice">Name der Praxis</label>
                <input id="praxis-practice" name="practice" autoComplete="organization" maxLength={200} />
              </div>
              <div className="praxis-input-row">
                <div className="praxis-input-field">
                  <label htmlFor="praxis-website">Ihre Website</label>
                  <input id="praxis-website" name="website" inputMode="url" autoComplete="url" autoCapitalize="none" spellCheck={false} placeholder="www.ihre-praxis.de" maxLength={500} />
                </div>
                <div className="praxis-input-field">
                  <label htmlFor="praxis-phone">Telefonnummer</label>
                  <input id="praxis-phone" name="phone" type="tel" autoComplete="tel" maxLength={60} />
                </div>
              </div>
            </div>
          </details>
          <input type="checkbox" name="botcheck" className="praxis-botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <button type="submit" className="praxis-form-submit">
            {status === "pending" ? "Anfrage wird gesendet…" : status === "error" ? "Erneut senden" : "Erstgespräch anfragen"}
            <span aria-hidden="true">{status === "pending" ? "…" : "→"}</span>
          </button>
        </fieldset>
        <p className="praxis-form-reassurance">Unverbindlich. Mit Ihrer Anfrage beauftragen Sie noch kein Projekt.</p>
        <p className="praxis-form-privacy">Informationen zum Umgang mit Ihren Angaben finden Sie in unserer <a href="/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutzerklärung<span className="sr-only"> (öffnet in neuem Tab)</span></a>.</p>
      </form>
    </div>
  );
}
