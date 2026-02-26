"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const headlineLines = [
  { text: "Chennai's Trusted", gradient: false },
  { text: "Signage & Branding", gradient: true },
  { text: "Partner.", gradient: false },
];

const services = ["Signage", "Web Design", "Wall Painting"];

const cubicReveal = [0.76, 0, 0.24, 1];

// Floating 3D particles data
const particles = [
  { size: 3, x: 15, y: 20, duration: 8, delay: 0 },
  { size: 2, x: 85, y: 15, duration: 10, delay: 1 },
  { size: 4, x: 70, y: 70, duration: 7, delay: 2 },
  { size: 2, x: 25, y: 80, duration: 9, delay: 0.5 },
  { size: 3, x: 55, y: 40, duration: 11, delay: 1.5 },
  { size: 2, x: 90, y: 55, duration: 8, delay: 3 },
  { size: 3, x: 40, y: 90, duration: 10, delay: 2 },
  { size: 2, x: 10, y: 50, duration: 9, delay: 1 },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Mouse tracking for 3D parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Different depths for parallax layers
  const layer1X = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
  const layer2X = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const layer2Y = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  const layer3X = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);
  const contentTiltX = useTransform(smoothY, [-0.5, 0.5], [2, -2]);
  const contentTiltY = useTransform(smoothX, [-0.5, 0.5], [-3, 3]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (isMobile) return;
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [isMobile, mouseX, mouseY]
  );

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
      style={{ perspective: "1200px" }}
    >
      {/* ═══ LAYER 0: Swirling aurora ribbons ═══ */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ scale: bgScale }}>

        {/* Aurora ribbon 1 — main sweeping teal band */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "120%", height: "220px",
            background: "linear-gradient(90deg, transparent 0%, rgba(14,165,233,0.35) 20%, rgba(56,189,248,0.28) 50%, rgba(14,165,233,0.35) 80%, transparent 100%)",
            filter: "blur(80px)",
            left: "-10%", top: "15%",
          }}
          animate={{
            x: ["-5%", "15%", "-10%", "20%", "-5%"],
            y: ["0%", "-25%", "30%", "-15%", "0%"],
            rotate: [-5, 18, -12, 22, -5],
            scaleY: [1, 1.6, 0.6, 1.4, 1],
            skewX: [0, -8, 5, -10, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Aurora ribbon 2 — secondary sweep, opposite direction */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "100%", height: "180px",
            background: "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.3) 30%, rgba(14,165,233,0.22) 70%, transparent 100%)",
            filter: "blur(70px)",
            right: "-5%", top: "35%",
          }}
          animate={{
            x: ["10%", "-25%", "18%", "-20%", "10%"],
            y: ["-10%", "30%", "-25%", "20%", "-10%"],
            rotate: [12, -20, 28, -18, 12],
            scaleY: [1.3, 0.5, 1.5, 0.7, 1.3],
            skewX: [3, -12, 8, -6, 3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Aurora ribbon 3 — violet/purple accent band */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "85%", height: "160px",
            background: "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.18) 25%, rgba(56,189,248,0.15) 60%, rgba(139,92,246,0.12) 85%, transparent 100%)",
            filter: "blur(75px)",
            left: "5%", bottom: "20%",
          }}
          animate={{
            x: ["0%", "-30%", "25%", "-18%", "0%"],
            y: ["5%", "-35%", "20%", "-28%", "5%"],
            rotate: [-10, 25, -18, 15, -10],
            scaleY: [0.7, 1.4, 0.5, 1.6, 0.7],
            skewX: [-5, 10, -8, 12, -5],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Aurora ribbon 4 — bright highlight streak (thinner, faster) */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "75%", height: "100px",
            background: "linear-gradient(90deg, transparent 0%, rgba(14,165,233,0.45) 35%, rgba(56,189,248,0.5) 55%, rgba(14,165,233,0.3) 75%, transparent 100%)",
            filter: "blur(50px)",
            left: "10%", top: "25%",
          }}
          animate={{
            x: ["-15%", "35%", "-25%", "30%", "-15%"],
            y: ["10%", "-30%", "40%", "-20%", "10%"],
            rotate: [8, -25, 35, -30, 8],
            scaleX: [1, 0.7, 1.4, 0.8, 1],
            skewX: [0, 15, -10, 8, 0],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Aurora ribbon 5 — deep background base sweep */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "140%", height: "300px",
            background: "linear-gradient(90deg, transparent 0%, rgba(2,132,199,0.2) 20%, rgba(14,165,233,0.15) 50%, rgba(2,132,199,0.18) 80%, transparent 100%)",
            filter: "blur(100px)",
            left: "-20%", top: "5%",
          }}
          animate={{
            x: ["5%", "-15%", "12%", "-20%", "5%"],
            y: ["-5%", "18%", "-12%", "22%", "-5%"],
            rotate: [2, -10, 8, -6, 2],
            scaleY: [1, 1.3, 0.8, 1.2, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Aurora energy streak 1 — fast-moving thin glow */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "60%", height: "60px",
            background: "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.35) 40%, rgba(14,165,233,0.5) 60%, transparent 100%)",
            filter: "blur(35px)",
            left: "20%", top: "20%",
          }}
          animate={{
            x: ["-20%", "40%", "-30%", "35%", "-20%"],
            y: ["0%", "-20%", "35%", "-15%", "0%"],
            rotate: [0, -30, 45, -25, 0],
            scaleX: [1.2, 0.6, 1.3, 0.7, 1.2],
            opacity: [0.6, 1, 0.4, 0.9, 0.6],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Aurora energy streak 2 — counter-moving thin glow */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "50%", height: "50px",
            background: "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.25) 30%, rgba(56,189,248,0.35) 70%, transparent 100%)",
            filter: "blur(30px)",
            right: "10%", bottom: "30%",
          }}
          animate={{
            x: ["15%", "-35%", "25%", "-20%", "15%"],
            y: ["-10%", "25%", "-30%", "20%", "-10%"],
            rotate: [5, 35, -20, 40, 5],
            scaleX: [0.8, 1.4, 0.6, 1.2, 0.8],
            opacity: [0.5, 0.9, 0.3, 1, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid overlay on top of aurora */}
        <div className="absolute inset-0 grid-bg opacity-30" />
      </motion.div>

      {/* ═══ LAYER 1: Deep background — max parallax ═══ */}
      <motion.div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{ x: layer1X, y: layer1Y }}
      >

        {/* 3D Rotating wireframe cube (top-right) */}
        <div className="absolute top-[12%] right-[18%] hidden md:block">
          <div className="cube-wrapper">
            <div className="cube">
              <div className="cube-face cube-front" />
              <div className="cube-face cube-back" />
              <div className="cube-face cube-left" />
              <div className="cube-face cube-right" />
              <div className="cube-face cube-top" />
              <div className="cube-face cube-bottom" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══ LAYER 2: Mid-depth — floating shapes ═══ */}
      <motion.div
        className="absolute inset-0 z-2 pointer-events-none"
        style={{ x: layer2X, y: layer2Y }}
      >
        {/* Floating ring */}
        <motion.div
          className="absolute top-[15%] right-[22%] w-20 h-20 hidden md:block"
          animate={{ rotateX: [0, 360], rotateY: [0, 180] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="w-full h-full rounded-full border-2 border-primary/20" />
        </motion.div>

        {/* Hexagonal shape */}
        <motion.div
          className="absolute bottom-[30%] right-[8%] hidden md:block"
          animate={{ rotate: 360, y: [-15, 15, -15] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-12 h-12 border border-primary/15 rotate-45 rounded-md" />
        </motion.div>

        {/* Floating cross */}
        <motion.div
          className="absolute top-[55%] left-[6%] hidden md:block"
          animate={{ rotate: [-45, 315], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative w-8 h-8">
            <div className="absolute top-1/2 left-0 w-full h-px bg-primary/15 -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-primary/15 -translate-x-1/2" />
          </div>
        </motion.div>

        {/* Diagonal accent lines with glow */}
        <div
          className="absolute top-0 right-[28%] w-px h-[65vh] z-3"
          style={{
            transform: "rotate(15deg)",
            transformOrigin: "top center",
            background:
              "linear-gradient(to bottom, transparent, rgba(14,165,233,0.15), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-[35%] w-px h-[55vh] z-3"
          style={{
            transform: "rotate(-12deg)",
            transformOrigin: "bottom center",
            background:
              "linear-gradient(to top, transparent, rgba(14,165,233,0.08), transparent)",
          }}
        />
      </motion.div>

      {/* ═══ LAYER 3: Foreground particles ═══ */}
      <motion.div
        className="absolute inset-0 z-3 pointer-events-none"
        style={{ x: layer3X, y: layer3Y }}
      >
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/30"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </motion.div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-bg z-4" />

      {/* ═══ RUDRA watermark ═══ */}
      <motion.div
        style={{ y: watermarkY, x: layer2X }}
        className="absolute top-1/2 right-0 -translate-y-1/2 z-4 hidden lg:block pointer-events-none select-none"
      >
        <span
          className="text-[18rem] xl:text-[22rem] font-extrabold leading-none tracking-tight"
          style={{
            fontFamily: "var(--font-orbitron)",
            opacity: 0.03,
            WebkitTextStroke: "2px rgba(255,255,255,0.15)",
            WebkitTextFillColor: "transparent",
          }}
        >
          RUDRA
        </span>
      </motion.div>

      {/* ═══ MAIN CONTENT — with 3D tilt ═══ */}
      <motion.div
        style={{
          y: parallaxY,
          opacity: contentOpacity,
          rotateX: isMobile ? 0 : contentTiltX,
          rotateY: isMobile ? 0 : contentTiltY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-24 pb-20 sm:pt-32 sm:pb-24"
      >
        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-10"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <span className="text-xs sm:text-sm font-medium text-white tracking-wide">
              4.9 ON GOOGLE
            </span>
          </div>
          <span className="w-px h-5 bg-white/20 hidden sm:block" />
          <span className="text-xs sm:text-sm text-gray-500 font-medium">
            10+ Years of Excellence
          </span>
        </motion.div>

        {/* Headline with slide-up reveal + 3D pop */}
        <h1
          className="mb-6 sm:mb-8 font-extrabold text-white text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-none sm:leading-[0.95]"
          style={{
            fontFamily: "var(--font-orbitron)",
            transform: "translateZ(40px)",
          }}
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

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="border-l-2 border-primary/40 pl-5 text-gray-400 font-light text-base sm:text-xl max-w-xl mb-8 sm:mb-12 leading-relaxed"
          style={{ transform: "translateZ(25px)" }}
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
          style={{ transform: "translateZ(30px)" }}
        >
          <Link
            href="/signage"
            className="relative inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold tracking-widest uppercase text-white bg-primary/90 border border-primary/50 rounded transition-all duration-300 hover:bg-primary hover:border-primary/80 hover:shadow-[0_0_20px_rgba(14,165,233,0.4),0_0_50px_rgba(14,165,233,0.15)] group"
            style={{ fontFamily: "var(--font-space)" }}
          >
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/30" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/30" />
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/30" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/30" />
            <span>View Our Work</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold tracking-widest uppercase text-primary border border-primary/30 rounded transition-all duration-300 hover:text-white hover:bg-primary/10 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(14,165,233,0.3),0_0_40px_rgba(14,165,233,0.1)] group"
            style={{ fontFamily: "var(--font-space)" }}
          >
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-primary/40" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-primary/40" />
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-primary/40" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-primary/40" />
            <span>Get a Quote</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* ═══ Bottom bar ═══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between">
          {/* Scroll indicator */}
          <div className="flex items-center gap-3">
            <motion.div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1 h-1.5 bg-white/60 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
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
