"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { getCalApi } from "@calcom/embed-react";

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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Home services at your doorstep
              </h1>

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

              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  {
                    icon: "🔧",
                    label: "Helper Services",
                    href: "/services",
                  },
                  {
                    icon: "🪵",
                    label: "Wooden Repair",
                    href: "/services",
                  },
                  {
                    icon: "🚰",
                    label: "Plumbing Repair",
                    href: "/services",
                  },
                  {
                    icon: "⚡",
                    label: "Electrical Repair",
                    color: "bg-yellow-50",
                    href: "/services",
                  },
                  {
                    icon: "📱",
                    label: "Electronic Repair",
                    href: "/services",
                  },
                  {
                    icon: "🧹",
                    label: "Maid Services",
                    href: "/services",
                  },
                  {
                    icon: "🧽",
                    label: "Cleaning Services",
                    href: "/services",
                  },
                  {
                    icon: "👩‍⚕️",
                    label: "Aya Mashi",
                    href: "/servicesjpg",
                  },
                ].map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className={`bg-gray-100/50 border border-gray-300 p-3 rounded-lg text-center cursor-pointer hover:shadow-md transition-shadow block`}
                  >
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <div className="text-xs text-gray-700">{service.label}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Hero Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="./maid.png"
                  alt="Helper service"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="./car-washing-services.png"
                  alt="Cleaning service"
                  className="w-full h-36 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="./cleaning-services.png"
                  alt="Maid service"
                  className="w-full h-36 object-cover rounded-lg"
                />
                <img
                  src="./Professional-Electrician.png"
                  alt="Repair service"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-pink-100 border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Professional Cleaning Services
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Deep cleaning & sanitization
                </p>
                <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                  Book now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-green-100 border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Expert Repair Services
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Electrical, plumbing & wooden repairs
                </p>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Book now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 text-white border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Trusted Helper Services</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Reliable & professional
                </p>
                <Button size="sm" variant="secondary">
                  Book now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            New and noteworthy
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                title: "Electronic Repair",
                image: "./Professional-Electrician.png",
                href: "/Professional-Electrician.png",
              },
              {
                title: "Car Wash Services",
                image: "/car-washing-services.png",
                href: "/wooden-repair",
              },
              {
                title: "Aya Mashi Services",
                image: "./ayamashi.png",
                href: "/aya-mashi",
              },
              {
                title: "Helper Services",
                image: "./helper-services.png",
                href: "/helper-services",
              },
              {
                title: "Maid Services",
                image: "./maid.png",
                href: "/maid-services",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
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
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Most booked services
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Plumbing Repair",
                description: "Professional plumbing solutions",
                image: "./plumber.png",
                href: "/plumbing-repair",
              },
              {
                title: "Cleaning Services",
                description: "Complete home cleaning",
                image: "./cleaning-services.png",
                href: "/cleaning-services",
              },
              {
                title: "Electrical Repair",
                description: "Safe electrical installations",
                image: "./Professional-Electrician.png",
                href: "/electrical-repair",
              },
              {
                title: "Helper Services",
                description: "General assistance services",
                image: "./helper-services.png",
                href: "/helper-services",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <a href={service.href}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Services CTA */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-blue-100 border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Professional Cleaning Services
                  </h2>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Book now
                  </Button>
                </div>
                <div className="h-64 md:h-full">
                  <img
                    src="/professional-bathroom-cleaning.png"
                    alt="Professional cleaning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Book Your Home Service?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get started today with our professional home services and let our
              experts take care of your household needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center"
                data-cal-namespace="primeghar"
                data-cal-link="ayush-paul/primeghar"
                data-cal-config='{"layout":"month_view"}'
              >
                <Phone className="mr-2 w-5 h-5" />
                Book Consultation
              </motion.button>
              <motion.a
                href="mailto:contact@primeghar.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
