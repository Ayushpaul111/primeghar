import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop"
        alt="Luxury modern property - primeghar"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Cream gradient overlay — strong left, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#EDE8DC] from-20% via-[#EDE8DC]/70 via-50% to-transparent" />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col min-h-[80vh]">
        {/* Fixed header offset */}
        <div className="h-24 shrink-0" />

        {/* Hero copy */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-8">
          <h1
            className={`${anton.className} text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9rem] text-black uppercase leading-[0.92] max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl`}
          >
            Sell Your Property Faster &amp; Smarter
          </h1>

          <div className="mt-8 md:mt-10">
            <button
              className="bg-black text-white text-[11px] font-semibold tracking-[0.2em] uppercase px-7 py-3.5 md:px-8 md:py-4 hover:bg-neutral-800 transition-colors"
              data-cal-namespace="primeghar"
              data-cal-link="ayush-paul/primeghar"
              data-cal-config='{"layout":"month_view"}'
            >
              Book a Call
            </button>
          </div>

          {/* Caption — visible only md+, sits below the button on right side of screen */}
          <p className="hidden md:block absolute bottom-28 right-8 lg:right-14 text-right text-white text-[11px] leading-relaxed max-w-47.5 drop-shadow">
            Secure, Stylish and Smart Visuals
            <br />
            —crafted to help you sell
            <br />
            your property faster
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex items-stretch">
          {/* Rating card */}
          <div className="bg-white px-5 sm:px-7 py-4 sm:py-6 flex flex-col justify-center shrink-0">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-none">
                4.5
              </span>
              <span className="text-yellow-400 text-lg sm:text-xl leading-none">
                ★
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-gray-500 mt-1.5 max-w-27.5 sm:max-w-32.5 leading-snug">
              Excellence Backed by Real Client Feedback
            </p>
          </div>

          {/* Numbers */}
          <div className="flex-1 bg-black/65 backdrop-blur-sm px-5 sm:px-8 md:px-14 py-4 sm:py-6 flex flex-col justify-center min-w-0">
            <p className="text-white/50 text-[8px] sm:text-[9px] tracking-[0.25em] uppercase mb-2 sm:mb-3">
              Impact In Numbers
            </p>
            <div className="flex gap-4 sm:gap-8 md:gap-12">
              <div className="min-w-0">
                <p className="text-white text-xl sm:text-3xl md:text-4xl font-bold leading-none">
                  120+
                </p>
                <p className="text-white/50 text-[8px] sm:text-[9px] tracking-[0.12em] uppercase mt-1 sm:mt-2 leading-tight">
                  Completed
                  <br className="sm:hidden" /> Projects
                </p>
              </div>
              <div className="min-w-0">
                <p className="text-white text-xl sm:text-3xl md:text-4xl font-bold leading-none">
                  94%
                </p>
                <p className="text-white/50 text-[8px] sm:text-[9px] tracking-[0.12em] uppercase mt-1 sm:mt-2 leading-tight">
                  Client
                  <br className="sm:hidden" /> Satisfaction
                </p>
              </div>
              <div className="min-w-0">
                <p className="text-white text-xl sm:text-3xl md:text-4xl font-bold leading-none">
                  64+
                </p>
                <p className="text-white/50 text-[8px] sm:text-[9px] tracking-[0.12em] uppercase mt-1 sm:mt-2 leading-tight">
                  Years of
                  <br className="sm:hidden" /> Expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
