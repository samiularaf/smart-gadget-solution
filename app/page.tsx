import { Brands } from "@/components/home/Brands";
import { HeroSection } from "@/components/home/hero-section";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Services } from "@/components/home/Services";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Brands />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
    </>
  );
}
