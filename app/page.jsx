"use client";
import { motion } from "framer-motion";
import { Phone, Mail, Search, ArrowUpRight } from "lucide-react";
import { servicesData } from "@/app/data/data.js";
import Hero from "./components/ui/hero";
// import CalBooking from "./components/CalBooking";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServiceCards = ({ services }) => (
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6"
    initial="hidden"
    whileInView="visible"
    variants={fadeInUp}
    viewport={{ once: true, margin: "-50px" }}
  >
    {services.map((service, index) => (
      <motion.div key={index}>
        <a href={service.href} className="cursor-pointer block h-full">
          <div className="rounded-2xl bg-white shadow-md p-3 h-full flex flex-col">
            {/* Title */}
            <div className="mb-2">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-sm text-gray-500">{service.description}</p>
              )}
            </div>

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50">
                <ArrowUpRight className="w-5 h-5 text-gray-800" />
              </button>
            </div>
          </div>
        </a>
      </motion.div>
    ))}
  </motion.div>
);

// Component for CTA Section
const CtaSection = ({ data }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeInUp}
  >
    <div
      className="relative rounded-3xl overflow-hidden bg-cover bg-center 
                 h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[400px]
                 w-full max-w-full mx-auto "
      style={{
        backgroundImage: `url(${data.image.src})`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12 h-full flex flex-col justify-center">
        <h1
          className="text-white 
                       text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                       font-serif font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6
                       leading-tight max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        >
          {data.title}
        </h1>

        <p
          className="text-white 
                      text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                      opacity-90 mb-4 sm:mb-6 md:mb-8 lg:mb-10
                      max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
                      font-light"
        >
          {data.subtitle}
        </p>
        <a href="tel:+919064995568" target="_blank" rel="noopener noreferrer">
          <button
            className="bg-[#022b60] hover:bg-[#022b60]/90 text-white font-medium 
          px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 lg:px-10 lg:py-4
          text-sm sm:text-base md:text-lg
          rounded-lg transition-colors duration-300 w-fit"
          >
            Book now
          </button>
        </a>
      </div>
    </div>
  </motion.div>
);

// Component for Final CTA
const FinalCta = ({ data }) => (
  <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-950 text-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6">{data.title}</h2>
        <p className="text-xl text-blue-100 mb-8">{data.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="tel:+919064995568"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center"
          >
            <Phone className="mr-2 w-5 h-5" />
            Call Now
          </motion.a>

          <motion.a
            href="mailto:primegharofficial@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center"
          >
            <Mail className="mr-2 w-5 h-5" />
            Mail
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] pt-28">
      {/* Hero Section */}
      <section className="">
        <motion.div
          className="mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Hero />
        </motion.div>
      </section>

      {/* Featured Services Section */}
      {/* <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FeaturedServicesCards services={servicesData.featuredServices} />
        </div>
      </section> */}

      {/* New and Noteworthy Section */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Everyday services
          </motion.h2>
          <ServiceCards services={servicesData.newServices} />
        </div>
      </section>

      {/* Most Booked Services Section */}
      <section className="px-4 py-12 ">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Most booked services
          </motion.h2>
          <ServiceCards
            services={servicesData.popularServices}
            columns="md:grid-cols-4"
          />
        </div>
      </section>

      {/* Cleaning Services CTA */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <CtaSection data={servicesData.ctaSection} />
        </div>
      </section>

      {/* Final CTA Section */}
      <FinalCta data={servicesData.finalCta} />
    </div>
  );
}
