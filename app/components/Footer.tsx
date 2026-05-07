import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="sticky bottom-0 z-0 bg-[#141414] text-gray-400 pt-16 lg:pt-24 rounded-t-3xl lg:rounded-t-[50px] bg-[url('https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/667e846c24ba851c63c4d965_dark-noise-2.png'),_linear-gradient(#393737,#1b1b1b)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="mb-6 inline-block">
              <img
                src="/logo.png"
                alt="PrimeGhar-logo"
                className="h-12 md:h-12"
                loading="eager"
                decoding="async"
              />
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">We</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/stores" className="hover:text-white">
                  Stores
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">The Boring</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">The Cool</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 178"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="80%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
              fontSize="170"
              fontWeight="bold"
              fill="white"
            >
              PRIMEGHAR
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
