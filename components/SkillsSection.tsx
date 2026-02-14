"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { skillCategories } from "@/data";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-20 px-5 md:px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
          Skills
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`
              flex flex-col h-full
              bg-white border-2 border-neutral-900 
              shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200
              ${index === 0 ? "md:col-span-2 md:row-span-1" : "md:col-span-1"}
            `}
          >
            {/* Window Header */}
            <div className="border-b-2 border-neutral-900 bg-[#e8e8e8] px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-neutral-900 border border-neutral-900"></div>
                <div className="w-3 h-3 rounded-full bg-white border-2 border-neutral-900"></div>
              </div>
              <h3 className="text-sm font-black text-neutral-900 uppercase tracking-widest">
                {category.category}
              </h3>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex-1">
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-neutral-900 text-sm font-bold text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-200 cursor-default group"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={20}
                      height={20}
                      className="object-contain group-hover:invert transition-all duration-200"
                    />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
