"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

export default function Counter({
  target,
  suffix = "",
  duration = 2,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, target, duration, motionValue]);

  return (
    <span
      ref={ref}
      className={`text-4xl md:text-5xl font-bold text-primary ${className}`}
    >
      {displayValue}
      {suffix}
    </span>
  );
}
