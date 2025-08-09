import { Helmet } from "react-helmet-async";
import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const description = "Contact HomePro: get in touch for quotes, scheduling, or questions. We\'re here to help.";
  return (
    <>
      <Helmet>
        <title>Contact | HomePro Handyman</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="/contact" />
        <meta property="og:title" content="Contact | HomePro Handyman" />
        <meta property="og:description" content={description} />
      </Helmet>
      <main>
        <section className="container mx-auto px-4 py-16">
          <Reveal>
            <h1 className="text-3xl md:text-5xl font-display tracking-tight mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl">Have a question or need a quick quote? Reach out and we\'ll respond promptly.</p>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <Reveal>
              <article className="rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="font-semibold mb-2">Phone</h2>
                <p className="text-muted-foreground">Mon–Fri 8am–6pm</p>
                <a href="tel:+15551234567" className="story-link mt-2 inline-block">+1 (555) 123-4567</a>
              </article>
            </Reveal>
            <Reveal>
              <article className="rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="font-semibold mb-2">Email</h2>
                <p className="text-muted-foreground">We usually reply within a few hours.</p>
                <a href="mailto:hello@homepro.com" className="story-link mt-2 inline-block">hello@homepro.com</a>
              </article>
            </Reveal>
            <Reveal>
              <article className="rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="font-semibold mb-2">Address</h2>
                <p className="text-muted-foreground">123 Main St, Your City, CA 90000</p>
              </article>
            </Reveal>
          </div>
          <div className="mt-12">
            <Button asChild>
              <a href="tel:+15551234567">Call now</a>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
