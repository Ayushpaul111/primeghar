import leftImg from "@/assets/service-paint.jpg";
import rightImg from "@/assets/pro-team.jpg";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";

const ProTeamMosaic = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto grid gap-6 md:grid-cols-3">
        <Reveal className="overflow-hidden rounded-xl">
          <img src={leftImg} alt="Painting a wall with roller" loading="lazy" className="h-full w-full object-cover" />
        </Reveal>
        <Reveal delay={100} className="rounded-xl bg-primary/95 text-primary-foreground p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold font-display">Our pro team takes care of everything</h3>
            <p className="mt-3 text-primary-foreground/80 text-sm">From booking to final inspection, we handle every detail so you don’t have to.</p>
          </div>
          <div className="mt-6">
            <Button variant="soft">Learn more</Button>
          </div>
        </Reveal>
        <Reveal delay={200} className="overflow-hidden rounded-xl">
          <img src={rightImg} alt="Handyman smiling with wrench in a modern kitchen" loading="lazy" className="h-full w-full object-cover" />
        </Reveal>
      </div>
    </section>
  );
};

export default ProTeamMosaic;
