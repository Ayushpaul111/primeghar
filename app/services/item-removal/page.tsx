import Link from "next/link";
import { ArrowRight, Wand2, Camera, Zap, CheckCircle2 } from "lucide-react";
import { cormorant } from "@/app/components/home/services-data";
import { pageMetadata } from "@/app/lib/seo";
import ScrollArrow from "./_components/ScrollArrow";

export const metadata = pageMetadata({
  title: "Item Removal & Virtual Cleaning for Property Photos | PrimeGhar",
  description:
    "Remove clutter, furniture, vehicles, and unwanted objects from your property photos with PrimeGhar. Clean, polished listing images delivered in 48 hours.",
  path: "/services/item-removal",
  keywords: [
    "item removal property photos",
    "virtual cleaning real estate",
    "remove clutter from property images",
    "object removal real estate photography",
    "clean property listing photos India",
  ],
  ogTitle: "Item Removal & Virtual Cleaning | PrimeGhar",
  ogDescription:
    "Remove unwanted items from your property photos for a clean, polished presentation every time.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Item Removal & Virtual Cleaning",
  provider: {
    "@type": "Organization",
    name: "PrimeGhar",
  },
  description:
    "Professional photo editing to remove clutter, furniture, vehicles, and unwanted objects from property listing images. Clean, polished results delivered in 48 hours.",
  serviceType: "Real Estate Visual Services",
  areaServed: "Worldwide",
};

const benefits = [
  {
    Icon: Wand2,
    title: "Remove Anything",
    description:
      "Furniture, cars, cables, rubbish, personal items, garden clutter — if it shouldn't be there, we remove it.",
  },
  {
    Icon: Camera,
    title: "Listing-Ready Images",
    description:
      "Every result is high-resolution and immediately ready for MLS, portals, social media, and print.",
  },
  {
    Icon: Zap,
    title: "48-Hour Turnaround",
    description:
      "Fast, reliable delivery so your listing goes live without delays. Rush turnaround available on request.",
  },
  {
    Icon: CheckCircle2,
    title: "Pixel-Perfect Finish",
    description:
      "No visible edits, no blurry patches — our results are seamless and indistinguishable from a clean shoot.",
  },
];

const removables = [
  {
    category: "Furniture & Appliances",
    items: [
      "Sofas & chairs",
      "Old appliances",
      "Excess furniture",
      "Mattresses",
    ],
  },
  {
    category: "Personal Belongings",
    items: [
      "Clothing & bags",
      "Kids' toys",
      "Wall decorations",
      "Personal photos",
    ],
  },
  {
    category: "Vehicles & Equipment",
    items: [
      "Cars & motorbikes",
      "Garden machinery",
      "Construction equipment",
      "Caravans",
    ],
  },
  {
    category: "Outdoor & Construction",
    items: [
      "Rubbish & debris",
      "Scaffolding",
      "Cables & hoses",
      "Garden clutter",
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Share Your Photos",
    description:
      "Upload your existing property images — any format, any resolution. We work with what you have.",
  },
  {
    num: "02",
    title: "Mark What Goes",
    description:
      "Tell us what to remove, or let us assess the images ourselves. We flag anything that could hurt the listing.",
  },
  {
    num: "03",
    title: "Receive Clean Images",
    description:
      "Get back polished, clutter-free photos within 48 hours, ready to publish on any platform.",
  },
];

export default function ItemRemovalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero: full-viewport video ─────────────────────────── */}
      <section className="relative h-screen min-h-[580px]">
        <video
          src="https://r2.vidzflow.com/source/ba4cb44a-6ae1-4dcd-95d2-5a22b0aba69a.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Item removal and virtual cleaning demonstration"
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
                Item Removal & Cleaning
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
                  Service — 03
                </p>
                <h1
                  className={`${cormorant.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05]`}
                >
                  Remove Clutter.
                  <br />
                  <em className="text-blue-200">Present Perfection.</em>
                </h1>
              </div>

              <div className="flex flex-col gap-5 md:items-end shrink-0 md:max-w-xs">
                <p className="text-sm text-white/55 leading-relaxed pointer-events-none">
                  Remove unwanted items from your property photos for a clean,
                  polished presentation that sells the space — not the mess.
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
                First Impressions
                <br />
                <em>Are Everything.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex items-end">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                Buyers scroll fast. Cluttered photos stop them dead — and not in
                a good way. Clean images hold attention, build trust, and drive
                enquiries.
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

      {/* ── What We Remove ───────────────────────────────────── */}
      <section
        aria-labelledby="removables-heading"
        className="bg-[#F7F7F7] px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24 mb-14">
            <div className="md:w-1/2 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
                  What We Handle
                </span>
                <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
              </div>
              <h2
                id="removables-heading"
                className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
              >
                If It&rsquo;s in the Shot,
                <br />
                <em>We Can Remove It.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex items-end">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                No object is too complex. From a single item to a full room
                clearance — we handle it seamlessly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {removables.map(({ category, items }) => (
              <div
                key={category}
                className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100"
              >
                <h3 className="text-xs font-semibold text-[#022b60] tracking-[0.2em] uppercase mb-4">
                  {category}
                </h3>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-[#022b60]/30 shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
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
            Clean in
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
              Share your photos and we&rsquo;ll show you exactly what&rsquo;s
              possible — no commitment, no cost.
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
