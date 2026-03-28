
// from ai

// Mock data for portfolio website
import { Code2, Database, Globe, Cpu, GitBranch, Terminal, Linkedin, Github, Twitter, Instagram, Mail, Code, Loader, CornerDownLeftIcon, ArrowBigUp, Layout, Palette, Share2, Server, Computer } from 'lucide-react';
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
    description: "Creating reels that make you say “I didn’t know that!” 🤯🎥.Facts,News,Science,Technology,Current Affair, logic & learning — delivered creatively 🎬💡",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/gouravverma23/demowebsite",
    demo: "https://gouravverma23.github.io/demowebsite/",
    image: websiteFront,
    pinned: false
  },
  {
    id: 2,
    title: "New Website for Factsnreel",
    description: "Discover fascinating facts across science, space, history, psychology, and more — all simplified, visual, and crafted to spark your curiosity. Dive in and learn something new in seconds.",
    technologies: ["Javascript", "React", "Tailwind"],
    github: "https://github.com/gouravverma23/factsnreel.git",
    demo: "https://factsnreel.vercel.app/",
    image: websiteFront2,
    pinned: true
  },
  {
    id: 3,
    title: "Basic CLI calculator",
    description: "Addition, Subtraction, Multiplication, Division, Power",
    technologies: ["C"],
    github: "https://github.com/gouravverma23/Calculator",
    demo: "https://github.com/gouravverma23/Calculator/blob/main/intermediateclaculator.c",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    pinned: false
  },
  {
    id: 4,
    title: "Typing Speed Tester",
    description: "A lightweight web app that measures your typing speed and accuracy in real time, providing instant WPM results and performance feedback to help you improve your keyboard skills.",
    technologies: ["Javascript", "HTML", "CSS"],
    github: "https://github.com/gouravverma23/Typingspeed",
    demo: "https://gouravverma23.github.io/Typingspeed/",
    image: "https://image2url.com/r2/default/images/1771265954459-d267e6d5-4ecf-4cc6-b5ae-6d19c23f96da.png",
    pinned: true
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
      {
        name: "JavaScript",
        icon: Code2,
        subItems: ["React", "Nodejs", "Expressjs"]
      },
      {
        name: "Python",
        icon: Terminal,
        subItems: ["Tkinter", "NumPy", "Pandas", "Matplotlib", "Seaborn"]
      },
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
      { name: "Tailwind CSS", icon: Code2 }
    ]
  },
  {
    category: "Backend",
    items: [
      // { name: "Learning", icon: Loader },
      { name: "Node js", icon: Globe },
      { name: "Express js", icon: Globe },
      { name: "Supabase", icon: Server }
    ]
  },
  {
    category: "Database & Tools",
    items: [
      { name: "MySQL", icon: Database },
      { name: "MongoDB", icon: Database },
      {
        name: "Code Editor & IDE",
        icon: Code2,
        subItems: ["VScode", "Intellij", "Pycharm"]
      },
      { name: "Git and Github", icon: GitBranch },
      { name: "Supabase", icon: Server },
      {
        name: "Operating Systems",
        icon: Computer,
        subItems: ["Windows 11", "Linux Mint"]
      }
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