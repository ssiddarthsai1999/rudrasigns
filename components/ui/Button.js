"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  accent: "bg-accent text-white hover:bg-accent-dark",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...rest
}) {
  const baseClasses =
    "inline-block rounded-full font-semibold transition-all duration-300 cursor-pointer";
  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a {...motionProps} className={classes} {...rest}>
        <Link href={href} className="block">
          {children}
        </Link>
      </motion.a>
    );
  }

  return (
    <motion.button {...motionProps} className={classes} {...rest}>
      {children}
    </motion.button>
  );
}
