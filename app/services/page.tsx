import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Home Repair Services - Electrical, Plumbing, Carpentry & More",
  description:
    "Comprehensive home repair services including electrical work, plumbing repairs, carpentry projects, and professional painting. Licensed and insured.",
  keywords: [
    "electrical services",
    "plumbing repair",
    "carpentry work",
    "house painting",
    "home maintenance",
  ],
  openGraph: {
    title: "Home Repair Services - Electrical, Plumbing, Carpentry & More",
    description:
      "Comprehensive home repair services including electrical work, plumbing repairs, carpentry projects, and professional painting.",
    type: "website",
  },
};

export default function ServicesPage() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Home Repair Services",
    description: "Professional home repair and maintenance services",
    provider: {
      "@type": "LocalBusiness",
      name: "HomePro Handyman Services",
    },
    areaServed: {
      "@type": "City",
      name: "Your City",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Repair Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical Services",
            description:
              "Professional electrical repairs, installations, and maintenance",
          },
        },
        // Add more services...
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Navbar />
      <main>
        <section className="py-20">
          <div className="container mx-auto">
            <h1 className="text-4xl font-display font-bold mb-8">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Professional home repair services you can trust. Licensed,
              insured, and experienced.
            </p>

            {/* Service sections with semantic HTML for SEO */}
            <div className="grid md:grid-cols-2 gap-12">
              <article>
                <h2 className="text-2xl font-semibold mb-4">
                  Electrical Services
                </h2>
                <p>
                  Expert electrical repairs, installations, and safety
                  inspections.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>• Outlet and switch installation</li>
                  <li>• Ceiling fan installation</li>
                  <li>• Electrical troubleshooting</li>
                  <li>• Safety inspections</li>
                </ul>
              </article>

              <article>
                <h2 className="text-2xl font-semibold mb-4">
                  Plumbing Services
                </h2>
                <p>Reliable plumbing repairs and maintenance for your home.</p>
                <ul className="mt-4 space-y-2">
                  <li>• Leak repairs</li>
                  <li>• Fixture installation</li>
                  <li>• Drain cleaning</li>
                  <li>• Water heater service</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
