import heroImage from "@/assets/hero-handyman.jpg";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { useEffect, useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.backgroundImage = `radial-gradient(600px circle at ${x}% ${y}%, hsl(var(--primary)/0.08), transparent 40%)`;
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section ref={ref} className="relative">
      <div className="container mx-auto grid gap-8 py-12 md:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-display">
              Affordable home repair services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Professional, reliable, and affordable. From quick fixes to full renovations, our certified pros have you covered.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Button variant="hero" size="xl">Get a quote</Button>
              <Button variant="soft" size="lg">Learn more</Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100} className="rounded-xl overflow-hidden shadow-subtle">
          <img src={heroImage} alt="Handyman fixing a kitchen sink" loading="eager" className="w-full h-auto" />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
