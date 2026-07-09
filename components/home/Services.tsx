import Link from "next/link";
import {
  ArrowRight,
  Gamepad2,
  HardDriveDownload,
  Laptop,
  SearchCheck,
  Smartphone,
  Tablet,
} from "lucide-react";
import { Section } from "@/components/ui/section";

const services = [
  {
    title: "Phone Repair",
    href: "/services",
    description:
      "Screen replacements, battery issues, charging problems, and water damage repairs for today's most popular phones.",
    Icon: Smartphone,
  },
  {
    title: "Tablet Repair",
    href: "/services",
    description:
      "Reliable tablet repairs for cracked glass, touch issues, battery failures, software problems, and charging ports.",
    Icon: Tablet,
  },
  {
    title: "Laptop Repair",
    href: "/services",
    description:
      "Professional laptop diagnostics and repair for hardware failures, slow performance, displays, keyboards, and storage.",
    Icon: Laptop,
  },
  {
    title: "Gaming Console Repair",
    href: "/services",
    description:
      "Console troubleshooting for power issues, overheating, HDMI ports, storage errors, controller pairing, and system faults.",
    Icon: Gamepad2,
  },
  {
    title: "Data Recovery",
    href: "/services",
    description:
      "Careful recovery support for photos, documents, and important files from damaged phones, laptops, and storage devices.",
    Icon: HardDriveDownload,
  },
  {
    title: "Diagnostics & Maintenance",
    href: "/services",
    description:
      "Detailed device inspections, tune-ups, software checks, cleaning, and maintenance to keep your technology running well.",
    Icon: SearchCheck,
  },
];

export function Services() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-normal text-brand-ink sm:text-4xl">
          Expert Repair Services
        </h2>
        <p className="mt-4 text-base leading-7 text-brand-muted sm:text-lg">
          We provide fast, reliable, and affordable repair solutions for your
          favorite devices.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map(({ title, href, description, Icon }) => (
          <article
            key={title}
            className="group flex h-full flex-col rounded-[20px] border border-brand-border bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-brand-primary/55 hover:shadow-[0_22px_70px_rgba(10,110,255,0.18)]"
          >
            <div className="flex size-14 items-center justify-center rounded-[18px] bg-brand-light text-brand-primary ring-1 ring-brand-primary/10 transition duration-300 group-hover:scale-105 group-hover:bg-brand-primary group-hover:text-white">
              <Icon className="size-7" aria-hidden="true" />
            </div>

            <h3 className="mt-6 text-xl font-bold text-brand-ink">{title}</h3>
            <p className="mt-3 min-h-[84px] text-sm leading-7 text-brand-muted">
              {description}
            </p>

            <Link
              href={href}
              className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-brand-primary transition duration-300 hover:text-brand-dark-blue"
            >
              Learn More
              <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/services"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark-blue"
        >
          View All Services
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
