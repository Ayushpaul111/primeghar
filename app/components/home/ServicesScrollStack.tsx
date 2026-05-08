"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { cormorant, type Service } from "./services-data";

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function ProgressBar({
  scrollYProgress,
}: Readonly<{ scrollYProgress: MotionValue<number> }>) {
  const width = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.82, 0.92],
    [0, 1, 1, 0],
  );

  return (
    <motion.div
      style={{ opacity }}
      className="absolute top-0 left-0 right-0 z-20 pointer-events-none"
    >
      <div className="relative h-[3px] w-full bg-blue-900">
        <motion.div
          className="absolute right-0 top-0 h-full bg-white rounded-l-full"
          style={{ width }}
        />
      </div>
    </motion.div>
  );
}

// ─── Stacked Card ─────────────────────────────────────────────────────────────

function StackedCard({
  service,
  index,
  total,
  scrollYProgress,
  isActive,
}: Readonly<{
  service: Service;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  isActive: boolean;
}>) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  const entryStart = index === 0 ? 0 : index / total - 0.05;
  const entryEnd = index === 0 ? 0 : index / total + 0.09;

  const y = useTransform(
    scrollYProgress,
    index === 0 ? [0, 0.001] : [entryStart, entryEnd],
    index === 0 ? ["0%", "0%"] : ["108%", "0%"],
  );

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
      <div className="h-full bg-white border border-mauve-400/20 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl flex flex-col sm:flex-row">
        {/* Media */}
        <div className="relative h-[45%] sm:h-full sm:w-[58%] shrink-0 overflow-hidden">
          {service.media.contentType === "video" ? (
            <video
              ref={videoRef}
              src={service.media.src}
              poster={service.media.poster}
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

// ─── Scroll Stack ─────────────────────────────────────────────────────────────

export default function ServicesScrollStack({
  services,
  children,
}: Readonly<{
  services: Service[];
  children: React.ReactNode;
}>) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    let next = 0;
    for (let i = 1; i < services.length; i++) {
      if (v >= i / services.length - 0.05) next = i;
    }
    setActiveIndex(next);
  });

  return (
    <section
      ref={sectionRef}
      className="bg-[#F7F7F7]"
      style={{ height: `${(services.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        <ProgressBar scrollYProgress={scrollYProgress} />

        {/* Heading slot — rendered by the server component */}
        {children}

        {/* Card stack */}
        <div className="relative flex-1 px-3 sm:px-8 md:px-14 lg:px-18 pb-4 sm:pb-8">
          {services.map((service, i) => (
            <StackedCard
              key={service.path}
              service={service}
              index={i}
              total={services.length}
              scrollYProgress={scrollYProgress}
              isActive={i === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
