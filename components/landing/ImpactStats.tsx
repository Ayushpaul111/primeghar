import Reveal from "@/components/motion/Reveal";

const ImpactStats = () => {
  const stats = [
    { label: "Happy clients", value: "90+" },
    { label: "Projects", value: "400+" },
    { label: "Technicians", value: "80+" },
    { label: "Satisfaction", value: "100%" },
  ];

  return (
    <section aria-labelledby="impact-title">
      <div className="container mx-auto">
        <Reveal className="rounded-xl border bg-card p-6 md:p-8">
          <div className="mb-6">
            <h2 id="impact-title" className="text-lg font-semibold font-display">Our impact</h2>
            <p className="text-sm text-muted-foreground">Trusted by homeowners and businesses across the city.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 60} className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">{s.value}</span>
                <span className="text-sm text-muted-foreground">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ImpactStats;
