import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { homeFaqs } from "@/lib/content";

export function Faq() {
  return (
    <Section className="bg-brand-light">
      <SectionTitle
        eyebrow={
          <>
            <HelpCircle className="mr-2 size-4" aria-hidden="true" />
            Repair questions
          </>
        }
        title="Frequently Asked Questions"
        subtitle="Clear answers before you hand over your device."
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-4">
        {homeFaqs.map((item) => (
          <article
            key={item.question}
            className="rounded-[20px] border border-brand-border bg-white p-6 shadow-soft"
          >
            <h3 className="text-lg font-bold text-brand-ink">{item.question}</h3>
            <p className="mt-3 text-sm leading-7 text-brand-muted">{item.answer}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-brand-dark-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
        >
          Ask About Your Repair
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
