"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-primary/10 bg-white/85 shadow-soft backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
            aria-label="Smart Gadget Solution home"
          >
            <Image
              src="/images/logo.jpeg"
              width={1600}
              height={1600}
              alt="Smart Gadget Solution LLC Logo"
              quality={100}
              sizes="(max-width: 768px) 40px, 52px"
              className="h-10 w-auto shrink-0 rounded-2xl object-contain shadow-sm ring-1 ring-brand-primary/10 transition-transform duration-200 group-hover:scale-105 md:h-[52px]"
            />
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate text-base font-bold leading-tight text-brand-ink">
                Smart Gadget
              </span>
              <span className="block truncate text-sm font-medium leading-tight text-brand-muted">
                Solution LLC
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-brand-primary/10 bg-brand-light/80 p-1 lg:flex">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold text-brand-muted transition duration-200 hover:bg-white hover:text-brand-primary hover:shadow-sm",
                    isActive &&
                      "bg-white text-brand-primary shadow-sm ring-1 ring-brand-primary/10",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+10000000000"
              className="hidden items-center gap-2 rounded-full bg-brand-primary px-4 py-2.5 text-sm font-bold text-white shadow-glow transition duration-200 hover:bg-brand-dark-blue md:inline-flex"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </a>

            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-brand-primary/15 bg-white text-brand-ink shadow-sm transition hover:border-brand-primary/30 hover:text-brand-primary lg:hidden"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            "grid overflow-hidden transition-all duration-300 lg:hidden",
            isMenuOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
          )}
        >
          <nav className="min-h-0 rounded-3xl border border-brand-primary/10 bg-white p-2 shadow-soft">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-brand-muted transition hover:bg-brand-light hover:text-brand-primary",
                    isActive && "bg-brand-light text-brand-primary",
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="size-2 rounded-full bg-brand-primary" aria-hidden="true" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
