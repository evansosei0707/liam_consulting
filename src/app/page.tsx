import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import TrustSection from "@/components/TrustSection";
import BuiltForTeams from "@/components/BuiltForTeams";
import CTASection from "@/components/CTASection";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

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
        <BuiltForTeams />
        <CTASection />
        <Blog />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
