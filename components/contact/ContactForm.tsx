"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  deviceType: string;
  issueDescription: string;
};

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm font-medium text-brand-ink shadow-sm outline-none transition duration-200 placeholder:text-brand-muted/60 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10";

export function ContactForm() {
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
              autoComplete="off"
              className={cn(fieldClassName, "appearance-none")}
              aria-invalid={Boolean(errors.deviceType)}
              aria-describedby={errors.deviceType ? "deviceType-error" : undefined}
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
            autoComplete="off"
            className={cn(fieldClassName, "resize-y")}
            placeholder="Tell us what happened and what you need repaired."
            aria-invalid={Boolean(errors.issueDescription)}
            aria-describedby={
              errors.issueDescription ? "issueDescription-error" : undefined
            }
            {...register("issueDescription", {
              required: "Please describe the issue.",
            })}
          />
        </FormField>

        <Button type="submit" className="w-full sm:w-fit" disabled={isSubmitting}>
          <Send className="size-4" aria-hidden="true" />
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
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
