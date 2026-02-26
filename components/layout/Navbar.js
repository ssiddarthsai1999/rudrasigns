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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link href="/" className="flex items-baseline shrink-0 group">
              <span
                className="font-extrabold text-xl tracking-tight text-white transition-colors duration-300"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                RUDRA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary ml-0.5 mb-0.5 inline-block transition-transform duration-300 group-hover:scale-125" />
            </Link>

            {/* Desktop Navigation — pill-shaped container */}
            <nav className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-1 py-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="btn-outline-primary btn-outline px-5 py-2 text-sm"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight size={14} className="btn-icon" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
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
            className="fixed inset-0 z-50 bg-dark flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-6 h-18">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-baseline"
              >
                <span
                  className="font-extrabold text-xl tracking-tight text-white"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  RUDRA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary ml-0.5 mb-0.5 inline-block" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
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
                      className={`block text-3xl font-bold py-3 transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-white"
                      }`}
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
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
                className="btn-outline-primary btn-outline w-full text-base"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight size={18} className="btn-icon" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
