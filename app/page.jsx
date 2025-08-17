"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Sparkles, Wrench, HelpingHand, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import { getCalApi } from '@calcom/embed-react';

export default function HomePage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "primeghar" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: "Cleaning Services",
      description: "Professional cleaning services to keep your home spotless, including maid services and deep cleaning."
    },
    {
      icon: Wrench,
      title: "Repair Services",
      description: "Expert repair services for electrical, plumbing, electronic devices, and wooden furniture."
    },
    {
      icon: HelpingHand,
      title: "Helper Services",
      description: "General assistance for household tasks, heavy lifting, and furniture assembly."
    },
    {
      icon: Home,
      title: "Home Maintenance",
      description: "Comprehensive home maintenance services to keep your household running smoothly."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Satisfied Customer",
      content: "PrimeGhar's cleaning service is amazing! My house has never been this spotless. Highly recommended!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Regular Client",
      content: "Their repair services are top-notch. Fixed my plumbing and electrical issues quickly and efficiently.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      role: "Happy Customer",
      content: "The helper service was a lifesaver during my move. Professional and reliable team!",
      rating: 5
    }
  ];

  const stats = [
    { number: "2000+", label: "Services Completed" },
    { number: "1500+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Keep Your <span className="text-blue-200">Home Perfect</span> Every Day
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Your trusted home service partner for all household needs. 
                From cleaning and repairs to general assistance, we make your home life easier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
                  data-cal-namespace="primeghar"
                  data-cal-link="ayush-paul/primeghar"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book Service Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View All Services
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6">Quick Service Request</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Type</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200">
                      <option>Cleaning</option>
                      <option>Repair</option>
                      <option>Helper</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <input 
                      type="text" 
                      placeholder="Enter your address" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Time</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200">
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 4 PM)</option>
                      <option>Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 rounded-lg transition-colors">
                    Request Service
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose PrimeGhar?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive home services with a focus on customer satisfaction and reliable solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Achievement</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence in home services
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read testimonials from our satisfied clients who experienced our exceptional home services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-blue-600 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Book Your Home Service?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get started today with our professional home services and let our experts take care of your household needs
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
