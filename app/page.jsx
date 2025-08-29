"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Search, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { servicesData } from "@/app/data/data.js";
import Hero from "./components/ui/hero";

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
                <a href="/services">
                  <Button
                    size="lg"
                    className={`${data.buttonColor} px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {data.buttonText}
                  </Button>
                </a>
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
