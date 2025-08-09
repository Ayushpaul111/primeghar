import service1 from "@/assets/service-drill.jpg";
import service2 from "@/assets/service-paint.jpg";
import service3 from "@/assets/service-electric.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";

const ServicesGrid = () => {
  const items = [
    {
      title: "General repairs",
      description: "Quick fixes for doors, furniture, fixtures, and more.",
      img: service1,
      alt: "Power drill on a workbench",
    },
    {
      title: "Painting & decorating",
      description: "Crisp finishes and color updates for any space.",
      img: service2,
      alt: "Paint roller applying blue paint",
    },
    {
      title: "Electrical repairs",
      description: "Safe replacements and troubleshooting by pros.",
      img: service3,
      alt: "Electrician adjusting wires in a fuse box",
    },
  ];

  return (
    <section id="services" aria-labelledby="services-title" className="py-12 md:py-20">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Popular</p>
            <h2 id="services-title" className="text-3xl font-bold tracking-tight font-display">Explore our wide range of services</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <Card className="overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-elevated">
                <img src={item.img} alt={item.alt} loading="lazy" className="h-48 w-full object-cover" />
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="soft">Learn more</Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
