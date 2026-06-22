import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "./lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PrimeGhar — Smart Way To Sell Your Property",
    template: "%s",
  },
  description:
    "PrimeGhar helps property owners, hotels, institutions and more sell and showcase their spaces faster with smart visuals and immersive 360° virtual tours.",
  applicationName: SITE_NAME,
  keywords: [
    "PrimeGhar",
    "360 virtual tour",
    "virtual staging",
    "virtual renovation",
    "real estate visuals India",
    "property marketing",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PrimeGhar — Smart Way To Sell Your Property",
    description:
      "Immersive 360° virtual tours and smart visuals for properties, hotels and institutions.",
    url: "/",
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [{ url: OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeGhar — Smart Way To Sell Your Property",
    description:
      "Immersive 360° virtual tours and smart visuals for properties, hotels and institutions.",
    images: [OG_IMAGE],
  },
  robots: {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black`}
      >
        {" "}
        {/* <Preloader /> */}
        <div className="bg-[#141414] ">
          {/* This wrapper is the "curtain" that contains all page content except the footer.
          It scrolls up to reveal the footer. */}
          <Header />
          <div className="relative z-10 bg-[#F7F7F7] text-gray-900 overflow-x-clip rounded-b-3xl lg:rounded-b-[50px]">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
