"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import DoorButton from "@/components/door-button/door-button";

/** Deliberately local: concept approval must not send enquiries or store PII. */
export default function PreviewForm({ id, goal, title = "Lassen Sie uns über Ihre Praxis sprechen." }: {
  id: string; goal?: string; title?: string;
}) {
  const [previewed, setPreviewed] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const nextErrors = {
      name: String(data.get("name") ?? "").trim() ? undefined : "Bitte geben Sie Ihren Namen ein.",
      email: email.value.trim() && email.validity.valid ? undefined : "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email) {
      (form.elements.namedItem(nextErrors.name ? "name" : "email") as HTMLInputElement).focus();
      return;
    }
    setPreviewed(true);
    requestAnimationFrame(() => resultRef.current?.focus());
  }

  return (
    <div className="pc-form-card">
      <div className="pc-form-intro"><p className="pc-eyebrow">Ihr erster Schritt</p><h2>{title}</h2><p>Eine erste Einschätzung. Eine klare Priorität.<br />Unverbindlich und ohne Projektauftrag.</p></div>
      <div ref={resultRef} tabIndex={-1} role="status" aria-live="polite">
        {previewed && <div className="pc-form-result"><Check size={28} aria-hidden="true" /><h3>Vorschau abgeschlossen.</h3><p>Die Angaben wurden nur lokal geprüft. Es wurde keine Anfrage versendet und nichts gespeichert.</p><button type="button" className="pc-text-link" onClick={() => {
          setPreviewed(false);
          requestAnimationFrame(() => (formRef.current?.elements.namedItem("name") as HTMLInputElement)?.focus());
        }}>Zurück zum Formular <ArrowRight size={16} aria-hidden="true" /></button></div>}
      </div>
      <form ref={formRef} onSubmit={submit} noValidate hidden={previewed} aria-label="Erstgespräch anfragen – Vorschau">
        <p className="pc-form-required">Nur Name und E-Mail sind Pflichtfelder.</p>
        <div className="pc-form-row">
          <div className="pc-field">
            <label htmlFor={`${id}-name`}>Ihr Name <span aria-hidden="true">*</span></label>
            <input id={`${id}-name`} name="name" autoComplete="name" required maxLength={120} placeholder="Vor- und Nachname" aria-invalid={!!errors.name} aria-describedby={errors.name ? `${id}-name-error` : undefined} onChange={() => setErrors(value => ({ ...value, name: undefined }))} />
            {errors.name && <p className="pc-field-error" id={`${id}-name-error`}>{errors.name}</p>}
          </div>
          <div className="pc-field">
            <label htmlFor={`${id}-email`}>Ihre E-Mail <span aria-hidden="true">*</span></label>
            <input id={`${id}-email`} name="email" type="email" autoComplete="email" autoCapitalize="none" spellCheck={false} required maxLength={254} placeholder="name@praxis.de" aria-invalid={!!errors.email} aria-describedby={errors.email ? `${id}-email-error` : undefined} onChange={() => setErrors(value => ({ ...value, email: undefined }))} />
            {errors.email && <p className="pc-field-error" id={`${id}-email-error`}>{errors.email}</p>}
          </div>
        </div>
        {goal && <p className="pc-form-goal"><Check size={16} aria-hidden="true" /> Ihr Thema: <strong>{goal}</strong></p>}
        <div className="pc-field">
          <label htmlFor={`${id}-message`}>Was möchten Sie verbessern? <span>(optional)</span></label>
          <textarea id={`${id}-message`} name="message" rows={3} maxLength={2000} placeholder="Ein paar Stichpunkte zu Ihrer Praxis genügen." aria-describedby={`${id}-message-hint`} />
          <p id={`${id}-message-hint`} className="pc-field-hint">Bitte keine Patientendaten eintragen.</p>
        </div>
        <DoorButton as="button" type="submit" size="lg" className="pc-button"><span className="pc-button-label">Erstgespräch anfragen <ArrowRight size={18} aria-hidden="true" /></span></DoorButton>
        <p className="pc-form-note">Danach stimmen wir das Gespräch per E-Mail mit Ihnen ab.</p>
        <p className="pc-form-privacy">Konzeptvorschau: kein Versand. <a href="/datenschutz">Datenschutz</a></p>
      </form>
      <noscript>
        <style>{`.pc-form-card form { display: none; }`}</style>
        <p>Dies ist eine Formularvorschau. Zum Testen bitte JavaScript aktivieren. Eine echte Anfrage ist über <a href="/praxis#praxis-kontakt">die Praxis-Seite</a> möglich.</p>
      </noscript>
    </div>
  );
}
