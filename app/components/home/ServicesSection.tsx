import { SERVICES, cormorant } from "./services-data";
import ServicesScrollStack from "./ServicesScrollStack";

export default function ServicesSection() {
  return (
    <ServicesScrollStack services={SERVICES}>
      <div className="text-center px-6 sm:px-10 md:px-16 lg:px-20 pt-10 sm:pt-16 pb-4 sm:pb-8 shrink-0">
        <div className="flex items-center justify-center gap-3 mb-3 sm:mb-5">
          <div className="h-px w-10 bg-[#022b60]/30" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
            Our Services
          </span>
          <div className="h-px w-10 bg-[#022b60]/30" />
        </div>
        <h2
          className={`${cormorant.className} text-3xl sm:text-5xl md:text-6xl font-semibold text-black leading-[1.1] max-w-2xl mx-auto`}
        >
          Smart Solutions For
          <br />
          <em>Every Property</em>
        </h2>
      </div>
    </ServicesScrollStack>
  );
}
