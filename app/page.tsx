"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen border-x-2 border-neutral-900 mx-auto max-w-[1920px]">
        <HeroSection />
        <div className="border-t-2 border-neutral-900" />
        <ProjectsSection />
        <div className="border-t-2 border-neutral-900" />
        <AboutSection />
        <div className="border-t-2 border-neutral-900" />
        <SkillsSection />
        <div className="border-t-2 border-neutral-900" />
        <ExperienceSection />
        <div className="border-t-2 border-neutral-900" />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-neutral-900 bg-white">
        <div className="w-full px-5 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-x-2 border-neutral-900 mx-auto max-w-[1920px]">
          <p className="text-sm font-semibold text-neutral-900">
            Moharnab Gogoi
          </p>
          <p className="text-xs text-neutral-500">
            Yay you made it to the bottom!!!
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
