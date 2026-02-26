"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Pencil, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consult",
    description: "We discuss your needs, vision, and budget to understand your project.",
  },
  {
    icon: Pencil,
    title: "Design",
    description: "Our team creates detailed designs and mockups for your approval.",
  },
  {
    icon: Hammer,
    title: "Execute",
    description: "We fabricate using premium materials and skilled craftsmanship.",
  },
  {
    icon: CheckCircle,
    title: "Deliver",
    description: "Professional installation with quality assurance and after-support.",
  },
];

export default function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 lg:py-32 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Left-aligned header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              HOW WE WORK
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Process
          </h2>
        </div>

        <div ref={ref} className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-white/10">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="h-full bg-primary/40 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative text-center group"
              >
                {/* Icon circle */}
                <div className="relative z-10 w-20 h-20 bg-dark border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-primary/40 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                  {/* Step number */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[220px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
