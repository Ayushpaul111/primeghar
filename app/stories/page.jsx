"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Wrench, HelpingHand, Users } from 'lucide-react';

const Stories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const successStories = [
    {
      id: 1,
      name: "The Johnson Family",
      location: "Mumbai, Maharashtra",
      serviceType: "Deep Cleaning Service",
      image: "/logo.png",
      story: "PrimeGhar's deep cleaning service transformed our home completely. Their professional team cleaned every corner, making our house sparkle like never before. Highly recommended!",
      rating: 5,
      year: "2024",
      category: "Cleaning Services"
    },
    {
      id: 2,
      name: "Rahul Sharma",
      location: "Pune, Maharashtra",
      serviceType: "Electrical & Plumbing Repair",
      image: "/logo.png",
      story: "Had multiple electrical and plumbing issues at home. PrimeGhar's repair team fixed everything efficiently in one visit. Their expertise and professionalism impressed me greatly.",
      rating: 5,
      year: "2024",
      category: "Repair Services"
    },
    {
      id: 3,
      name: "Priya & Amit Patel",
      location: "Ahmedabad, Gujarat",
      serviceType: "Maid Service & Home Maintenance",
      image: "/logo.png",
      story: "With our busy schedules, PrimeGhar's maid service has been a lifesaver. Regular cleaning and maintenance keeps our home perfect while we focus on work.",
      rating: 5,
      year: "2024",
      category: "Maid Services"
    },
    {
      id: 4,
      name: "Maria D'Souza",
      location: "Goa",
      serviceType: "Helper Services",
      image: "/logo.png",
      story: "Moving to a new house was stressful until PrimeGhar's helper team arrived. They helped with furniture assembly, heavy lifting, and organizing everything perfectly.",
      rating: 5,
      year: "2024",
      category: "Helper Services"
    }
  ];

  const testimonials = [
    {
      name: "Ananya Krishnan",
      role: "Software Engineer",
      content: "PrimeGhar's cleaning service is incredible! My apartment has never been this clean. Their team is professional and thorough.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Business Owner",
      content: "Excellent repair services! They fixed my electrical and plumbing issues quickly. Their expertise is truly impressive.",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      role: "Doctor",
      content: "Professional, reliable, and trustworthy. PrimeGhar's home services exceeded my expectations in every way. Highly recommended!",
      rating: 5
    },
    {
      name: "Carlos Martinez",
      role: "Working Professional",
      content: "As someone with a busy schedule, PrimeGhar's maid service has been a lifesaver. Perfect home maintenance!",
      rating: 5
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

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
              Success <span className="text-blue-600">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how PrimeGhar has helped hundreds of families with reliable home services 
              including cleaning, repairs, and household assistance across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Success Stories Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Stories</h2>
            <p className="text-gray-600">Real experiences from our satisfied clients</p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentStory}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                      {successStories[currentStory].category === "Cleaning Services" && <Sparkles className="w-8 h-8 text-blue-600" />}
                      {successStories[currentStory].category === "Repair Services" && <Wrench className="w-8 h-8 text-blue-600" />}
                      {successStories[currentStory].category === "Maid Services" && <Users className="w-8 h-8 text-blue-600" />}
                      {successStories[currentStory].category === "Helper Services" && <HelpingHand className="w-8 h-8 text-blue-600" />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{successStories[currentStory].name}</h3>
                      <p className="text-blue-600 font-medium">{successStories[currentStory].serviceType}</p>
                      <p className="text-gray-500 text-sm">{successStories[currentStory].location} • {successStories[currentStory].year}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {renderStars(successStories[currentStory].rating)}
                  </div>
                  
                  <Quote className="w-8 h-8 text-blue-300 mb-4" />
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {successStories[currentStory].story}
                  </p>
                  
                  <div className="mt-6 inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {successStories[currentStory].category}
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center">
                    <img 
                      src={successStories[currentStory].image} 
                      alt={successStories[currentStory].name}
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <button
              onClick={prevStory}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextStory}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStory ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read testimonials from satisfied customers who experienced our exceptional home services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <Quote className="w-6 h-6 text-blue-300 mb-4" />
                
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

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              These numbers represent real families who experienced our reliable home services
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">1500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Cities Served</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">2000+</div>
              <div className="text-blue-100">Services Completed</div>
            </motion.div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of satisfied clients who experienced our professional home services with PrimeGhar
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
              data-cal-namespace="primeghar"
              data-cal-link="ayush-paul/primeghar"
              data-cal-config='{"layout":"month_view"}'
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Stories;
