"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/app/data/data";

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
const HeroImages = ({ images }) => (
  <motion.div
    className="grid grid-cols-2 gap-4 max-w-md md:max-w-lg lg:max-w-md xl:max-w-sm mx-auto"
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
  >
    <div className="space-y-4">
      <motion.div
        variants={staggerItem}
        className="aspect-square overflow-hidden rounded-xl"
      >
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        variants={staggerItem}
        className="aspect-square overflow-hidden rounded-xl"
      >
        <img
          src={images[1].src}
          alt={images[1].alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
    <div className="space-y-4 pt-8">
      <motion.div
        variants={staggerItem}
        className="aspect-square overflow-hidden rounded-xl"
      >
        <img
          src={images[2].src}
          alt={images[2].alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        variants={staggerItem}
        className="aspect-square overflow-hidden rounded-xl"
      >
        <img
          src={images[3].src}
          alt={images[3].alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  </motion.div>
);

const Hero = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const data = new FormData(form);

    console.log("🔎 Form Data Preview:");
    for (let [key, value] of data.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Submit to Google Forms using fetch
    fetch(form.action, {
      method: "POST",
      mode: "no-cors", // Important for Google Forms
      body: data,
    })
      .then(() => {
        console.log("Form submitted successfully");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        // Still show success message since no-cors prevents us from knowing the actual result
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      });
  };

  return (
    <section className="px-4 max-w-7xl mx-auto">
      <div className="relative w-full flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Left: Text */}
            <div className="z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Home services&nbsp;at your&nbsp;
                <span className="relative">
                  <span className="text-[#ef8e0f]">doorstep</span>
                  <img
                    className="absolute md:w-40 w-32 -bottom-16 md:-bottom-20 right-0"
                    src="./red-line.png"
                    alt="Hero underline"
                  />
                </span>
              </h1>
              <p className="text-lg text-gray-600 mt-4 max-w-md">
                Book home services with ease and convenience in Cooch Behar.
              </p>
            </div>

            {/* Right: Images */}
            <HeroImages images={servicesData.heroImages} />
          </div>
        </div>

        {/* Booking Bar */}
        <div className="relative z-20 -mt-10 w-[90%] md:w-[80%] bg-white rounded-2xl shadow-xl p-6 overflow-hidden ">
          {/* Form */}
          <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>

          {/* Form */}
          <form
            method="POST"
            target="hidden_iframe"
            action="https://docs.google.com/forms/d/e/1FAIpQLScAuwxbbOFQyXBs_7Y7jPBnDsoYzmtepTDS27HXV0AoSMXAWw/formResponse"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 relative"
          >
            {/* Category */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-1">Category</label>
              <select
                name="entry.913706470"
                required
                disabled={submitted}
                className="w-full border border-gray-300 rounded-lg px-3 py-3"
              >
                <option value="" disabled selected>
                  Select category
                </option>
                <option value="Maid Services">Maid Services</option>
                <option value="Aaya Services">Aaya Services</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Car Wash">Car Wash</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
                <option value="Repair">Repair</option>
                <option value="Helper">Helper</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                name="entry.1736424318"
                required
                disabled={submitted}
                min={new Date().toISOString().split("T")[0]} // Prevent past dates
                className="w-full border border-gray-300 rounded-lg px-3 py-3"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-1">Phone Number</label>
              <input
                type="tel"
                name="entry.78627585"
                required
                pattern="[0-9]{10}"
                placeholder="Enter 10-digit number"
                disabled={submitted}
                className="w-full border border-gray-300 rounded-lg px-3 py-3"
              />
            </div>

            {/* Submit */}
            <div className="flex items-end">
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-blue-900 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Submit Inquiry
              </button>
            </div>
          </form>

          {/* Success Overlay */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-md rounded-2xl z-30 p-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center"
                >
                  {/* Animated Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.1, 1] }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative flex items-center justify-center"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500 flex items-center justify-center">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="white"
                        className="w-8 h-8 sm:w-10 sm:h-10"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                    </div>
                  </motion.div>

                  {/* Text */}
                  <div className="sm:text-left">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                      Form Submitted!
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600">
                      We’ll contact you soon.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
