"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(projects.length); // Start in the middle set

  // Triplicate projects for infinite scrolling
  const carouselProjects = [...projects, ...projects, ...projects];
  const cardWidth = 450 + 32; // card width + gap

  const handleNavigation = (direction: "left" | "right") => {
    setCurrentIndex((prevIndex) => {
      const newIndex = direction === "left" ? prevIndex - 1 : prevIndex + 1;
      
      // Wrap around logic for infinite scroll
      if (newIndex < 0) {
        return carouselProjects.length - 1;
      } else if (newIndex >= carouselProjects.length) {
        return 0;
      }
      
      return newIndex;
    });
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-20 -mx-5 md:-mx-8 px-5 md:px-8 overflow-hidden"
      style={{
        backgroundColor: "#d8d8d8",
        backgroundImage:
          "radial-gradient(circle, #00000018 1px, transparent 1px)",
        backgroundSize: "6px 6px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mb-10">
            Projects
          </h2>
        </motion.div>
      </div>

      {/* Manual Infinite Carousel */}
      <div className="relative w-full group">
        {/* Left Scroll Button */}
        <button
          onClick={() => handleNavigation("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-neutral-900 border-2 border-neutral-900 text-white hover:bg-white hover:text-neutral-900 transition-all duration-150 flex items-center justify-center opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <IconChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={() => handleNavigation("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-neutral-900 border-2 border-neutral-900 text-white hover:bg-white hover:text-neutral-900 transition-all duration-150 flex items-center justify-center opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <IconChevronRight className="w-6 h-6" />
        </button>

        {/* Static Container */}
        <div className="relative w-full -mx-5 md:-mx-8 px-5 md:px-8 overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: -currentIndex * cardWidth }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {carouselProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="w-[400px] md:w-[450px] flex-shrink-0"
              >
                <div className="browser-card group/card hover:-translate-y-1 transition-transform duration-200 h-full flex flex-col hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  {/* Browser title bar */}
                  <div className="browser-card-bar">
                    <div className="browser-dot" />
                    <div className="browser-dot" />
                    <span className="browser-url">
                      {project.link
                        .replace("https://", "")
                        .split("/")
                        .slice(0, 2)
                        .join("/")}
                    </span>
                  </div>

                  {/* Project image */}
                  <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-neutral-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1 bg-white">
                    <h3 className="text-xl font-black text-neutral-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed line-clamp-4 mb-4 flex-1">
                      {project.description}
                    </p>
                    <div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-retro text-xs"
                      >
                        View project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
