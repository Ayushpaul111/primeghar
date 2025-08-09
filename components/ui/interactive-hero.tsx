"use client";

import { useEffect, useRef } from "react";

interface InteractiveHeroProps {
  children: React.ReactNode;
}

const InteractiveHero = ({ children }: InteractiveHeroProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Add animations/interactions after page loads
    // This doesn't affect SEO because content is already rendered
    const element = ref.current;
    if (element) {
      element.classList.add("animate-fade-in");
    }
  }, []);

  return (
    <div ref={ref} className="transition-opacity duration-500">
      {children}
    </div>
  );
};

export default InteractiveHero;
