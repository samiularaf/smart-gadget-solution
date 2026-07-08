import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Smart Gadget Solution LLC, trusted local device repair experts focused on honest service, quality repairs, and customer satisfaction.",
};

export default function Page() {
  return <AboutPage />;
}
