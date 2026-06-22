import {
  ArrowRight,
  MapPin,
  Wallet,
  Globe,
  Sparkles,
  Monitor,
  Share2,
  MessageCircle,
  Building2,
} from "lucide-react";
import { cormorant } from "@/app/components/home/services-data";
import { pageMetadata } from "@/app/lib/seo";
import ScrollArrow from "./_components/ScrollArrow";

export const metadata = pageMetadata({
  title: "360° Virtual Tours for Hotels & Hospitality | PrimeGhar",
  description:
    "Show guests the real experience before they book. PrimeGhar creates immersive 360° virtual tours for hotels — perfect for weddings, banquets, suites and Google Maps. One shoot, every channel.",
  path: "/services/360-hotels-tour",
  keywords: [
    "360 virtual tour hotels",
    "hotel virtual tour India",
    "wedding venue virtual tour",
    "banquet hall 360 tour",
    "google business profile virtual tour",
    "hotel marketing virtual tour",
  ],
  ogDescription:
    "Immersive 360° tours that let guests explore your hotel, banquet halls and suites before they ever arrive.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "360° Virtual Tours for Hotels & Hospitality",
  provider: {
    "@type": "Organization",
    name: "PrimeGhar",
  },
  description:
    "Immersive 360° virtual tours for hotels and hospitality venues — including banquet and wedding halls, suites, pools and spas — published to websites and Google Business Profiles to drive direct bookings.",
  serviceType: "Hospitality Visual Marketing",
  areaServed: "India",
};

const benefits = [
  {
    Icon: MapPin,
    title: "Google Maps Visibility",
    description:
      "Publish your tour straight to your Google Business Profile. When guests search hotels in your city, you show the experience while competitors show flat photos.",
  },
  {
    Icon: Wallet,
    title: "Less OTA Commission",
    description:
      "A confident, immersive website gives guests a reason to book direct — via WhatsApp, your booking page, or a call. Every shift off MakeMyTrip is margin saved.",
  },
  {
    Icon: Globe,
    title: "Booked From Anywhere",
    description:
      "Out-of-town families and guests can't always visit first. A 360° walkthrough lets them explore your venue from their phone — and decide with confidence.",
  },
  {
    Icon: Sparkles,
    title: "Premium Differentiation",
    description:
      "Most hotels claim luxury. Few prove it online. An immersive tour turns your reputation into something every visitor can actually see and feel.",
  },
];

const channels = [
  { Icon: Monitor, label: "Immersive embed for your website" },
  { Icon: MapPin, label: "Virtual tour on your Google Business listing" },
  { Icon: Share2, label: "Social content for Instagram, Facebook & LinkedIn" },
  { Icon: MessageCircle, label: "WhatsApp share link for sales inquiries" },
  { Icon: Building2, label: "A screen experience at your front desk or lobby" },
];

const spaces = [
  {
    label: "Banquet & Wedding Halls",
    description: "Decorated and undecorated — your highest-value spaces.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Suites & Premium Rooms",
    description: "The feel of space photos can never quite capture.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Pool & Outdoor Spaces",
    description: "Rooftop pools, lawns and terraces, fully immersive.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Spa & Wellness",
    description: "Set the mood before a single booking is made.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Restaurants, Bars & Clubs",
    description: "Ambience sells — let guests step inside it.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop",
  },
  {
    label: "Lobby & Common Areas",
    description: "The first impression, delivered before arrival.",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80&auto=format&fit=crop",
  },
];

export default function HotelsTourPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero: full-viewport 360° experience ──────────────── */}
      <section className="relative h-dvh min-h-[580px]">
        {/* Live 360° tour fills the entire viewport — swap with a hotel-specific tour when available */}
        <iframe
          src="https://www.klapty.com/tour/tunnel/PlF05v7VZn"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr"
          aria-label="Interactive 360° virtual hotel tour"
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

        {/* Bottom: heading + description + CTA + scroll arrow */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 md:px-16 lg:px-20 pb-6 md:pb-10">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-16">
              <div className="pointer-events-none">
                <p className="text-[10px] tracking-[0.35em] uppercase text-blue-300/70 font-semibold mb-4">
                  For Hotels &amp; Hospitality
                </p>
                <h1
                  className={`${cormorant.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05]`}
                >
                  Your hotel looks premium in person.
                  <br />
                  <em className="text-blue-200">Does it look that way online?</em>
                </h1>
              </div>

              <div className="flex flex-col gap-5 md:items-end shrink-0 md:max-w-xs">
                <p className="text-sm text-white/55 leading-relaxed pointer-events-none">
                  A 360° virtual tour closes the gap between what you offer and
                  what guests see before they decide to book.
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
              <ScrollArrow targetId="problem" />
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ──────────────────────────────────────── */}
      <section
        id="problem"
        aria-labelledby="problem-heading"
        className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24">
            <div className="md:w-1/2 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
                  The Problem
                </span>
                <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
              </div>
              <h2
                id="problem-heading"
                className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
              >
                You have
                <br />
                <em>10 seconds.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex flex-col gap-5">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                When a guest lands on your website, they make a judgment call in
                under ten seconds. If they can&rsquo;t see your rooms, your
                banquet hall, your pool — they move on to a competitor who shows
                more.
              </p>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                Photos flatten your space. A static gallery can&rsquo;t capture
                the feel of a grand banquet hall, a rooftop pool, or a premium
                suite. You end up underselling yourself every single day, on
                every platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Weddings & Banquets — the biggest opportunity ────── */}
      <section
        aria-labelledby="weddings-heading"
        className="bg-[#022b60] px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] tracking-[0.35em] uppercase text-blue-300 font-semibold">
              Your Highest-Value Opportunity
            </span>
            <div className="flex-1 h-px bg-white/20 max-w-16" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">
            <h2
              id="weddings-heading"
              className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1]`}
            >
              A room is worth
              <br />
              thousands.
              <br />
              <em className="text-blue-200">A wedding is worth lakhs.</em>
            </h2>

            <div className="flex flex-col gap-5 lg:max-w-md">
              <p className="text-sm sm:text-base text-white/65 leading-relaxed">
                Families planning weddings are often from out of town. They
                can&rsquo;t always visit before deciding. A 360° walkthrough of
                your decorated hall, wedding lawn, or banquet space lets them
                explore the venue from their phone, from anywhere.
              </p>
              <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                One wedding booking influenced by a virtual tour pays for your
                entire investment — many times over.
              </p>
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
                More Than a Tour.
                <br />
                <em>A Booking Engine.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex items-end">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                A single 360° tour works across visibility, differentiation and
                conversion — turning curious browsers into confident, direct
                bookings.
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

      {/* ── One Shoot, Every Channel ─────────────────────────── */}
      <section
        aria-labelledby="channels-heading"
        className="bg-[#F7F7F7] px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24">
            <div className="md:w-1/2 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
                  One Shoot. Every Channel.
                </span>
                <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
              </div>
              <h2
                id="channels-heading"
                className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
              >
                Shoot Once.
                <br />
                <em>Use Everywhere.</em>
              </h2>
              <p className="mt-6 text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                You don&rsquo;t need separate content for every platform. A
                single 360° shoot gives you everything you need to market across
                the board.
              </p>
            </div>

            <div className="mt-10 md:mt-0 md:w-1/2 w-full">
              <ul className="flex flex-col divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-white">
                {channels.map(({ Icon, label }) => (
                  <li key={label} className="flex items-center gap-4 p-5 sm:p-6">
                    <div className="w-9 h-9 rounded-lg bg-[#022b60]/8 flex items-center justify-center shrink-0">
                      <Icon
                        className="w-4 h-4 text-[#022b60]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-sm text-black font-medium">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What To Shoot ────────────────────────────────────── */}
      <section
        aria-labelledby="spaces-heading"
        className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24 mb-14">
            <div className="md:w-1/2 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
                  Spaces That Sell
                </span>
                <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
              </div>
              <h2
                id="spaces-heading"
                className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
              >
                What to Shoot.
                <br />
                <em>What Converts.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex items-end">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                The spaces that convert are the ones guests can&rsquo;t easily
                imagine from a photo. These are your differentiators — show them
                properly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {spaces.map(({ label, description, image }) => (
              <div key={label} className="group flex flex-col gap-3">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-200">
                  <img
                    src={image}
                    alt={`${label} 360 virtual tour example`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <p className="text-white text-xs sm:text-sm font-semibold tracking-wide leading-tight">
                      {label}
                    </p>
                    <p className="text-white/70 text-[11px] sm:text-xs mt-0.5 leading-tight">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Positioning quote ────────────────────────────────── */}
      <section
        aria-label="Positioning statement"
        className="bg-[#F7F7F7] px-6 sm:px-10 md:px-16 lg:px-20 pt-24 pb-24"
      >
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold mb-8">
            The Bottom Line
          </p>
          <blockquote
            className={`${cormorant.className} text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-[1.2]`}
          >
            You&rsquo;re positioned as the most premium hotel in your city.{" "}
            <em className="text-[#022b60]">
              Make sure every visitor can see why — before they ever arrive.
            </em>
          </blockquote>
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
              We&rsquo;ll walk through your property, identify the highest-impact
              spaces to shoot, and show you exactly how the tour will look on
              your website and Google listing.
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
