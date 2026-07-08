"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Headphones,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import { Section } from "@/components/ui/section";

const features = [
  {
    title: "Certified Technicians",
    description: "Experienced professionals who carefully repair every device.",
    Icon: BadgeCheck,
  },
  {
    title: "Premium Quality Parts",
    description:
      "We use reliable, high-quality replacement parts for lasting repairs.",
    Icon: Sparkles,
  },
  {
    title: "Fast Turnaround",
    description: "Many common repairs are completed the same day.",
    Icon: Clock3,
  },
  {
    title: "Warranty Protection",
    description:
      "Our repairs are backed by a limited service warranty for your peace of mind.",
    Icon: ShieldCheck,
  },
];

const trustItems = [
  { text: "5000+ Devices Repaired", Icon: Wrench },
  { text: "98% Customer Satisfaction", Icon: Star },
  { text: "Same-Day Service Available", Icon: Clock3 },
  { text: "Friendly Customer Support", Icon: Headphones },
];

export function WhyChooseUs() {
  return (
    <Section className="bg-brand-light">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-normal text-brand-ink sm:text-4xl">
          Why Choose Smart Gadget Solution LLC?
        </h2>
        <p className="mt-4 text-base leading-7 text-brand-muted sm:text-lg">
          We combine experienced technicians, quality parts, and outstanding
          customer service to deliver repairs you can trust.
        </p>
      </motion.div>

      <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map(({ title, description, Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              className="group rounded-[20px] border border-brand-border bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-brand-primary/55 hover:shadow-[0_22px_70px_rgba(10,110,255,0.16)]"
            >
              <div className="flex size-13 items-center justify-center rounded-[18px] bg-brand-light text-brand-primary ring-1 ring-brand-primary/10 transition duration-300 group-hover:scale-105 group-hover:bg-brand-primary group-hover:text-white">
                <Icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-brand-ink">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-muted">
                {description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[20px] border border-brand-primary/15 bg-white p-6 shadow-soft sm:p-8"
        >
          <div className="absolute right-0 top-0 h-40 w-40 translate-x-14 -translate-y-14 rounded-full bg-brand-accent/18 blur-2xl" />
          <div className="absolute bottom-0 left-0 h-36 w-36 -translate-x-12 translate-y-12 rounded-full bg-brand-primary/12 blur-2xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-2 text-sm font-bold text-brand-primary ring-1 ring-brand-primary/10">
              <CheckCircle2 className="size-4" aria-hidden="true" />
              Trusted repair experience
            </span>
            <h3 className="mt-6 text-2xl font-bold text-brand-ink sm:text-3xl">
              Built for confident repairs from start to finish.
            </h3>
            <p className="mt-4 text-sm leading-7 text-brand-muted">
              Clear communication, careful diagnostics, and dependable service
              standards help every customer know what to expect.
            </p>

            <div className="mt-8 grid gap-3">
              {trustItems.map(({ text, Icon }, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.14 + index * 0.06,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-brand-border bg-brand-light/70 p-4"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-primary shadow-sm ring-1 ring-brand-primary/10">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-bold text-brand-ink">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </Section>
  );
}
