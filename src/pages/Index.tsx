import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ImpactStats from "@/components/landing/ImpactStats";
import ServicesGrid from "@/components/landing/ServicesGrid";
import ProTeamMosaic from "@/components/landing/ProTeamMosaic";
import ExperienceSection from "@/components/landing/ExperienceSection";
import CTAOverlay from "@/components/landing/CTAOverlay";
import ProcessSection from "@/components/landing/ProcessSection";
import BlogSection from "@/components/landing/BlogSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import SiteFooter from "@/components/landing/SiteFooter";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const description = "Affordable home repair services by certified pros. Fast quotes, on-time arrivals, and quality you can trust.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "HomePro Handyman Services",
    url: typeof window !== 'undefined' ? window.location.origin : "https://example.com",
    telephone: "+1-555-123-4567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main St",
      addressLocality: "Your City",
      addressRegion: "CA",
      postalCode: "90000",
      addressCountry: "US",
    },
    image: typeof window !== 'undefined' ? `${window.location.origin}/favicon.ico` : undefined,
    areaServed: "Local",
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
    ],
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: "$$",
  } as const;

  return (
    <>
      <Helmet>
        <title>Affordable Home Repair Services | HomePro</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Affordable Home Repair Services | HomePro" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

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
};

export default Index;
