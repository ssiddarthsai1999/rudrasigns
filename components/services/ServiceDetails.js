"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import * as LucideIcons from "lucide-react";

export default function ServiceDetails({ title, subtitle, subServices }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-aligned header */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              {title || "What We Offer"}
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          {subtitle && (
            <p className="text-base md:text-lg text-body max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {subServices.map((service, index) => {
            const Icon = LucideIcons[service.icon] || LucideIcons.Star;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Number */}
                <span className="absolute top-6 right-6 text-6xl font-extrabold text-gray-100/80 leading-none select-none group-hover:text-primary/10 transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
