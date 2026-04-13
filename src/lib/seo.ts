import type { Metadata } from "next";

export const siteConfig = {
  name: "Liam Consulting Limited",
  shortName: "Liam Consulting",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.liamconsultingltd.com",
  locale: "en_GH",
  defaultTitle:
    "Liam Consulting Limited | Strategic HR, Recruitment & Outsourcing in Ghana",
  titleTemplate: "%s | Liam Consulting Limited",
  description:
    "Liam Consulting Limited is Ghana's trusted HR partner — delivering recruitment, HR outsourcing, training, business advisory, and facility services that help companies in Accra and beyond hire faster, stay compliant, and scale with confidence.",
  shortDescription:
    "Ghana's trusted HR & recruitment partner. Hire faster, stay compliant, scale with confidence.",
  keywords: [
    "HR consulting Ghana",
    "HR consulting Accra",
    "recruitment agency Ghana",
    "recruitment agency Accra",
    "HR outsourcing Ghana",
    "payroll services Ghana",
    "talent acquisition Ghana",
    "headhunting Ghana",
    "staff training Ghana",
    "corporate training Accra",
    "business advisory Ghana",
    "HR audit Ghana",
    "employee onboarding Ghana",
    "workforce planning Ghana",
    "background verification Ghana",
    "executive search Ghana",
    "cleaning services Accra",
    "commercial cleaning Ghana",
    "laundry services Accra",
    "Liam Consulting",
    "Liam Consulting Limited",
    "HR company Ghana",
    "best HR firm in Ghana",
  ],
  authors: [{ name: "Liam Consulting Limited" }],
  creator: "Liam Consulting Limited",
  publisher: "Liam Consulting Limited",
  contact: {
    phonePrimary: "+233 20 901 3744",
    phoneSecondary: "+233 30 397 3418",
    email: "info@liamconsultingltd.com",
    street: "Adenta",
    city: "Accra",
    region: "Greater Accra",
    country: "GH",
    countryName: "Ghana",
  },
  socials: {
    facebook: "https://facebook.com/liamconsult_ltd",
    instagram: "https://instagram.com/liamconsult_ltd",
    linkedin: "https://linkedin.com/company/liamconsult-ltd",
    twitter: "https://twitter.com/liamconsult_ltd",
    tiktok: "https://tiktok.com/@liamconsult_ltd",
  },
  ogImage: "/og.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
} as const;

type BuildMetadataArgs = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  image,
  noIndex,
}: BuildMetadataArgs = {}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const finalDescription = description || siteConfig.description;
  const finalTitle = title ?? siteConfig.defaultTitle;
  const finalImage = image || siteConfig.ogImage;

  const openGraphImages = [
    {
      url: finalImage,
      width: siteConfig.ogImageWidth,
      height: siteConfig.ogImageHeight,
      alt: title || siteConfig.name,
      type: "image/png",
    },
  ];

  return {
    title: title
      ? { absolute: `${title} | ${siteConfig.name}` }
      : siteConfig.defaultTitle,
    description: finalDescription,
    keywords: [...siteConfig.keywords, ...(keywords || [])],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: finalTitle,
      description: finalDescription,
      images: openGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      creator: "@liamconsult_ltd",
      site: "@liamconsult_ltd",
      images: [finalImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/og.png`,
    image: `${siteConfig.url}/og.png`,
    description: siteConfig.description,
    foundingDate: "2022",
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phonePrimary,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.street,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      addressCountry: siteConfig.contact.country,
    },
    sameAs: Object.values(siteConfig.socials),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phonePrimary,
        contactType: "customer service",
        areaServed: "GH",
        availableLanguage: ["en"],
      },
    ],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/og.png`,
    image: `${siteConfig.url}/og.png`,
    description: siteConfig.description,
    priceRange: "$$",
    telephone: siteConfig.contact.phonePrimary,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.street,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      addressCountry: siteConfig.contact.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 5.718989,
      longitude: -0.137942,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "Ghana" },
      { "@type": "City", name: "Accra" },
    ],
    sameAs: Object.values(siteConfig.socials),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-GH",
  };
}

export function serviceJsonLd(service: {
  slug: string;
  title: string;
  summary: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services/${service.slug}#service`,
    serviceType: service.title,
    name: service.title,
    description: service.description,
    url: `${siteConfig.url}/services/${service.slug}`,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: [
      { "@type": "Country", name: "Ghana" },
      { "@type": "City", name: "Accra" },
    ],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
