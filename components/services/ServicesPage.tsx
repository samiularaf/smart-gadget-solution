import {
  BatteryCharging,
  CheckCircle2,
  Clock3,
  Cpu,
  Database,
  Gamepad2,
  HardDrive,
  Laptop,
  PhoneCall,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Tablet,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/utils";

type Service = {
  title: string;
  description: string;
  items: string[];
  time: string;
  href: string;
  Icon: LucideIcon;
  accentIcons: LucideIcon[];
};

const services: Service[] = [
  {
    title: "Phone Repair",
    description:
      "Professional repair for cracked screens, battery problems, charging issues, camera failures, water damage, and audio problems.",
    items: [
      "Screen Replacement",
      "Battery Replacement",
      "Charging Port Repair",
      "Camera Repair",
      "Water Damage",
      "Speaker & Microphone Repair",
    ],
    time: "Most repairs: 45-90 minutes",
    href: "/contact",
    Icon: Smartphone,
    accentIcons: [BatteryCharging, Wrench, ShieldCheck],
  },
  {
    title: "Tablet Repair",
    description:
      "Reliable tablet service for display damage, battery wear, charging trouble, camera problems, and software issues.",
    items: ["Screen", "Battery", "Charging", "Camera", "Software Issues"],
    time: "Estimated time: 1-2 hours",
    href: "/contact",
    Icon: Tablet,
    accentIcons: [BatteryCharging, SearchCheck, ShieldCheck],
  },
  {
    title: "Laptop Repair",
    description:
      "Detailed laptop repair and upgrade services for work, school, gaming, and everyday devices that need dependable performance.",
    items: [
      "Screen Replacement",
      "Keyboard Repair",
      "SSD Upgrades",
      "RAM Upgrades",
      "Motherboard Diagnostics",
      "Virus Removal",
    ],
    time: "Diagnostics: same day",
    href: "/contact",
    Icon: Laptop,
    accentIcons: [HardDrive, Cpu, SearchCheck],
  },
  {
    title: "Gaming Console Repair",
    description:
      "Console troubleshooting and repair for video output, heat, power, storage, and performance issues that interrupt play.",
    items: [
      "HDMI Port Repair",
      "Overheating",
      "Fan Replacement",
      "Storage Upgrade",
      "Power Issues",
    ],
    time: "Estimated time: 1-3 days",
    href: "/contact",
    Icon: Gamepad2,
    accentIcons: [Wrench, Cpu, ShieldCheck],
  },
  {
    title: "Data Recovery",
    description:
      "Careful recovery support for important files, photos, documents, and backups from damaged or failing storage devices.",
    items: ["Hard Drives", "SSD", "USB Drives", "SD Cards"],
    time: "Evaluation: 24-48 hours",
    href: "/contact",
    Icon: Database,
    accentIcons: [HardDrive, SearchCheck, ShieldCheck],
  },
  {
    title: "Diagnostics & Maintenance",
    description:
      "Preventive service, performance checks, software updates, and device cleaning to keep your technology running smoothly.",
    items: [
      "Device Inspection",
      "Cleaning",
      "Performance Optimization",
      "Software Updates",
    ],
    time: "Quick checks: 30-60 minutes",
    href: "/contact",
    Icon: SearchCheck,
    accentIcons: [Wrench, Cpu, Clock3],
  },
];

export function ServicesPage() {
  return (
    <>
      <Section
        bleed
        className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(46,168,255,0.34),_transparent_34%),linear-gradient(135deg,_var(--brand-dark-blue)_0%,_var(--brand-primary)_55%,_var(--brand-accent)_100%)] py-0 text-white"
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.16),_transparent_38%,_rgba(255,255,255,0.1))]" />
        <div className="absolute left-[7%] top-24 h-28 w-28 rounded-full border border-white/20 bg-white/10 blur-sm backdrop-blur-md" aria-hidden="true" />
        <div className="absolute bottom-16 right-[12%] h-40 w-40 rounded-full border border-white/20 bg-white/10 blur-sm backdrop-blur-md" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex min-h-[58svh] w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/12 px-4 py-2 text-sm font-semibold text-white/88 shadow-soft backdrop-blur-xl">
              <Wrench className="size-4" aria-hidden="true" />
              Expert repair solutions
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              Professional Repair Services
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              We repair a wide range of devices with quality parts, experienced
              technicians, and fast turnaround times.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="secondary" showArrow>
                Get Free Quote
              </Button>
              <Button href="/contact" variant="glass" showArrow>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle
          title="Complete Device Repair Services"
          subtitle="Choose the service that fits your device. Every repair starts with clear diagnostics, transparent pricing, and careful workmanship."
        />

        <div className="mt-14 grid gap-10">
          {services.map((service, index) => (
            <ServiceDetail key={service.title} service={service} index={index} />
          ))}
        </div>
      </Section>

      <Section className="bg-brand-light">
        <div className="mx-auto max-w-3xl rounded-[20px] border border-brand-primary/15 bg-white p-8 text-center shadow-soft sm:p-10">
          <h2 className="text-3xl font-bold tracking-normal text-brand-ink sm:text-4xl">
            Ready to repair your device?
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="tel:+16513736692" className="gap-2">
              <PhoneCall className="size-4" aria-hidden="true" />
              Call Now
            </Button>
            <Button href="/contact" variant="secondary" showArrow>
              Get Free Quote
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

