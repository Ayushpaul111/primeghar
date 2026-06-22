import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Sparkles,
  Eraser,
  Hammer,
  Zap,
  Tag,
  MapPin,
  RefreshCw,
  Share2,
  TrendingUp,
  Feather,
} from "lucide-react";
import { cormorant } from "@/app/components/home/services-data";
import { pageMetadata } from "@/app/lib/seo";
import IndustriesSection from "@/app/components/home/IndustriesSection";
import ScrollArrow from "@/app/services/360-virtual-tour/_components/ScrollArrow";

export const metadata = pageMetadata({
  title: "About PrimeGhar | Smart Visuals That Sell Property Faster",
  description:
    "PrimeGhar creates immersive 360° virtual tours, virtual staging, and smart visuals that help properties, hotels, and campuses sell faster and look premium. On-site capture, expert production, delivered in 48–72 hours.",
  path: "/about-us",
  keywords: [
    "about PrimeGhar",
    "smart visuals studio",
    "360 virtual tour company",
    "virtual staging studio",
    "real estate visuals",
  ],
  ogDescription:
    "Immersive 360° tours and smart visuals that help any space sell faster and look premium.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About PrimeGhar",
  description:
    "PrimeGhar is a smart visuals studio creating immersive 360° virtual tours, virtual staging, virtual renovation, and sales-ready visuals for properties, hotels, campuses, and healthcare spaces.",
  publisher: {
    "@type": "Organization",
    name: "PrimeGhar",
    description:
      "Immersive 360° tours and smart visuals that help any space sell faster and look premium.",
  },
};

const services = [
  {
    num: "01",
    path: "/services/360-virtual-tour",
    Icon: Camera,
    title: "360° Virtual Tours",
    description:
      "Showcase any space from every angle. Buyers explore each room on their own terms, on any device, no app and no subscription required.",
  },
  {
    num: "02",
    path: "/services/virtual-staging",
    Icon: Sparkles,
    title: "Virtual Furnishing",
    description:
      "Turn an empty property into a fully furnished home. We help people see the potential instantly, so they stop imagining and start picturing themselves living there.",
  },
  {
    num: "03",
    path: "/services/item-removal",
    Icon: Eraser,
    title: "Item Removal & Cleaning",
    description:
      "Remove clutter. Present perfection. We clean up every frame so your space shows at its absolute best.",
  },
  {
    num: "04",
    path: "/services/virtual-renovation",
    Icon: Hammer,
    title: "Virtual Renovation",
    description:
      "From un-finished to unforgettable. Even a property that's still under construction can be shown finished, furnished, and ready to fall in love with.",
  },
];

const howWeWork = [
  {
    Icon: Zap,
    title: "Fast turnarounds",
    description:
      "Most projects land within 48–72 hours of receiving your media. Need it sooner? Rush delivery can be arranged.",
  },
  {
    Icon: Tag,
    title: "Clear, upfront pricing",
    description:
      "We lay out exactly what a project costs before we start — no hidden fees and no fine print. You'll always know what you're paying for.",
  },
  {
    Icon: MapPin,
    title: "We come to you",
    description:
      "Our team visits your space to capture everything exactly as it should be seen. From there, the rest is handled remotely — so the only step on your end is opening the door.",
  },
  {
    Icon: RefreshCw,
    title: "Revisions included",
    description:
      "Every project comes with a revision round, so the final result is exactly what you pictured.",
  },
  {
    Icon: Share2,
    title: "Use it everywhere",
    description:
      "Tours come as a clean, embeddable link, and visuals arrive ready for listing portals, social media, WhatsApp, and print.",
  },
];

const stats = [
  { value: "120+", label: "Projects completed" },
  { value: "94%", label: "Client satisfaction" },
  { value: "4.5★", label: "Average client rating" },
  { value: "48–72 hrs", label: "Typical delivery time" },
];

const promises = [
  {
    Icon: Sparkles,
    title: "We'll make it look premium.",
    description:
      "Your space will look as impressive online as it deserves to — never ordinary, never cookie-cutter.",
  },
  {
    Icon: TrendingUp,
    title: "We'll help it sell faster.",
    description:
      "Everything we create is built to shorten the distance between interest and decision.",
  },
  {
    Icon: Feather,
    title: "We'll keep it effortless for you.",
    description:
      "You send the space. We do the heavy lifting. You get something you're proud to share.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col bg-[#141414]">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(2,43,96,0.55) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(2,43,96,0.35) 0%, transparent 55%)",
          }}
        />

        <div className="relative flex-1 flex items-end px-6 sm:px-10 md:px-16 lg:px-20 pb-6 md:pb-10 pt-36">
          <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-10 md:gap-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
              <div>
                <p className="text-[10px] tracking-[0.35em] uppercase text-blue-300/70 font-semibold mb-6">
                  About PrimeGhar
                </p>
                <h1
                  className={`${cormorant.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] max-w-4xl`}
                >
                  We don&rsquo;t just photograph properties.{" "}
                  <em className="text-blue-200">
                    We make people fall in love with them.
                  </em>
                </h1>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
              <p className="text-sm sm:text-base text-white/55 leading-relaxed max-w-xl">
                PrimeGhar is a smart visuals studio built on one belief — that
                the right image, tour, or walkthrough can sell a space faster
                than any brochure ever could.
              </p>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  className="inline-flex items-center gap-2 bg-white text-[#022b60] text-[11px] font-semibold tracking-[0.18em] uppercase px-7 py-3.5 rounded-full hover:bg-blue-50 transition-colors"
                  data-cal-namespace="primeghar"
                  data-cal-link="ayush-paul/primeghar"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book a Call
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#what-we-do"
                  className="inline-flex items-center gap-2 border border-white/25 text-white text-[11px] font-semibold tracking-[0.18em] uppercase px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                >
                  See Our Work
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <ScrollArrow targetId="who-we-are" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Are ────────────────────────────────────────── */}
      <section
        id="who-we-are"
        aria-labelledby="who-heading"
        className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24">
            <div className="md:w-1/2 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
                  Who We Are
                </span>
                <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
              </div>
              <h2
                id="who-heading"
                className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
              >
                Make Someone Choose a Space{" "}
                <em>Before They&rsquo;ve Set Foot in It.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex flex-col gap-5">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                PrimeGhar answers that with immersive 360° virtual tours,
                virtual staging, virtual renovation, and clean, sales-ready
                visuals — the kind of presentation that turns a casual scroll
                into a serious enquiry.
              </p>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                We work with property owners, builders, promoters, and agents
                who are tired of competing on photos alone, and increasingly
                with hotels, campuses, and healthcare spaces that want the same
                advantage.
              </p>
              <p className="text-sm sm:text-base text-black font-medium leading-relaxed max-w-md">
                Whatever you&rsquo;re selling, we sell it smartly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why We Exist ──────────────────────────────────────── */}
      <section
        aria-labelledby="story-heading"
        className="bg-[#F7F7F7] px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24">
            <div className="md:w-1/2 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
                  Why We Exist
                </span>
                <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
              </div>
              <h2
                id="story-heading"
                className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
              >
                Brilliant Properties,
                <br />
                <em>Losing to Ordinary Ones.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex flex-col gap-5">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                PrimeGhar started with a simple frustration: brilliant
                properties losing out to ordinary ones, simply because they were
                presented badly.
              </p>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                A buyer can&rsquo;t fall in love with a blurry photo. A family
                planning a wedding can&rsquo;t feel a banquet hall through a
                PDF. An out-of-town buyer can&rsquo;t commit to a flat
                they&rsquo;ve only seen in a grainy gallery. The space was never
                the problem — the <em>presentation</em> was.
              </p>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                So we built PrimeGhar to close that gap. Instead of static
                images that ask people to imagine, we create immersive
                experiences that let them explore — looking in every direction,
                walking room to room, getting a real feel for a place from
                anywhere in the world. The result is fewer wasted visits, more
                serious enquiries, and properties that finally look as good
                online as they do in person.
              </p>
              <p className="text-sm sm:text-base text-black font-medium leading-relaxed max-w-md">
                What began with real estate is now bringing every kind of space
                to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ───────────────────────────── */}
      <section
        aria-labelledby="different-heading"
        className="bg-[#141414] px-6 sm:px-10 md:px-16 lg:px-20 pt-24 pb-24"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24">
            <div className="md:w-1/2 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.35em] uppercase text-blue-300/70 font-semibold">
                  What Makes Us Different
                </span>
                <div className="flex-1 h-px bg-white/20 max-w-16" />
              </div>
              <h2
                id="different-heading"
                className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1]`}
              >
                Not a Photography Studio.{" "}
                <em className="text-blue-300">A Selling Partner.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex flex-col gap-5">
              <p className="text-sm sm:text-base text-white/55 leading-relaxed max-w-md">
                There are plenty of people who can point a camera. That&rsquo;s
                not what we do.
              </p>
              <p className="text-sm sm:text-base text-white/55 leading-relaxed max-w-md">
                PrimeGhar exists to help you <em>sell</em> — faster, and at a
                premium. Every tour, every staged room, every cleaned-up frame
                is built around one outcome: moving a buyer, guest, or family
                from &ldquo;maybe&rdquo; to &ldquo;yes.&rdquo; We obsess over
                the details that quietly close deals — the flow between rooms,
                the light in a suite, the first three seconds that decide
                whether someone keeps scrolling or picks up the phone.
              </p>
              <p className="text-sm sm:text-base text-white font-medium leading-relaxed max-w-md">
                That focus is the difference between a vendor and a partner.
                We&rsquo;re the second.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ────────────────────────────────────────── */}
      <section
        id="what-we-do"
        aria-labelledby="services-heading"
        className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20 scroll-mt-24"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
              What We Do
            </span>
            <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
          </div>
          <h2
            id="services-heading"
            className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1] mb-16 max-w-2xl`}
          >
            Four Ways to Make a Space <em>Impossible to Ignore.</em>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {services.map(({ num, path, Icon, title, description }) => (
              <Link
                key={num}
                href={path}
                className="group bg-white p-8 md:p-10 flex flex-col gap-6 hover:bg-[#022b60]/[0.02] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#022b60]/8 flex items-center justify-center shrink-0">
                    <Icon
                      className="w-5 h-5 text-[#022b60]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-[3rem] font-bold text-[#022b60]/10 leading-none select-none">
                    {num}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-black mb-2 flex items-center gap-2">
                    {title}
                    <ArrowRight className="w-4 h-4 text-[#022b60] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beyond Real Estate (reused industries cards) ──────── */}
      <IndustriesSection />

      {/* ── How We Work ───────────────────────────────────────── */}
      <section
        aria-labelledby="work-heading"
        className="bg-[#F7F7F7] px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24 mb-16">
            <div className="md:w-1/2 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
                  How We Work
                </span>
                <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
              </div>
              <h2
                id="work-heading"
                className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
              >
                Built to Be
                <br />
                <em>Easy to Work With.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex items-end">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                You send the space. We do the heavy lifting. No platforms to
                learn, no contracts to wrestle, no surprises — just work you can
                use everywhere.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
            {howWeWork.map(({ Icon, title, description }) => (
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

      {/* ── Impact in Numbers ─────────────────────────────────── */}
      <section
        aria-labelledby="numbers-heading"
        className="bg-[#F7F7F7] px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
              The Proof Is in the Numbers
            </span>
            <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
          </div>
          <h2
            id="numbers-heading"
            className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1] mb-16 max-w-md`}
          >
            Results That
            <br />
            <em>Speak for Themselves.</em>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-white p-6 sm:p-8 md:p-10 flex flex-col gap-2"
              >
                <span className="font-mono text-[clamp(1.5rem,6vw,3.75rem)] font-semibold text-[#022b60] leading-none tabular-nums tracking-tight break-words">
                  {value}
                </span>
                <span className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Promise ───────────────────────────────────────── */}
      <section
        aria-labelledby="promise-heading"
        className="bg-[#F7F7F7] px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
              What You Can Count On
            </span>
            <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
          </div>
          <h2
            id="promise-heading"
            className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1] mb-16 max-w-md`}
          >
            Three Promises,
            <br />
            <em>Every Time.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {promises.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="p-8 md:p-10 lg:p-12 flex flex-col gap-6"
              >
                <div className="w-10 h-10 rounded-xl bg-[#022b60]/8 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#022b60]" strokeWidth={1.5} />
                </div>
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

      {/* ── Closing CTA ───────────────────────────────────────── */}
      <section className="bg-[#141414] rounded-b-3xl lg:rounded-b-[50px] px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-28">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/30 font-semibold mb-5">
              Let&rsquo;s Talk
            </p>
            <h2
              className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1]`}
            >
              Let&rsquo;s Make Your Space
              <br />
              <em className="text-blue-300">Impossible to Ignore.</em>
            </h2>
            <p className="mt-4 text-sm text-white/40 leading-relaxed max-w-md">
              Whether it&rsquo;s a single flat, a full development, a hotel, or
              a campus — if it&rsquo;s worth seeing, it&rsquo;s worth showing
              properly. Let&rsquo;s talk about how PrimeGhar can bring yours to
              life.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0 self-start md:self-center">
            <button
              className="inline-flex items-center gap-2 bg-white text-[#022b60] text-[11px] font-semibold tracking-[0.18em] uppercase px-8 py-4 rounded-full hover:bg-blue-50 transition-colors"
              data-cal-namespace="primeghar"
              data-cal-link="ayush-paul/primeghar"
              data-cal-config='{"layout":"month_view"}'
            >
              Book a Call
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="#what-we-do"
              className="inline-flex items-center gap-2 border border-white/25 text-white text-[11px] font-semibold tracking-[0.18em] uppercase px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
