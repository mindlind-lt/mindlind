"use client";

import { useEffect } from "react";
import { useConsentFor } from "@/lib/consent";

/** Funnel events contain no form values and only run with statistics consent. */
export default function PraxisConversionEvents() {
  const allowed = useConsentFor("statistics");
  useEffect(() => {
    if (!allowed) return;
    let started = false;
    const track = (event: string, extra: Record<string, string> = {}) => {
      const analytics = window as Window & { dataLayer?: Record<string, string>[] };
      analytics.dataLayer ??= [];
      analytics.dataLayer.push({ event, form_id: "praxis-contact", page_path: "/praxis", ...extra });
    };
    const onClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href="#praxis-kontakt"]') : null;
      if (link) track("praxis_cta_click", { cta_location: link.dataset.praxisCta ?? "page" });
    };
    const onStart = (event: FocusEvent) => {
      if (!started && event.target instanceof Element && event.target.matches("input:not([type=checkbox]),textarea") && event.target.closest("[data-praxis-lead]")) {
        started = true;
        track("praxis_form_start");
      }
    };
    const onSuccess = () => track("generate_lead");
    const onError = () => track("praxis_form_error");
    document.addEventListener("click", onClick);
    document.addEventListener("focusin", onStart);
    window.addEventListener("praxis:lead-sent", onSuccess);
    window.addEventListener("praxis:lead-error", onError);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("focusin", onStart);
      window.removeEventListener("praxis:lead-sent", onSuccess);
      window.removeEventListener("praxis:lead-error", onError);
    };
  }, [allowed]);
  return null;
}
