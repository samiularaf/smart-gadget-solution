"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  Cpu,
  Laptop,
  Monitor,
  Smartphone,
  TabletSmartphone,
} from "lucide-react";
import { Section } from "@/components/ui/section";

const brands = [
  { name: "Apple", Icon: Smartphone },
  { name: "Samsung", Icon: TabletSmartphone },
  { name: "Google", Icon: Blocks },
  { name: "Dell", Icon: Laptop },
  { name: "HP", Icon: Monitor },
  { name: "Lenovo", Icon: Laptop },
  { name: "ASUS", Icon: Cpu },
  { name: "Microsoft", Icon: Blocks },
];

export function Brands() {
  return (
    <Section className="bg-brand-light">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-normal text-brand-ink sm:text-4xl">
          Brands We Repair
        </h2>
        <p className="mt-4 text-base leading-7 text-brand-muted sm:text-lg">
          Professional repair services for all major brands.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {brands.map(({ name, Icon }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="group rounded-3xl border border-brand-border bg-white p-6 shadow-soft transition-colors duration-200 hover:border-brand-primary"
          >
            <div className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand-primary ring-1 ring-brand-primary/10 transition duration-200 group-hover:bg-brand-primary group-hover:text-white">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-brand-ink">{name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-muted">
                  Certified diagnostics
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
