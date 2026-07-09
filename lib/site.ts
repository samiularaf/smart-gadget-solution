export const siteConfig = {
  name: "Smart Gadget Solution LLC",
  shortName: "Smart Gadget",
  url: "https://smartgadgetsolution.com",
  description:
    "Premium device repair services for phones, tablets, laptops, gaming consoles, data recovery, diagnostics, and maintenance in Las Vegas, Nevada.",
  phoneDisplay: "+1 (651) 373-6692",
  phoneHref: "tel:+16513736692",
  email: "info@smartgadgetsolution.com",
  location: "Las Vegas, Nevada",
  publisher: "Smart Gadget Solution LLC",
  keywords: [
    "device repair Las Vegas",
    "phone repair",
    "tablet repair",
    "laptop repair",
    "gaming console repair",
    "data recovery",
    "electronics repair",
    "Smart Gadget Solution",
  ],
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    "Phone Repair",
    "Tablet Repair",
    "Laptop Repair",
    "Gaming Console Repair",
    "Data Recovery",
    "Diagnostics & Maintenance",
  ],
} as const;

export type SitePath = "/" | "/about" | "/services" | "/contact";

export function absoluteUrl(path: SitePath | string = "/") {
  return new URL(path, siteConfig.url).toString();
}
