
// from ai

// Mock data for portfolio website
import { Code2, Database, Globe, Cpu, GitBranch, Terminal, Linkedin, Github, Twitter, Instagram, Mail, Code, Loader, CornerDownLeftIcon, ArrowBigUp, Layout, Palette, Share2, Server, Computer, BrainCircuit, BarChart3, Sparkles, Bot, Workflow } from 'lucide-react';

// Brand icons for skills section
import { FaJs, FaPython, FaJava, FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaChartBar, FaCss3 } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiTailwindcss, SiExpress, SiSupabase, SiMongodb, SiVscodium, SiIntellijidea, SiJupyter, SiVercel, SiGooglecolab, SiNumpy, SiPandas, SiScikitlearn } from 'react-icons/si';

import dp4 from './components/ui/dp4.jpg';
import resume from './components/ui/resume.pdf';
import websiteFront from './components/ui/websitefront.jpg';
import websiteFront2 from './components/ui/websitefront2.jpg';

export const personalInfo = {
  name: "Gourav Verma",
  title: "Aspiring Software Engineer",
  tagline: "Turning curiosity into code.",
  email: "gverma.developer@gmail.com",
  profileImage: dp4,
  // To use Google Drive: Paste your link inside the quotes below
  // To use local PDF: Replace the string with the word 'resume' (which is imported above)
  resume: "https://drive.google.com/file/d/10j3a--QMg1TYX7diqZYsKIpRZ6_3DuJW/view?usp=drivesdk"
};

export const about = {
  intro: "I am a B.Tech student in Computer Science and Engineering at USICT, GGSIPU. I love exploring new technologies and solving problems that challenge me.",
  background: "I have been building a strong foundation in programming, algorithms, and software development, and enjoy applying what I learn through projects and hands-on workshops.",
  interests: "I am fascinated by Artificial Intelligence and machine learning, and love experimenting with ideas that could turn into real-world solutions.",
  careerGoals: "I aspire to build a career in AI and software development, working on innovative projects that make a difference while constantly learning and growing."
};

