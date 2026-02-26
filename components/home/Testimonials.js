"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import testimonials from "@/data/testimonials";

const displayTestimonials = testimonials.slice(0, 6);

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const Testimonials = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = useCallback((newDirection) => {
    setCurrent(([prev]) => {
      const next =
        (prev + newDirection + displayTestimonials.length) %
        displayTestimonials.length;
      return [next, newDirection];
    });
  }, []);

  const goTo = useCallback((index) => {
    setCurrent(([prev]) => {
      const dir = index > prev ? 1 : -1;
      return [index, dir];
    });
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const testimonial = displayTestimonials[current];

  return (
    <section className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — centered editorial style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-xs text-primary tracking-widest uppercase font-semibold">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark leading-tight mt-4 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Real stories from real businesses we have helped grow with signage,
            web design, and painting across Chennai.
          </p>
        </motion.div>

        {/* Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Large Opening Quote Mark */}
          <span
            className="absolute -top-8 left-0 md:-top-12 md:-left-4 text-[120px] md:text-[180px] font-extrabold text-primary/10 leading-none select-none pointer-events-none z-0"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full text-gray-400 hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="hidden md:flex absolute -right-20 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full text-gray-400 hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Testimonial Content */}
          <div className="relative z-1 min-h-96 md:min-h-90 flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={testimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
              >
                {/* Quote Text */}
                <p className="text-xl md:text-2xl lg:text-3xl font-medium text-dark leading-relaxed italic max-w-3xl mx-auto mb-10">
                  {testimonial.quote}
                </p>

                {/* Divider */}
                <div className="w-16 h-px bg-primary mx-auto mb-6" />

                {/* Star Rating */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "fill-amber-400 text-amber-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Author Info + Dots row */}
                <div className="flex flex-col items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-dark">{testimonial.name}</p>
                      <p className="text-sm text-body">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex md:hidden justify-center gap-4 mt-10">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full text-gray-400 hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full text-gray-400 hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {displayTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
