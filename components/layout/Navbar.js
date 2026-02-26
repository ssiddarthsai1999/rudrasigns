"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/signage", label: "Signage" },
  { href: "/web-services", label: "Web Services" },
  { href: "/wall-painting", label: "Wall Painting" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/70 backdrop-blur-2xl border-b border-primary/10"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Top neon line */}
        <div
          className={`absolute top-0 left-0 right-0 h-px transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(90deg, transparent, rgba(14,165,233,0.6), rgba(56,189,248,0.8), rgba(14,165,233,0.6), transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link href="/" className="flex items-baseline shrink-0 group">
              <span
                className="font-bold text-lg tracking-widest text-white uppercase transition-all duration-300 group-hover:text-primary"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                RUDRA
              </span>
              <span
                className="text-primary text-lg font-bold"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                .
              </span>
            </Link>

            {/* Desktop Navigation — HUD style */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 group"
                    style={{ fontFamily: "var(--font-space)" }}
                  >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>

                    {/* Active neon underline */}
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-2 right-2 h-px"
                        style={{
                          background: "linear-gradient(90deg, transparent, #0EA5E9, #38BDF8, #0EA5E9, transparent)",
                          boxShadow: "0 0 8px rgba(14,165,233,0.5), 0 2px 12px rgba(14,165,233,0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Hover glow underline */}
                    {!isActive && (
                      <div
                        className="absolute bottom-0 left-2 right-2 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA — neon button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-primary border border-primary/40 rounded transition-all duration-300 hover:text-white hover:bg-primary/10 hover:border-primary/70 hover:shadow-[0_0_20px_rgba(14,165,233,0.3),0_0_40px_rgba(14,165,233,0.1)] group"
                style={{ fontFamily: "var(--font-space)" }}
              >
                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/60" />
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/60" />
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/60" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/60" />

                <span>Let&apos;s Talk</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-white hover:text-primary transition-colors duration-300 cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Neon border top */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(14,165,233,0.6), transparent)",
              }}
            />

            {/* Close button */}
            <div className="flex items-center justify-between px-6 h-18">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-baseline"
              >
                <span
                  className="font-bold text-lg tracking-widest text-white uppercase"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  RUDRA
                </span>
                <span
                  className="text-primary text-lg font-bold"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  .
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white hover:text-primary transition-colors duration-300 cursor-pointer"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + i * 0.08,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-2xl font-bold py-3 tracking-wider uppercase transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-white"
                      }`}
                      style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                      <span className="text-primary/30 text-sm mr-3 font-mono">
                        0{i + 1}
                      </span>
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile CTA at bottom */}
            <motion.div
              className="px-8 pb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="relative w-full inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold tracking-widest uppercase text-white bg-primary/90 border border-primary/50 rounded transition-all duration-300 hover:bg-primary hover:border-primary/80 hover:shadow-[0_0_20px_rgba(14,165,233,0.4),0_0_50px_rgba(14,165,233,0.15)] group"
                style={{ fontFamily: "var(--font-space)" }}
              >
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
                <span>Let&apos;s Talk</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