export const experience = [
  {
    id: 1,
    role: "Student",
    company: "USICT, GGSIPU Dwarka sector 6",
    duration: "Aug 2024 - Present",
    responsibilities: [
      "Pursuing B.Tech in Computer Science and Engineering at USICT, GGSIPU.",
      "Gaining hands-on knowledge in programming, data structures, and software development.",
      "Participating in projects and workshops to enhance technical skills.",
      "Actively exploring new technologies and learning opportunities in the field of CSE."
    ]
  },
  {
    id: 2,
    role: "Content Creation",
    company: "Founder of @factsnreel on Instagram",
    duration: "Jan 2020 - Present",
    responsibilities: [
      "Create and edit engaging Instagram reels and posts.",
      "Research and develop content ideas based on trends and audience interest.",
      "Maintain a consistent visual style and improve content quality over time.",
      "Track post performance to understand engagement and refine future content."
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "UNIVERSITY SCHOOL OF INFORMATION COMMUNICATION AND TECHNOLOGY, GGSIPU",
    year: "2024-2028 Ongoing",
    gpa: "7.8 SGPA CURRENT"
  },
  {
    id: 2,
    degree: "Higher education 11th - 12th in Science stream PCM",
    institution: "Government co-ed Senior Secondary School Dwarka sector-6 site 2 New Delhi",
    year: "2022-2024"
  },
  {
    id: 3,
    degree: "Secondary Education 7th - 10th",
    institution: "Government Boys Senior Secondary School Raj Nagar part 2 Palam New Delhi",
    year: "2018-2022"
  },
  {
    id: 4,
    degree: "Primary Education KG - 6th",
    institution: "Saint mary's Public School, Durga Vihar, Devli, New Delhi",
    year: "2010-2018"
  }
];

export const projects = [
  {
    id: 1,
    title: "Website for my Instagram Fact page",
    slug: "instagram-fact-page-website",
    description: "Creating reels that make you say “I didn’t know that!” 🤯🎥.Facts,News,Science,Technology,Current Affair, logic & learning — delivered creatively 🎬💡",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/gouravverma23/demowebsite",
    demo: "https://gouravverma23.github.io/demowebsite/",
    image: websiteFront,
    pinned: false,
    details: [
      { type: "heading", text: "Project Overview" },
      { type: "paragraph", text: "This is the original website built for my Instagram page @factsnreel. The goal was to create a web presence that mirrors the energy and curiosity-driven content of the Instagram page — covering facts, news, science, technology, current affairs, and more." },
      { type: "subheading", text: "Purpose & Motivation" },
      { type: "paragraph", text: "With over years of content creation experience on Instagram, I wanted a dedicated platform where visitors could explore curated facts and interesting content beyond the constraints of social media. This website serves as a landing page and content hub for the brand." },
      { type: "image", src: websiteFront, alt: "Homepage screenshot of the Factsnreel website" },
      { type: "subheading", text: "Key Features" },
      {
        type: "list", items: [
          "Fully responsive layout that works across all devices",
          "Clean and modern UI design with engaging visuals",
          "Smooth scrolling and navigation experience",
          "Optimized loading performance for fast page loads",
          "Direct integration links to social media platforms"
        ]
      },
      { type: "heading", text: "Tech Stack & Implementation" },
      { type: "paragraph", text: "The website was built using vanilla HTML, CSS, and JavaScript — no frameworks or libraries. This was a deliberate choice to strengthen my fundamentals and demonstrate that a polished, modern-looking website can be built from scratch." },
      { type: "code", language: "html", code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>FactsNReel - Discover Amazing Facts</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <nav class="navbar">\n    <div class="logo">FactsNReel</div>\n    <ul class="nav-links">\n      <li><a href="#home">Home</a></li>\n      <li><a href="#facts">Facts</a></li>\n      <li><a href="#about">About</a></li>\n    </ul>\n  </nav>\n  <!-- Content sections -->\n</body>\n</html>` },
      { type: "subheading", text: "Challenges & Learnings" },
      { type: "paragraph", text: "Building this project from scratch taught me how to structure semantic HTML, write maintainable CSS with proper naming conventions, and handle DOM interactions with plain JavaScript. It was my first complete web project and laid the foundation for everything that followed." },
    ]
  },
  {
    id: 2,
    title: "New Website for Factsnreel",
    slug: "factsnreel-react-website",
    description: "Discover fascinating facts across science, space, history, psychology, and more — all simplified, visual, and crafted to spark your curiosity. Dive in and learn something new in seconds.",
    technologies: ["Javascript", "React", "Tailwind"],
    github: "https://github.com/gouravverma23/factsnreel.git",
    demo: "https://factsnreel.vercel.app/",
    image: websiteFront2,
    pinned: true,
    details: [
      { type: "heading", text: "Project Overview" },
      { type: "paragraph", text: "This is the completely redesigned and rebuilt version of the Factsnreel website, now powered by React and Tailwind CSS. It features a modern, component-based architecture with a much richer user experience compared to the original static site." },
      { type: "image", src: websiteFront2, alt: "New Factsnreel website homepage" },
      { type: "subheading", text: "Why a Rebuild?" },
      { type: "paragraph", text: "The original HTML/CSS website served its purpose well, but as my skills grew, I wanted to leverage React's component model and Tailwind's utility-first approach to create something more scalable, maintainable, and visually stunning." },
      { type: "heading", text: "Architecture & Design" },
      { type: "subheading", text: "Component Structure" },
      { type: "paragraph", text: "The application is organized into reusable React components, each responsible for a specific section of the UI. This modular approach makes the codebase easy to maintain and extend." },
      { type: "code", language: "jsx", code: `// Example component structure\nimport React from 'react';\n\nconst FactCard = ({ title, category, content, image }) => {\n  return (\n    <div className="bg-white/5 backdrop-blur-md rounded-2xl \n                    border border-white/10 p-6 \n                    hover:border-cyan-400/50 transition-all">\n      <span className="text-cyan-400 text-sm font-medium">\n        {category}\n      </span>\n      <h3 className="text-xl font-bold mt-2 text-white">\n        {title}\n      </h3>\n      <p className="text-white/70 mt-3 leading-relaxed">\n        {content}\n      </p>\n    </div>\n  );\n};` },
      { type: "subheading", text: "Key Features" },
      {
        type: "list", items: [
          "React-based SPA with fast client-side navigation",
          "Tailwind CSS for rapid and consistent styling",
          "Responsive design optimized for mobile-first",
          "Category-based fact browsing and filtering",
          "Smooth animations and micro-interactions",
          "Deployed on Vercel with automatic CI/CD"
        ]
      },
      { type: "heading", text: "Deployment" },
      { type: "paragraph", text: "The project is deployed on Vercel with continuous deployment from the GitHub repository. Every push to the main branch triggers an automatic build and deploy, ensuring the live site is always up-to-date." },
    ]
  },
  {
    id: 3,
    title: "Basic CLI calculator",
    slug: "cli-calculator-c",
    description: "Addition, Subtraction, Multiplication, Division, Power",
    technologies: ["C"],
    github: "https://github.com/gouravverma23/Calculator",
    demo: "https://github.com/gouravverma23/Calculator/blob/main/intermediateclaculator.c",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    pinned: false,
    details: [
      { type: "heading", text: "Project Overview" },
      { type: "paragraph", text: "A command-line calculator built in C that supports fundamental arithmetic operations. This project demonstrates core programming concepts including control flow, user input handling, and modular function design." },
      { type: "subheading", text: "Supported Operations" },
      {
        type: "list", items: [
          "Addition (+)",
          "Subtraction (−)",
          "Multiplication (×)",
          "Division (÷) with zero-division handling",
          "Power / Exponentiation (^)"
        ]
      },
      { type: "heading", text: "Implementation Details" },
      { type: "paragraph", text: "The calculator uses a menu-driven interface where users select an operation and provide operands. Each operation is handled by a dedicated function, keeping the code clean and modular." },
      { type: "code", language: "c", code: `#include <stdio.h>\n#include <math.h>\n\nfloat add(float a, float b) { return a + b; }\nfloat subtract(float a, float b) { return a - b; }\nfloat multiply(float a, float b) { return a * b; }\n\nfloat divide(float a, float b) {\n    if (b == 0) {\n        printf("Error: Division by zero!\\n");\n        return 0;\n    }\n    return a / b;\n}\n\nint main() {\n    int choice;\n    float num1, num2, result;\n    \n    printf("=== CLI Calculator ===\\n");\n    printf("1. Addition\\n2. Subtraction\\n");\n    printf("3. Multiplication\\n4. Division\\n");\n    printf("5. Power\\nChoose operation: ");\n    scanf("%d", &choice);\n    // ... operation handling\n    return 0;\n}` },
      { type: "subheading", text: "Learnings" },
      { type: "paragraph", text: "This was one of my earliest programming projects. Building it helped me understand fundamental C concepts like functions, pointers, user input with scanf, and basic error handling. It reinforced the importance of writing clean, readable code even in simple programs." },
    ]
  },
  {
    id: 4,
    title: "Typing Speed Tester",
    slug: "typing-speed-tester",
    description: "A lightweight web app that measures your typing speed and accuracy in real time, providing instant WPM results and performance feedback to help you improve your keyboard skills.",
    technologies: ["Javascript", "HTML", "CSS"],
    github: "https://github.com/gouravverma23/Typingspeed",
    demo: "https://gouravverma23.github.io/Typingspeed/",
    image: "https://image2url.com/r2/default/images/1771265954459-d267e6d5-4ecf-4cc6-b5ae-6d19c23f96da.png",
    pinned: true,
    details: [
      { type: "heading", text: "Project Overview" },
      { type: "paragraph", text: "A real-time typing speed tester that measures your Words Per Minute (WPM) and accuracy as you type. The app provides instant feedback, helping users track their progress and improve their keyboard skills over time." },
      { type: "image", src: "https://image2url.com/r2/default/images/1771265954459-d267e6d5-4ecf-4cc6-b5ae-6d19c23f96da.png", alt: "Typing Speed Tester interface" },
      { type: "subheading", text: "How It Works" },
      {
        type: "list", items: [
          "A random passage is displayed for the user to type",
          "The timer starts automatically on the first keystroke",
          "Characters are highlighted in real time — green for correct, red for errors",
          "WPM and accuracy are calculated and displayed upon completion",
          "Users can restart with a new passage at any time"
        ]
      },
      { type: "heading", text: "Technical Implementation" },
      { type: "paragraph", text: "The core logic tracks each keystroke, compares it against the target text, and calculates WPM using the standard formula: (total characters typed / 5) / time in minutes. Accuracy is computed as the ratio of correct characters to total characters typed." },
      { type: "code", language: "javascript", code: `// Core WPM calculation logic\nfunction calculateWPM(totalChars, timeInSeconds) {\n  const minutes = timeInSeconds / 60;\n  const words = totalChars / 5; // Standard: 5 chars = 1 word\n  return Math.round(words / minutes);\n}\n\n// Real-time character validation\nfunction validateInput(typed, target) {\n  const chars = typed.split('');\n  return chars.map((char, i) => ({\n    char,\n    correct: char === target[i],\n    index: i\n  }));\n}` },
      { type: "subheading", text: "Design Highlights" },
      { type: "paragraph", text: "The UI is clean and distraction-free, putting full focus on the typing experience. The color-coded character feedback provides an intuitive visual indicator of typing accuracy without disrupting the flow." },
      { type: "subheading", text: "Future Improvements" },
      {
        type: "list", items: [
          "Add difficulty levels with varying passage complexity",
          "Implement a leaderboard with local storage persistence",
          "Add typing practice modes (e.g., code snippets, quotes)",
          "Include detailed statistics like most mistyped keys"
        ]
      },
    ]
  },
  //  {
  //   id: 5,
  //   title: "Weather Dashboard",
  //   description: "A real-time weather dashboard using OpenWeather API to provide detailed forecasts and current conditions for any city globally.",
  //   technologies: ["React", "API", "Chart.js"],
  //   github: "https://github.com/gouravverma23",
  //   demo: "#",
  //   image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
  //   pinned: false
  // }
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "C/C++", icon: SiCplusplus },
      {
        name: "Python",
        icon: FaPython,
        subItems: ["Tkinter", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"]
      },
      { name: "Java", icon: FaJava },
      {
        name: "SQL",
        icon: FaDatabase,
        subItems: ["MySQL"]
      }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "Javascript", icon: FaJs, subItems: ["React", "Nodejs", "Expressjs"] },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ]
  },
  {
    category: "Backend and Database",
    items: [
      { name: "Node js", icon: FaNodeJs },
      { name: "Express js", icon: SiExpress },
      { name: "Supabase", icon: SiSupabase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql }
    ]
  },
  {
    category: "Tools",
    items: [
      {
        name: "Code Editor & IDE",
        icon: SiVscodium,
        subItems: ["VScode", "Intellij", "Jupyter Notebook", "Antigravity"]
      },
      { name: "Git and Github", icon: FaGitAlt },
      {
        name: "Frontend Deployment",
        icon: SiVercel,
        subItems: ["Github Pages", "Vercel"]
      },
      { name: "Google colab", icon: SiGooglecolab }
    ]
  },
  {
    category: "Machine Learning & AI",
    items: [
      { name: "Numpy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
      { name: "Matplotlib & Seaborn (data visualization)", icon: FaChartBar },
      { name: "Scikit-learn", icon: SiScikitlearn },
    ]
  }
];

