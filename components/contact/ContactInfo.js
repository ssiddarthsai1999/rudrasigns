"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    content: "081100 20567",
    href: "tel:+918110020567",
    description: "Call us anytime",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@rudrasigns.com",
    href: "mailto:info@rudrasigns.com",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Ansari flats, Kaliamman Koil St, Chinmaya Nagar Stage 2, Virugambakkam, Chennai 600092",
    href: "https://maps.google.com/?q=Rudra+Signs+Virugambakkam+Chennai",
    description: "Visit our workshop",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Sat: 9:00 AM - 11:00 PM",
    href: null,
    description: "Sunday by appointment",
  },
];

export default function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            CONTACT INFO
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>
        <p className="text-body text-sm leading-relaxed max-w-md">
          Have a project in mind? Reach out through any of the channels below.
        </p>
      </motion.div>

      <div className="space-y-4">
        {contactDetails.map((detail, index) => {
          const Wrapper = detail.href ? "a" : "div";
          const wrapperProps = detail.href
            ? {
                href: detail.href,
                target: detail.href.startsWith("http") ? "_blank" : undefined,
                rel: detail.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined,
              }
            : {};

          return (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            >
              <Wrapper
                {...wrapperProps}
                className="group flex items-start gap-4 p-5 bg-surface rounded-xl border border-gray-100 hover:border-primary/20 transition-all duration-300 cursor-pointer"
              >
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-100 group-hover:border-primary/30 transition-colors duration-300">
                  <detail.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-dark text-sm">{detail.title}</p>
                  <p className="text-body text-sm mt-0.5 break-words">{detail.content}</p>
                </div>
                {detail.href && (
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-primary flex-shrink-0 mt-1 transition-colors duration-300" />
                )}
              </Wrapper>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
