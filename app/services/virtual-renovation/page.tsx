import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Sparkles,
  TrendingUp,
  Layers,
} from "lucide-react";
import { cormorant } from "@/app/components/home/services-data";
import { pageMetadata } from "@/app/lib/seo";
import ScrollArrow from "./_components/ScrollArrow";

export const metadata = pageMetadata({
  title: "Virtual Renovation for Properties | PrimeGhar",
  description:
    "Sell your unfinished or under-construction property with stunning photorealistic renovation visuals from PrimeGhar. Help buyers see the finished vision before it exists.",
  path: "/services/virtual-renovation",
  keywords: [
    "virtual renovation property",
    "under construction property visuals",
    "sell unfinished property India",
    "photorealistic renovation renders",
    "pre-construction property marketing",
  ],
  ogDescription:
    "Turn an unfinished construction into a stunning completed property visual — sell the vision before the build is done.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Virtual Renovation",
  provider: {
    "@type": "Organization",
    name: "PrimeGhar",
  },
  description:
    "Photorealistic virtual renovation renders that help property owners sell under-construction or unfinished properties by showing buyers exactly what the finished space will look like.",
  serviceType: "Real Estate Visual Services",
  areaServed: "Worldwide",
};

const benefits = [
  {
    Icon: Building2,
    title: "Sell Before Completion",
    description:
      "Don't wait for the build to finish. Start marketing the moment you have photos or plans.",
  },
  {
    Icon: Sparkles,
    title: "Show the Full Vision",
    description:
      "Buyers struggle to imagine an empty shell. We show them the finished home — in full detail.",
  },
  {
    Icon: TrendingUp,
    title: "Command Higher Prices",
    description:
      "Listings with compelling finished visuals attract more interest and justify stronger asking prices.",
  },
  {
    Icon: Layers,
    title: "Any Stage of Build",
    description:
      "Plot of land, bare concrete, or mid-renovation — we work from whatever you can share.",
  },
];

const projectTypes = [
  {
    label: "Under Construction",
    description:
      "Bare structure or slab — we render the completed interior and exterior.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Existing Space Refresh",
    description:
      "Update finishes, flooring, paint, and fixtures without lifting a hammer.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Exterior Transformation",
    description:
      "New façade, landscaping, or paint — show the curb appeal before the work begins.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Open Plan Conversion",
    description:
      "Visualise walls removed, spaces merged, layouts reconfigured.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format&fit=crop",
  },
];

const steps = [
  {
    num: "01",
    title: "Share What You Have",
    description:
      "Photos, floor plans, architectural drawings, or even a rough sketch — we work with any starting point.",
  },
  {
    num: "02",
    title: "Define the Vision",
    description:
      "Tell us the finishes, materials, layout, and style you're aiming for. We handle the rest.",
  },
  {
    num: "03",
    title: "Receive Your Renders",
    description:
      "Photorealistic finished visuals arrive in your inbox, ready for listings, investor decks, or planning applications.",
  },
];

export default function VirtualRenovationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero: full-viewport video ─────────────────────────── */}
      <section className="relative h-screen min-h-[580px]">
        <video
          src="https://r2.vidzflow.com/source/bd247db7-5181-41d4-b0ce-11f0ae3b7243.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Virtual renovation transformation demonstration"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(10,16,30,0.92) 0%, rgba(10,16,30,0.45) 28%, transparent 58%), linear-gradient(to bottom, rgba(10,16,30,0.55) 0%, transparent 20%)",
          }}
        />

        {/* Breadcrumb */}
        <div className="absolute top-0 left-0 right-0 pt-28 px-6 sm:px-10 md:px-16 lg:px-20">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/40">
              <li>
                <Link
                  href="/"
                  className="hover:text-white/80 transition-colors pointer-events-auto"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/20">
                ›
              </li>
              <li className="text-white/60" aria-current="page">
                Virtual Renovation
              </li>
            </ol>
          </nav>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 md:px-16 lg:px-20 pb-6 md:pb-10">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-16">
              <div className="pointer-events-none">
                <p className="text-[10px] tracking-[0.35em] uppercase text-blue-300/70 font-semibold mb-4">
                  Service — 04
                </p>
                <h1
                  className={`${cormorant.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05]`}
                >
                  From Unfinished
                  <br />
                  <em className="text-blue-200">to Unforgettable.</em>
                </h1>
              </div>

              <div className="flex flex-col gap-5 md:items-end shrink-0 md:max-w-xs">
                <p className="text-sm text-white/55 leading-relaxed pointer-events-none">
                  Turn an idea into reality with stunning visuals — it
                  doesn&rsquo;t matter if the property isn&rsquo;t finished
                  building yet.
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
                Sell the Vision,
                <br />
                <em>Not the Shell.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex items-end">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                Buyers cannot fall in love with bare concrete. Give them
                something to fall in love with — a finished, furnished,
                photorealistic version of what they&rsquo;re buying into.
              </p>
            </div>
          </div>

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

      {/* ── Project Types ─────────────────────────────────────── */}
      <section
        aria-labelledby="projects-heading"
        className="bg-[#F7F7F7] px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24 mb-14">
            <div className="md:w-1/2 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
                  What We Transform
                </span>
                <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
              </div>
              <h2
                id="projects-heading"
                className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
              >
                Any Property.
                <br />
                <em>Any Stage.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex items-end">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                Whether you&rsquo;re selling land, a mid-build, or a tired
                existing property — we make it look like the finished article.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {projectTypes.map(({ label, description, image }) => (
              <div key={label} className="group flex flex-col gap-3">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-gray-200">
                  <img
                    src={image}
                    alt={`${label} virtual renovation example`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-xs font-semibold tracking-wide leading-tight">
                      {label}
                    </p>
                    <p className="text-white/60 text-[10px] mt-0.5 leading-tight">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it Works ─────────────────────────────────────── */}
      <section
        aria-labelledby="process-heading"
        className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
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
            Your Vision
            <br />
            <em>in Three Steps</em>
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
              Share your project details and we&rsquo;ll show you what&rsquo;s
              possible — before you spend a penny on the build.
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
