import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { Container } from "@/components/ui/container";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Get Quote", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-primary/10 bg-brand-ink text-white">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                width={1600}
                height={1600}
                alt="Smart Gadget Solution LLC Logo"
                quality={100}
                sizes="(max-width: 768px) 40px, 52px"
                className="h-10 w-auto shrink-0 rounded-2xl object-contain ring-1 ring-white/10 sm:h-[52px]"
              />
              <span>
                <span className="block text-base font-bold leading-tight">
                  Smart Gadget
                </span>
                <span className="block text-sm font-medium leading-tight text-white/65">
                  Solution LLC
                </span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-white/70">
              Professional device repair services built around clear communication,
              reliable workmanship, and a polished customer experience.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-white/55">
              Explore
            </h2>
            <nav className="mt-4 grid gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/72 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-white/55">
              Contact
            </h2>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              <a className="flex items-center gap-3 transition hover:text-white" href="tel:+16513736692">
                <Phone className="size-4 text-brand-accent" aria-hidden="true" />
                +1 (651) 373-6692
              </a>
              <a
                className="flex items-center gap-3 transition hover:text-white"
                href="mailto:info@smartgadgetsolution.com"
              >
                <Mail className="size-4 text-brand-accent" aria-hidden="true" />
                info@smartgadgetsolution.com
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="size-4 text-brand-accent" aria-hidden="true" />
                Local device repair specialists
              </span>
              <Link className="flex items-center gap-3 transition hover:text-white" href="/contact" aria-label="Contact Smart Gadget Solution">
                <Share2 className="size-4 text-brand-accent" aria-hidden="true" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Smart Gadget Solution LLC.</p>
          <p>Premium repairs. Clear service. Better devices.</p>
        </div>
      </Container>
    </footer>
  );
}
