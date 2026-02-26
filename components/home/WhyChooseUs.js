"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Cities Served" },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-6xl md:text-7xl font-extrabold gradient-text">
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="py-24 lg:py-32 bg-dark relative overflow-hidden noise-bg">
      {/* Decorative watermark */}
      <div
        className="absolute top-8 right-8 lg:top-12 lg:right-16 text-[10rem] md:text-[14rem] lg:text-[18rem] font-extrabold leading-none pointer-events-none select-none"
        style={{
          WebkitTextStroke: "1px rgba(14, 165, 233, 0.06)",
          WebkitTextFillColor: "transparent",
        }}
        aria-hidden="true"
      >
        10+
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header — Left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            By The Numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 leading-tight">
            A decade of crafting
            <br />
            exceptional signs
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div
          ref={sectionRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="w-12 h-[2px] bg-primary mt-4 mb-3" />
              <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
