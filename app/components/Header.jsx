"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Camera,
  LayoutGrid,
  Sparkles,
  Building2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../lib/utils";
import { getCalApi } from "@calcom/embed-react";
import { useRouter, usePathname } from "next/navigation";

const services = [
  {
    id: "virtual-tour",
    path: "/services/360-virtual-tour",
    icon: Camera,
    title: "360° Virtual Tour",
    description:
      "Immersive property walkthroughs that captivate buyers from anywhere in the world.",
  },
  {
    id: "virtual-staging",
    path: "/services/virtual-staging",
    icon: LayoutGrid,
    title: "Virtual Staging",
    description:
      "Furnish empty spaces digitally to help buyers visualize the full potential of a property.",
  },
  {
    id: "item-removal",
    path: "/services/item-removal",
    icon: Sparkles,
    title: "Item Removal & Virtual Cleaning",
    description:
      "Remove unwanted items from your photos for a clean, professional presentation.",
  },
  {
    id: "virtual-renovation",
    path: "/services/virtual-renovation",
    icon: Building2,
    title: "Virtual Renovation",
    description:
      "Turn a plot or unfinished construction into a stunning completed property visual for selling.",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const router = useRouter();
  const pathname = usePathname();
  const closeTimeoutRef = useRef(null);

  const headerScale = useTransform(scrollY, [0, 200], [1, 0.95]);
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.9]);
  const textSize = useTransform(scrollY, [0, 200], [1, 0.95]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (y) => {
    setIsScrolled(y > 10);
  });

  const navItems = [
    { id: "home", label: "HOME", path: "/" },
    { id: "about-us", label: "ABOUT US", path: "/about-us" },
    { id: "services", label: "SERVICES", path: "/services", hasDropdown: true },
  ];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "primeghar" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

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
      if (isMenuOpen) setIsMenuOpen(false);
      if (isServicesOpen) setIsServicesOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen, isServicesOpen]);

  const openServices = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const scheduleClose = () => {
    closeTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  const navigateToPage = (path) => {
    router.push(path);
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsServicesOpen(false);
  };

  const handleLogoClick = () => router.push("/");

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
      transition: { type: "spring", bounce: 0, duration: 0.3 },
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

  const dropdownVariants = {
    hidden: { opacity: 0, y: -12, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.22,
        ease: "easeOut",
        staggerChildren: 0.07,
        delayChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.98,
      transition: { duration: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto relative">
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          style={mounted ? { scale: headerScale } : {}}
          className={cn(
            "rounded-full px-4 sm:px-6 py-3",
            "flex items-center justify-between",
            isScrolled
              ? "bg-blue-900/80 backdrop-blur-md border-white/20"
              : "bg-[#022b60]",
            "shadow-lg border border-transparent transition-all duration-300 ease-out",
          )}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer shrink-0"
            style={mounted ? { scale: logoScale } : {}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogoClick}
          >
            <img
              src="/logo.png"
              alt="PrimeGhar logo"
              className="h-7 sm:h-8 transition-all duration-300 ease-out"
            />
          </motion.div>

          {/* Desktop nav */}
          <motion.nav
            className="hidden md:flex items-center space-x-8 flex-1 justify-center"
            style={mounted ? { scale: textSize } : {}}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleClose}
                    className="relative py-2"
                  >
                    <motion.div
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={isServicesOpen}
                      tabIndex={0}
                      className={cn(
                        "text-sm font-medium text-white transition-colors whitespace-nowrap relative flex items-center gap-1 cursor-default select-none",
                        isActive ? "font-bold" : "",
                      )}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.label}
                      <motion.span
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-white/70 text-[10px] leading-none"
                      >
                        ▾
                      </motion.span>
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                          layoutId="activeUnderline"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                        />
                      )}
                    </motion.div>
                  </div>
                );
              }

              return (
                <motion.button
                  key={item.id}
                  onClick={() => navigateToPage(item.path)}
                  className={cn(
                    "text-sm font-medium text-white transition-colors whitespace-nowrap relative py-2",
                    isActive ? "font-bold" : "hover:font-bold",
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                      layoutId="activeUnderline"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 shrink-0">
            <motion.button
              className={cn(
                "hidden sm:block text-sm font-medium px-5 sm:px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ease-out",
                isScrolled
                  ? "bg-blue-900 text-white"
                  : "bg-blue-200 text-black",
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
              className="md:hidden text-white p-1"
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

          {/* Mobile menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl md:hidden shadow-xl"
                data-menu-dropdown
              >
                <nav className="flex flex-col p-3">
                  {navItems.map((item) => {
                    const isActive = item.hasDropdown
                      ? pathname.startsWith("/services")
                      : pathname === item.path;

                    if (item.hasDropdown) {
                      return (
                        <motion.div key={item.id} variants={itemVariants}>
                          {/* SERVICES accordion trigger */}
                          <button
                            onClick={() => setIsMobileServicesOpen((p) => !p)}
                            className={cn(
                              "w-full py-3 px-2 text-sm font-medium border-b border-gray-100 flex items-center justify-center relative",
                              isActive
                                ? "text-[#001639] font-bold"
                                : "text-gray-700",
                            )}
                          >
                            {item.label}
                            <motion.div
                              animate={{
                                rotate: isMobileServicesOpen ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                              className="absolute right-2"
                            >
                              <ChevronDown className="h-4 w-4 text-gray-400" />
                            </motion.div>
                            {isActive && (
                              <motion.div
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#001639]"
                                layoutId="mobileActiveUnderline"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                              />
                            )}
                          </button>

                          {/* Service sub-items */}
                          <AnimatePresence>
                            {isMobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.25,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden"
                              >
                                <div className="py-2 space-y-0.5 border-b border-gray-100">
                                  {services.map((service) => {
                                    const Icon = service.icon;
                                    return (
                                      <button
                                        key={service.id}
                                        onClick={() =>
                                          navigateToPage(service.path)
                                        }
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-left"
                                      >
                                        <div className="p-1.5 bg-[#022b60]/8 rounded-lg shrink-0">
                                          <Icon className="h-4 w-4 text-[#022b60]" />
                                        </div>
                                        <span className="text-sm text-gray-700 font-medium leading-tight">
                                          {service.title}
                                        </span>
                                      </button>
                                    );
                                  })}

                                  {/* Mobile CTA */}
                                </div>
                              </motion.div>
                            )}
                            <button
                              className="w-full mt-1 flex items-center justify-center gap-2 bg-[#022b60] text-white text-sm font-semibold px-4 py-2.5 rounded-xl"
                              data-cal-namespace="primeghar"
                              data-cal-link="ayush-paul/primeghar"
                              data-cal-config='{"layout":"month_view"}'
                            >
                              Book Free Consultation
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </AnimatePresence>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.button
                        key={item.id}
                        variants={itemVariants}
                        onClick={() => navigateToPage(item.path)}
                        className={cn(
                          "py-3 text-sm font-medium border-b border-gray-100 last:border-b-0 text-center relative",
                          isActive
                            ? "text-[#001639] font-bold"
                            : "text-gray-700 hover:text-[#001639]",
                        )}
                      >
                        {item.label}
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#001639]"
                            layoutId="mobileActiveUnderline"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        {/* Desktop services mega-menu */}
        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              onMouseEnter={openServices}
              onMouseLeave={scheduleClose}
              className="absolute top-[calc(100%+10px)] left-0 right-0 hidden md:flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* CTA panel — horizontal strip at md, vertical column at lg */}
              <div className="lg:w-70 shrink-0 bg-[#022b60] p-5 lg:p-7 flex flex-row lg:flex-col items-center lg:items-start justify-between gap-4">
                <div className="flex-1 lg:flex-none">
                  <span className="hidden lg:inline-block bg-white/10 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Real Estate Visuals
                  </span>
                  <h3 className="text-white text-base lg:text-xl font-bold leading-snug lg:mb-3">
                    Transform Your Property Listings
                  </h3>
                  <p className="text-blue-200/80 text-sm leading-relaxed hidden lg:block">
                    Professional visuals that attract more buyers and close
                    deals faster.
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="shrink-0 bg-white text-[#022b60] font-semibold text-sm px-4 py-2.5 lg:px-5 lg:py-3 rounded-xl flex items-center gap-2 hover:bg-blue-50 transition-colors whitespace-nowrap"
                  data-cal-namespace="primeghar"
                  data-cal-link="ayush-paul/primeghar"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>

              {/* Services grid — 2 cols always, descriptions only at lg */}
              <div className="flex-1 p-4 lg:p-5 grid grid-cols-2 gap-2">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.button
                      key={service.id}
                      variants={cardVariants}
                      onClick={() => navigateToPage(service.path)}
                      className="text-left p-3 lg:p-4 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-2 lg:gap-3 mb-0 lg:mb-2">
                        <div className="p-1.5 lg:p-2 bg-[#022b60]/8 rounded-lg group-hover:bg-[#022b60]/12 transition-colors shrink-0">
                          <Icon className="h-4 w-4 lg:h-5 lg:w-5 text-[#022b60]" />
                        </div>
                        <h4 className="text-xs lg:text-sm font-semibold text-gray-900 leading-tight">
                          {service.title}
                        </h4>
                      </div>
                      <p className="hidden lg:block text-xs text-gray-500 leading-relaxed pl-13">
                        {service.description}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
