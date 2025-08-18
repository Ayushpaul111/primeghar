"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Search } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { servicesData } from "@/app/data/data.js";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Component for Quick Service Grid
const QuickServiceGrid = ({ services }) => (
  <motion.div
    className="grid grid-cols-4 gap-4 mb-8"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
  >
    {services.map((service, index) => (
      <motion.a
        key={index}
        href={service.href}
        className="bg-gray-100/50 border border-gray-300 p-3 rounded-lg text-center cursor-pointer hover:shadow-md transition-shadow block"
        variants={staggerItem}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="text-2xl mb-2">{service.icon}</div>
        <div className="text-xs text-gray-700">{service.label}</div>
      </motion.a>
    ))}
  </motion.div>
);

// Component for Hero Images
const HeroImages = ({ images }) => (
  <motion.div
    className="grid grid-cols-2 gap-4"
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
  >
    <div className="space-y-4">
      <motion.img
        src={images[0].src}
        alt={images[0].alt}
        className={images[0].className}
        variants={staggerItem}
      />
      <motion.img
        src={images[1].src}
        alt={images[1].alt}
        className={images[1].className}
        variants={staggerItem}
      />
    </div>
    <div className="space-y-4 pt-8">
      <motion.img
        src={images[2].src}
        alt={images[2].alt}
        className={images[2].className}
        variants={staggerItem}
      />
      <motion.img
        src={images[3].src}
        alt={images[3].alt}
        className={images[3].className}
        variants={staggerItem}
      />
    </div>
  </motion.div>
);

// Component for Featured Services Cards
const FeaturedServicesCards = ({ services }) => (
  <motion.div
    className="grid md:grid-cols-3 gap-6"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
  >
    {services.map((service, index) => (
      <motion.div key={index} variants={staggerItem}>
        <Card className={`${service.bgColor} border-0`}>
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{service.description}</p>
            <Button
              size="sm"
              className={service.buttonColor}
              variant={service.variant}
            >
              Book now
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </motion.div>
);

// Component for Service Cards (reusable for new and popular services)
const ServiceCards = ({ services, columns = "md:grid-cols-5" }) => (
  <motion.div
    className={`grid ${columns} gap-6`}
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
  >
    {services.map((service, index) => (
      <motion.div key={index} variants={staggerItem}>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <a href={service.href}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-medium text-sm text-gray-900">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {service.description}
                  </p>
                )}
              </div>
            </a>
          </CardContent>
        </Card>
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
    <Card className="border-0 overflow-hidden">
      <CardContent className="p-0 relative">
        <div className="relative h-96 md:h-[500px]">
          {/* Background Image */}
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="w-full h-full object-cover"
          />

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8">
              <div className="max-w-lg">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  {data.title}
                </h2>
                <p className="text-white/90 text-lg mb-8 drop-shadow-md">
                  {data.subtitle}
                </p>
                <Button
                  size="lg"
                  className={`${data.buttonColor} px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  {data.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// Component for Final CTA
const FinalCta = ({ data }) => (
  <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
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
          {data.buttons.map((button, index) => {
            const IconComponent = button.icon === "phone" ? Phone : Mail;

            if (button.type === "primary") {
              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center"
                  data-cal-namespace={button.calData.namespace}
                  data-cal-link={button.calData.link}
                  data-cal-config={button.calData.config}
                >
                  <IconComponent className="mr-2 w-5 h-5" />
                  {button.text}
                </motion.button>
              );
            } else {
              return (
                <motion.a
                  key={index}
                  href={button.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center"
                >
                  <IconComponent className="mr-2 w-5 h-5" />
                  {button.text}
                </motion.a>
              );
            }
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

export default function HomePage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "primeghar" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 pt-28 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                className="mb-4"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <h1 className="text-4xl font-bold text-gray-900 ">
                  Home services at your&nbsp;
                  <span className="relative">
                    <span className="text-[#ef8e0f]">doorstep</span>
                    <img
                      className="absolute md:w-40 w-35 -bottom-18 md:-bottom-20 right-0"
                      src="./red-line.png"
                      alt="Hero image"
                    />
                  </span>
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                  Book home services with ease and convenience.
                </p>
              </motion.div>

              <div className="mb-8">
                <div
                  className="relative cursor-pointer"
                  // onClick={() => setShowSearchModal(true)}
                >
                  {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <div className="pl-10 py-3 text-base border border-gray-300 rounded-md bg-white hover:border-gray-400 transition-colors">
                    <span className="text-gray-500">Search for services</span>
                  </div> */}
                </div>
              </div>

              <QuickServiceGrid services={servicesData.quickServices} />
            </div>

            <HeroImages images={servicesData.heroImages} />
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FeaturedServicesCards services={servicesData.featuredServices} />
        </div>
      </section>

      {/* New and Noteworthy Section */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-2xl font-bold text-gray-900 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            New and noteworthy
          </motion.h2>
          <ServiceCards services={servicesData.newServices} />
        </div>
      </section>

      {/* Most Booked Services Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-2xl font-bold text-gray-900 mb-8"
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
