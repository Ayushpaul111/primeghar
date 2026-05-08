import { Cormorant_Garamond } from "next/font/google";
import { ArrowRight } from "lucide-react";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const properties = [
  {
    label: "Villa",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Apartment Flats",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Houses",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Unfinished Property",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop",
  },
];

export default function PropertiesSection() {
  return (
    <section className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-16">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24 mb-14 md:mb-16">
        {/* Left — label + heading */}
        <div className="md:w-1/2 shrink-0">
          {/* Label with line */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
              What We Cover
            </span>
            <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
          </div>

          <h2
            className={`${cormorant.className} text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
          >
            It Does Not Matter
            <br />
            What You&rsquo;re Selling
            <br />
            <em>We Sell It Smartly.</em>
          </h2>
        </div>

        {/* Right — description */}
        <div className="mt-8 md:mt-14 md:w-1/2 flex items-end">
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
            From luxury villas to unfinished construction — our smart visual
            services transform any property into a compelling listing. We make
            buyers fall in love before they even step inside.
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {properties.map((property, i) => (
          <div key={i} className="group flex flex-col gap-3">
            {/* Image */}
            <div className="relative overflow-hidden rounded-sm aspect-[3/4] bg-gray-100">
              <img
                src={property.image}
                alt={property.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Footer row */}
            <div className="flex items-center justify-between px-1">
              <div>
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-black">
                  {property.label}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
