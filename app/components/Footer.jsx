import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent to-white text-gray-600 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6">
          {/* Logo and Tagline */}
          <div className="mb-6 md:mb-0 flex flex-col items-start">
            <Image
              src="/blue-orange-nobg.png"
              alt="Azimute Logo"
              width={80}
              height={80}
              className="mr-2"
            />
            <div>
              <h3 className="text-lg font-semibold text-blue-950">PrimeGhar</h3>
              <p className="text-sm">Because Every Home Deserves Prime Care</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mb-6 md:mb-0 hidden md:block">
            <h4 className="text-sm font-semibold text-blue-950 mb-2">
              Navigation
            </h4>
            <ul className="space-y-1 flex flex-col">
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-900">
                  Our Services
                </Link>
              </li>
              {/* <li>
                <Link href="/stories" className="hover:text-gray-900">
                  Stories
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-sm font-semibold text-blue-950 mb-2">
              Contact
            </h4>
            <ul className="space-y-1">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <Link
                  href="mailto:primegharofficial@gmail.com"
                  className="hover:text-gray-900"
                >
                  primegharofficial@gmail.com
                </Link>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <Link href="tel:+919064995568" className="hover:text-gray-900">
                  +91 90649 95568
                </Link>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Cooch Behar, West Bengal</span>
              </li>
            </ul>
          </div>

          {/* Language and Social Media */}
          <div className="flex flex-col items-end">
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/primeghar"
                target="_blank "
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/primeghar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-gray-400">
          © 2025 Primeghar. All rights reserved. |{" "}
          <Link href="/TermsAndConditions" className="hover:text-gray-900">
            Terms & Conditions
          </Link>{" "}
          {/* |{" "}
          <Link href="#" className="hover:text-gray-900">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="#" className="hover:text-gray-900">
            Cookies
          </Link>{" "}
           */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
