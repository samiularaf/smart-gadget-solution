import {
  ClipboardCheck,
  MapPin,
  MessageCircle,
  PackageCheck,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/utils";

type ProcessStep = {
  step: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

const processSteps: ProcessStep[] = [
  {
    step: "Step 1",
    title: "Contact Us",
    description: "Reach out by phone or using our contact form.",
    Icon: MessageCircle,
  },
  {
    step: "Step 2",
    title: "Bring Your Device",
    description: "Visit our Las Vegas location or discuss your repair with us.",
    Icon: MapPin,
  },
  {
    step: "Step 3",
    title: "Expert Diagnosis",
    description: "Our technicians inspect your device and explain the issue.",
    Icon: ClipboardCheck,
  },
  {
    step: "Step 4",
    title: "Professional Repair",
    description:
      "We repair your device using quality parts and careful workmanship.",
    Icon: Wrench,
  },
  {
    step: "Step 5",
    title: "Pickup & Enjoy",
    description: "Pick up your repaired device and get back to what matters.",
    Icon: PackageCheck,
  },
];

export function HowItWorks() {
  return (
    <Section className="bg-white">
      <div>
        <SectionTitle
          title="How It Works"
          subtitle="Getting your device repaired is quick and easy."
        />
      </div>

      <div className="relative mt-14">
        <div className="absolute left-6 top-0 h-full w-px bg-brand-border lg:left-0 lg:top-16 lg:h-px lg:w-full" />
        <div
          aria-hidden="true"
          className="absolute left-6 top-0 h-full w-px origin-top bg-brand-primary lg:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute left-0 top-16 hidden h-px w-full origin-left bg-brand-primary lg:block"
        />

        <ol className="relative grid gap-5 lg:grid-cols-5">
          {processSteps.map((item) => (
            <ProcessCard key={item.title} item={item} />
          ))}
        </ol>
      </div>
    </Section>
  );
}

function ProcessCard({ item }: { item: ProcessStep }) {
  const { Icon } = item;

  return (
    <li className="group relative pl-16 lg:pl-0 lg:pt-24">
      <div className="absolute left-0 top-0 z-10 flex size-12 items-center justify-center rounded-2xl border border-brand-primary/15 bg-white text-brand-primary shadow-soft transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-brand-primary group-hover:text-white lg:left-1/2 lg:top-10 lg:-translate-x-1/2">
        <Icon className="size-6" aria-hidden="true" />
      </div>

      <article
        className={cn(
          "min-h-full rounded-[20px] border border-brand-border bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-brand-primary/55 hover:shadow-[0_22px_70px_rgba(10,110,255,0.16)]",
          "lg:text-center",
        )}
      >
        <span className="text-xs font-bold uppercase tracking-wide text-brand-primary">
          {item.step}
        </span>
        <h3 className="mt-3 text-lg font-bold text-brand-ink">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-brand-muted">
          {item.description}
        </p>
      </article>
    </li>
  );
}
