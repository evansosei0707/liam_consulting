import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceOfferings from "@/components/services/ServiceOfferings";
import ServiceProcess from "@/components/services/ServiceProcess";
import RelatedServices from "@/components/services/RelatedServices";
import ServiceDetailCTA from "@/components/services/ServiceDetailCTA";
import JsonLd from "@/components/JsonLd";
import { services, getService, getRelatedServices } from "@/lib/services";
import {
  breadcrumbJsonLd,
  buildMetadata,
  serviceJsonLd,
  siteConfig,
} from "@/lib/seo";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return { title: "Service Not Found" };

  return buildMetadata({
    title: `${service.title} in Ghana`,
    description: `${service.summary} Learn how Liam Consulting delivers ${service.shortTitle.toLowerCase()} across Accra and beyond.`,
    path: `/services/${service.slug}`,
    keywords: [
      service.title,
      `${service.shortTitle} Ghana`,
      `${service.shortTitle} Accra`,
      ...service.offerings.map((o) => o.title),
    ],
  });
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = getRelatedServices(params.slug, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(service),
          breadcrumbJsonLd([
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Services", url: `${siteConfig.url}/services` },
            {
              name: service.title,
              url: `${siteConfig.url}/services/${service.slug}`,
            },
          ]),
        ]}
      />
      <Navbar />
      <main>
        <ServiceDetailHero service={service} />
        <ServiceOverview service={service} />
        <ServiceOfferings service={service} />
        <ServiceProcess service={service} />
        <RelatedServices services={related} />
        <ServiceDetailCTA service={service} />
      </main>
      <Footer />
    </>
  );
}
