'use client'

import React, { useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconBrandInstagram,
  IconBrandLinkedin
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

function Navbar(){
    const links = [
        {
          title: "Home",
          icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
            title: "GitHub",
            icon: (
              <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/EnderMRG/",
          },   
        {
          title: "LinkedIn",
          icon: (
            <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://www.linkedin.com/in/moharnab-gogoi-110793327/",
        },
        {
          title: "Instagram",
          icon: (
            <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://www.instagram.com/endermrg05/",
        },
        {
          title: "Twitter",
          icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "https://x.com/MoharnabG/",
        },
      ];
      return (
        <div className="flex fixed  inset-x-0 max-w-2xl mx-auto z-50  items-center justify-end h-[13rem] pb-2 w-full">
          <FloatingDock
            mobileClassName="translate-y-[500%] translate-x-[-30%] translate-z-[-50%]" // only for demo, remove for production
            items={links}
          />
          
        </div>
      );
}

export default Navbar