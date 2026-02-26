"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, GripHorizontal } from "lucide-react";
import projects from "@/data/projects";

const categories = [
  { key: "all", label: "All" },
  { key: "signage", label: "Signage" },
  { key: "web", label: "Web Design" },
  { key: "painting", label: "Wall Painting" },
];

const getCategoryLabel = (cat) => {
  const found = categories.find((c) => c.key === cat);
  return found ? found.label : cat;
};

/* ── Sand stream — constant right-to-left flow (blue) ── */
function SandStream() {
  const grains = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 80; i++) {
      arr.push({
        id: i,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 12,
        drift: -6 + Math.random() * 12,
        opacity: 0.3 + Math.random() * 0.5,
      });
    }
    return arr;
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {grains.map((g) => (
        <motion.div
          key={g.id}
          className="absolute rounded-full"
          style={{
            width: g.size,
            height: g.size,
            top: `${g.y}%`,
            right: "-2%",
            background: `rgba(56,189,248,${g.opacity})`,
            boxShadow: `0 0 ${g.size * 3}px rgba(56,189,248,${g.opacity * 0.8}), 0 0 ${g.size * 6}px rgba(14,165,233,${g.opacity * 0.4})`,
          }}
          animate={{
            x: ["0vw", "-105vw"],
            y: [0, g.drift, -g.drift * 0.5, g.drift * 0.3, 0],
          }}
          transition={{
            x: { duration: g.duration, repeat: Infinity, ease: "linear", delay: g.delay },
            y: { duration: g.duration * 1.3, repeat: Infinity, ease: "easeInOut", delay: g.delay },
          }}
        />
      ))}
    </div>
  );
}

/* ── Single 3D card on a circular arc ── */
function ProjectCard({ project, index, scrollX, cardWidth, gap, total }) {
  const cardRef = useRef(null);

  // Position of this card's center relative to scroll
  const cardOffset = index * (cardWidth + gap) + cardWidth / 2;

  // How far this card is from the "viewport center" — which shifts with drag
  const distFromCenter = useTransform(scrollX, (sv) => {
    const viewCenter = -sv + (typeof window !== "undefined" ? window.innerWidth / 2 : 700);
    return cardOffset - viewCenter;
  });

  // 3D circular arc: rotate around Y axis based on distance from center
  const rotateY = useTransform(distFromCenter, [-800, 0, 800], [35, 0, -35]);
  // Push cards back on Z as they rotate away (circular depth)
  const translateZ = useTransform(distFromCenter, [-800, 0, 800], [-120, 0, -120]);
  // Scale down cards at the edges
  const scale = useTransform(distFromCenter, [-600, 0, 600], [0.82, 1, 0.82]);
  // Fade edges
  const opacity = useTransform(distFromCenter, [-900, -400, 0, 400, 900], [0.3, 0.8, 1, 0.8, 0.3]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateY,
        scale,
        opacity,
        translateZ,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="shrink-0 w-72 sm:w-80 group relative cursor-grab active:cursor-grabbing"
    >
      <div className="relative w-full h-96 sm:h-110 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-500 shadow-lg shadow-black/50">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="320px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          draggable={false}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Glow on hover */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 group-hover:ring-primary/20 transition-all duration-500 pointer-events-none" />

        {/* Top index */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[11px] font-mono text-white/30 group-hover:text-primary/60 transition-colors duration-300">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Arrow */}
        <div className="absolute top-4 right-4 z-10">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </div>
        </div>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-5 z-10">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-primary/80 mb-2">
            {getCategoryLabel(project.category)}
          </span>
          <h3 className="text-white font-bold text-lg leading-snug mb-1">
            {project.title}
          </h3>
          <p className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            {project.client}
          </p>
          <div className="w-0 group-hover:w-12 h-0.5 bg-primary mt-3 transition-all duration-500 delay-100" />
        </div>
      </div>
    </motion.div>
  );
}

const CARD_W_SM = 288; // w-72
const CARD_W = 320;    // sm:w-80
const GAP = 20;        // gap-5

const FeaturedProjects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [dragLimit, setDragLimit] = useState(0);
  const [isSm, setIsSm] = useState(false);

  const filtered =
    activeCategory === "all"
      ? projects.slice(0, 10)
      : projects.filter((p) => p.category === activeCategory).slice(0, 10);

  useEffect(() => {
    const measure = () => {
      setIsSm(window.innerWidth >= 640);
      if (trackRef.current) {
        const track = trackRef.current.scrollWidth;
        const container = trackRef.current.parentElement?.clientWidth || 0;
        setDragLimit(Math.max(0, track - container + 60));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [filtered]);

  const dragX = useMotionValue(0);
  const smoothX = useSpring(dragX, { damping: 40, stiffness: 200 });

  const cardW = isSm ? CARD_W : CARD_W_SM;

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Sand stream */}
      <SandStream />

      {/* Noise */}
      <div className="absolute inset-0 noise-bg pointer-events-none" />

      {/* Top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(14,165,233,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — primary blue text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs text-primary tracking-widest uppercase font-semibold">
              Portfolio
            </span>
            <div className="h-px flex-1 max-w-50 bg-primary/30" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-400 max-w-xl">
                Drag to explore our finest work across signage, web design,
                and wall painting.
              </p>
            </div>

            {/* Filter Tabs — primary blue */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    dragX.set(0);
                  }}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border ${
                    activeCategory === cat.key
                      ? "bg-primary/15 text-primary border-primary/30"
                      : "bg-white/5 text-gray-500 border-white/10 hover:text-white hover:border-white/20"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3D Circular drag gallery */}
      <div className="relative overflow-hidden" style={{ perspective: "1000px" }}>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #000000, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #000000, transparent)" }} />

        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -dragLimit, right: 0 }}
          dragElastic={0.08}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          style={{ x: smoothX }}
          className="flex gap-5 pl-8 sm:pl-12 lg:pl-16 pr-24 py-8"
        >
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              scrollX={smoothX}
              cardWidth={cardW}
              gap={GAP}
              total={filtered.length}
            />
          ))}
        </motion.div>

        {/* Drag hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex items-center justify-center gap-2 mt-4 text-gray-700"
        >
          <GripHorizontal className="w-4 h-4" />
          <span className="text-xs uppercase tracking-wider">Drag to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
