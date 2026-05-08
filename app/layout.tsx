import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrimeGhar - Smart Way To Sell Your Property",
  description:
    "PrimeGhar helps property owners to sell their property faster with smart visuals.",
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
