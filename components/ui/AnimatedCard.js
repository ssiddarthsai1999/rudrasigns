"use client";

import { motion } from "framer-motion";

export default function AnimatedCard({
  children,
  className = "",
  hoverScale = 1.02,
}) {
  return (
    <motion.div
      className={`bg-white rounded-2xl p-6 shadow-lg ${className}`}
      whileHover={{ scale: hoverScale, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
