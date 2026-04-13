import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ProcessSection from "@/components/services/ProcessSection";
import WhyUs from "@/components/services/WhyUs";
import ServicesCTA from "@/components/services/ServicesCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata, siteConfig } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata = buildMetadata({
  title:
    "Our Services — Recruitment, HR Outsourcing, Training & Advisory in Ghana",
  description:
    "Explore Liam Consulting's five integrated services — Recruitment Support, HR Outsourcing, Training & Development, Business Advisory, and Cleaning & Laundry — all delivered with discipline across Ghana.",
  path: "/services",
  keywords: [
    "HR services Ghana",
    "recruitment services Accra",
    "training programs Ghana",
    "business advisory services Accra",
    "commercial cleaning Ghana",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Services", url: `${siteConfig.url}/services` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${siteConfig.url}/services/${s.slug}`,
              name: s.title,
            })),
          },
        ]}
      />
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesList />
        <ProcessSection />
        <WhyUs />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
