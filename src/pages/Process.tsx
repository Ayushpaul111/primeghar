import { Helmet } from "react-helmet-async";
import Reveal from "@/components/motion/Reveal";

const steps = [
  { step: 1, title: "Request a quote", desc: "Tell us what you need. Share photos if helpful." },
  { step: 2, title: "Schedule & confirm", desc: "Pick a time that works. We\'ll send a reminder." },
  { step: 3, title: "Pro arrives & completes", desc: "Certified pros, tidy work area, quality guaranteed." },
];

const Process = () => {
  const description = "How HomePro works: simple 3-step process from quote to completion with reliable, on-time service.";
  return (
    <>
      <Helmet>
        <title>Process | How We Work</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="/process" />
        <meta property="og:title" content="Process | How We Work" />
        <meta property="og:description" content={description} />
      </Helmet>
      <main>
        <section className="container mx-auto px-4 py-16">
          <Reveal>
            <h1 className="text-3xl md:text-5xl font-display tracking-tight mb-4">Our Process</h1>
            <p className="text-muted-foreground max-w-2xl">From first click to final sweep, we make it smooth and stress-free.</p>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {steps.map((it) => (
              <Reveal key={it.step}>
                <article className="rounded-lg border bg-card p-6 shadow-sm">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">{it.step}</span>
                  <h2 className="text-xl font-semibold mb-1">{it.title}</h2>
                  <p className="text-sm text-muted-foreground">{it.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Process;
