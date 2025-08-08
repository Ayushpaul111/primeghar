const TestimonialsSection = () => {
  const items = [
    {
      quote: "They were fast, friendly, and the work was excellent.",
      name: "Alex R.",
    },
    {
      quote: "Booked in minutes and the repairs were spotless.",
      name: "Priya K.",
    },
    {
      quote: "Clear pricing and great communication.",
      name: "Samuel T.",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold">What clients say about our work</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-xl border bg-card p-6">
              <blockquote className="text-sm text-muted-foreground">“{t.quote}”</blockquote>
              <figcaption className="mt-3 font-medium">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
