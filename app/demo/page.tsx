import type { Metadata } from "next";
import WorkThumb from "@/components/work-thumb/work-thumb";

export const metadata: Metadata = { title: "Demo", robots: { index: false, follow: false } };

const THUMBS = [
  ["funky-coffee", "case-funky-coffee-1", "case-funky-coffee-2", "Funky Coffee"],
  ["mondent", "case-mondent-1", "case-mondent-2", "Mondent"],
  ["luxfloor", "case-luxfloor-1", "case-luxfloor-2", "LuxFloor"],
  ["panda-travel", "case-pandatravel-1", "case-pandatravel-3", "Panda Travel"],
] as const;

export default function DemoPage() {
  return (
    <main className="px-8 py-10">
      <div className="grid grid-cols-4 gap-4">
        {THUMBS.map(([slug, base, hover, title]) => (
          <WorkThumb
            key={slug}
            headingLevel="h2"
            href={`/projects/${slug}`}
            imageSrc={`/images/${base}.webp`}
            hoverImageSrc={`/images/${hover}.webp`}
            imageAlt={title}
            imageWidth={560}
            imageHeight={560}
            title={title}
            pills={["Website", "UX/UI"]}
          />
        ))}
      </div>
    </main>
  );
}
