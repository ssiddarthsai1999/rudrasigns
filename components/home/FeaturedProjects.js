"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
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

// Items at index 0 and 3 span 2 columns for asymmetric masonry layout
const isWide = (index) => index === 0 || index === 3;

const FeaturedProjects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filtered =
    activeCategory === "all"
      ? projects.slice(0, 8)
      : projects.filter((p) => p.category === activeCategory).slice(0, 8);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — left-aligned editorial style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs text-primary tracking-widest uppercase font-semibold">
              Portfolio
            </span>
            <div className="h-px flex-1 max-w-50 bg-primary/30" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark leading-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-body max-w-xl">
            A curated selection of our finest work across signage, web design,
            and wall painting — crafted for businesses across Chennai.
          </p>
        </motion.div>

        {/* Filter Tabs — text buttons with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-8 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="relative pb-2 text-sm transition-colors duration-200 cursor-pointer"
            >
              <span
                className={
                  activeCategory === cat.key
                    ? "text-dark font-bold"
                    : "text-gray-400 hover:text-dark"
                }
              >
                {cat.label}
              </span>
              {activeCategory === cat.key && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Project Grid — asymmetric masonry layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                  isWide(index) ? "md:col-span-2" : "col-span-1"
                } ${
                  isWide(index)
                    ? "h-80 md:h-105"
                    : "h-70 md:h-85"
                }`}
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes={
                    isWide(index)
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />

                {/* Content — always visible on mobile, hover-reveal on desktop */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col justify-end">
                  {/* Category Tag */}
                  <span className="inline-block w-fit text-xs bg-primary/20 text-primary rounded-full px-2 py-0.5 mb-2 md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                    {getCategoryLabel(project.category)}
                  </span>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg md:text-xl leading-snug mb-1 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>

                  {/* Client */}
                  <p className="text-white/70 text-sm md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 delay-75">
                    {project.client}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturedProjects;
