"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { PenTool, Globe, Paintbrush, ArrowUpRight } from "lucide-react";

/* ── Aurora ribbon presets per card theme ── */

const signageAurora = [
  {
    w: "130%", h: "160px",
    bg: "linear-gradient(90deg, transparent 0%, rgba(14,165,233,0.3) 20%, rgba(56,189,248,0.22) 50%, rgba(14,165,233,0.3) 80%, transparent 100%)",
    blur: 60, left: "-15%", top: "10%",
    animate: { x: ["-5%","20%","-10%","15%","-5%"], y: ["0%","-20%","25%","-10%","0%"], rotate: [-3,12,-8,15,-3], scaleY: [1,1.4,0.6,1.3,1] },
    duration: 14,
  },
  {
    w: "100%", h: "120px",
    bg: "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.25) 30%, rgba(14,165,233,0.18) 70%, transparent 100%)",
    blur: 50, right: "-5%", bottom: "15%",
    animate: { x: ["10%","-20%","15%","-15%","10%"], y: ["-5%","20%","-15%","25%","-5%"], rotate: [5,-15,20,-10,5], scaleY: [1.2,0.5,1.5,0.7,1.2] },
    duration: 18,
  },
  {
    w: "70%", h: "80px",
    bg: "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.15) 40%, rgba(56,189,248,0.2) 60%, transparent 100%)",
    blur: 40, left: "15%", top: "40%",
    animate: { x: ["-10%","25%","-20%","30%","-10%"], y: ["5%","-25%","20%","-15%","5%"], rotate: [0,-20,30,-15,0], scaleX: [1,0.7,1.3,0.8,1], opacity: [0.5,1,0.4,0.9,0.5] },
    duration: 10,
  },
];

const webAurora = [
  {
    w: "140%", h: "120px",
    bg: "linear-gradient(90deg, transparent 0%, rgba(14,165,233,0.1) 25%, rgba(56,189,248,0.08) 50%, rgba(14,165,233,0.1) 75%, transparent 100%)",
    blur: 50, left: "-20%", top: "20%",
    animate: { x: ["0%","15%","-10%","20%","0%"], y: ["-5%","15%","-10%","10%","-5%"], rotate: [-2,10,-6,8,-2], scaleY: [1,1.3,0.7,1.2,1] },
    duration: 16,
  },
  {
    w: "80%", h: "80px",
    bg: "linear-gradient(90deg, transparent 0%, rgba(14,165,233,0.12) 35%, rgba(56,189,248,0.15) 65%, transparent 100%)",
    blur: 35, right: "0%", bottom: "10%",
    animate: { x: ["5%","-15%","10%","-20%","5%"], y: ["0%","-15%","20%","-10%","0%"], rotate: [3,-12,18,-8,3], scaleX: [1,0.8,1.2,0.9,1], opacity: [0.4,0.8,0.3,0.7,0.4] },
    duration: 12,
  },
];

const paintAurora = [
  {
    w: "130%", h: "140px",
    bg: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.2) 80%, transparent 100%)",
    blur: 55, left: "-15%", top: "15%",
    animate: { x: ["-5%","18%","-12%","22%","-5%"], y: ["0%","-20%","15%","-10%","0%"], rotate: [-4,14,-10,18,-4], scaleY: [1,1.5,0.6,1.3,1] },
    duration: 15,
  },
  {
    w: "90%", h: "100px",
    bg: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 30%, rgba(224,242,254,0.2) 70%, transparent 100%)",
    blur: 45, right: "-5%", bottom: "20%",
    animate: { x: ["8%","-22%","15%","-18%","8%"], y: ["-8%","25%","-18%","12%","-8%"], rotate: [6,-18,24,-12,6], scaleY: [1.1,0.5,1.4,0.7,1.1] },
    duration: 12,
  },
  {
    w: "60%", h: "60px",
    bg: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 40%, rgba(224,242,254,0.3) 60%, transparent 100%)",
    blur: 30, left: "20%", top: "50%",
    animate: { x: ["-15%","30%","-20%","25%","-15%"], y: ["5%","-20%","25%","-15%","5%"], rotate: [0,-25,35,-20,0], opacity: [0.4,1,0.3,0.8,0.4] },
    duration: 9,
  },
];

