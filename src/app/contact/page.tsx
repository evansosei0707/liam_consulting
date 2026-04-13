import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import ContactMap from "@/components/contact/ContactMap";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Liam Consulting — Talk to Ghana's HR Experts",
  description:
    "Reach Liam Consulting Limited in Adenta, Accra. Call, email, or send a message — our team replies within one business day to discuss recruitment, HR outsourcing, training, and advisory needs.",
  path: "/contact",
  keywords: [
    "contact Liam Consulting",
    "HR firm Accra contact",
    "recruitment agency Ghana contact",
    "Adenta HR office",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ])}
      />
      <Navbar />
      <main>
        <ContactHero />
        <ContactSection />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}
