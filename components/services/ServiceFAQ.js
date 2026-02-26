"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 py-6 text-left group cursor-pointer"
      >
        <span className="text-xs font-bold text-gray-300 tabular-nums w-6">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-semibold text-dark text-sm group-hover:text-primary transition-colors duration-200">
          {faq.question}
        </span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary/30 transition-colors duration-200">
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-primary" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary transition-colors duration-200" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-10 pb-6 text-body text-sm leading-relaxed max-w-2xl">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServiceFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              FAQ
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight">
            Common Questions
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
