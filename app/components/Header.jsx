"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "../lib/utils";
import { getCalApi } from "@calcom/embed-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const router = useRouter();

  // Only apply transforms after component is mounted to prevent initial shift
  const headerScale = useTransform(scrollY, [0, 200], [1, 0.95]);
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.9]);
  const textSize = useTransform(scrollY, [0, 200], [1, 0.95]);

  // Determine background class based on scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => {
      setIsScrolled(y > 10);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navItems = [
    { id: "about-us", label: "ABOUT US", path: "/about-us" },
    { id: "stories", label: "STORIES", path: "/stories" },
    { id: "services", label: "SERVICES", path: "/services" },
  ];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "primeghar" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  // Close menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      const menuButton = document.querySelector("[data-menu-button]");
      const menuDropdown = document.querySelector("[data-menu-dropdown]");

      if (
        isMenuOpen &&
        !menuButton?.contains(target) &&
        !menuDropdown?.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const navigateToPage = (path) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  const menuVariants = {
    open: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50%)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          style={
            mounted
              ? {
                  scale: headerScale,
                }
              : {}
          }
          className={cn(
            "rounded-full px-6 py-3",
            "flex items-center justify-between",
            isScrolled
              ? "bg-blue-800/70 backdrop-blur-md border-white/20"
              : "bg-blue-900",
            "shadow-lg",
            "border border-transparent",
            "transition-all duration-300 ease-out"
          )}
        >
          <motion.div
            className="flex items-center cursor-pointer flex-shrink-0"
            style={mounted ? { scale: logoScale } : {}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogoClick}
          >
            <img
              src="./logo.png"
              alt="PrimeGhar logo"
              className="h-8 transition-all duration-300 ease-out"
            />
          </motion.div>

          <motion.nav
            className="hidden md:flex items-center space-x-8 flex-1 justify-center"
            style={mounted ? { scale: textSize } : {}}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => navigateToPage(item.path)}
                className="text-sm font-medium text-white hover:font-bold transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>

          <div className="flex items-center space-x-4 flex-shrink-0">
            <motion.button
              className={cn(
                "text-sm font-medium px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ease-out",
                isScrolled ? "bg-blue-900 text-white" : "bg-blue-200 text-black"
              )}
              style={mounted ? { scale: textSize } : {}}
              whileHover={{ scale: 1.05, backgroundColor: "#1D4ED8" }}
              whileTap={{ scale: 0.95 }}
              data-cal-namespace="primeghar"
              data-cal-link="ayush-paul/primeghar"
              data-cal-config='{"layout":"month_view"}'
            >
              Book Now
            </motion.button>

            <motion.button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-menu-button
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl md:hidden shadow-xl"
                data-menu-dropdown
              >
                <nav className="flex flex-col p-4">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      variants={itemVariants}
                      onClick={() => navigateToPage(item.path)}
                      className="py-3 text-sm font-medium text-gray-700 hover:text-blue-600 border-b border-gray-100 last:border-b-0 text-left"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </div>
    </div>
  );
};

export default Header;
