"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Sparkles, Wrench, Users, Shield, HelpingHand, Zap, Droplets, Clock, Star, Check } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Sparkles,
      title: "Cleaning Services",
      description: "Professional cleaning services to keep your home spotless and hygienic.",
      features: ["General Home Cleaning", "Bathroom Cleaning", "Kitchen Cleaning", "Deep Cleaning"]
    },
    {
      icon: Users,
      title: "Maid Services",
      description: "Reliable and trusted maid services for your daily household needs.",
      features: ["Regular Maid Service", "Daycare Maid", "Part-time Cleaning", "Full-time Assistance"]
    },
    {
      icon: Zap,
      title: "Electronic Repair",
      description: "Expert repair services for all your electronic devices and appliances.",
      features: ["TV & Audio Repair", "Home Appliances", "Computer Repair", "Mobile Device Repair"]
    },
    {
      icon: Wrench,
      title: "Electrical Repair",
      description: "Safe and certified electrical repair services for your home.",
      features: ["Wiring & Rewiring", "Switch & Socket Repair", "Fan Installation", "Light Fixture Repair"]
    },
    {
      icon: Droplets,
      title: "Plumbing Repair",
      description: "Professional plumbing services to solve all your water and drainage issues.",
      features: ["Pipe Repair", "Leak Fixing", "Drain Cleaning", "Faucet Installation"]
    },
    {
      icon: Home,
      title: "Wooden Repair",
      description: "Expert wooden furniture and fixture repair services.",
      features: ["Furniture Repair", "Door & Window Fixing", "Cabinet Restoration", "Wooden Floor Repair"]
    },
    {
      icon: HelpingHand,
      title: "Helper Services",
      description: "General assistance for various household tasks and heavy lifting.",
      features: ["Heavy Item Moving", "Furniture Assembly", "General Assistance", "Household Support"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Request Service",
      description: "Contact us with your service requirements and we'll understand your specific needs."
    },
    {
      step: "02",
      title: "Quote & Schedule",
      description: "We provide transparent pricing and schedule the service at your convenient time."
    },
    {
      step: "03",
      title: "Professional Service",
      description: "Our skilled professionals arrive on time and deliver high-quality service."
    },
    {
      step: "04",
      title: "Quality Check",
      description: "We ensure the work meets our standards and your satisfaction before completion."
    },
    {
      step: "05",
      title: "Payment",
      description: "Simple and secure payment process after you're completely satisfied with the service."
    },
    {
      step: "06",
      title: "Follow-up",
      description: "We follow up to ensure your satisfaction and provide ongoing support if needed."
    }
  ];

  const specialties = [
    {
      icon: Shield,
      title: "Trusted Professionals",
      description: "Verified and background-checked professionals you can trust in your home."
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Fast and efficient service with same-day or next-day availability."
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "High-quality service standards with satisfaction guarantee on all work."
    },
    {
      icon: Users,
      title: "Customer-Focused",
      description: "Personalized service tailored to meet your specific household needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive home services designed to meet all your household needs. 
              From cleaning and repairs to general assistance, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional home services backed by years of experience and skilled expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-white group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to ensure smooth and hassle-free home service delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow relative"
              >
                <div className="absolute -top-4 left-6 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose PrimeGhar?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              What makes us the preferred choice for home services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <specialty.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{specialty.title}</h3>
                <p className="text-blue-100">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us help you with professional home services and provide expert assistance for all your household needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
                data-cal-namespace="primeghar"
                data-cal-link="ayush-paul/primeghar"
                data-cal-config='{"layout":"month_view"}'
              >
                Book Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
              >
                View All Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
