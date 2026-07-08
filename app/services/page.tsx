import type { Metadata } from "next";
import { ServicesPage } from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore professional device repair services from Smart Gadget Solution LLC, including phone, tablet, laptop, gaming console, data recovery, diagnostics, and maintenance repairs.",
};

export default function Page() {
  return <ServicesPage />;
}
