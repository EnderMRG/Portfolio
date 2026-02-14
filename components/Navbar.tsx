"use client";

import { navLinks, socialLinks } from "@/data";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  github: <IconBrandGithub className="w-5 h-5" />,
  linkedin: <IconBrandLinkedin className="w-5 h-5" />,
  instagram: <IconBrandInstagram className="w-5 h-5" />,
  twitter: <IconBrandX className="w-5 h-5" />,
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#e8e8e8] border-b-2 border-neutral-900">
      <div className="w-full border-x-2 border-neutral-900 mx-auto max-w-[1920px]">
        <div className="flex items-center justify-between h-14">
          {/* Left Side: Logo + Nav Links */}
          <div className="flex items-center h-full">
            {/* Logo */}
            <div className="h-full flex items-center justify-center px-6 bg-white">
              <a
                href="#"
                className="text-xl font-black text-neutral-900 tracking-tighter"
              >
                MRG
              </a>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center h-full">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="h-full flex items-center px-6 text-sm font-bold uppercase tracking-wider text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Socials / "Find me" */}
          <div className="hidden md:flex items-center h-full">
            <div className="h-full flex items-center px-6 font-bold text-sm uppercase tracking-wide">
              Find me
            </div>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="h-full flex items-center justify-center px-4 md:px-5 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-200"
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden h-full aspect-square flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <IconX className="w-6 h-6" />
            ) : (
              <IconMenu2 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t-2 border-neutral-900 bg-[#e8e8e8] overflow-hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 px-6 text-sm font-bold uppercase tracking-wider text-neutral-900 border-b-2 border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-around py-4 bg-white">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-neutral-900 hover:scale-110 transition-transform"
                  >
                    {iconMap[link.icon]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
