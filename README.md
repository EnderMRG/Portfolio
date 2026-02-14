# Moharnab Gogoi - Portfolio

A modern, retro-themed portfolio website built with Next.js 14, featuring a unique brutalist design aesthetic with clean animations and interactive elements.

## 🎨 Design Features

- **Retro Brutalist Theme**: Bold borders, high contrast, and a distinctive window-card aesthetic
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Design**: Fully optimized for all device sizes
- **Interactive Carousel**: Manual infinite scrolling project showcase
- **Bento Grid Layout**: Modern card-based about section

## 🚀 Tech Stack

- **Framework**: Next.js 14.1.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Tabler Icons React
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

```
├── app/                  # Next.js app directory
│   ├── page.tsx         # Main landing page
│   ├── layout.tsx       # Root layout
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   └── ContactSection.tsx
├── data/                # Static data
│   └── index.ts         # All portfolio data
└── public/              # Static assets
    └── images/          # Project images
```

## 🎯 Features

### Navigation
- Smooth scroll navigation
- Sticky header with retro styling
- Responsive mobile menu

### Hero Section
- Eye-catching gradient background
- Animated introduction
- Clear call-to-action

### About Section
- Bento grid layout
- Multiple information cards:
  - Currently Building
  - Tech Mindset (JSON format)
  - Beyond Coding
  - Open Opportunities

### Skills Section
- Categorized skill display (Languages, Frameworks, Tools)
- Interactive hover effects
- Browser-inspired card design

### Projects Section
- Manual infinite carousel
- Navigation buttons with smooth transitions
- Grayscale to color image hover effect
- Direct links to live projects

### Experience & Education
- Unified "Journey" section
- Clean timeline design
- Reverse chronological ordering

### Contact Section
- Direct LinkedIn connection
- Social media links
- Clean, centered layout

## 🛠️ Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Data Configuration

All portfolio content is managed in `data/index.ts`:

- `navItems` - Navigation menu items
- `projects` - Project showcase data
- `skillCategories` - Skills organized by category
- `experience` - Work experience entries
- `education` - Educational background
- `socialLinks` - Social media profiles
- `aboutStats` - About section cards
- `aboutCode` - Code-styled about information

## 🎨 Design System

### Colors
- Background: `#e8e8e8` with subtle dot pattern
- Primary Text: `#0a0a0a` (neutral-900)
- Accent: `#000000` (black borders)
- Card Background: `#ffffff` (white)

### Typography
- Font Family: System fonts (sans-serif)
- Font Weights: 400 (regular), 600 (semibold), 800 (black)

### Components
- **Browser Card**: Retro window-style card with header bar
- **Button Retro**: Bold bordered buttons with hover effects
- **Timeline**: Clean vertical timeline for experience/education

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Update Personal Information
Edit `data/index.ts` to update:
- Projects
- Skills
- Experience
- Education
- Social links
- About section content

### Modify Styling
- Global styles: `app/globals.css`
- Component styles: Inline Tailwind classes in respective component files

### Add New Sections
1. Create component in `components/`
2. Add data structure in `data/index.ts`
3. Import and use in `app/page.tsx`

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Moharnab Gogoi**
- LinkedIn: [Connect](https://linkedin.com/in/moharnabgogoi)
- GitHub: [@EnderMRG](https://github.com/endermrg)

## 🙏 Acknowledgments

- Design inspiration from modern brutalist web design
- Icons by Tabler Icons
- Built with Next.js and Tailwind CSS
