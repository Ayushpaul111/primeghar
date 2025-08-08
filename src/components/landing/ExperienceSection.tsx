import experienceImg from "@/assets/experience-team.jpg";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ExperienceSection = () => {
  const bullets = [
    "20+ years serving our community",
    "Licensed, insured, and vetted technicians",
    "Clear pricing and fast scheduling",
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center">
        <div>
          <p className="text-sm text-muted-foreground">Why choose us</p>
          <h2 className="mt-2 text-3xl font-bold">We have more than 20 years of experience</h2>
          <p className="mt-4 text-muted-foreground">We show up on time, do the job right, and leave your home better than we found it.</p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 rounded-full bg-primary/10 p-1 text-primary"><Check className="h-4 w-4" /></span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button variant="hero">Book now</Button>
          </div>
        </div>
        <div>
          <img src={experienceImg} alt="Our handyman team at work" loading="lazy" className="rounded-xl shadow-subtle" />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
