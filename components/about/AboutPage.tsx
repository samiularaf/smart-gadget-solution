"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  HeartHandshake,
  Lightbulb,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";

const values = [
  {
    title: "Integrity",
    description: "Honest guidance, clear repair options, and service you can trust.",
    Icon: ShieldCheck,
  },
  {
    title: "Quality",
    description: "Careful workmanship and dependable parts for lasting repairs.",
    Icon: Star,
  },
  {
    title: "Customer First",
    description: "Friendly support and transparent communication at every step.",
    Icon: HeartHandshake,
  },
  {
    title: "Innovation",
    description: "Modern tools and practical solutions for today's devices.",
    Icon: Lightbulb,
  },
];

export function AboutPage() {
  return (
    <>
      <Section
        bleed
        className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(46,168,255,0.32),_transparent_34%),linear-gradient(135deg,_var(--brand-dark-blue)_0%,_var(--brand-primary)_55%,_var(--brand-accent)_100%)] py-0 text-white"
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.16),_transparent_38%,_rgba(255,255,255,0.1))]" />
        <motion.div
          aria-hidden="true"
          className="absolute left-[8%] top-24 h-28 w-28 rounded-full border border-white/20 bg-white/10 blur-sm backdrop-blur-md"
          animate={{ y: [0, -18, 0], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-16 right-[12%] h-40 w-40 rounded-full border border-white/20 bg-white/10 blur-sm backdrop-blur-md"
          animate={{ y: [0, 18, 0], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto flex min-h-[58svh] w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/12 px-4 py-2 text-sm font-semibold text-white/88 shadow-soft backdrop-blur-xl">
              <BadgeCheck className="size-4" aria-hidden="true" />
              Local repair experts
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              About Smart Gadget Solution LLC
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Your trusted local repair experts dedicated to providing fast,
              reliable, and affordable device repair services.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <SectionTitle
              align="left"
              title="Our Story"
              subtitle="Smart Gadget Solution LLC is built around a simple promise: treat every customer honestly, repair every device carefully, and make the process clear from the first conversation."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[20px] border border-brand-border bg-brand-light p-6 shadow-soft sm:p-8"
          >
            <p className="text-base leading-8 text-brand-muted">
              Our team focuses on honest service, expert repairs, and customer
              satisfaction. From quick diagnostics to detailed repair work, we
              help customers understand what went wrong, what it takes to fix it,
              and how to get their devices working reliably again.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-brand-light">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              title: "Mission",
              description:
                "Provide dependable repairs using quality workmanship and transparent pricing.",
              Icon: Target,
            },
            {
              title: "Vision",
              description:
                "Become the most trusted device repair company in Las Vegas.",
              Icon: Sparkles,
            },
          ].map(({ title, description, Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="rounded-[20px] border border-brand-border bg-white p-6 shadow-soft sm:p-8"
            >
              <div className="flex size-14 items-center justify-center rounded-[18px] bg-brand-light text-brand-primary ring-1 ring-brand-primary/10">
                <Icon className="size-7" aria-hidden="true" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-brand-ink">{title}</h2>
              <p className="mt-4 text-base leading-8 text-brand-muted">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide every repair, conversation, and customer experience."
          />
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, description, Icon }, index) => (
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
      </Section>

      <Section className="bg-brand-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-3xl rounded-[20px] border border-brand-primary/15 bg-white p-8 text-center shadow-soft sm:p-10"
        >
          <h2 className="text-3xl font-bold tracking-normal text-brand-ink sm:text-4xl">
            Ready to repair your device?
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/get-quote" showArrow>
              Get Free Quote
            </Button>
            <Button href="tel:+10000000000" variant="secondary" className="gap-2">
              <PhoneCall className="size-4" aria-hidden="true" />
              Call Now
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
