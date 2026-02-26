"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const headlineLines = [
  { text: "Chennai's Trusted", gradient: false },
  { text: "Signage & Branding", gradient: true },
  { text: "Partner.", gradient: false },
];

const services = ["Signage", "Web Design", "Wall Painting"];

const cubicReveal = [0.76, 0, 0.24, 1];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* Grid background overlay */}
      <div className="absolute inset-0 grid-bg z-1" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-bg z-2" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-125 h-125 rounded-full bg-primary/10 blur-[120px]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[10%] w-100 h-100 rounded-full bg-primary/8 blur-[100px]"
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-[40%] right-[30%] w-75 h-75 rounded-full bg-accent/5 blur-[90px]"
        animate={{
          x: [0, 30, -50, 0],
          y: [0, -60, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-[15%] right-[20%] w-16 h-16 border border-primary/15 rounded-sm z-3"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[8%] w-10 h-10 border border-white/10 rounded-full z-3"
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-[60%] right-[12%] w-8 h-8 border border-primary/10 z-3"
        style={{ transform: "rotate(45deg)" }}
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-[30%] left-[15%] w-6 h-6 border border-white/8 rounded-full z-3"
        animate={{ y: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Diagonal accent lines */}
      <div
        className="absolute top-0 right-[25%] w-px h-[60vh] bg-linear-to-b from-transparent via-primary/10 to-transparent z-3"
        style={{ transform: "rotate(15deg)", transformOrigin: "top center" }}
      />
      <div
        className="absolute bottom-0 left-[35%] w-px h-[50vh] bg-linear-to-t from-transparent via-primary/8 to-transparent z-3"
        style={{ transform: "rotate(-12deg)", transformOrigin: "bottom center" }}
      />
      <div
        className="absolute top-[20%] right-[40%] w-px h-[40vh] bg-linear-to-b from-transparent via-white/5 to-transparent z-3"
        style={{ transform: "rotate(25deg)", transformOrigin: "top center" }}
      />

      {/* Large RUDRA watermark (desktop only) */}
      <motion.div
        style={{ y: watermarkY }}
        className="absolute top-1/2 right-0 -translate-y-1/2 z-2 hidden lg:block pointer-events-none select-none"
      >
        <span
          className="text-[18rem] xl:text-[22rem] font-extrabold leading-none tracking-tight"
          style={{
            fontFamily: "var(--font-syne)",
            opacity: 0.03,
            WebkitTextStroke: "2px rgba(255,255,255,0.15)",
            WebkitTextFillColor: "transparent",
          }}
        >
          RUDRA
        </span>
      </motion.div>

      {/* Main content — asymmetric left-aligned */}
      <motion.div
        style={{ y: parallaxY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-32 pb-24"
      >
        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium text-white tracking-wide">
              4.9 ON GOOGLE
            </span>
          </div>
          <span className="w-px h-5 bg-white/20" />
          <span className="text-sm text-gray-500 font-medium">
            10+ Years of Excellence
          </span>
        </motion.div>

        {/* Headline with slide-up reveal */}
        <h1 className="mb-8 font-extrabold text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95]"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {headlineLines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.5 + i * 0.15,
                  ease: cubicReveal,
                }}
              >
                {line.gradient ? (
                  <>
                    <span className="gradient-text">Signage</span>
                    <span className="text-white"> & </span>
                    <span className="gradient-text">Branding</span>
                  </>
                ) : line.text === "Partner." ? (
                  <>
                    <span className="text-white">Partner</span>
                    <span className="text-primary">.</span>
                  </>
                ) : (
                  <span className="text-white">{line.text}</span>
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle with left accent */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="border-l-2 border-primary/40 pl-5 text-gray-400 font-light text-lg sm:text-xl max-w-xl mb-12 leading-relaxed"
        >
          We craft custom signage solutions, digital experiences, and wall art
          that transform brands and attract customers across Chennai.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/signage" className="btn-primary">
            View Our Work
            <ArrowRight size={18} className="btn-icon" />
          </Link>
          <Link href="/contact" className="btn-outline">
            <span className="w-2 h-2 rounded-full bg-primary btn-dot" />
            <span>Get a Quote</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between">
          {/* Scroll indicator */}
          <div className="flex items-center gap-3">
            <motion.div
              className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
            >
              <motion.div
                className="w-1 h-1.5 bg-white/60 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <span className="text-xs text-gray-600 uppercase tracking-widest hidden sm:block">
              Scroll to explore
            </span>
          </div>

          {/* Service labels */}
          <div className="hidden sm:flex items-center gap-3 text-sm text-gray-500">
            {services.map((service, i) => (
              <span key={service} className="flex items-center gap-3">
                <span className="font-medium">{service}</span>
                {i < services.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
