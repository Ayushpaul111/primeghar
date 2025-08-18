"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import PropTypes from "prop-types";

const WhatsAppFloatingButton = ({
  phoneNumber,
  message,
  position,
  showTooltip,
  tooltipText,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltipState, setShowTooltipState] = useState(false);

  // Show button after page loads and user scrolls a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    // Show immediately on mobile, after scroll on desktop
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setIsVisible(true);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    // Show tooltip after 3 seconds if enabled
    if (showTooltip) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltipState(true);
        // Hide tooltip after 5 seconds
        setTimeout(() => setShowTooltipState(false), 5000);
      }, 3000);

      return () => {
        clearTimeout(tooltipTimer);
        if (!isMobile) {
          window.removeEventListener("scroll", handleScroll);
        }
      };
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [showTooltip]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /[^\d]/g,
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const getPositionClasses = () => {
    switch (position) {
      case "bottom-left":
        return "bottom-6 left-6";
      case "bottom-right":
        return "bottom-6 right-6";
      case "top-right":
        return "top-6 right-6";
      case "top-left":
        return "top-6 left-6";
      default:
        return "bottom-6 right-6";
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className={`fixed ${getPositionClasses()} z-50`}>
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltipState && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                className={`absolute ${
                  position.includes("right") ? "right-16" : "left-16"
                } ${
                  position.includes("bottom") ? "bottom-2" : "top-2"
                } bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg`}
              >
                <div className="flex items-center gap-2">
                  <span>{tooltipText}</span>
                  <button
                    onClick={() => setShowTooltipState(false)}
                    className="text-gray-300 hover:text-white"
                  >
                    <X size={14} />
                  </button>
                </div>
                {/* Arrow */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-transparent ${
                    position.includes("right")
                      ? "-right-2 border-l-4 border-l-gray-800"
                      : "-left-2 border-r-4 border-r-gray-800"
                  }`}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main WhatsApp Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 group relative overflow-hidden"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulse animation background */}
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>

            {/* WhatsApp Icon */}
            <div className="relative z-10">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="transition-transform duration-300 group-hover:rotate-12"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z" />
              </svg>
            </div>

            {/* Optional notification dot */}
          </motion.button>
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
            1
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Alternative compact version
export const WhatsAppCompactButton = ({
  phoneNumber = "+919876543210",
  message = "Hi! I need help with home services.",
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /[^\d]/g,
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label="WhatsApp"
    >
      <MessageCircle size={24} />
    </motion.button>
  );
};
WhatsAppFloatingButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  message: PropTypes.string,
  position: PropTypes.oneOf([
    "bottom-left",
    "bottom-right",
    "top-right",
    "top-left",
  ]),
  showTooltip: PropTypes.bool,
  tooltipText: PropTypes.string,
};

export default WhatsAppFloatingButton;
