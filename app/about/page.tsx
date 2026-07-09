import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";
import { breadcrumbSchema, createMetadata, JsonLd, webPageSchema } from "@/lib/seo";

const title = "About Smart Gadget Solution LLC";
const description =
  "Learn about Smart Gadget Solution LLC, a Las Vegas device repair company focused on honest guidance, quality workmanship, and clear customer service.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/about",
  keywords: ["about Smart Gadget Solution", "Las Vegas repair technicians"],
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: "/about", title, description, type: "AboutPage" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <AboutPage />
    </>
  );
}
