"use client";
import { useEffect, useState } from "react";

/** Keep contact reachable on phones; disappear before the form enters view. */
export default function PraxisContactShortcut() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.querySelector('[data-praxis-anim="hero-cta"]');
    const form = document.getElementById("praxis-kontakt");
    if (!hero || !form) return;
    const update = () => setVisible(hero.getBoundingClientRect().bottom < 0 && form.getBoundingClientRect().top > window.innerHeight);
    const observer = new IntersectionObserver(update);
    observer.observe(hero);
    observer.observe(form);
    window.addEventListener("resize", update);
    return () => { observer.disconnect(); window.removeEventListener("resize", update); };
  }, []);
  return <div className="praxis-contact-shortcut" hidden={!visible}>
    <a href="#praxis-kontakt" data-praxis-cta="mobile-shortcut">Erstgespräch anfragen <span aria-hidden="true">→</span></a>
  </div>;
}
