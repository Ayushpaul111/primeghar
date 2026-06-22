import Link from "next/link";
import { ArrowRight, Palette, ScanEye, Zap, Banknote } from "lucide-react";
import { cormorant } from "@/app/components/home/services-data";
import { pageMetadata } from "@/app/lib/seo";
import ScrollArrow from "./_components/ScrollArrow";

export const metadata = pageMetadata({
  title: "Virtual Staging & Furnishing for Properties | PrimeGhar",
  description:
    "Transform empty rooms into beautifully furnished spaces with PrimeGhar's virtual staging service. Photorealistic renders delivered in 48–72 hours — a fraction of physical staging costs.",
  path: "/services/virtual-staging",
  keywords: [
    "virtual staging property",
    "virtual furnishing real estate",
    "digital staging empty property",
    "furnished property photos India",
    "virtual interior design for selling",
  ],
  ogTitle: "Virtual Staging & Furnishing | PrimeGhar",
  ogDescription:
    "Turn empty rooms into fully furnished homes — photorealistic virtual staging that helps buyers fall in love instantly.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Virtual Staging & Furnishing",
  provider: {
    "@type": "Organization",
    name: "PrimeGhar",
  },
  description:
    "Photorealistic virtual staging that transforms vacant properties into beautifully furnished homes. Delivered in 48–72 hours at a fraction of physical staging costs.",
  serviceType: "Real Estate Visual Services",
  areaServed: "Worldwide",
};

const benefits = [
  {
    Icon: ScanEye,
    title: "Photorealistic Results",
    description:
      "Every render is indistinguishable from a professional interior shoot — furniture, lighting, shadows, all accurate.",
  },
  {
    Icon: Palette,
    title: "Any Style, Any Room",
    description:
      "Modern, Scandinavian, Classic, or Industrial — we match the aesthetic to your target buyer.",
  },
  {
    Icon: Zap,
    title: "48–72 Hour Delivery",
    description:
      "Fast turnaround without cutting corners. Rush delivery available for time-sensitive listings.",
  },
  {
    Icon: Banknote,
    title: "A Fraction of the Cost",
    description:
      "Physical staging runs thousands. Virtual staging delivers the same impact at a fraction of the price.",
  },
];

const styles = [
  {
    label: "Minimalist Modern",
    description: "Clean lines, neutral tones, open space",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Warm Scandinavian",
    description: "Light wood, soft textiles, natural light",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Classic Elegance",
    description: "Rich materials, traditional forms, timeless appeal",
    image:
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Contemporary Urban",
    description: "Bold accents, mixed materials, curated detail",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80&auto=format&fit=crop",
  },
];

const steps = [
  {
    num: "01",
    title: "Share Your Photos",
    description:
      "Send us photos of your empty or sparsely furnished rooms. We'll advise on angles and lighting if needed.",
  },
  {
    num: "02",
    title: "Pick Your Style",
    description:
      "Choose a design direction — modern, classic, Scandinavian, or let us recommend based on the property type.",
  },
  {
    num: "03",
    title: "Receive Your Renders",
    description:
      "High-resolution furnished images land in your inbox within 48–72 hours, ready for any listing platform.",
  },
];

export default function VirtualStagingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero: full-viewport video ─────────────────────────── */}
      <section className="relative h-screen min-h-[580px]">
        {/* Demo video fills the viewport */}
        <video
          src="https://r2.vidzflow.com/source/0df11fe3-fb6f-4a6b-b34f-6833399fb85e.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Virtual staging transformation demonstration"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient scrim */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(10,16,30,0.92) 0%, rgba(10,16,30,0.45) 28%, transparent 58%), linear-gradient(to bottom, rgba(10,16,30,0.55) 0%, transparent 20%)",
          }}
        />

        {/* Top: breadcrumb */}
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
                Virtual Furnishing
              </li>
            </ol>
          </nav>
        </div>

        {/* Bottom: heading + description + CTA + scroll arrow */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 md:px-16 lg:px-20 pb-6 md:pb-10">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6 md:gap-8">
            {/* Heading + CTA row */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-16">
              <div className="pointer-events-none">
                <p className="text-[10px] tracking-[0.35em] uppercase text-blue-300/70 font-semibold mb-4">
                  Service — 02
                </p>
                <h1
                  className={`${cormorant.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05]`}
                >
                  Turn an Empty Property
                  <br />
                  into a <em className="text-blue-200">Fully Furnished Home</em>
                </h1>
              </div>

              <div className="flex flex-col gap-5 md:items-end shrink-0 md:max-w-xs">
                <p className="text-sm text-white/55 leading-relaxed pointer-events-none">
                  Photorealistic virtual furnishing that helps buyers visualise
                  the full potential of a vacant space — instantly.
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

            {/* Scroll arrow */}
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
                Buyers Fall in Love
                <br />
                <em>Before They Visit.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex items-end">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                An empty room asks buyers to imagine. A virtually staged room
                sells the lifestyle — and removes all doubt about what the space
                could be.
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

      {/* ── Styles We Offer ──────────────────────────────────── */}
      <section
        aria-labelledby="styles-heading"
        className="bg-[#F7F7F7] px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24 mb-14">
            <div className="md:w-1/2 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
                  Design Styles
                </span>
                <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
              </div>
              <h2
                id="styles-heading"
                className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
              >
                Every Style.
                <br />
                <em>Every Buyer.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex items-end">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                We tailor the staging style to match the property and attract
                the right buyer. Tell us your vision — or let us recommend.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {styles.map(({ label, description, image }) => (
              <div key={label} className="group flex flex-col gap-3">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-gray-200">
                  <img
                    src={image}
                    alt={`${label} virtual staging example`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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
            Ready in
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
              Tell us about your property and preferred style — we&rsquo;ll walk
              you through exactly what&rsquo;s involved, no commitment required.
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
