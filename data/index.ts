export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Local-Link",
    description:
      "Service provider website using Firebase and Gemini API for intelligent local service matching.",
    image: "/locallink.png",
    tags: ["Next.js", "Firebase", "Gemini AI", "TypeScript"],
    link: "https://local-link-drab.vercel.app",
  },
  {
    id: 2,
    title: "Urbanease",
    description:
      "A platform connecting local people with service providers like carpenters, plumbers, and more — with a fully functional backend.",
    image: "/urbanease.png",
    tags: ["HTML", "Tailwind", "CSS", "Python"],
    link: "https://github.com/EnderMRG/UrbuneseFinal",
  },
  {
    id: 3,
    title: "Metapparels",
    description:
      "A demo website for a clothing brand that helped us win a hackathon.",
    image: "/metaparels.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    link: "https://github.com/EnderMRG/tryingwebsite",
  },
  {
    id: 4,
    title: "Evade",
    description:
      "A 2D platformer game built with Unreal Engine and a custom 2D sprite editor.",
    image: "/evadess.png",
    tags: ["Unreal Engine", "C++"],
    link: "https://www.mediafire.com/file/esmz80s0b1tnzlz/Evade.rar/file",
  },
  {
    id: 5,
    title: "FPS Multiplayer Game",
    description:
      "A first-person shooter with online multiplayer powered by Photon Engine.",
    image: "/fps.png",
    tags: ["Unity", "C#", "Photon"],
    link: "https://www.mediafire.com/file/wjh6kobirb0qoht/fps_multiplayer.rar/file",
  },
  {
    id: 6,
    title: "ChaiNet",
    description: "An AI-powered IoT platform revolutionizing tea cultivation through real-time monitoring, predictive analytics, and intelligent decision support.",
    image: "/chainet.png",
    tags: ["Next.js", "FastAPI", "Python"],
    link: "https://github.com/EnderMRG/ChaiTea",
  },
  {
    id: 7,
    title: "Aadhaar Service Stress Dashboard",
    description: "A full-stack data analytics and visualization platform designed to monitor, forecast, and explain Aadhaar service stress across districts in India.",
    image: "/adhar.png",
    tags: ["HTML","Tailwind", "Python", "FastAPI",],
    link: "https://github.com/EnderMRG/adhaar-hackathon",
  },
];

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "C", icon: "/Clogo.svg" },
      { name: "C++", icon: "/C++logo.svg" },
      { name: "C#", icon: "/c--4.svg" },
      { name: "Java", icon: "/java.svg" },
      { name: "Python", icon: "/python.svg" },
      { name: "JavaScript", icon: "/js.svg" },
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "HTML5", icon: "/html.svg" },
      { name: "CSS3", icon: "/css.svg" },
      { name: "Kotlin", icon: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg" },
    ],
  },
  {
    category: "Web & Frameworks",
    skills: [
      { name: "Next.js", icon: "/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/tailwind.svg" },
      { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
      { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
      { name: "Pandas", icon: "https://cdn.worldvectorlogo.com/logos/pandas.svg" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "/git.svg" },
      { name: "GitHub", icon: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
      { name: "Firebase", icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
      { name: "Vercel", icon: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
      { name: "NPM", icon: "https://cdn.worldvectorlogo.com/logos/npm.svg" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
      { name: "PostgreSQL", icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
      { name: "MySQL", icon: "https://cdn.worldvectorlogo.com/logos/mysql-3.svg" },
    ],
  },
  {
    category: "Game Dev & Creative",
    skills: [
      { name: "Unreal Engine", icon: "/UE.svg" },
      { name: "Unity", icon: "/unity.svg" },
    ],
  },
];

export const education = [
  {
    id: 1,
    title: "B.Tech in CSE",
    organization: "Dibrugarh University",
    desc: [
      "Currently pursuing B.Tech in Computer Science & Engineering.",
      "Maintaining a CGPA of 8.5+.",
      "Active member of the university coding club.",
    ],
    period: "2024 – Present",
  },
  {
    id: 2,
    title: "Higher Secondary",
    organization: "Oil India H.S School",
    desc: [
      "Completed 11th and 12th standard with Science stream.",
      "Graduated in 2024 with distinction.",
    ],
    period: "2022 – 2024",
  },
  {
    id: 3,
    title: "Schooling",
    organization: "St. Xavier's H.S School",
    desc: [
      "Studied from 1st to 10th standard.",
      "Graduated in 2022.",
    ],
    period: "2012 – 2022",
  },
];

export const experience = [
  {
    id: 7,
    title: "Won GunArk SIH 1.0",
    organization: "Guwahati Universtity",
    desc: [
      "24hrs of non stop coding",
      "Built an AI-powered IoT platform revolutionizing tea cultivation through real-time monitoring, predictive analytics, and intelligent decision support.",
      "Focused on real-time monitoring, predictive analytics, and intelligent decision support.",
    ],
    period: "February 2026",
  },
  {
    id: 6,
    title: "SIH",
    organization: "Smart India Hackathon",
    desc: [
      "Got shortlisted in the for screening round.",
      "Worked on the analysis of sand grains.",
    ],
    period: "December 2025",
  },
  {
    id: 5,
    title: "Dominatied Algo Arena",
    organization: "Avishkar v1.0",
    desc: [
      "Won the Algo Arena hackathon.",
      "Built a web application that uses computer vision to detect wildlife in images",
    ],
    period: "November 2025",
  },
  {
    id: 4,
    title: "GDG Tech Lead",
    organization: "GDGoC Dibrugarh",
    desc: [
      "Leading the tech team in organizing events and managing projects.",
      "Mentoring juniors in web development and various other topics.",
    ],
    period: "September 2025 – Present",
  },
  {
    id: 3,
    title: "Tech-Team Member",
    organization: "GDG on Campus, Dibrugarh",
    desc: [
      "Contributing to community projects and event management.",
      "Mentoring juniors in web development and system design.",
      "Organized 3+ major tech events with 200+ participants.",
    ],
    period: "September 2024 – June 2025",
  },
  {
    id: 2,
    title: "Game of Codes Hackathon",
    organization: "Hackathon",
    desc: [
      "Created a full-stack website overnight with a team of 4.",
      "Implemented real-time features using Socket.io.",
      "Secured top 5 position among 50+ teams.",
    ],
    period: "September 2024",
  },
  {
    id: 1,
    title: "First Hackathon Win",
    organization: "Front-end Hackathon",
    desc: [
      "Won a front-end hackathon with a team of 3.",
      "Built a responsive landing page with complex animations.",
      "Praised for clean code structure and pixel-perfect design.",
    ],
    period: "August 2024",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/EnderMRG/",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/moharnab-gogoi-110793327/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/endermrg05/",
    icon: "instagram",
  },
  {
    name: "Twitter",
    href: "https://x.com/MoharnabG/",
    icon: "twitter",
  },
];

export const aboutStats = [
  {
    title: "currently-building.ts",
    icon: "code",
    content: [
      "SUVIDHA: A self-service civic kiosk solution",
      "Unified interface for fragmented public services",
      "Stack: Next.js 15, Express.js, PostgreSQL",
      "Goal: Hassle-free delivery of electricity, gas, & water services",
    ],
  },
  {
    title: "outside-the-code.md",
    icon: "user",
    content: [
      "Leading tech initiatives as a Core Member of GDG Dibrugarh",
      "Solving real-world community problems through hackathons",
      "Exploring the intersection of Game Logic and Web Systems",
      "Refining system design intuition through continuous learning",
    ],
  },
];

export const aboutCode = {
  mindset: {
    fileName: "mindset.json",
    code: `{
  "philosophy": "Practical systems. Refined execution.",
  "focus": "Impact-driven development with clean, scalable design.",
  "motto": "Build it. Polish it. Ship it right.",
  "edge": "Relentless iteration"
}`
  },
  opportunities: {
    fileName: "opportunities.log",
    content: [
      "Open to:",
      "- Internship opportunities",
      "- Collaborative projects",
      "- Startup environments",
      "- Challenging problem-solving roles"
    ]
  }
};
