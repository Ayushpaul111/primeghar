"use client";

import { useRef } from "react";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600"],
  subsets: ["latin"],
});

type ServiceMedia =
  | { contentType: "image"; src: string }
  | { contentType: "video"; src: string; poster?: string };

type Service = {
  num: string;
  path: string;
  label: string;
  title: string;
  description: string;
  media: ServiceMedia;
};

const SERVICES: Service[] = [
  {
    num: "01",
    path: "/services/360-virtual-tour",
    label: "360° Virtual Tour",
    title: "Showcase Your Property from Every Angle",
    description:
      "Quick and easy, no subscription required. Let buyers explore every room with immersive 360° tours that bring your property to life.",
    media: {
      contentType: "video",
      src: "https://r2.vidzflow.com/source/9d32ba0a-833d-4cbb-9ff0-f4e760475f67.mp4",
    },
  },
  {
    num: "02",
    path: "/services/virtual-staging",
    label: "Virtual Furnishing",
    title: "Turn an Empty Property into a Fully Furnished Home",
    description:
      "Transform a vacant property into a beautifully furnished home — helping buyers visualise the full potential instantly.",
    media: {
      contentType: "video",
      src: "https://r2.vidzflow.com/source/0df11fe3-fb6f-4a6b-b34f-6833399fb85e.mp4",
    },
  },
  {
    num: "03",
    path: "/services/item-removal",
    label: "Item Removal & Cleaning",
    title: "Remove Clutter. Present Perfection.",
    description:
      "Remove unwanted items from your property photos for a clean, polished presentation every time.",
    media: {
      contentType: "video",
      src: "https://r2.vidzflow.com/source/ba4cb44a-6ae1-4dcd-95d2-5a22b0aba69a.mp4",
    },
  },
  {
    num: "04",
    path: "/services/virtual-renovation",
    label: "Virtual Renovation",
    title: "From Un-finished to Unforgettable",
    description:
      "Turn an idea into reality with stunning 360° visuals — it doesn't matter if the property isn't finished building yet.",
    media: {
      contentType: "video",
      src: "https://r2.vidzflow.com/source/bd247db7-5181-41d4-b0ce-11f0ae3b7243.mp4",
    },
  },
];

// ─── Stacked Card ─────────────────────────────────────────────────────────────

function StackedCard({
  service,
  index,
  total,
  scrollYProgress,
}: Readonly<{
  service: Service;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}>) {
  // Each card (except the first) slides up during its entry window
  const entryStart = index === 0 ? 0 : index / total - 0.05;
  const entryEnd = index === 0 ? 0 : index / total + 0.09;

  const y = useTransform(
    scrollYProgress,
    index === 0 ? [0, 0.001] : [entryStart, entryEnd],
    index === 0 ? ["0%", "0%"] : ["108%", "0%"],
  );

  // Previous card scales down as the next card slides in
  const isLast = index === total - 1;
  const nextEntryStart = (index + 1) / total - 0.05;
  const nextEntryEnd = (index + 1) / total + 0.09;

  const scale = useTransform(
    scrollYProgress,
    isLast ? [0, 1] : [nextEntryStart, nextEntryEnd],
    isLast ? [1, 1] : [1, 0.93],
  );

  return (
    <motion.div
      style={{ y, scale, zIndex: index }}
      className="absolute inset-0"
    >
      <div className="h-full bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl flex flex-col sm:flex-row">
        {/* Media */}
        <div className="relative h-[45%] sm:h-full sm:w-[58%] shrink-0 overflow-hidden">
          {service.media.contentType === "video" ? (
            <video
              src={service.media.src}
              poster={service.media.contentType === "video" ? service.media.poster : undefined}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover p-3 rounded-3xl"
            />
          ) : (
            <img
              src={service.media.src}
              alt={service.label}
              className="absolute inset-0 w-full h-full object-cover p-3 rounded-3xl"
            />
          )}
          <span className="absolute top-4 left-5 text-white/80 text-[11px] font-bold tracking-[0.28em] select-none drop-shadow">
            {service.num}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-2 sm:gap-3 p-5 sm:p-10 md:p-12 flex-1 min-w-0">
          <p className="text-[10px] tracking-[0.32em] uppercase text-[#022b60] font-semibold">
            {service.label}
          </p>
          <h3
            className={`${cormorant.className} text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-semibold text-black leading-tight`}
          >
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm line-clamp-3 sm:line-clamp-none">
            {service.description}
          </p>
          <Link
            href={service.path}
            className="mt-1 sm:mt-2 self-start inline-flex items-center gap-2 bg-[#022b60] text-white text-[11px] font-semibold tracking-[0.13em] uppercase px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-[#03346b] transition-colors"
          >
            Explore Service
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    // Tall section gives scroll space for each card transition
    <section
      ref={sectionRef}
      className="bg-[#F7F7F7]"
      style={{ height: `${(SERVICES.length + 1) * 100}vh` }}
    >
      {/* Sticky viewport — holds the heading and card stack */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Heading (stays fixed while cards animate below) */}
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

        {/* Card stack — cards slide up into this container and stack */}
        <div className="relative flex-1 px-3 sm:px-8 md:px-14 lg:px-18 pb-4 sm:pb-8">
          {SERVICES.map((service, i) => (
            <StackedCard
              key={service.path}
              service={service}
              index={i}
              total={SERVICES.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
