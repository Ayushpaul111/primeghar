import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      "PrimeGhar - Home Services in Cooch Behar, West Bengal | Professional Cleaning, Repair & Maid Services",
    template: "%s | PrimeGhar - Home Services Cooch Behar",
  },
  description:
    "Professional home services in Cooch Behar, West Bengal. Expert cleaning services, maid services, plumbing repair, electrical repair, electronic repair, wooden repair, helper services & aya mashi. Book trusted professionals today!",
  keywords: [
    // Core services
    "home services Cooch Behar",
    "cleaning services Cooch Behar",
    "maid services Cooch Behar",
    "plumbing repair Cooch Behar",
    "electrical repair Cooch Behar",
    "electronic repair Cooch Behar",
    "wooden repair Cooch Behar",
    "helper services Cooch Behar",
    "aya mashi Cooch Behar",

    // Local SEO
    "home services West Bengal",
    "professional cleaning Cooch Behar",
    "house cleaning Cooch Behar",
    "domestic help Cooch Behar",
    "home maintenance Cooch Behar",
    "household services Cooch Behar",

    // Service variations in local language
    "kajer masi Cooch Behar",
    "ghar safai Cooch Behar",
    "bijli repair Cooch Behar",
    "nal repair Cooch Behar",

    // Broader terms
    "home repair services",
    "professional maid service",
    "reliable home services",
    "trusted cleaning service",
    "PrimeGhar",
  ].join(", "),
  authors: [{ name: "PrimeGhar Team" }],
  creator: "PrimeGhar",
  publisher: "PrimeGhar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://primeghar.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PrimeGhar - Professional Home Services in Cooch Behar, West Bengal",
    description:
      "Get reliable home services in Cooch Behar including cleaning, maid services, plumbing, electrical & electronic repair, wooden repair, helper services. Book trusted professionals today!",
    url: "https://primeghar.com",
    siteName: "PrimeGhar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "PrimeGhar - Home Services Cooch Behar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeGhar - Home Services Cooch Behar, West Bengal",
    description:
      "Professional cleaning, maid services, repairs & more in Cooch Behar. Trusted home service provider.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you get them
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: "Home Services",
  classification: "Business",
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Cooch Behar",
    "geo.position": "26.3217;89.4535", // Approximate coordinates for Cooch Behar
    ICBM: "26.3217, 89.4535",
    "business:contact_data:street_address": "Cooch Behar",
    "business:contact_data:locality": "Cooch Behar",
    "business:contact_data:region": "West Bengal",
    "business:contact_data:postal_code": "736101",
    "business:contact_data:country_name": "India",
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PrimeGhar",
  description:
    "Professional home services in Cooch Behar, West Bengal including cleaning, maid services, repairs and maintenance.",
  image: "https://primeghar.com/logo.png",
  url: "https://primeghar.com",
  telephone: "+919064995568",
  email: "contact@primeghar.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cooch Behar",
    addressLocality: "Cooch Behar",
    addressRegion: "West Bengal",
    postalCode: "736101",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.3217,
    longitude: 89.4535,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Cooch Behar",
    },
    {
      "@type": "State",
      name: "West Bengal",
    },
  ],
  serviceType: [
    "Home Cleaning Services",
    "Maid Services",
    "Plumbing Repair",
    "Electrical Repair",
    "Electronic Repair",
    "Wooden Repair",
    "Helper Services",
    "Aya Mashi Services",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "House Cleaning Services",
          description:
            "Professional deep cleaning and regular house cleaning in Cooch Behar",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Maid Services",
          description:
            "Reliable maid and domestic help services in Cooch Behar",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Plumbing Repair",
          description: "Expert plumbing repair and installation services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Electrical Repair",
          description: "Safe electrical repair and installation services",
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://primeghar.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Local Business Schema for better local SEO */}
        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Cooch Behar" />
        <meta name="geo.position" content="26.3217;89.4535" />
        <meta name="ICBM" content="26.3217, 89.4535" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppFloatingButton
          phoneNumber="+919064995568"
          message="Hi! I'm interested in your home services from PrimeGhar in Cooch Behar. Can you help me?"
          position="bottom-right"
          showTooltip={true}
          tooltipText="Need help? Chat with us!"
        />
      </body>
    </html>
  );
}
