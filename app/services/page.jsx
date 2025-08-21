"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Star,
  Clock,
  Shield,
  Phone,
  Calendar,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { getCalApi } from "@calcom/embed-react";

// Extended services data with more details
const servicesData = {
  categories: [
    "All Services",
    "Repair Services",
    "Cleaning Services",
    "Helper Services",
    "Electronic Services",
    "Specialized Services",
  ],

  services: [
    {
      id: 1,
      title: "Professional Plumbing Repair",
      category: "Repair Services",
      image: "./plumber.webp",
      price: "₹299",
      duration: "45-60 min",
      rating: 4.8,
      reviews: 234,
      description:
        "Expert plumbing solutions for leaks, blockages, and installations",
      features: [
        "24/7 Emergency Service",
        "Licensed Professionals",
        "Quality Parts",
        "1 Year Warranty",
      ],
      tags: ["plumbing", "leak repair", "pipe installation", "emergency"],
      popular: true,
    },
    {
      id: 2,
      title: "Deep Cleaning Services",
      category: "Cleaning Services",
      image: "./cleaning-services.webp",
      price: "₹499",
      duration: "2-3 hours",
      rating: 4.9,
      reviews: 456,
      description: "Complete home deep cleaning with eco-friendly products",
      features: [
        "Eco-friendly Products",
        "Trained Staff",
        "Insurance Covered",
        "Satisfaction Guarantee",
      ],
      tags: [
        "home cleaning",
        "office cleaning",
        "sanitization",
        "eco-friendly",
      ],
      popular: true,
    },
    {
      id: 3,
      title: "Electrical Repair & Installation",
      category: "Repair Services",
      image: "./Professional-Electrician.webp",
      price: "₹399",
      duration: "30-90 min",
      rating: 4.7,
      reviews: 189,
      description:
        "Safe electrical repairs and new installations by certified electricians",
      features: [
        "Certified Electricians",
        "Safety First",
        "Modern Equipment",
        "Emergency Available",
      ],
      tags: ["electrician", "wiring", "fan installation", "lighting"],
    },
    {
      id: 4,
      title: "Wooden Furniture Repair",
      category: "Repair Services",
      image: "./helper-services.webp",
      price: "₹249",
      duration: "60-90 min",
      rating: 4.6,
      reviews: 98,
      description:
        "Professional wooden furniture repair and restoration services",
      features: [
        "Skilled Craftsmen",
        "Quality Materials",
        "Custom Solutions",
        "Affordable Rates",
      ],
      tags: ["carpenter", "furniture assembly", "wood polish", "restoration"],
    },
    {
      id: 5,
      title: "Electronic Device Repair",
      category: "Electronic Services",
      image: "./Professional-Electrician.webp",
      price: "₹199",
      duration: "30-60 min",
      rating: 4.5,
      reviews: 156,
      description:
        "Expert repair for smartphones, laptops, and home electronics",
      features: [
        "Genuine Parts",
        "Quick Service",
        "Data Protection",
        "Warranty Included",
      ],
      tags: ["mobile repair", "laptop service", "gadget fix", "electronics"],
    },
    {
      id: 6,
      title: "Professional Maid Services",
      category: "Helper Services",
      image: "./maid.webp",
      price: "₹349",
      duration: "2-4 hours",
      rating: 4.8,
      reviews: 298,
      description:
        "Reliable daily, weekly or monthly maid services for your home",
      features: [
        "Background Verified",
        "Flexible Timing",
        "Regular Staff",
        "Affordable Plans",
      ],
      tags: ["maid", "housekeeping", "daily cleaning", "japa maid"],
      popular: true,
    },
    {
      id: 7,
      title: "General Helper Services",
      category: "Helper Services",
      image: "./helper-services.webp",
      price: "₹199",
      duration: "1-2 hours",
      rating: 4.4,
      reviews: 167,
      description:
        "Multi-purpose helper for various household tasks and assistance",
      features: [
        "Versatile Help",
        "Experienced Workers",
        "Reasonable Rates",
        "Flexible Hours",
      ],
      tags: ["handyman", "odd jobs", "assistance", "moving help"],
    },
    {
      id: 8,
      title: "Aya Mashi (Caregiver)",
      category: "Specialized Services",
      image: "./ayamashi.webp",
      price: "₹599",
      duration: "4-12 hours",
      rating: 4.9,
      reviews: 87,
      description:
        "Professional caregiving services for elderly and patient care",
      features: [
        "Trained Caregivers",
        "Medical Support",
        "Compassionate Care",
        "Flexible Duration",
      ],
      tags: ["caregiver", "elderly care", "patient support", "nursing"],
    },
    {
      id: 9,
      title: "Premium Car Wash",
      category: "Cleaning Services",
      image: "./car-washing-services.webp",
      price: "₹399",
      duration: "45-60 min",
      rating: 4.7,
      reviews: 134,
      description: "Professional car washing and detailing at your doorstep",
      features: [
        "Water-less Cleaning",
        "Premium Products",
        "Interior Cleaning",
        "Doorstep Service",
      ],
      tags: ["car wash", "auto detailing", "vehicle cleaning", "doorstep"],
    },
    {
      id: 10,
      title: "Bathroom Deep Cleaning",
      category: "Cleaning Services",
      image: "./bathroom-cleaning-service.webp",
      price: "₹449",
      duration: "1-2 hours",
      rating: 4.8,
      reviews: 203,
      description: "Specialized bathroom cleaning and sanitization service",
      features: [
        "Deep Sanitization",
        "Anti-bacterial Treatment",
        "Tile & Grout Cleaning",
        "Odor Elimination",
      ],
      tags: ["bathroom cleaning", "toilet cleaning", "sanitization", "hygiene"],
    },
  ],
};

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

