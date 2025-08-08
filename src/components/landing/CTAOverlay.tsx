import bg from "@/assets/cta-background.jpg";
import { Button } from "@/components/ui/button";

const CTAOverlay = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl">
          <img src={bg} alt="Sunlit living room with tools on a workbench" loading="lazy" className="w-full h-[380px] object-cover" />
          <div className="absolute inset-0 p-4 md:p-6 flex items-end justify-end">
            <div className="glass rounded-xl p-6 max-w-md">
              <p className="text-sm text-muted-foreground">Work with us</p>
              <h3 className="mt-1 text-2xl font-semibold">Let’s work together!</h3>
              <p className="mt-2 text-sm text-muted-foreground">Our pros make home improvements and handyman tasks easy and stress-free.</p>
              <div className="mt-4 flex items-center gap-2">
                <Button variant="hero">Get a quote</Button>
                <Button variant="soft">Call now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOverlay;
