import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cormorant } from "./services-data";

type Industry = {
  label: string;
  tagline: string;
  image: string;
  href?: string;
  badge?: string;
};

const industries: Industry[] = [
  {
    label: "360° Hotels",
    tagline:
      "Banquet halls, suites and pools — turn browsers into direct bookings.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80&auto=format&fit=crop",
    href: "/services/360-hotels-tour",
  },
  {
    label: "360° Institutions",
    tagline:
      "Let students and parents walk your campus — and win admissions from anywhere.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80&auto=format&fit=crop",
    href: "/services/360-campus-tour",
  },
  {
    label: "360° Hospitals",
    tagline:
      "Show patients and families your facilities and build trust before they arrive.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=900&q=80&auto=format&fit=crop",
    badge: "Coming Soon",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 pt-16 pb-20">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24 mb-14 md:mb-16">
        {/* Left — label + heading */}
        <div className="md:w-1/2 shrink-0">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
              New — Beyond Real Estate
            </span>
            <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
          </div>

          <h2
            className={`${cormorant.className} text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
          >
            Now Bringing Spaces
            <br />
            to Life for
            <br />
            <em>Every Industry.</em>
          </h2>
        </div>

        {/* Right — description */}
        <div className="mt-8 md:mt-14 md:w-1/2 flex items-end">
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
            The same immersive 360° experience that sells properties now showcases
            hotels, campuses and hospitals — letting people explore your space
            from anywhere, long before they arrive.
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {industries.map((industry) => {
          const card = (
            <div className="group flex flex-col h-full">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100">
                <img
                  src={industry.image}
                  alt={industry.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {industry.badge && (
                  <span className="absolute top-4 right-4 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[9px] font-semibold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full">
                    {industry.badge}
                  </span>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className={`${cormorant.className} text-2xl sm:text-3xl font-semibold text-white leading-tight mb-2`}
                  >
                    {industry.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed max-w-[18rem] mb-4">
                    {industry.tagline}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] uppercase text-white">
                    {industry.href ? "Explore" : "Enquire"}
                    <span className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-[#022b60]">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          );

          if (industry.href) {
            return (
              <Link
                key={industry.label}
                href={industry.href}
                className="block h-full"
              >
                {card}
              </Link>
            );
          }

          // No dedicated page yet — open the booking modal on click.
          return (
            <button
              key={industry.label}
              type="button"
              className="block h-full text-left w-full cursor-pointer"
              data-cal-namespace="primeghar"
              data-cal-link="ayush-paul/primeghar"
              data-cal-config='{"layout":"month_view"}'
            >
              {card}
            </button>
          );
        })}
      </div>
    </section>
  );
}
