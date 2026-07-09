import {
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { ContactForm } from "@/components/contact/ContactForm";

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
      "Monday - Friday",
      "9:00 AM - 7:00 PM",
      "Saturday",
      "10:00 AM - 5:00 PM",
      "Sunday",
      "Closed",
    ],
    Icon: Clock3,
  },
];

export function ContactPage() {
  return (
    <>
      <Section
        bleed
        className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(46,168,255,0.32),_transparent_34%),linear-gradient(135deg,_var(--brand-dark-blue)_0%,_var(--brand-primary)_55%,_var(--brand-accent)_100%)] py-0 text-white"
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.16),_transparent_38%,_rgba(255,255,255,0.1))]" />
        <div className="absolute left-[7%] top-24 h-28 w-28 rounded-full border border-white/20 bg-white/10 blur-sm backdrop-blur-md" aria-hidden="true" />
        <div className="absolute bottom-16 right-[12%] h-40 w-40 rounded-full border border-white/20 bg-white/10 blur-sm backdrop-blur-md" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex min-h-[54svh] w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
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
          </div>
        </div>
      </Section>

      <Section className="bg-brand-light">
        <SectionTitle
          title="Contact Information"
          subtitle="Reach out by phone, visit us in Las Vegas, or send a repair request any time."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {contactCards.map(({ title, details, Icon }) => (
            <article
              key={title}
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
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="rounded-[20px] border border-brand-border bg-white p-6 shadow-soft sm:p-8">
            <SectionTitle
              align="left"
              title="Send a Repair Request"
              subtitle="Tell us what is going on with your device and our team will follow up."
            />

            <ContactForm />
          </div>

          <div className="grid gap-6">
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
          </div>
        </div>
      </Section>

      <Section className="bg-brand-light">
        <div className="mx-auto max-w-3xl rounded-[20px] border border-brand-primary/15 bg-white p-8 text-center shadow-soft sm:p-10">
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
        </div>
      </Section>
    </>
  );
}
