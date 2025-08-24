"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Search, ArrowUpRight } from "lucide-react";
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
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
  >
    {services.map((service, index) => (
      <motion.a
        key={index}
        href={service.href}
        className="group relative p-3 rounded-2xl bg-white/70 border border-gray-200 
                   shadow-sm backdrop-blur-sm text-center cursor-pointer 
                   hover:shadow-xl hover:border-blue-300 transition-all duration-300"
        variants={staggerItem}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Icon Badge */}
        <div
          className="mx-auto mb-3 flex h-12 w-12 items-center justify-center 
                        rounded-full bg-gradient-to-br from-blue-100 to-blue-200 
                        text-blue-600 group-hover:from-blue-200 group-hover:to-blue-300 
                        transition-colors duration-300"
        >
          <span className="text-xl">{service.icon}</span>
        </div>

        {/* Label */}
        <div className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors">
          {service.label}
        </div>

        {/* Subtle Glow Effect */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-100/20 to-purple-100/20 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
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
// const FeaturedServicesCards = ({ services }) => (
//   <motion.div
//     className="grid md:grid-cols-3 gap-10"
//     variants={staggerContainer}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, margin: "-50px" }}
//   >
//     {services.map((service, index) => (
//       <motion.div
//         key={index}
//         variants={staggerItem}
//         className="group flex flex-col justify-between border-b border-gray-200 pb-6 hover:translate-y-[-4px] transition-transform duration-300"
//       >
//         {/* Title */}
//         <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors">
//           {service.title}
//         </h3>

//         {/* Description */}
//         <p className="mt-3 text-base leading-relaxed text-gray-600">
//           {service.description}
//         </p>

//         {/* CTA */}
//         <div className="mt-6">
//           <button
//             className={`px-4 py-2 text-sm font-medium rounded-full shadow-sm transition-all duration-300 ${service.buttonColor}`}
//           >
//             Book now →
//           </button>
//         </div>
//       </motion.div>
//     ))}
//   </motion.div>
// );

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
    <div className="min-h-screen bg-[#f4f4f4] pt-28">
      {/* Hero Section */}
      <section className="px-4  py-8">
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
                  Book home services with ease and convenience in Cooch Behar.
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
      {/* <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FeaturedServicesCards services={servicesData.featuredServices} />
        </div>
      </section> */}

      {/* New and Noteworthy Section */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-8"
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
            className="text-3xl font-bold text-gray-900 mb-8"
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
