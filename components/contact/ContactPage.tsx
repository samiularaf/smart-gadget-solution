"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  PhoneCall,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { cn } from "@/lib/utils";

type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  deviceType: string;
  issueDescription: string;
};

const contactCards = [
  {
    title: "Phone",
    details: ["+1 (651) 373-6692"],
    Icon: Phone,
  },
  {
    title: "Location",
    details: ["Las Vegas, Nevada"],
    Icon: MapPin,
  },
  {
    title: "Business Hours",
    details: [
      "Monday – Friday",
      "9:00 AM - 7:00 PM",
      "Saturday",
      "10:00 AM - 5:00 PM",
      "Sunday",
      "Closed",
    ],
    Icon: Clock3,
  },
];

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm font-medium text-brand-ink shadow-sm outline-none transition duration-200 placeholder:text-brand-muted/60 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10";

export function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  function onSubmit() {
    setShowSuccess(true);
    reset();
    window.setTimeout(() => setShowSuccess(false), 4200);
  }

  return (
    <>
      {showSuccess && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-4 top-24 z-[60] flex max-w-sm items-center gap-3 rounded-2xl border border-brand-primary/15 bg-white px-4 py-3 text-sm font-bold text-brand-ink shadow-glow"
        >
          <CheckCircle2 className="size-5 shrink-0 text-brand-primary" aria-hidden="true" />
          Thanks. Your message has been received.
        </div>
      )}

      <Section
        bleed
        className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(46,168,255,0.32),_transparent_34%),linear-gradient(135deg,_var(--brand-dark-blue)_0%,_var(--brand-primary)_55%,_var(--brand-accent)_100%)] py-0 text-white"
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.16),_transparent_38%,_rgba(255,255,255,0.1))]" />
        <motion.div
          aria-hidden="true"
          className="absolute left-[7%] top-24 h-28 w-28 rounded-full border border-white/20 bg-white/10 blur-sm backdrop-blur-md"
          animate={{ y: [0, -18, 0], opacity: [0.42, 0.72, 0.42] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-16 right-[12%] h-40 w-40 rounded-full border border-white/20 bg-white/10 blur-sm backdrop-blur-md"
          animate={{ y: [0, 18, 0], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto flex min-h-[54svh] w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/12 px-4 py-2 text-sm font-semibold text-white/88 shadow-soft backdrop-blur-xl">
              <Mail className="size-4" aria-hidden="true" />
              We are here to help
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              Contact Smart Gadget Solution LLC
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Need a repair or have a question?
              <br />
              Our team is here to help.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-brand-light">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <SectionTitle
            title="Contact Information"
            subtitle="Reach out by phone, visit us in Las Vegas, or send a repair request any time."
          />
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {contactCards.map(({ title, details, Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              className="rounded-[20px] border border-brand-border bg-white p-6 shadow-soft"
            >
              <div className="flex size-14 items-center justify-center rounded-[18px] bg-brand-light text-brand-primary ring-1 ring-brand-primary/10">
                <Icon className="size-7" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-brand-ink">{title}</h2>
              <div className="mt-3 space-y-1 text-sm font-medium leading-7 text-brand-muted">
                {details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-[20px] border border-brand-border bg-white p-6 shadow-soft sm:p-8"
          >
            <SectionTitle
              align="left"
              title="Send a Repair Request"
              subtitle="Tell us what is going on with your device and our team will follow up."
            />

            <form className="mt-8 grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField id="name" label="Name" error={errors.name?.message}>
                  <input
                    id="name"
                    autoComplete="name"
                    className={fieldClassName}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name", { required: "Please enter your name." })}
                  />
                </FormField>

                <FormField id="phone" label="Phone" error={errors.phone?.message}>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className={fieldClassName}
                    placeholder="+1 (555) 000-0000"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    {...register("phone", { required: "Please enter your phone number." })}
                  />
                </FormField>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField id="email" label="Email" error={errors.email?.message}>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={fieldClassName}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email", {
                      required: "Please enter your email.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address.",
                      },
                    })}
                  />
                </FormField>

                <FormField
                  id="deviceType"
                  label="Device Type"
                  error={errors.deviceType?.message}
                >
                  <select
                    id="deviceType"
                    className={cn(fieldClassName, "appearance-none")}
                    aria-invalid={Boolean(errors.deviceType)}
                    aria-describedby={
                      errors.deviceType ? "deviceType-error" : undefined
                    }
                    {...register("deviceType", {
                      required: "Please choose a device type.",
                    })}
                  >
                    <option value="">Select a device</option>
                    <option value="phone">Phone</option>
                    <option value="tablet">Tablet</option>
                    <option value="laptop">Laptop</option>
                    <option value="gaming-console">Gaming Console</option>
                    <option value="other">Other</option>
                  </select>
                </FormField>
              </div>

              <FormField
                id="issueDescription"
                label="Issue Description"
                error={errors.issueDescription?.message}
              >
                <textarea
                  id="issueDescription"
                  rows={5}
                  className={cn(fieldClassName, "resize-y")}
                  placeholder="Tell us what happened and what you need repaired."
                  aria-invalid={Boolean(errors.issueDescription)}
                  aria-describedby={
                    errors.issueDescription
                      ? "issueDescription-error"
                      : undefined
                  }
                  {...register("issueDescription", {
                    required: "Please describe the issue.",
                  })}
                />
              </FormField>

              <Button type="submit" className="w-full sm:w-fit" disabled={isSubmitting}>
                <Send className="size-4" aria-hidden="true" />
                Submit Request
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-6"
          >
            <div className="rounded-[20px] border border-brand-border bg-brand-light p-6 shadow-soft sm:p-8">
              <div className="flex size-14 items-center justify-center rounded-[18px] bg-white text-brand-primary ring-1 ring-brand-primary/10">
                <MessageSquareText className="size-7" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-brand-ink">
                Helpful service starts with clear details.
              </h2>
              <p className="mt-4 text-sm leading-7 text-brand-muted">
                Include your device model, the issue you are seeing, and any recent
                damage or software changes. We will use that information to guide
                the next step.
              </p>
            </div>

            <div className="rounded-[20px] border border-brand-border bg-white p-6 shadow-soft sm:p-8">
              <SectionTitle
                align="left"
                title="Find Us"
                subtitle="A full Google Maps integration will be connected later."
              />
              <div className="mt-6 flex min-h-64 items-center justify-center rounded-[20px] border border-dashed border-brand-primary/30 bg-[radial-gradient(circle_at_center,_rgba(46,168,255,0.18),_transparent_58%),var(--brand-light)] p-6 text-center">
                <div>
                  <MapPin className="mx-auto size-10 text-brand-primary" aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold text-brand-ink">
                    Las Vegas, Nevada
                  </p>
                  <Button
                    href="https://www.google.com/maps/search/?api=1&query=Las%20Vegas%2C%20Nevada"
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                    className="mt-5"
                  >
                    Open in Google Maps
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
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
            Need Immediate Assistance?
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
        </motion.div>
      </Section>
    </>
  );
}

type FormFieldProps = {
  children: ReactNode;
  error?: string;
  id: string;
  label: string;
};

function FormField({ children, error, id, label }: FormFieldProps) {
  return (
    <div>
      <label className="text-sm font-bold text-brand-ink" htmlFor={id}>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
