import service1 from "@/assets/service-drill.jpg";
import service2 from "@/assets/service-paint.jpg";
import service3 from "@/assets/service-electric.jpg";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { Link } from "react-router-dom";
import QuoteDialogButton from "@/components/landing/QuoteDialogButton";
import { Wrench, PaintRoller, Zap } from "lucide-react";

const ServicesGrid = () => {
  const items = [
    {
      title: "General repairs",
      description: "Quick fixes for doors, furniture, fixtures, and more.",
      img: service1,
      alt: "Power drill on a workbench",
      icon: Wrench,
    },
    {
      title: "Painting & decorating",
      description: "Crisp finishes and color updates for any space.",
      img: service2,
      alt: "Paint roller applying blue paint",
      icon: PaintRoller,
    },
    {
      title: "Electrical repairs",
      description: "Safe replacements and troubleshooting by pros.",
      img: service3,
      alt: "Electrician adjusting wires in a fuse box",
      icon: Zap,
    },
  ];

  return (
    <section id="services" aria-labelledby="services-title" className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8 md:mb-12 flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-primary/80 uppercase tracking-wider">/Services/</p>
            <h2 id="services-title" className="mt-2 text-4xl md:text-5xl font-bold tracking-tight font-display">Explore our wide range of services</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <Card className="relative overflow-hidden rounded-2xl border bg-card text-card-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-elevated">
                  <div className="absolute -top-3 left-3 rounded-full bg-primary/10 text-primary p-2 shadow-sm">
                    <Icon className="h-4 w-4" aria-hidden />
                  </div>
                  <img src={item.img} alt={item.alt} loading="lazy" className="h-56 w-full object-cover" />
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <QuoteDialogButton variant="default" size="xl" className="rounded-full shadow-elevated" />
          <Button asChild variant="outline" size="xl" className="rounded-full">
            <Link to="/services">Browse all services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
