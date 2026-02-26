"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCTA({ serviceName }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest uppercase text-primary"
        >
          GET STARTED
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight"
        >
          Get a free quote for
          <br />
          <span className="gradient-text">{serviceName}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-gray-400 mb-10"
        >
          Tell us about your project and we&apos;ll get back to you within 24 hours.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold tracking-widest uppercase text-white bg-primary/90 border border-primary/50 rounded transition-all duration-300 hover:bg-primary hover:border-primary/80 hover:shadow-[0_0_20px_rgba(14,165,233,0.4),0_0_50px_rgba(14,165,233,0.15)] group"
            style={{ fontFamily: "var(--font-space)" }}
          >
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
