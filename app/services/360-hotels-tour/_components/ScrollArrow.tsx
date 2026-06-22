"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollArrow({ targetId }: { targetId: string }) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to next section"
      className="relative flex items-center justify-center w-11 h-11 group"
    >
      {/* Pulse rings */}
      <motion.span
        className="absolute inset-0 rounded-full border border-white/50"
        animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.span
        className="absolute inset-0 rounded-full border border-white/30"
        animate={{ scale: [1, 1.9], opacity: [0.3, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
      />

      {/* Bouncing chevron */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <ChevronDown
          className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-200"
          strokeWidth={2}
        />
      </motion.div>
    </button>
  );
}
