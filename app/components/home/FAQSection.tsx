import { cormorant } from "./services-data";

const faqs = [
  {
    question: "What visual services does PrimeGhar offer?",
    answer:
      "PrimeGhar offers 360° virtual tours, virtual staging, virtual renovation, and item removal & virtual cleaning. These services transform your property listing with professional visuals that help buyers make confident decisions before visiting in person.",
  },
  {
    question: "How does virtual staging work?",
    answer:
      "We take photos of your empty or furnished space and digitally add or replace furniture, décor, and finishes to create a compelling, photorealistic interior. You receive high-resolution images ready to upload to any property listing platform.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects are delivered within 48–72 hours of receiving your photos or media. Rush turnarounds can be arranged — reach out during your booking call to discuss your timeline.",
  },
  {
    question: "What file formats will I receive?",
    answer:
      "Final deliverables are provided as high-resolution JPEGs and PNGs suitable for MLS listings, social media, and print. Virtual tours are delivered as an embeddable link compatible with all major listing portals.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes. Every project includes a revision round so you can refine furniture styles, colour palettes, or layout before final delivery. Additional rounds are available at a small fee.",
  },
  {
    question: "Do you work with properties outside India?",
    answer:
      "Absolutely. Our services are fully remote — we work with property owners, agents, and developers worldwide. Simply share your media and we handle the rest.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FAQSection() {
  return (
    <section className="bg-white px-6 sm:px-10 md:px-16 lg:px-20 pt-20 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-16 lg:gap-24 mb-14">
        <div className="md:w-1/2 shrink-0">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#022b60] font-semibold">
              FAQ
            </span>
            <div className="flex-1 h-px bg-[#022b60]/30 max-w-16" />
          </div>
          <h2
            className={`${cormorant.className} text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold text-black leading-[1.1]`}
          >
            Frequently Asked
            <br />
            <em>Questions</em>
          </h2>
        </div>

        <div className="mt-8 md:mt-14 md:w-1/2 flex items-end">
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
            Everything you need to know about our visual property services.
            Can&rsquo;t find the answer you&rsquo;re looking for? Book a call
            and we&rsquo;ll walk you through it.
          </p>
        </div>
      </div>

      {/* Accordion */}
      <div className="divide-y divide-gray-200 border-t border-gray-200">
        {faqs.map(({ question, answer }, i) => (
          <details key={i} className="group py-5">
            <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
              <span className="text-base sm:text-lg font-medium text-black">
                {question}
              </span>
              <span className="shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-45">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 4v12M4 10h12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