function AuroraRibbons({ ribbons }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
      {ribbons.map((r, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: r.w, height: r.h,
            background: r.bg,
            filter: `blur(${r.blur}px)`,
            left: r.left, right: r.right, top: r.top, bottom: r.bottom,
          }}
          animate={r.animate}
          transition={{ duration: r.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f0f7ff 40%, #e8f4fd 70%, #ffffff 100%)" }}>
      {/* Dot pattern — visible on light bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(14,165,233,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Aurora ribbon 1 — teal sweep across top */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "110%", height: "180px",
          background: "linear-gradient(90deg, transparent 0%, rgba(14,165,233,0.12) 25%, rgba(56,189,248,0.08) 50%, rgba(14,165,233,0.12) 75%, transparent 100%)",
          filter: "blur(60px)",
          left: "-5%", top: "8%",
        }}
        animate={{
          x: ["-5%", "10%", "-8%", "12%", "-5%"],
          y: ["0%", "-10%", "15%", "-5%", "0%"],
          rotate: [-2, 8, -5, 10, -2],
          scaleY: [1, 1.4, 0.7, 1.3, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Aurora ribbon 2 — violet accent mid-section */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "80%", height: "140px",
          background: "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.08) 30%, rgba(14,165,233,0.1) 70%, transparent 100%)",
          filter: "blur(55px)",
          right: "0%", top: "45%",
        }}
        animate={{
          x: ["5%", "-15%", "10%", "-12%", "5%"],
          y: ["-5%", "12%", "-10%", "8%", "-5%"],
          rotate: [3, -10, 8, -6, 3],
          scaleY: [1.2, 0.6, 1.3, 0.8, 1.2],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Aurora ribbon 3 — bottom glow */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "90%", height: "120px",
          background: "linear-gradient(90deg, transparent 0%, rgba(14,165,233,0.1) 35%, rgba(56,189,248,0.12) 65%, transparent 100%)",
          filter: "blur(50px)",
          left: "5%", bottom: "10%",
        }}
        animate={{
          x: ["0%", "12%", "-8%", "15%", "0%"],
          y: ["0%", "-8%", "10%", "-5%", "0%"],
          rotate: [-3, 6, -8, 4, -3],
          scaleY: [0.8, 1.4, 0.6, 1.2, 0.8],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — Left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              What We Do
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark max-w-2xl">
            Services built around your brand
          </h2>
          <p className="mt-4 text-body text-lg max-w-xl leading-relaxed">
            Comprehensive branding and visual solutions to help your business
            make a lasting impression — from signage to web to walls.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16"
        >
          {/* ═══ Signage Card — dark, spans full left column ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:row-span-2"
          >
            <Link href="/signage" className="block group h-full">
              <div className="relative overflow-hidden bg-dark text-white rounded-3xl p-10 min-h-[500px] h-full flex flex-col justify-between hover:-translate-y-1 transition-all duration-500">
                {/* Aurora ribbons */}
                <AuroraRibbons ribbons={signageAurora} />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

                {/* Floating geometric shapes */}
                <motion.div
                  className="absolute top-6 right-6 w-16 h-16 border border-white/10 rounded-lg"
                  animate={{ rotate: [12, 372], y: [-5, 5, -5] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-10 right-14 w-10 h-10 border border-primary/20 rounded-md"
                  animate={{ rotate: [-6, -366], scale: [1, 1.15, 1] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute top-1/3 right-10 w-6 h-6 bg-primary/10 rounded-sm"
                  animate={{ rotate: [45, 405], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/15 rounded-2xl flex items-center justify-center mb-8">
                    <PenTool className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                    Signage
                    <br />
                    Solutions
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                    From LED sign boards to 3D letters, we craft eye-catching
                    signage that makes your business stand out. Our signs are
                    built to last with premium materials and precision
                    engineering.
                  </p>
                </div>

                <div className="relative z-10 mt-8">
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Explore Services
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ═══ Web Services Card — light ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link href="/web-services" className="block group h-full">
              <div className="relative overflow-hidden bg-surface rounded-3xl p-8 border border-gray-100 h-full flex flex-col hover:-translate-y-1 transition-all duration-500">
                {/* Aurora ribbons — subtle on light bg */}
                <AuroraRibbons ribbons={webAurora} />

                {/* Floating dot grid decoration */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 dot-bg opacity-40 rounded-xl pointer-events-none"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-dark mb-3">
                    Web Services
                  </h3>
                  <p className="text-body leading-relaxed flex-1">
                    Professional website design and development that brings your
                    brand online. Responsive, SEO-friendly websites that convert
                    visitors into customers.
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ═══ Wall Painting Card — primary gradient ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/wall-painting" className="block group h-full">
              <div className="relative overflow-hidden bg-linear-to-br from-primary to-primary-dark text-white rounded-3xl p-8 h-full flex flex-col hover:-translate-y-1 transition-all duration-500">
                {/* Aurora ribbons — white/cyan on blue bg */}
                <AuroraRibbons ribbons={paintAurora} />

                {/* Floating ring decoration */}
                <motion.div
                  className="absolute -top-3 -right-3 w-24 h-24 rounded-full border-2 border-white/10 pointer-events-none"
                  animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-6 right-8 w-10 h-10 rounded-full border border-white/10 pointer-events-none"
                  animate={{ scale: [1.1, 0.9, 1.1], y: [-3, 3, -3] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center mb-6">
                    <Paintbrush className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">
                    Wall Painting
                  </h3>
                  <p className="text-white/80 leading-relaxed flex-1">
                    Transform your spaces with professional wall painting
                    services. From interior homes to office murals, we bring
                    color and life to every wall.
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