function ServiceDetail({ service, index }: { service: Service; index: number }) {
  const isReversed = index % 2 === 1;
  const { Icon } = service;

  return (
    <article className="rounded-[20px] border border-brand-border bg-white p-5 shadow-soft sm:p-6 lg:p-8">
      <div
        className={cn(
          "grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
          isReversed && "lg:grid-cols-[1.1fr_0.9fr]",
        )}
      >
        <div className={cn(isReversed && "lg:order-2")}>
          <div className="flex size-16 items-center justify-center rounded-[20px] bg-brand-light text-brand-primary ring-1 ring-brand-primary/10">
            <Icon className="size-8" aria-hidden="true" />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-brand-ink sm:text-3xl">
            {service.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-brand-muted">
            {service.description}
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-brand-light px-4 py-3 text-sm font-bold text-brand-ink"
              >
                <CheckCircle2
                  className="size-5 shrink-0 text-brand-primary"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white px-4 py-2 text-sm font-bold text-brand-muted shadow-sm">
              <Clock3 className="size-4 text-brand-primary" aria-hidden="true" />
              {service.time}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white px-4 py-2 text-sm font-bold text-brand-muted shadow-sm">
              <ShieldCheck className="size-4 text-brand-primary" aria-hidden="true" />
              90-Day Warranty
            </span>
          </div>

          <Button href={service.href} className="mt-7" showArrow>
            Request This Repair
          </Button>
        </div>

        <div className={cn("relative", isReversed && "lg:order-1")}>
          <div className="relative min-h-80 overflow-hidden rounded-[20px] border border-brand-primary/15 bg-[radial-gradient(circle_at_center,_rgba(46,168,255,0.18),_transparent_58%),var(--brand-light)] p-6 shadow-soft">
            <div className="absolute inset-6 rounded-[18px] border border-white/70 bg-white/45" />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/18 blur-2xl"
            />
            <div className="relative flex min-h-68 items-center justify-center">
              <div className="flex size-32 items-center justify-center rounded-[2rem] bg-white text-brand-primary shadow-glow ring-1 ring-brand-primary/10">
                <Icon className="size-16" aria-hidden="true" />
              </div>
              {service.accentIcons.map((AccentIcon, accentIndex) => (
                <div
                  key={`${service.title}-${accentIndex}`}
                  className={cn(
                    "absolute flex size-16 items-center justify-center rounded-3xl border border-white/80 bg-white/80 text-brand-primary shadow-soft backdrop-blur-xl",
                    accentIndex === 0 && "left-4 top-6",
                    accentIndex === 1 && "right-5 top-12",
                    accentIndex === 2 && "bottom-5 left-1/2 -translate-x-1/2",
                  )}
                >
                  <AccentIcon className="size-7" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
