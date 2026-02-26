"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/signage", label: "Signage" },
  { href: "/web-services", label: "Web Services" },
  { href: "/wall-painting", label: "Wall Painting" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-dark/95 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Slide-in panel */}
          <motion.nav
            className="absolute top-0 right-0 h-full w-full max-w-sm bg-dark flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={onClose}
                className="text-white hover:text-primary transition-colors duration-300 cursor-pointer"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col items-center justify-center flex-1 gap-2">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`block text-2xl font-semibold py-3 px-6 transition-colors duration-300 ${
                        isActive
                          ? "text-primary"
                          : "text-white hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Get a Quote button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="relative inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold tracking-widest uppercase text-white bg-primary/90 border border-primary/50 rounded transition-all duration-300 hover:bg-primary hover:border-primary/80 hover:shadow-[0_0_20px_rgba(14,165,233,0.4),0_0_50px_rgba(14,165,233,0.15)]"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
                  <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
