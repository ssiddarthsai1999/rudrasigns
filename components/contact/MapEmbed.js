"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MapEmbed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="w-full rounded-2xl overflow-hidden shadow-lg"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8!2d80.19!3d13.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVirugambakkam%2C+Chennai!5e0!3m2!1sen!2sin!4v1700000000000"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Rudra Signs Location - Virugambakkam, Chennai"
        className="w-full"
      />
      <noscript>
        <a
          href="https://maps.google.com/?q=Rudra+Signs+Virugambakkam+Chennai"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 text-center text-primary"
        >
          View on Google Maps
        </a>
      </noscript>
    </motion.div>
  );
}
