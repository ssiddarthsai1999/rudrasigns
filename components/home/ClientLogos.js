"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "Saravana Stores",
  "GRT Hotels",
  "Chettinad Group",
  "Kumaran Silks",
  "Pothys",
  "The Park Hotels",
  "Karaikudi Restaurant",
  "Chennai Silks",
  "RmKV Silks",
  "Annapoorna",
  "Sangeetha Veg",
  "Murugan Idli Shop",
];

const marqueeKeyframes = `
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
`;

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-4"
        style={{
          animation: `marquee 30s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          width: "max-content",
        }}
      >
        {doubled.map((name, index) => (
          <span
            key={`${name}-${index}`}
            className="px-6 py-3 border border-gray-200 rounded-full text-sm font-medium text-gray-500 hover:border-primary hover:text-primary transition-colors whitespace-nowrap cursor-default"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ClientLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const row1 = clients.slice(0, 6);
  const row2 = clients.slice(6, 12);

  return (
    <section className="py-20 lg:py-24 bg-white">
      <style>{marqueeKeyframes}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Trusted By
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
            Brands That Choose Us
          </h2>
        </motion.div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </motion.div>
      </div>
    </section>
  );
}
