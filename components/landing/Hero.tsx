// NO 'use client' - This stays server-rendered for SEO!

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 bg-hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Static content - perfect for SEO */}
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 text-white">
          Professional Home Repair Services
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Licensed professionals, fast quotes, and satisfaction guaranteed. Get
          your home repairs done right the first time.
        </p>

        {/* Static buttons - no animations needed for SEO */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="default" asChild>
            <a href="tel:+15551234567">Call Now: (555) 123-4567</a>
          </Button>
          <Button size="lg" variant="secondary">
            Get Free Quote
          </Button>
        </div>

        {/* Static trust indicators - great for SEO */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Same-Day Service</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">5-Star Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
