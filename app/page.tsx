import type { Metadata } from "next";
import { Brands } from "@/components/home/Brands";
import { Faq } from "@/components/home/Faq";
import { HeroSection } from "@/components/home/hero-section";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Services } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { homeFaqs } from "@/lib/content";
import {
  breadcrumbSchema,
  createMetadata,
  faqSchema,
  JsonLd,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";

const title = "Professional Device Repair Services in Las Vegas";
const description =
  "Smart Gadget Solution LLC repairs phones, tablets, laptops, gaming consoles, and storage devices with clear diagnostics, quality parts, and fast service.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/",
  keywords: ["Las Vegas device repair", "same day phone repair", "electronics repair services"],
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: "/", title, description }),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          serviceSchema(),
          faqSchema(homeFaqs),
        ]}
      />
      <HeroSection />
      <Brands />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Faq />
    </>
  );
}
