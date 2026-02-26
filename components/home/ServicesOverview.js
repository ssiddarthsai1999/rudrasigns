"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { PenTool, Globe, Paintbrush, ArrowUpRight } from "lucide-react";

export default function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {/* Signage Card — Main, spans full left column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:row-span-2"
          >
            <Link href="/signage" className="block group h-full">
              <div className="relative overflow-hidden bg-dark text-white rounded-3xl p-10 min-h-[500px] h-full flex flex-col justify-between hover:-translate-y-1 transition-all duration-500">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

                {/* Decorative floating squares */}
                <div className="absolute top-6 right-6 w-16 h-16 border border-white/10 rounded-lg rotate-12" />
                <div className="absolute bottom-10 right-14 w-10 h-10 border border-primary/20 rounded-md -rotate-6" />
                <div className="absolute top-1/3 right-10 w-6 h-6 bg-primary/10 rounded-sm rotate-45" />

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

          {/* Web Services Card — Right top */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link href="/web-services" className="block group h-full">
              <div className="bg-surface rounded-3xl p-8 border border-gray-100 h-full flex flex-col hover:-translate-y-1 transition-all duration-500">
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
            </Link>
          </motion.div>

          {/* Wall Painting Card — Right bottom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/wall-painting" className="block group h-full">
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-3xl p-8 h-full flex flex-col hover:-translate-y-1 transition-all duration-500">
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
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
