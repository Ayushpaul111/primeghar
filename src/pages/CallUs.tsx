import { Helmet } from "react-helmet-async";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

const CallUs = () => {
  const description = "Call HomePro now for fast quotes and scheduling. Speak to a friendly coordinator today.";
  return (
    <>
      <Helmet>
        <title>Call Us | HomePro</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="/call-us" />
        <meta property="og:title" content="Call Us | HomePro" />
        <meta property="og:description" content={description} />
      </Helmet>
      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-display tracking-tight mb-4">Call Us</h1>
            <p className="text-lg text-muted-foreground">We\'re available Mon–Fri 8am–6pm. Average answer time: under 2 minutes.</p>
          </Reveal>
          <Reveal>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Button size="xl" asChild>
                <a href="tel:+15551234567" aria-label="Call +1 (555) 123-4567">+1 (555) 123-4567</a>
              </Button>
              <p className="text-sm text-muted-foreground">Prefer texting? Email hello@homepro.com and we\'ll text you back.</p>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
};

export default CallUs;
