
// from ai

// Mock data for portfolio website
import { Code2, Database, Globe, Cpu, GitBranch, Terminal, Linkedin, Github, Twitter, Instagram, Mail, Code, Loader, CornerDownLeftIcon, ArrowBigUp, Layout, Palette, Share2 } from 'lucide-react';
import dp4 from './components/ui/dp4.jpg';
import websiteFront from './components/ui/websitefront.jpg';
import websiteFront2 from './components/ui/websitefront2.jpg';

export const personalInfo = {
  name: "Gourav Verma",
  title: "Aspiring Software Engineer",
  tagline: "Turning curiosity into code.",
  email: "gverma.developer@gmail.com",
  profileImage: dp4
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
    description: "Creating reels that make you say “I didn’t know that!” 🤯🎥.Facts,News,Science,Technology,Current Affair, logic & learning — delivered creatively 🎬💡",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/gouravverma23/demowebsite",
    demo: "https://gouravverma23.github.io/demowebsite/",
    image: websiteFront
  },
  {
    id: 2,
    title: "New Website for Factsnreel",
    description: "Discover fascinating facts across science, space, history, psychology, and more — all simplified, visual, and crafted to spark your curiosity. Dive in and learn something new in seconds.",
    technologies: ["Javascript", "React", "Tailwind"],
    github: "https://github.com/gouravverma23/factsnreel.git",
    demo: "https://factsnreel.vercel.app/",
    image: websiteFront2
  },
  {
    id: 3,
    title: "Basic CLI calculator",
    description: "Addition, Subtraction, Multiplication, Division, Power",
    technologies: ["C"],
    github: "https://github.com/gouravverma23/Calculator",
    demo: "https://github.com/gouravverma23/Calculator/blob/main/intermediateclaculator.c",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
  }
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: Code2 },
      { name: "Python", icon: Terminal },
      { name: "Java", icon: Code2 },
      { name: "C/C++", icon: Code },
      { name: "SQL", icon: Database }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML/CSS/JS", icon: Globe },
      { name: "React", icon: Globe },
      { name: "Tailwind CSS", icon: Code2 },
      { name: "MongoDB", icon: Database }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Learning", icon: Loader }
    ]
  },
  {
    category: "Database & Tools",
    items: [
      { name: "MySQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "VScode, Intellij ", icon: Code2 },
      { name: "Git and Github", icon: GitBranch }
    ]
  }
];

export const services = [
  {
    id: 1,
    title: "Webpage Development(Frontend)",
    description: "I can design and develop high-quality landing pages and scalable websites that help build a strong online presence and deliver real results. Using React, Tailwind CSS, and JavaScript, I create fast, responsive, and clean solutions with a strong focus on performance, usability, and smooth user experience across all devices.",
    icon: Layout
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "I design intuitive and visually refined user interfaces with a strong focus on usability and clarity. By paying close attention to spacing, typography, and color harmony, I create designs that feel consistent, functional, and visually engaging across different screens and user interactions.",
    icon: Palette
  },
  {
    id: 3,
    title: "Social Media Management",
    description: "I can manage organic growth and engagement for brands with 4 years of hands-on experience. I have a strong understanding of content strategy, performance analytics, and community engagement, and I focus on building consistent, meaningful growth through audience-focused and data-driven approaches.",
    icon: Share2
  }
];

export const social = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/gaurav-verma-developer/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/gouravverma23", icon: Github },
  { name: "Back to top", url: "", icon: ArrowBigUp },
  { name: "Instagram", url: "https://instagram.com/_gaurav_vermaaa_", icon: Instagram }
];