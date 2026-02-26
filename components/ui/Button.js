"use client";

import Link from "next/link";

/* Corner accent marks for HUD buttons */
function CornerAccents({ color = "border-white/30" }) {
  return (
    <>
      <span className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${color}`} />
      <span className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${color}`} />
      <span className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${color}`} />
      <span className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${color}`} />
    </>
  );
}

const base =
  "relative inline-flex items-center justify-center gap-2 font-semibold tracking-widest uppercase rounded transition-all duration-300 group";

const variantStyles = {
  primary: `${base} text-white bg-primary/90 border border-primary/50 hover:bg-primary hover:border-primary/80 hover:shadow-[0_0_20px_rgba(14,165,233,0.4),0_0_50px_rgba(14,165,233,0.15)]`,
  outline: `${base} text-primary border border-primary/30 hover:text-white hover:bg-primary/10 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(14,165,233,0.3),0_0_40px_rgba(14,165,233,0.1)]`,
};

const sizes = {
  sm: "px-5 py-2 text-xs",
  md: "px-7 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

const cornerColors = {
  primary: "border-white/30",
  outline: "border-primary/40",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...rest
}) {
  const classes = `${variantStyles[variant] || variantStyles.primary} ${sizes[size] || sizes.md} ${className}`;
  const accentColor = cornerColors[variant] || cornerColors.primary;

  const inner = (
    <>
      <CornerAccents color={accentColor} />
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} style={{ fontFamily: "var(--font-space)" }} {...rest}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} style={{ fontFamily: "var(--font-space)" }} {...rest}>
      {inner}
    </button>
  );
}

export { CornerAccents };
