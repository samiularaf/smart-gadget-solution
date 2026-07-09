import type { Metadata } from "next";
import { ServicesPage } from "@/components/services/ServicesPage";
import { breadcrumbSchema, createMetadata, JsonLd, serviceSchema, webPageSchema } from "@/lib/seo";

const title = "Device Repair Services";
const description =
  "Explore phone repair, tablet repair, laptop repair, gaming console repair, data recovery, diagnostics, and maintenance from Smart Gadget Solution LLC.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/services",
  keywords: ["phone repair services", "laptop repair services", "data recovery Las Vegas"],
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: "/services", title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          serviceSchema(),
        ]}
      />
      <ServicesPage />
    </>
  );
}
