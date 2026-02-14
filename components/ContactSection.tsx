"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";

const iconMap: Record<string, React.ReactNode> = {
  github: <IconBrandGithub className="w-5 h-5" />,
  linkedin: <IconBrandLinkedin className="w-5 h-5" />,
  instagram: <IconBrandInstagram className="w-5 h-5" />,
  twitter: <IconBrandX className="w-5 h-5" />,
};

const ContactSection = () => {
  const linkedinLink = socialLinks.find((link) => link.icon === "linkedin");

  return (
    <section id="contact" className="py-16 md:py-20 px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mb-6">
          Get in touch
        </h2>
        
        <p className="text-lg md:text-xl text-neutral-700 mb-4 leading-relaxed font-medium max-w-2xl mx-auto">
          Let's connect and build something great together.
        </p>
        <p className="text-neutral-600 mb-10 leading-relaxed max-w-xl mx-auto">
          Whether you have a project in mind, want to collaborate, or just want to chat about tech — I'd love to hear from you.
        </p>
        
        {linkedinLink && (
          <a
            href={linkedinLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white font-bold border-2 border-neutral-900 hover:bg-white hover:text-neutral-900 transition-all duration-150 text-lg mb-12"
          >
            <IconBrandLinkedin className="w-6 h-6" />
            Connect on LinkedIn
          </a>
        )}

        {/* Social links */}
        <div className="mt-12 pt-10 border-t-2 border-neutral-200 max-w-md mx-auto">
          <p className="text-xs font-black text-neutral-500 uppercase tracking-wider mb-5">
            Or find me here
          </p>
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="w-12 h-12 border-2 border-neutral-900 bg-white flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-150"
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
