"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ServiceHero({ title, tagline }) {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-dark">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Gradient orb */}
      <motion.div
        animate={{ x: [0, 20, -10, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-[20%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]"
      />

      {/* Floating shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[15%] w-16 h-16 border border-primary/15 rounded-lg"
      />
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[10%] w-2 h-2 bg-primary/30 rounded-full"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-gray-500 mb-8"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary">{title}</span>
        </motion.nav>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[0.95] tracking-tight"
          >
            {title}<span className="text-primary">.</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-l-2 border-primary/40 pl-5 mt-6 max-w-lg"
        >
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-light">
            {tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
