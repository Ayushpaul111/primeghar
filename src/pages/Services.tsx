import { Helmet } from "react-helmet-async";
import Reveal from "@/components/motion/Reveal";
import QuoteDialogButton from "@/components/landing/QuoteDialogButton";

const Services = () => {
  const description = "HomePro services: electrical, painting, carpentry, plumbing and more with fast, reliable pros.";
  return (
    <>
      <Helmet>
        <title>Services | HomePro Handyman</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="/services" />
        <meta property="og:title" content="Services | HomePro Handyman" />
        <meta property="og:description" content={description} />
      </Helmet>
      <main>
        <section className="container mx-auto px-4 py-16">
          <Reveal>
            <h1 className="text-3xl md:text-5xl font-display tracking-tight mb-4">Our Services</h1>
            <p className="text-muted-foreground max-w-2xl">From quick fixes to full projects, our certified pros deliver quality workmanship on time and on budget.</p>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Electrical", desc: "Lighting, outlets, panel upgrades, safety checks." },
              { title: "Painting", desc: "Interior & exterior, drywall repair, finishing." },
              { title: "Carpentry", desc: "Doors, trim, cabinetry, custom builds." },
              { title: "Plumbing", desc: "Faucets, leaks, garbage disposals, toilets." },
              { title: "Mounting & Installs", desc: "TVs, shelves, fixtures, appliances." },
              { title: "Repairs", desc: "General home repairs, maintenance & tune-ups." },
            ].map((s) => (
              <Reveal key={s.title}>
                <article className="rounded-lg border bg-card p-6 shadow-sm hover-scale">
                  <h2 className="text-xl font-semibold mb-1">{s.title}</h2>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <QuoteDialogButton />
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
