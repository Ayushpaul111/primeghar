import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  as?: keyof JSX.IntrinsicElements;
}

const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, as = "div" }) => {
  const Comp = as as any;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Comp
      ref={ref as any}
      className={[
        "transition-opacity duration-500",
        visible ? "animate-enter" : "opacity-0 translate-y-2",
        className,
      ].join(" ")}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </Comp>
  );
};

export default Reveal;
