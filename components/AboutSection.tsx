"use client";

import { motion } from "framer-motion";
import { aboutStats, aboutCode } from "@/data";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 px-5 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mb-12">
          About
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Bio Card - Spans 2 cols */}
          <div className="md:col-span-2 browser-card h-full">
            <div className="browser-card-bar">
              <div className="browser-dot" />
              <div className="browser-dot" />
              <span className="browser-url">about-moharnab.txt</span>
            </div>
            <div className="p-6 md:p-8 space-y-4 text-neutral-700 leading-relaxed text-base md:text-lg">
              <p>
                Hi! I&apos;m{" "}
                <span className="text-neutral-900 font-bold">Moharnab Gogoi</span>{" "}
                — a developer from Dibrugarh, India. I love building things that
                live on screens, from fast-paced multiplayer games to clean,
                responsive web applications.
              </p>
              <p>
                I work with{" "}
                <span className="font-bold text-neutral-900">
                  Unreal Engine, Unity, Next.js, and React
                </span>
                . I love hackathons, learning new tech, and contributing to the
                GDG community at Dibrugarh University.
              </p>
              <p>
                Currently pursuing my B.Tech in Computer Science &amp;
                Engineering. Always open to collaborating on exciting projects.
              </p>
            </div>
          </div>

          {/* Currently Building Card */}
          <div className="browser-card h-full">
            <div className="browser-card-bar bg-[#e8e8e8]">
              <div className="browser-dot bg-neutral-900" />
              <div className="browser-dot bg-white border border-neutral-900" />
              <span className="browser-url font-bold">{aboutStats[0].title}</span>
            </div>
            <div className="p-6 flex flex-col gap-3 h-full font-mono">
              {aboutStats[0].content.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-zinc-500 mt-[2px]">•</span>
                  <span className="text-sm font-medium text-neutral-800 leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mindset Card - JSON Code Style */}
          <div className="browser-card h-full bg-white border-2 border-neutral-900">
            <div className="browser-card-bar bg-[#e8e8e8] border-b-2 border-neutral-900">
              <div className="browser-dot" />
              <div className="browser-dot" />
              <span className="browser-url font-mono text-xs font-bold">
                {aboutCode.mindset.fileName}
              </span>
            </div>
            <div className="p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
              <pre className="whitespace-pre-wrap text-neutral-900 font-medium">
                {aboutCode.mindset.code}
              </pre>
            </div>
          </div>

          {/* Beyond Coding Card */}
          <div className="browser-card h-full">
            <div className="browser-card-bar bg-[#e8e8e8]">
              <div className="browser-dot" />
              <div className="browser-dot" />
              <span className="browser-url font-bold">{aboutStats[1].title}</span>
            </div>
            <div className="p-6 flex flex-col gap-3 h-full font-mono">
              {aboutStats[1].content.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-zinc-500 mt-[2px]">•</span>
                  <span className="text-sm font-medium text-neutral-800 leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities Log - Terminal Style */}
          <div className="browser-card h-full md:col-span-1 bg-white">
             <div className="browser-card-bar bg-[#e8e8e8]">
              <div className="browser-dot" />
              <div className="browser-dot" />
              <span className="browser-url font-mono">{aboutCode.opportunities.fileName}</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-3 text-neutral-800">
               <div>
                  <h4 className="font-bold text-neutral-900 inline-block border-b-2 border-neutral-900 pb-1 mb-2">
                    {aboutCode.opportunities.content[0].replace(":", "")}:
                  </h4>
                  <ul className="space-y-2 mt-2">
                    {aboutCode.opportunities.content.slice(1).map((line, i) => (
                      <li key={i} className="pl-1">
                        {line}
                      </li>
                    ))}
                  </ul>
               </div>
              <div className="animate-pulse">_</div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
