import { House } from "lucide-react";
import Link from "@/components/progress-bar/progress-link";
import { breadcrumbSchema } from "@/lib/schema";

type LegalPageProps = {
  title: string;
  path: string;
  children: React.ReactNode;
};

// Shared shell for legal pages (Impressum, Datenschutz, …): narrow reading
// column, breadcrumb nav and an H1 — kept in one place so every legal page
// stays visually consistent.
export default function LegalPage({ title, path, children }: LegalPageProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: title, path }])),
        }}
      />

      <div className="container mx-auto max-w-2xl px-5 sm:px-8 pt-36 sm:pt-44 xl:pt-52 pb-16 xl:pb-24">
        <nav aria-label="Breadcrumb" className="mb-6 xl:mb-10">
          <ol className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-gray-500">
            <li>
              <Link
                href="/"
                aria-label="Home"
                className="flex items-center hover:text-primary-700 transition-colors"
              >
                <House className="size-3.5" strokeWidth={2} />
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground">
              {title}
            </li>
          </ol>
        </nav>

        <h1 className="font-mono text-4xl sm:text-5xl font-bold uppercase mb-10 xl:mb-16">
          {title}
        </h1>

        <div className="text-md leading-[1.6] space-y-10">{children}</div>
      </div>
    </>
  );
}
