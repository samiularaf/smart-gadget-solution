import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Smart Gadget Solution LLC for phone, tablet, laptop, gaming console, and device repair help in Las Vegas, Nevada.",
};

export default function Page() {
  return <ContactPage />;
}
