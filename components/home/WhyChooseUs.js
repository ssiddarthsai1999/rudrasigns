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
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14,165,233,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Aurora ribbon 1 — wide teal sweep */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "120%", height: "180px",
          background: "linear-gradient(90deg, transparent 0%, rgba(14,165,233,0.2) 25%, rgba(56,189,248,0.15) 50%, rgba(14,165,233,0.2) 75%, transparent 100%)",
          filter: "blur(70px)",
          left: "-10%", top: "20%",
        }}
        animate={{
          x: ["-5%", "12%", "-8%", "15%", "-5%"],
          y: ["0%", "-15%", "20%", "-10%", "0%"],
          rotate: [-3, 12, -8, 15, -3],
          scaleY: [1, 1.5, 0.6, 1.3, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Aurora ribbon 2 — violet accent */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "80%", height: "120px",
          background: "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.12) 30%, rgba(14,165,233,0.1) 70%, transparent 100%)",
          filter: "blur(60px)",
          right: "-5%", bottom: "15%",
        }}
        animate={{
          x: ["5%", "-18%", "12%", "-15%", "5%"],
          y: ["-5%", "15%", "-12%", "10%", "-5%"],
          rotate: [5, -15, 20, -10, 5],
          scaleY: [1.2, 0.5, 1.4, 0.7, 1.2],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Fast energy streak */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "50%", height: "50px",
          background: "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.25) 40%, rgba(14,165,233,0.3) 60%, transparent 100%)",
          filter: "blur(30px)",
          left: "25%", top: "50%",
        }}
        animate={{
          x: ["-15%", "30%", "-20%", "25%", "-15%"],
          y: ["0%", "-20%", "25%", "-10%", "0%"],
          rotate: [0, -20, 30, -15, 0],
          opacity: [0.4, 1, 0.3, 0.9, 0.4],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-[15%] right-[12%] w-20 h-20 border border-primary/10 rounded-lg pointer-events-none hidden md:block"
        animate={{ rotate: [0, 360], y: [-8, 8, -8] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[8%] w-14 h-14 border border-white/5 rounded-full pointer-events-none hidden md:block"
        animate={{ rotate: [0, -360], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-[60%] right-[30%] pointer-events-none hidden md:block"
        animate={{ rotate: [-45, 315], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative w-8 h-8">
          <div className="absolute top-1/2 left-0 w-full h-px bg-primary/15 -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-primary/15 -translate-x-1/2" />
        </div>
      </motion.div>

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
