import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";
import { breadcrumbSchema, createMetadata, JsonLd, webPageSchema } from "@/lib/seo";

const title = "Contact Smart Gadget Solution LLC";
const description =
  "Contact Smart Gadget Solution LLC in Las Vegas for phone, tablet, laptop, gaming console, diagnostics, maintenance, and data recovery repair help.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/contact",
  keywords: ["contact device repair", "Las Vegas phone repair quote", "repair request"],
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: "/contact", title, description, type: "ContactPage" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <ContactPage />
    </>
  );
}
