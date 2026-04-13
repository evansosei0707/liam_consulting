import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/",
  description:
    "Liam Consulting Limited is Ghana's trusted HR partner — delivering recruitment, HR outsourcing, training, business advisory, and facility services that help companies in Accra and beyond hire faster, stay compliant, and scale with confidence.",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <HowItWorks />
        <Testimonials />
        <TrustSection />
        <CTASection />
        <Blog />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
