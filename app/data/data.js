// services-data.js
export const servicesData = {
  // Quick access services (grid icons)
  quickServices: [
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
      href: "/servicesjpg", // Original href preserved
    },
  ],

  // Featured service cards
  featuredServices: [
    {
      title: "Professional Cleaning Services",
      description: "Deep cleaning & sanitization",
      bgColor: "bg-pink-100",
      buttonColor: "bg-pink-600 hover:bg-pink-700",
    },
    {
      title: "Expert Repair Services",
      description: "Electrical, plumbing & wooden repairs",
      bgColor: "bg-green-100",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Helper Services",
      description: "Reliable & professional",
      bgColor: "bg-blue-100",
      buttonColor: " bg-gray-700 hover:bg-gray-900",
      variant: "secondary",
    },
  ],

  // New and noteworthy services
  newServices: [
    {
      title: "Electronic Repair",
      image: "./Professional-Electrician.webp",
      href: "/services", // Original href preserved
    },
    {
      title: "Car Wash Services",
      image: "/car-washing-services.webp", // Fixed path (was missing leading slash in original)
      href: "/services", // Original href preserved
    },
    {
      title: "Aya Mashi Services",
      image: "./ayamashi.webp",
      href: "/services",
    },
    {
      title: "Maid Services",
      image: "./maid.webp",
      href: "/services",
    },
  ],

  // Most booked services
  popularServices: [
    {
      title: "Plumbing Repair",
      description: "Professional plumbing solutions",
      image: "./plumber.webp",
      href: "/services",
    },
    {
      title: "Cleaning Services",
      description: "Complete home cleaning",
      image: "./cleaning-services.webp",
      href: "/services",
    },
    {
      title: "Electrical Repair",
      description: "Safe electrical installations",
      image: "./Professional-Electrician.webp",
      href: "/services",
    },
    {
      title: "Helper Services",
      description: "General assistance services",
      image: "./helper-services.webp",
      href: "/services",
    },
  ],

  // Hero section images
  heroImages: [
    {
      src: "./maid.webp",
      alt: "Helper service",
      className: "w-full h-48 object-cover rounded-lg",
    },
    {
      src: "./car-washing-services.webp",
      alt: "Cleaning service",
      className: "w-full h-36 object-cover rounded-lg",
    },
    {
      src: "./cleaning-services.webp",
      alt: "Maid service",
      className: "w-full h-36 object-cover rounded-lg",
    },
    {
      src: "./Professional-Electrician.webp",
      alt: "Repair service",
      className: "w-full h-48 object-cover rounded-lg",
    },
  ],

  // CTA section data
  ctaSection: {
    title: "Bathroom Cleaning Services",
    subtitle:
      "Experience the best in bathroom cleaning with our professional services.",
    buttonText: "Book now",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    image: {
      src: "./bathroom-cleaning-service.webp",
      alt: "Professional cleaning",
    },
  },

  // Final CTA section
  finalCta: {
    title: "Ready to Book Your Home Service?",
    subtitle:
      "Get started today with our professional home services and let our experts take care of your household needs",
    buttons: [
      {
        text: "Book Consultation",
        icon: "phone",
        type: "primary",
        calData: {
          namespace: "primeghar",
          link: "ayush-paul/primeghar",
          config: '{"layout":"month_view"}',
        },
      },
      {
        text: "Email Us",
        icon: "mail",
        type: "secondary",
        href: "mailto:primegharofficial@gmail.com",
      },
    ],
  },
};
