import type { Metadata } from "next";
import DnaCapsule from "@/components/dna-capsule/dna-capsule";
import DnaHelix from "@/components/dna-helix/dna-helix";

export const metadata: Metadata = {
  title: "Demo",
  // A scratch page for trying components out — keep it out of search.
  robots: { index: false, follow: false },
};

const COPY =
  "Wir entwickeln digitale Produkte, die Praxen und Kliniken sichtbar machen. Von der Positionierung über die Marke bis zur Website — alles aus einer Hand, messbar und ohne Streuverlust.";

export default function DemoPage() {
  return (
    <main>
      {/* On its own: a full-width band. */}
      <DnaCapsule />

      <div className="px-10">
        {/* Over the content, bending it. */}
        <section className="relative h-[560px] border border-dashed border-neutral-300">
          <div className="p-12">
            <h2 className="text-4xl font-bold">Über dem Inhalt, mit Refraktion</h2>
            <p className="mt-6 max-w-3xl text-lg">{COPY}</p>
            <p className="mt-4 max-w-3xl text-lg">{COPY}</p>
            <p className="mt-4 max-w-3xl text-lg">{COPY}</p>
          </div>
          <DnaCapsule className="dna-capsule--overlay" refractPage backdrop="#F4F4F4" />
        </section>

        {/* Over the content without it: the pill covers what it crosses. */}
        <section className="relative mt-6 h-[560px] border border-dashed border-neutral-300">
          <div className="p-12">
            <h2 className="text-4xl font-bold">Ohne Refraktion</h2>
            <p className="mt-6 max-w-3xl text-lg">{COPY}</p>
            <p className="mt-4 max-w-3xl text-lg">{COPY}</p>
            <p className="mt-4 max-w-3xl text-lg">{COPY}</p>
          </div>
          <DnaCapsule className="dna-capsule--overlay" />
        </section>

        {/* Behind it — the content needs a z-index above 0. */}
        <section className="relative mt-6 h-[560px] border border-dashed border-neutral-300">
          <div className="relative z-10 max-w-md p-12">
            <h2 className="text-4xl font-bold">Hinter dem Inhalt</h2>
            <p className="mt-6 text-lg">{COPY}</p>
          </div>
          <DnaCapsule className="dna-capsule--behind" />
        </section>

        {/* Parked in a corner, pulled in so it fills the smaller box — the shape
            the praxis-marketing page uses. */}
        <section className="relative mt-6 h-[560px] border border-dashed border-neutral-300">
          <div className="max-w-md p-12">
            <h2 className="text-4xl font-bold">In der Ecke</h2>
            <p className="mt-6 text-lg">{COPY}</p>
          </div>
          <DnaCapsule
            className="absolute right-0 top-0 h-[420px] w-[420px]"
            distance={3.6}
          />
        </section>
      </div>

      <DnaHelix />
    </main>
  );
}
