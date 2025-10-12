"use client";
import { motion } from "framer-motion";

const AnnouncementsBar = () => {
  const announcements = [
    "🎉 We are looking for partners to expand our services if you know please share details!",
  ];

  const text = announcements.join("  •  ");

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-emerald-300 shadow-lg overflow-hidden cursor-pointer"
    >
      <div className="flex items-center gap-4 px-4 py-2">
        {/* Scrolling Text with Fade Effect */}
        <div className="flex-1 overflow-hidden relative">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />

          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="whitespace-nowrap"
          >
            <span className="text-sm md:text-base font-medium text-gray-800">
              {text} <span className="text-blue-800">Click here!</span> 👈
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnnouncementsBar;
