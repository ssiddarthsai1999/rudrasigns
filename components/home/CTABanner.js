"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 lg:py-32 bg-dark relative overflow-hidden">
      {/* Grid background overlay */}
      <div className="grid-bg absolute inset-0 opacity-[0.03]" />

      {/* Animated gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-br from-primary/20 via-accent/10 to-primary-dark/20 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-6"
        >
          Ready to Start?
        </motion.span>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-10"
        >
          Let&apos;s create something
          <br />
          <span className="gradient-text">amazing together</span>
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn-primary">
            Start a Project
            <ArrowRight className="w-5 h-5 btn-icon" />
          </Link>

          <a href="tel:+918110020567" className="btn-outline">
            <Phone className="w-4 h-4" />
            <span>081100 20567</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
