import type { Metadata } from "next";
import {
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  Award,
  Check,
  Monitor,
  QrCode,
  MessageCircle,
  MapPin,
  CalendarDays,
  Mail,
} from "lucide-react";
import { cormorant } from "@/app/components/home/services-data";
import ScrollArrow from "./_components/ScrollArrow";

export const metadata: Metadata = {
  title: "Virtual Campus Tours for Schools & Colleges | PrimeGhar",
  description:
    "Let prospective students and parents explore your entire campus online with PrimeGhar's immersive 360° virtual campus tours — classrooms, labs, hostels, sports grounds and more. Win more admissions from anywhere.",
  keywords: [
    "virtual campus tour",
    "360 college tour India",
    "school virtual tour",
    "campus tour for admissions",
    "virtual open day",
    "google business profile campus tour",
  ],
  openGraph: {
    title: "Virtual Campus Tours for Schools & Colleges | PrimeGhar",
    description:
      "Immersive 360° campus tours that let students and parents explore your entire institution before they apply.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Virtual Campus Tours for Schools & Colleges",
  provider: {
    "@type": "Organization",
    name: "PrimeGhar",
  },
  description:
    "Immersive 360° virtual campus tours for schools and colleges — including classrooms, labs, libraries, hostels and sports grounds — that help institutions win admissions by letting students and parents explore remotely.",
  serviceType: "Education Visual Marketing",
  areaServed: "India",
};

const benefits = [
  {
    Icon: GraduationCap,
    title: "Win More Admissions",
    description:
      "Reach students you'd otherwise lose to distance. Outstation, NRI and far-region families experience your full campus before they apply — turning curiosity into confident enrollments.",
  },
  {
    Icon: ShieldCheck,
    title: "Earn Parents' Trust",
    description:
      "Parents decide with their eyes. A walkthrough of classrooms, hostels, dining and safety infrastructure shows — rather than tells — that yours is an environment they can trust their child to.",
  },
  {
    Icon: Award,
    title: "Look Like the Institution You Are",
    description:
      "Most prospectuses look the same. An interactive tour signals you're modern, transparent and well-resourced — setting you apart from every competitor still sending the same brochure.",
  },
];

const captures = [
  "Classrooms and smart classrooms",
  "Science, computer and specialized labs",
  "Library and study spaces",
  "Hostels and dining halls",
  "Sports grounds, courts and gymnasiums",
  "Auditoriums and seminar halls",
  "Campus grounds, entrances and common areas",
];

const problems = [
  {
    challenge: "Outstation & NRI families can't visit before admission",
    solution: "They explore the entire campus remotely, on any device",
  },
  {
    challenge: "Parents are anxious about hostel life and safety",
    solution: "A virtual hostel and facility walkthrough builds trust upfront",
  },
  {
    challenge: "Your prospectus photos look like everyone else's",
    solution: "An immersive tour makes your campus impossible to ignore",
  },
  {
    challenge: "Admissions season overwhelms front-office staff",
    solution: "A guided virtual tour is available 24/7, with zero staff time",
  },
  {
    challenge: "Photos can't convey scale, quality or atmosphere",
    solution: "360° shows the real environment, the way it actually feels",
  },
];

const channels = [
  { Icon: Monitor, label: "Your website — embedded on the homepage and admissions page" },
  { Icon: QrCode, label: "Your prospectus — a QR code that opens the full campus" },
  { Icon: MessageCircle, label: "WhatsApp & social media — shareable during admissions campaigns" },
  { Icon: MapPin, label: "Google Maps — published to your listing, so you stand out in local search" },
  { Icon: CalendarDays, label: "Virtual open days — let families attend from anywhere" },
  { Icon: Mail, label: "Email outreach — give every applicant a reason to explore further" },
];

export default function CampusTourPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero: full-viewport 360° experience ──────────────── */}
      <section className="relative h-screen min-h-[580px]">
        {/* Live 360° tour fills the entire viewport — swap with a campus-specific tour when available */}
        <iframe
          src="https://www.klapty.com/tour/tunnel/PlF05v7VZn"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr"
          aria-label="Interactive 360° virtual campus tour"
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
                  For Schools &amp; Colleges
                </p>
                <h1
                  className={`${cormorant.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05]`}
                >
                  Let every student &amp; parent
                  <br />
                  <em className="text-blue-200">walk your campus — from anywhere.</em>
                </h1>
              </div>

              <div className="flex flex-col gap-5 md:items-end shrink-0 md:max-w-xs">
                <p className="text-sm text-white/55 leading-relaxed pointer-events-none">
                  An immersive 360° campus tour lets families explore your entire
                  institution online — classrooms, labs, hostels and more. No
                  travel. Just a link.
                </p>
                <button
                  className="pointer-events-auto self-start md:self-auto inline-flex items-center gap-2 bg-white text-[#022b60] text-[11px] font-semibold tracking-[0.18em] uppercase px-7 py-3.5 rounded-full hover:bg-blue-50 transition-colors"
                  data-cal-namespace="primeghar"
                  data-cal-link="ayush-paul/primeghar"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Request a Free Demo
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <ScrollArrow targetId="intro" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────── */}
      <section
        id="intro"
        aria-labelledby="intro-heading"
        className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24">
            <div className="md:w-1/2 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
                  The Decision
                </span>
                <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
              </div>
              <h2
                id="intro-heading"
                className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
              >
                A Big Decision,
                <br />
                <em>Made From a Distance.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex flex-col gap-5">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                Choosing a school or college is one of the biggest decisions a
                family makes — and more often than not, they&rsquo;re making it
                from a distance, based on a handful of photos in a prospectus.
              </p>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                We create immersive 360° campus tours that let prospective
                students and parents explore your entire institution online,
                exactly as if they were walking through it themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why It Matters ───────────────────────────────────── */}
      <section
        aria-labelledby="benefits-heading"
        className="bg-[#F7F7F7] px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24 mb-16">
            <div className="md:w-1/2 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
                  Why It Matters
                </span>
                <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
              </div>
              <h2
                id="benefits-heading"
                className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
              >
                More Reach.
                <br />
                <em>More Enrollments.</em>
              </h2>
            </div>
            <div className="mt-8 md:mt-14 md:w-1/2 flex items-end">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                A single campus tour works across reach, trust and reputation —
                turning distant prospects into confident applicants.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
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

      {/* ── What We Capture ──────────────────────────────────── */}
      <section
        aria-labelledby="capture-heading"
        className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24">
            <div className="md:w-1/2 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
                  What We Capture
                </span>
                <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
              </div>
              <h2
                id="capture-heading"
                className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
              >
                Every Space
                <br />
                <em>That Matters.</em>
              </h2>
              <p className="mt-6 text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                Each space is connected into a single seamless tour, so visitors
                can move through your campus room by room — not just spin in
                place.
              </p>
            </div>

            <div className="mt-10 md:mt-0 md:w-1/2 w-full">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
                {captures.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 p-5 bg-white"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#022b60]/8 flex items-center justify-center shrink-0">
                      <Check
                        className="w-3.5 h-3.5 text-[#022b60]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="text-sm text-black font-medium leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problems It Solves ───────────────────────────── */}
      <section
        aria-labelledby="problems-heading"
        className="bg-[#F7F7F7] px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
              The Problems It Solves
            </span>
            <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
          </div>
          <h2
            id="problems-heading"
            className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1] mb-14 max-w-md`}
          >
            Real Challenges,
            <br />
            <em>Solved.</em>
          </h2>

          <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {/* Header row — desktop only */}
            <div className="hidden md:grid grid-cols-2 bg-[#022b60]">
              <div className="p-5 lg:p-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-blue-200 font-semibold">
                  The Challenge
                </span>
              </div>
              <div className="p-5 lg:p-6 border-l border-white/10">
                <span className="text-[10px] tracking-[0.3em] uppercase text-blue-200 font-semibold">
                  How a 360° Tour Helps
                </span>
              </div>
            </div>

            {problems.map(({ challenge, solution }) => (
              <div
                key={challenge}
                className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200 first:border-t-0 md:first:border-t"
              >
                <div className="p-5 lg:p-6 flex items-start gap-3">
                  <span className="md:hidden text-[9px] tracking-[0.25em] uppercase text-gray-400 font-semibold pt-1 shrink-0">
                    Challenge
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {challenge}
                  </p>
                </div>
                <div className="p-5 lg:p-6 flex items-start gap-3 bg-[#022b60]/[0.03] md:bg-transparent border-t border-gray-100 md:border-t-0 md:border-l">
                  <div className="w-5 h-5 rounded-md bg-[#022b60]/8 flex items-center justify-center shrink-0 mt-0.5">
                    <Check
                      className="w-3 h-3 text-[#022b60]"
                      strokeWidth={2.5}
                    />
                  </div>
                  <p className="text-sm text-black font-medium leading-relaxed">
                    {solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── One Tour. Everywhere. ────────────────────────────── */}
      <section
        aria-labelledby="channels-heading"
        className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-20"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24">
            <div className="md:w-1/2 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
                  One Tour. Everywhere.
                </span>
                <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
              </div>
              <h2
                id="channels-heading"
                className={`${cormorant.className} text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
              >
                Shoot Once.
                <br />
                <em>Power Every Channel.</em>
              </h2>
              <p className="mt-6 text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
                A single campus shoot powers your entire admissions presence —
                from your website to your prospectus to local search.
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
                    <span className="text-sm text-black font-medium leading-tight">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
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
            Your facilities are one of your strongest assets.{" "}
            <em className="text-[#022b60]">
              Make sure every family can experience them — long before they
              decide where to apply.
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
              Book a Campus Shoot
              <br />
              <em className="text-blue-300">or Request a Free Demo</em>
            </h2>
            <p className="mt-4 text-sm text-white/40 leading-relaxed max-w-sm">
              Give every prospective student and parent a front-row seat to your
              campus — we&rsquo;ll show you exactly how it will look across your
              website and Google listing.
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
