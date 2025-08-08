import blog1 from "@/assets/blog-clipboard.jpg";
import blog2 from "@/assets/service-electric.jpg";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";

const BlogSection = () => {
  const posts = [
    {
      title: "What are the common problems that a handyman can fix?",
      excerpt: "From leaky taps to squeaky doors, here are quick wins you can book today.",
      img: blog2,
      date: "Feb 6, 2025",
    },
    {
      title: "How to prepare your home for painting",
      excerpt: "Simple steps to get a flawless finish and protect your furniture.",
      img: blog1,
      date: "Jan 18, 2025",
    },
  ];

  return (
    <section id="blog" className="py-12 md:py-20">
      <div className="container mx-auto">
        <div className="rounded-2xl bg-primary/95 text-primary-foreground p-6 md:p-10">
          <div className="mb-6">
            <p className="text-sm/6 opacity-80">Resources</p>
            <h2 className="text-3xl font-bold font-display">News & articles</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal className="md:col-span-1 overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src={posts[1].img} alt="Handyman writing notes on clipboard" loading="lazy" className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{posts[1].title}</h3>
                <p className="mt-2 text-sm/6 opacity-85">{posts[1].excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs/6 opacity-80">
                  <span>{posts[1].date}</span>
                  <Button variant="link" className="px-0">Read more</Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100} className="md:col-span-2 overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="grid md:grid-cols-2">
                <img src={posts[0].img} alt="Electrician hands working on fuse box" loading="lazy" className="h-full w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{posts[0].title}</h3>
                  <p className="mt-2 text-sm/6 opacity-85">{posts[0].excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs/6 opacity-80">
                    <span>{posts[0].date}</span>
                    <Button variant="link" className="px-0">Read more</Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
