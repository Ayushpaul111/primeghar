import { ArrowRight, Globe, Eye, Clock, BadgeCheck } from "lucide-react";
import { cormorant } from "@/app/components/home/services-data";
import { pageMetadata } from "@/app/lib/seo";
import ScrollArrow from "./_components/ScrollArrow";

export const metadata = pageMetadata({
  title: "360° Virtual Tour for Properties | PrimeGhar",
  description:
    "Let buyers explore every room remotely with PrimeGhar's immersive 360° virtual property tours. No subscription required — one-time pricing, delivered in 48–72 hours.",
  path: "/services/360-virtual-tour",
  keywords: [
    "360 virtual tour property",
    "virtual property tour India",
    "real estate virtual tour",
    "immersive property walkthrough",
    "360 tour sell house faster",
  ],
  ogDescription:
    "Immersive 360° tours that let buyers explore every room — no subscription required.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "360° Virtual Tour",
  provider: {
    "@type": "Organization",
    name: "PrimeGhar",
  },
  description:
    "Immersive 360° virtual property tours that let buyers explore every room from anywhere in the world. No subscription required, one-time pricing.",
  serviceType: "Real Estate Visual Services",
  areaServed: "Worldwide",
};

const benefits = [
  {
    Icon: Globe,
    title: "Global Reach",
    description:
      "Buyers from anywhere in the world can explore your property in full detail — no travel, no barriers.",
  },
  {
    Icon: Eye,
    title: "Immersive Experience",
    description:
      "An interactive walkthrough creates a connection with your property that static photos simply cannot.",
  },
  {
    Icon: Clock,
    title: "Always Available",
    description:
      "Your tour is live around the clock. Buyers can revisit as many times as they need, at any hour.",
  },
  {
    Icon: BadgeCheck,
    title: "No Subscription",
    description:
      "Simple one-time pricing. No recurring fees, no platform lock-in, no surprises.",
  },
];

const steps = [
  {
    num: "01",
    title: "Share Your Media",
    description:
      "Send us your existing photos or footage. We'll guide you on what works best for an optimal tour.",
  },
  {
    num: "02",
    title: "We Build the Tour",
    description:
      "Our team processes everything into a polished, fully interactive 360° walkthrough experience.",
  },
  {
    num: "03",
    title: "Publish Anywhere",
    description:
      "Receive an embeddable link compatible with all major listing portals, websites, and social media.",
  },
];

export default function VirtualTourPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero: full-viewport 360° experience ──────────────── */}
      <section className="relative h-screen min-h-[580px]">
        {/* Live 360° tour fills the entire viewport */}
        <iframe
          src="https://www.klapty.com/tour/tunnel/PlF05v7VZn"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr"
          aria-label="Interactive 360° virtual property tour"
          className="absolute inset-0 w-full h-full"
        />

        {/* Gradient scrim — heavy at bottom, fades to clear by mid-screen */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(10,16,30,0.92) 0%, rgba(10,16,30,0.45) 28%, transparent 58%), linear-gradient(to bottom, rgba(10,16,30,0.6) 0%, transparent 22%)",
          }}
        />

        {/* Top: breadcrumb */}
        {/* <div className="absolute top-0 left-0 right-0 pt-28 px-6 sm:px-10 md:px-16 lg:px-20">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/40 pointer-events-auto">
              <li>
                <Link
                  href="/"
                  className="hover:text-white/80 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/20">
                ›
              </li>
              <li className="text-white/60" aria-current="page">
                360° Virtual Tour
              </li>
            </ol>
          </nav>
        </div> */}

        {/* Bottom: heading + description + CTA + scroll arrow */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 md:px-16 lg:px-20 pb-6 md:pb-10">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6 md:gap-8">
            {/* Heading + CTA row */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-16">
              <div className="pointer-events-none">
                <p className="text-[10px] tracking-[0.35em] uppercase text-blue-300/70 font-semibold mb-4">
                  Service — 01
                </p>
                <h1
                  className={`${cormorant.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05]`}
                >
                  Showcase Your Property
                  <br />
                  <em className="text-blue-200">from Every Angle</em>
                </h1>
              </div>

              {/* Description + CTA */}
              <div className="flex flex-col gap-5 md:items-end shrink-0 md:max-w-xs">
                <p className="text-sm text-white/55 leading-relaxed pointer-events-none">
                  Quick and easy — no subscription required. Let buyers explore
                  every room with an immersive tour like this one.
                </p>
                <button
                  className="pointer-events-auto self-start md:self-auto inline-flex items-center gap-2 bg-white text-[#022b60] text-[11px] font-semibold tracking-[0.18em] uppercase px-7 py-3.5 rounded-full hover:bg-blue-50 transition-colors"
                  data-cal-namespace="primeghar"
                  data-cal-link="ayush-paul/primeghar"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book a Free Call
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Scroll arrow — centered below content */}
            <div className="flex justify-center">
              <ScrollArrow targetId="benefits" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section
        id="benefits"
        aria-labelledby="benefits-heading"
        className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24 mb-16">
            <div className="md:w-1/2 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
                  Why It Works
                </span>
                <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
              </div>
              <h2
                id="benefits-heading"
                className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
              >
                More Views.
                <br />
                <em>More Serious Buyers.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex items-end">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                A 360° tour filters out casual browsers and draws in buyers who
                have already explored the space — and are ready to act.
              </p>
            </div>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {benefits.map(({ Icon, title, description }) => (
              <article key={title} className="bg-white p-8 flex flex-col gap-5">
                <div className="w-10 h-10 rounded-xl bg-[#022b60]/8 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#022b60]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-black mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it Works ─────────────────────────────────────── */}
      <section
        aria-labelledby="process-heading"
        className="bg-[#F7F7F7] px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
              The Process
            </span>
            <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
          </div>
          <h2
            id="process-heading"
            className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1] mb-16 max-w-xs`}
          >
            Live in
            <br />
            <em>Three Steps</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {steps.map(({ num, title, description }) => (
              <div
                key={num}
                className="p-8 md:p-10 lg:p-12 flex flex-col gap-6"
              >
                <span className="text-[3.5rem] font-bold text-[#022b60]/10 leading-none select-none">
                  {num}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-black mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#141414] rounded-b-3xl lg:rounded-b-[50px] px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-28">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/30 font-semibold mb-5">
              Ready to Get Started?
            </p>
            <h2
              className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1]`}
            >
              Book a Free
              <br />
              <em className="text-blue-300">Consultation</em>
            </h2>
            <p className="mt-4 text-sm text-white/40 leading-relaxed max-w-sm">
              Tell us about your property and we&rsquo;ll walk you through
              exactly what&rsquo;s involved — no commitment required.
            </p>
          </div>
          <button
            className="shrink-0 self-start md:self-center inline-flex items-center gap-2 bg-white text-[#022b60] text-[11px] font-semibold tracking-[0.18em] uppercase px-8 py-4 rounded-full hover:bg-blue-50 transition-colors"
            data-cal-namespace="primeghar"
            data-cal-link="ayush-paul/primeghar"
            data-cal-config='{"layout":"month_view"}'
          >
            Book a Call
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </>
  );
}
