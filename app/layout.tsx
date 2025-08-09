import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import ClientToasters from "@/components/providers/ClientToasters";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Affordable Home Repair Services | HomePro",
    template: "%s | HomePro",
  },
  description:
    "Affordable home repair services by certified pros. Fast quotes, on-time arrivals, and quality you can trust.",
  keywords: [
    "home repair",
    "handyman",
    "electrical",
    "plumbing",
    "carpentry",
    "painting",
  ],
  authors: [{ name: "HomePro" }],
  creator: "HomePro",
  publisher: "HomePro",
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "HomePro",
    title: "Affordable Home Repair Services | HomePro",
    description:
      "Affordable home repair services by certified pros. Fast quotes, on-time arrivals, and quality you can trust.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HomePro - Professional Home Repair Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Home Repair Services | HomePro",
    description:
      "Affordable home repair services by certified pros. Fast quotes, on-time arrivals, and quality you can trust.",
    images: ["/twitter-image.jpg"],
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
    google: "your-google-verification-code",
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}
    >
      <body className="font-sans antialiased">
        <TooltipProvider>
          {children}
          <ClientToasters />
        </TooltipProvider>
      </body>
    </html>
  );
}
