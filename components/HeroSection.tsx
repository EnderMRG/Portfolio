"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-neutral-900 leading-[1.05] tracking-tight">
            Hello.
            <br />
            I&apos;m Moharnab.
          </h1>
          <p className="mt-5 text-base md:text-lg text-neutral-600 max-w-md leading-relaxed">
            A coding enthusiast dealing in game development and web development,
            currently studying CSE at{" "}
            <a
              href="https://www.dibru.ac.in/"
              className="text-neutral-900 font-semibold underline decoration-2 underline-offset-2 hover:text-neutral-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dibrugarh University
            </a>
            .
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="btn-retro">
              View Projects
            </a>
            <a href="#contact" className="btn-retro-fill">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right: Profile illustration / image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex-shrink-0"
        >
          <div className="browser-card w-[220px] md:w-[280px]">
            <div className="browser-card-bar">
              <div className="browser-dot" />
              <div className="browser-dot" />
              <span className="browser-url">moharnab.dev</span>
            </div>
            <div className="p-0">
              <Image
                src="/Gemini_Generated_Image.png"
                alt="Moharnab Gogoi"
                width={280}
                height={300}
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Links row */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 max-w-7xl mx-auto"
      >
        <h3 className="text-xl font-black text-neutral-900 mb-4">
          Quick links
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { label: "Projects", href: "#projects" },
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Contact", href: "#contact" },
          ].map((link, i) => (
            <a key={link.label} href={link.href} className="quick-link">
              {link.label}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
