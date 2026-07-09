import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Laptop,
  PhoneCall,
  ShieldCheck,
  Smartphone,
  Tablet,
  Wrench,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const repairIcons = [
  { label: "Phone repair", Icon: Smartphone, className: "left-6 top-8" },
  { label: "Laptop repair", Icon: Laptop, className: "right-8 top-12" },
  { label: "Tablet repair", Icon: Tablet, className: "left-10 bottom-14" },
  { label: "Tool diagnostics", Icon: Wrench, className: "right-12 bottom-10" },
  { label: "Warranty protection", Icon: ShieldCheck, className: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" },
  { label: "Board repair", Icon: Cpu, className: "right-1/2 top-6 translate-x-1/2" },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Devices Repaired" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "90-Day", label: "Warranty" },
];

const floatingShapes = [
  "left-[6%] top-[14%] h-24 w-24",
  "right-[10%] top-[18%] h-36 w-36",
  "bottom-[18%] left-[42%] h-28 w-28",
];

export function HeroSection() {
  return (
    <Section
      bleed
      className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(46,168,255,0.42),_transparent_34%),linear-gradient(135deg,_var(--brand-dark-blue)_0%,_var(--brand-primary)_52%,_var(--brand-accent)_100%)] py-0 text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.16),_transparent_34%,_rgba(255,255,255,0.12))]" />
      {floatingShapes.map((shape) => (
        <span
          key={shape}
          aria-hidden="true"
          className={cn(
            "absolute rounded-full border border-white/20 bg-white/10 blur-sm backdrop-blur-md",
            shape,
          )}
        />
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/12 px-4 py-2 text-sm font-semibold text-white/88 shadow-soft backdrop-blur-xl"
          >
            <ShieldCheck className="size-4" aria-hidden="true" />
            Trusted device repair specialists
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Professional Device Repair Services
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            Fast, reliable repairs for phones, tablets, laptops, gaming consoles,
            and more. Trusted by customers for quality workmanship and transparent
            pricing.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-primary shadow-glow transition duration-200 hover:-translate-y-0.5 hover:bg-brand-light"
            >
              Get Free Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href="tel:+16513736692"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/12 px-6 py-3 text-sm font-bold text-white shadow-soft backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-white/18"
            >
              <PhoneCall className="size-4" aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/22 bg-white/14 p-5 shadow-[0_28px_90px_rgba(0,60,143,0.32)] backdrop-blur-2xl sm:p-7">
            <div className="absolute inset-6 rounded-[1.5rem] border border-white/15 bg-white/8" />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-2xl"
            />

            <div className="absolute inset-0">
              {repairIcons.map(({ label, Icon, className }) => (
                <div
                  key={label}
                  className={cn(
                    "absolute flex size-20 items-center justify-center rounded-3xl border border-white/24 bg-white/18 text-white shadow-soft backdrop-blur-xl sm:size-24",
                    className,
                  )}
                  aria-label={label}
                >
                  <Icon className="size-8 sm:size-10" aria-hidden="true" />
                </div>
              ))}
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/20 bg-white/16 p-5 text-left shadow-soft backdrop-blur-xl">
              <p className="text-sm font-semibold text-white/70">Repair status</p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <p className="text-xl font-bold text-white">Diagnostics complete</p>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-primary">
                  Ready
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 rounded-[1.75rem] border border-white/18 bg-white/12 p-3 shadow-soft backdrop-blur-xl sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.35rem] border border-white/14 bg-white/12 px-5 py-5 text-center"
            >
              <p className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
