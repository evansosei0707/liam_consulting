import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import LeadershipMessage from "@/components/about/LeadershipMessage";
import MissionVision from "@/components/about/MissionVision";
import BrandPromise from "@/components/about/BrandPromise";
import ByTheNumbers from "@/components/about/ByTheNumbers";
import WhoWeServe from "@/components/about/WhoWeServe";
import DiversityCommitment from "@/components/about/DiversityCommitment";
import AboutCTA from "@/components/about/AboutCTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us — Ghana's Trusted HR & Recruitment Partner",
  description:
    "Founded in 2022, Liam Consulting Limited delivers dependable HR and operations solutions across Ghana — connecting employers with top talent and redefining recruitment through forward-thinking services.",
  path: "/about",
  keywords: [
    "about Liam Consulting",
    "HR company in Accra",
    "HR founder Ghana",
    "William Annor",
    "trusted HR partner Ghana",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "About", url: `${siteConfig.url}/about` },
        ])}
      />
      <Navbar />
      <main>
        <AboutHero />
        <OurStory />
        <LeadershipMessage />
        <MissionVision />
        <BrandPromise />
        <ByTheNumbers />
        <WhoWeServe />
        <DiversityCommitment />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
