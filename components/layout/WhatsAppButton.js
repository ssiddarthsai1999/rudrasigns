"use client";

import { motion } from "framer-motion";

const whatsappLink =
  "https://wa.me/918110020567?text=Hi%20Rudra%20Signs%2C%20I%27m%20interested%20in%20your%20services";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping bg-green-500/40" />

      {/* WhatsApp icon */}
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7 relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.004 3.2C9.002 3.2 3.306 8.895 3.304 15.898c-.001 2.237.584 4.42 1.694 6.345L3.2 28.8l6.717-1.762a12.66 12.66 0 0 0 6.08 1.548h.005c7.003 0 12.698-5.696 12.7-12.699.001-3.393-1.319-6.584-3.72-8.986A12.63 12.63 0 0 0 16.004 3.2Zm0 23.196h-.004a10.52 10.52 0 0 1-5.362-1.469l-.385-.228-3.986 1.046 1.064-3.886-.25-.399a10.49 10.49 0 0 1-1.61-5.563c.002-5.826 4.744-10.567 10.572-10.567a10.5 10.5 0 0 1 7.474 3.1 10.5 10.5 0 0 1 3.094 7.48c-.003 5.826-4.744 10.567-10.567 10.486Zm5.796-7.915c-.318-.159-1.88-.928-2.172-1.033-.291-.106-.504-.159-.716.159-.212.318-.822 1.033-.008 1.245-.186.212-.716.318-.372-.001-.69-.32-1.139-1.076-1.351-.611-.212-.005-.199-.361.007-.716.053-.106.159-.318.265-.477.106-.159.14-.271.212-.451.071-.18.036-.339-.018-.477-.053-.138-.716-1.727-.981-2.364-.259-.62-.521-.537-.716-.547-.186-.009-.398-.011-.611-.011s-.557.079-.849.398c-.292.318-1.113 1.087-1.113 2.652s1.139 3.076 1.298 3.288c.159.213 2.243 3.424 5.434 4.803.76.328 1.352.524 1.815.671.763.243 1.457.209 2.006.127.612-.091 1.88-.768 2.146-1.511.265-.742.265-1.378.186-1.511-.08-.133-.292-.212-.611-.371Z" />
      </svg>
    </motion.a>
  );
}
