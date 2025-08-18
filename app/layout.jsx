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
  title: "Prime Ghar",
  description: "Because Every Home Deserves Prime Care.",
  keywords:
    "primeghar, prime ghar, home services, professional services, aya mashi, kajer masi, bathroom cleaner, cleaning services, plumbing repair, electrical repair, electronic repair, maid services, helper services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppFloatingButton
          phoneNumber="+919064995568"
          message="Hi! I'm interested in your home services from PrimeGhar. Can you help me?"
          position="bottom-right"
          showTooltip={true}
          tooltipText="Need help? Chat with us!"
        />
      </body>
    </html>
  );
}
