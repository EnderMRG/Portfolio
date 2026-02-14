"use client";

import { motion } from "framer-motion";
import { education, experience } from "@/data";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Journey Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            Journey
          </h2>
        </motion.div>

        <div className="space-y-20">
        {/* Experience Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 flex items-center gap-3"
          >
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              Experience
            </h2>
          </motion.div>

          <div className="relative border-l-2 border-neutral-300 ml-3 space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Timeline Dot/Logo */}
                <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-white border-4 border-neutral-400" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <span className="text-sm font-medium text-neutral-500 order-2 sm:order-1">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                  {item.title}
                </h3>
                  <div className="text-base font-semibold text-neutral-700 mb-4">
                  {item.organization}
                  </div>

                <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 text-sm leading-relaxed marker:text-neutral-400">
                  {item.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 flex items-center gap-3"
          >
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              Education
            </h2>
          </motion.div>

           <div className="relative border-l-2 border-neutral-300 ml-3 space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                  className="relative pl-12"
              >
                {/* Timeline Dot/Logo */}
                <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-white border-4 border-neutral-400" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <span className="text-sm font-medium text-neutral-500 order-2 sm:order-1">
                    {item.period}
                  </span>
                </div>

                  <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                  {item.title}
                </h3>
                  <div className="text-base font-semibold text-neutral-700 mb-4">
                  {item.organization}
                  </div>

                <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 text-sm leading-relaxed marker:text-neutral-400">
                  {item.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