const dropdownVariants = {
  hidden: { opacity: 0, height: 0, overflow: "hidden" },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Service Card Component
const ServiceCard = ({ service }) => (
  <motion.div
    variants={staggerItem}
    whileHover={{ y: -8 }}
    className="group relative"
  >
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 bg-white">
      <CardContent className="p-0">
        <div className="relative">
          {/* Service Image */}
          <div className="relative overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Popular Badge */}
            {service.popular && (
              <div className="absolute top-3 left-3">
                <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Popular
                </span>
              </div>
            )}

            {/* Price Badge */}
            <div className="absolute top-3 right-3">
              <span className="bg-white/90 backdrop-blur-sm text-gray-900 font-bold px-3 py-1 rounded-full text-sm">
                Starting {service.price}
              </span>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Service Content */}
          <div className="p-6">
            {/* Service Header */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-700 ml-1">
                  {service.rating}
                </span>
                <span className="text-sm text-gray-500 ml-1">
                  ({service.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {service.duration}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-2">
                {service.features.slice(0, 4).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center text-xs text-gray-600"
                  >
                    <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <a
                href={`https://wa.me/919064995568?text=I'm%20interested%20in%20${encodeURIComponent(
                  service.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-200">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="transition-transform duration-300 group-hover:rotate-12"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z" />
                  </svg>
                </Button>
              </a>
              <Button
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-200"
                data-cal-namespace="primeghar"
                data-cal-link="ayush-paul/primeghar"
                data-cal-config='{"layout":"month_view"}'
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </Button>
              <a
                href="tel:+919064995568"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-200">
                  <Phone className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// Improved Responsive Filter Menu Component
const ResponsiveFilterMenu = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative max-w-3xl mx-auto mb-8">
      {/* Dropdown Trigger */}
      <AnimatePresence>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Button
            onClick={toggleMenu}
            className="w-full flex justify-between items-center bg-white text-gray-700 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 py-3 px-6 rounded-full font-semibold transition-all duration-300"
          >
            <span className="flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              {activeCategory}
            </span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </motion.div>
      </AnimatePresence>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-2 z-10 grid grid-cols-2 sm:grid-cols-3 gap-2 p-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  setIsOpen(false);
                }}
                className={`text-sm font-medium py-2 px-4 rounded-md transition-colors border border-gray-100 duration-200 ${
                  activeCategory === category
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Services Page Component
export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState(
    servicesData.services
  );

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "primeghar" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  // Filter services based on category and search
  useEffect(() => {
    let filtered = servicesData.services;

    // Filter by category
    if (activeCategory !== "All Services") {
      filtered = filtered.filter(
        (service) => service.category === activeCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (service) =>
          service.title.toLowerCase().includes(q) ||
          service.description.toLowerCase().includes(q) ||
          service.category.toLowerCase().includes(q) ||
          (service.tags &&
            service.tags.some((tag) => tag.toLowerCase().includes(q))) ||
          service.features.some((feature) => feature.toLowerCase().includes(q))
      );
    }

    setFilteredServices(filtered);
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Header */}
      <section className="pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Premium</span> Services
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Professional home services delivered with excellence. From repairs
              to cleaning, we've got all your household needs covered in Cooch
              Behar.
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search services (e.g. plumbing, cleaning, helper)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 text-lg border border-gray-200 
               rounded-full text-black bg-white shadow-md focus:outline-none 
               focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <ResponsiveFilterMenu
            categories={servicesData.categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
            >
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                No services found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Services");
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need a Custom Service Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Can't find exactly what you need? Contact us for personalized
              service packages tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg"
                data-cal-namespace="primeghar"
                data-cal-link="ayush-paul/primeghar"
                data-cal-config='{"layout":"month_view"}'
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
              <a
                href="tel:+919064995568"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className=" bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