export const services = [
  {
    id: 1,
    title: "Web Development(Frontend)",
    description: "I can design and develop high-quality landing pages and scalable websites that help build a strong online presence and deliver real results. Using React, Tailwind CSS, and JavaScript, I create fast, responsive, and clean solutions with a strong focus on performance, usability, and smooth user experience across all devices.",
    icon: Layout
  },
  {
    id: 2,
    title: "Social Media Management",
    description: "I can manage organic growth and engagement for brands with 4 years of hands-on experience. I have a strong understanding of content strategy, performance analytics, and community engagement, and I focus on building consistent, meaningful growth through audience-focused and data-driven approaches.",
    icon: Share2
  },
  // {
  //   id: 3,
  //   title: "UI/UX Design",
  //   description: "I design intuitive and visually refined user interfaces with a strong focus on usability and clarity. By paying close attention to spacing, typography, and color harmony, I create designs that feel consistent, functional, and visually engaging across different screens and user interactions.",
  //   icon: Palette
  // },
];

export const social = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/gaurav-verma-developer/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/gouravverma23", icon: Github },
  { name: "Twitter", url: "https://twitter.com/gverma_dev", icon: Twitter },
  { name: "Instagram", url: "https://instagram.com/_gaurav_vermaaa_", icon: Instagram }
];