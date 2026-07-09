"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { Section } from "@/components/ui/section";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section className="bg-brand-light">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-primary">
          Something went wrong
        </p>
        <h1 className="mt-4 text-4xl font-bold text-brand-ink sm:text-5xl">
          The page did not load correctly.
        </h1>
        <p className="mt-5 text-base leading-8 text-brand-muted">
          Please try again. If the issue continues, contact Smart Gadget Solution
          and we will help you directly.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-brand-dark-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
        >
          <RotateCcw className="size-4" aria-hidden="true" />
          Try Again
        </button>
      </div>
    </Section>
  );
}
