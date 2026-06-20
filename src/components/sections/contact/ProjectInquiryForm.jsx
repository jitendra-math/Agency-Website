// src/components/sections/contact/ProjectInquiryForm.jsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectInquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    business: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const smoothEase = [0.16, 1, 0.3, 1];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for future backend integration
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. We'll be in touch shortly.");
    // Reset form (optional)
    setFormData({
      fullName: "",
      email: "",
      business: "",
      projectType: "",
      budget: "",
      message: "",
    });
  };

  return (
    <section
      id="inquiry"
      className="
        relative isolate overflow-hidden
        px-4 py-16 sm:py-20
        bg-[#fafafa] dark:bg-[#050505]
        transition-colors duration-500
      "
    >
      {/* Ambient Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-[10%] left-[-10%] sm:top-[20%] sm:left-[10%]
            w-[80vw] h-[80vw] sm:w-[500px] sm:h-[500px]
            rounded-full
            bg-blue-300/30 dark:bg-indigo-900/20
            blur-[80px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute bottom-[-10%] right-[-10%] sm:bottom-[10%] sm:right-[10%]
            w-[90vw] h-[90vw] sm:w-[600px] sm:h-[600px]
            rounded-full
            bg-cyan-200/40 dark:bg-cyan-900/15
            blur-[90px] sm:blur-[130px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[70vw] h-[70vw] sm:w-[400px] sm:h-[400px]
            rounded-full
            bg-purple-200/30 dark:bg-violet-900/15
            blur-[100px] sm:blur-[120px]
            mix-blend-multiply dark:mix-blend-screen
          "
        />
      </div>

      {/* Subtle Grid Depth */}
      <div
        className="
          absolute inset-0 -z-20
          opacity-[0.03] dark:opacity-[0.05]
          bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
          bg-[size:48px_48px] sm:bg-[size:64px_64px]
          [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,#000_70%,transparent_100%)]
        "
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Start a Project
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mt-2 leading-[1.1]">
            Tell Us About Your Vision
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 max-w-xl mx-auto">
            Fill in the details and we'll get back to you within 24 business hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-black dark:text-white mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/[0.06] backdrop-blur-sm border border-black/10 dark:border-white/10 text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors duration-200"
                placeholder="e.g. John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/[0.06] backdrop-blur-sm border border-black/10 dark:border-white/10 text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors duration-200"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="business" className="block text-sm font-medium text-black dark:text-white mb-1.5">
              Business / Brand Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="business"
              name="business"
              value={formData.business}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/[0.06] backdrop-blur-sm border border-black/10 dark:border-white/10 text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors duration-200"
              placeholder="Your company or brand name"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-black dark:text-white mb-1.5">
                Project Type <span className="text-red-500">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/[0.06] backdrop-blur-sm border border-black/10 dark:border-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors duration-200 appearance-none"
              >
                <option value="" disabled>Select project type</option>
                <option value="landing-page">Landing Page</option>
                <option value="business-website">Business Website</option>
                <option value="portfolio-website">Portfolio Website</option>
                <option value="ecommerce-website">E-Commerce Website</option>
                <option value="custom-web-app">Custom Web Application</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="website-redesign">Website Redesign</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-black dark:text-white mb-1.5">
                Budget Range <span className="text-red-500">*</span>
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/[0.06] backdrop-blur-sm border border-black/10 dark:border-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors duration-200 appearance-none"
              >
                <option value="" disabled>Select budget range</option>
                <option value="below-10000">Below ₹10,000</option>
                <option value="10000-25000">₹10,000 – ₹25,000</option>
                <option value="25000-50000">₹25,000 – ₹50,000</option>
                <option value="50000-100000">₹50,000 – ₹1,00,000</option>
                <option value="above-100000">₹1,00,000+</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white mb-1.5">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/[0.06] backdrop-blur-sm border border-black/10 dark:border-white/10 text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors duration-200 resize-y"
              placeholder="Tell us about your project, goals, timeline, and any specific requirements."
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}