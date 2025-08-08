import phone from "@/assets/process-phone.jpg";

const ProcessSection = () => {
  const steps = [
    { title: "Contact us", text: "Tell us what you need fixed or improved." },
    { title: "Schedule an appointment", text: "Pick a time that works for you." },
    { title: "Get your project done", text: "We show up on time and do it right." },
  ];

  return (
    <section id="process" className="py-12 md:py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold">Check how our process is done</h2>
        <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 grid gap-6">
            {steps.map((s) => (
              <div key={s.title} className="rounded-xl border p-5">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="order-1 md:order-2">
            <img src={phone} alt="Handyman service app on a smartphone" loading="lazy" className="mx-auto max-h-[520px] rounded-[2rem] shadow-elevated" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
