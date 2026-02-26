"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  { name: "Saravana Stores", short: "SS", sector: "Retail" },
  { name: "GRT Hotels", short: "GRT", sector: "Hospitality" },
  { name: "Chettinad Group", short: "CG", sector: "F&B" },
  { name: "Kumaran Silks", short: "KS", sector: "Retail" },
  { name: "Pothys", short: "PTY", sector: "Retail" },
  { name: "The Park Hotels", short: "TPH", sector: "Hospitality" },
  { name: "Karaikudi Restaurant", short: "KR", sector: "F&B" },
  { name: "Chennai Silks", short: "CS", sector: "Retail" },
  { name: "RmKV Silks", short: "RMK", sector: "Retail" },
  { name: "Annapoorna", short: "AP", sector: "F&B" },
  { name: "Sangeetha Veg", short: "SV", sector: "F&B" },
  { name: "Murugan Idli Shop", short: "MIS", sector: "F&B" },
];

const marqueeKeyframes = `
@keyframes marqueeLeft {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@keyframes marqueeRight {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}
`;

function LogoCard({ client }) {
  return (
    <div className="relative shrink-0 w-52 group cursor-default">
      <div className="relative px-5 py-4 border border-gray-200 bg-white rounded transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(14,165,233,0.08)] overflow-hidden">
        {/* Corner accents */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/15 group-hover:border-primary/40 transition-colors duration-500" />
        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/15 group-hover:border-primary/40 transition-colors duration-500" />
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/15 group-hover:border-primary/40 transition-colors duration-500" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/15 group-hover:border-primary/40 transition-colors duration-500" />

        <div className="flex items-center gap-3">
          {/* Monogram */}
          <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
            <div className="absolute inset-0 border border-primary/20 group-hover:border-primary/40 bg-primary/5 group-hover:bg-primary/10 rounded transition-all duration-500" />
            <span
              className="text-[10px] font-bold tracking-wider text-primary/70 group-hover:text-primary transition-colors duration-500"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              {client.short}
            </span>
          </div>

          {/* Name + sector */}
          <div className="min-w-0">
            <p className="text-sm font-medium text-dark/80 group-hover:text-dark transition-colors duration-500 truncate"
              style={{ fontFamily: "var(--font-space)" }}
            >
              {client.name}
            </p>
            <p className="text-[10px] text-body/50 group-hover:text-primary/60 uppercase tracking-wider transition-colors duration-500">
              {client.sector}
            </p>
          </div>
        </div>

        {/* Scan line on hover */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #F8FAFC, transparent)" }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #F8FAFC, transparent)" }}
      />

      <div
        className="flex gap-4"
        style={{
          animation: `${reverse ? "marqueeRight" : "marqueeLeft"} 35s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((client, index) => (
          <LogoCard key={`${client.name}-${index}`} client={client} index={index} />
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
    <section className="py-20 lg:py-24 bg-background relative overflow-hidden">
      <style>{marqueeKeyframes}</style>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(14,165,233,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary/30" />
            <span
              className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase"
              style={{ fontFamily: "var(--font-space)" }}
            >
              Trusted By
            </span>
            <div className="h-px w-8 bg-primary/30" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark">
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

        {/* Bottom counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <div className="h-px flex-1 max-w-24 bg-gray-200" />
          <span className="text-xs text-body/40 tracking-widest uppercase" style={{ fontFamily: "var(--font-space)" }}>
            200+ clients across Chennai
          </span>
          <div className="h-px flex-1 max-w-24 bg-gray-200" />
        </motion.div>
      </div>
    </section>
  );
}
