"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, "")))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const inputBase =
    "w-full px-5 py-4 bg-surface border border-gray-200 rounded-xl text-dark placeholder-gray-400 text-sm outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/10";
  const errorStyle = "border-red-300 focus:border-red-500 focus:ring-red-100";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="relative"
    >
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary">
          SEND A MESSAGE
        </span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      <div className="space-y-5">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputBase} ${errors.name ? errorStyle : ""}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={`${inputBase} ${errors.phone ? errorStyle : ""}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`${inputBase} ${errors.email ? errorStyle : ""}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
          </div>
        </div>

        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputBase} ${errors.service ? errorStyle : ""} ${
              !formData.service ? "text-gray-400" : ""
            }`}
          >
            <option value="">Select a Service</option>
            <option value="signage">Signage Solutions</option>
            <option value="web">Web Services</option>
            <option value="painting">Wall Painting</option>
            <option value="other">Other</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1.5">{errors.service}</p>}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`${inputBase} resize-none ${errors.message ? errorStyle : ""}`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="relative w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white bg-primary/90 border border-primary/50 rounded transition-all duration-300 hover:bg-primary hover:border-primary/80 hover:shadow-[0_0_20px_rgba(14,165,233,0.4),0_0_50px_rgba(14,165,233,0.15)] disabled:opacity-70 disabled:cursor-not-allowed group"
          style={{ fontFamily: "var(--font-space)" }}
        >
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
          <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
          {status === "sending" ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : status === "success" ? (
            <>
              <CheckCircle className="w-4 h-4" />
              Message Sent!
            </>
          ) : status === "error" ? (
            <>
              <AlertCircle className="w-4 h-4" />
              Failed. Try Again
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
}
