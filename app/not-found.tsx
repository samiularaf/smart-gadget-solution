import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section className="bg-brand-light">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-primary">
          Page not found
        </p>
        <h1 className="mt-4 text-4xl font-bold text-brand-ink sm:text-5xl">
          This repair path is unavailable.
        </h1>
        <p className="mt-5 text-base leading-8 text-brand-muted">
          The page may have moved, but the main repair services and contact form
          are still ready for you.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-brand-dark-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </div>
    </Section>
  );
}
