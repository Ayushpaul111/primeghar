import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import ImpactStats from "@/components/landing/ImpactStats";
import ServicesGrid from "@/components/landing/ServicesGrid";
import ProTeamMosaic from "@/components/landing/ProTeamMosaic";
import ExperienceSection from "@/components/landing/ExperienceSection";
import CTAOverlay from "@/components/landing/CTAOverlay";
import ProcessSection from "@/components/landing/ProcessSection";
import BlogSection from "@/components/landing/BlogSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import SiteFooter from "@/components/layout/SiteFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Home Repair & Handyman Services",
  description:
    "Expert home repair services including electrical, plumbing, carpentry, and painting. Licensed professionals, fast quotes, satisfaction guaranteed.",
  keywords: [
    "home repair",
    "handyman services",
    "electrical repair",
    "plumbing services",
    "carpentry work",
    "house painting",
  ],
  openGraph: {
    title: "Professional Home Repair & Handyman Services",
    description:
      "Expert home repair services including electrical, plumbing, carpentry, and painting. Licensed professionals, fast quotes, satisfaction guaranteed.",
    type: "website",
    images: ["/og-home.jpg"],
  },
};

export default function HomePage() {
  // Enhanced JSON-LD structured data for better SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "HomePro Handyman Services",
    description:
      "Professional home repair and handyman services including electrical, plumbing, carpentry, and painting",
    url: "https://yourdomain.com",
    telephone: "+1-555-123-4567",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main St",
      addressLocality: "Your City",
      addressRegion: "CA",
      postalCode: "90000",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "34.0522",
      longitude: "-118.2437",
    },
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-17:00"],
    serviceArea: {
      "@type": "City",
      name: "Your City",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Repair Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Electrical Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Electrical Repair",
                description:
                  "Professional electrical repairs and installations",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Plumbing Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Plumbing Repair",
                description: "Expert plumbing repairs and maintenance",
              },
            },
          ],
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    sameAs: [
      "https://www.facebook.com/homeproservices",
      "https://www.instagram.com/homeproservices",
      "https://www.linkedin.com/company/homepro",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <ServicesGrid />
        <ProTeamMosaic />
        <ExperienceSection />
        <CTAOverlay />
        <ProcessSection />
        <BlogSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </>
  );
}
