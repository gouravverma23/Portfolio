
// from ai

// Mock data for portfolio website
import { Code2, Database, Globe, Cpu, GitBranch, Terminal, Linkedin, Github, Twitter, Instagram, Mail, Code, Loader, CornerDownLeftIcon, ArrowBigUp, Layout, Palette, Share2, Server, Computer, BrainCircuit, BarChart3, Sparkles, Bot, Workflow } from 'lucide-react';

// Brand icons for skills section
import { FaJs, FaPython, FaJava, FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaChartBar, FaCss3 } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiTailwindcss, SiExpress, SiSupabase, SiMongodb, SiVscodium, SiIntellijidea, SiJupyter, SiVercel, SiGooglecolab, SiNumpy, SiPandas, SiScikitlearn } from 'react-icons/si';

import dp4 from './components/ui/dp4.jpg';
import resume from './components/ui/resume.pdf';
import websiteFront from './components/ui/websitefront.jpg';
import websiteFront2 from './components/ui/websitefront2.png';

import postpage from './components/ui/factsnreelProjectScreenshots/Postpage.png';
import quickfacts from './components/ui/factsnreelProjectScreenshots/QuickFacts.png';
import storecategory from './components/ui/factsnreelProjectScreenshots/StoreCategory.png';
import storecategoryitems from './components/ui/factsnreelProjectScreenshots/StoreCategoryItems.png';

import parakhLanding from './components/ui/ParakhProjectScreenshots/LandingPage.png';
import parakhLogin from './components/ui/ParakhProjectScreenshots/LoginPage.png';
import parakhDashboard from './components/ui/ParakhProjectScreenshots/Dashboard.png';
import parakhUploadQP from './components/ui/ParakhProjectScreenshots/UploadQuestionPaper.png';
import parakhReview from './components/ui/ParakhProjectScreenshots/ReviewPage.png';
import parakhUploadAS from './components/ui/ParakhProjectScreenshots/AnswerSheetUpload.png';
import parakhResult from './components/ui/ParakhProjectScreenshots/ResultPage.png';
import parakhArch from './components/ui/ParakhProjectScreenshots/architecture.jpeg';

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
    id: 5,
    title: "Parakh: AI-Powered Answer Sheet Evaluation System",
    slug: "parakh-ai-evaluation-system",
    description: "An enterprise-grade, automated evaluation platform for multi-page handwritten engineering answer sheets featuring a 4-tier microservices architecture, AI vision parsing, custom evaluation rubrics, and interactive human-in-the-loop scoring.",
    technologies: ["React", "Vite", "Node.js", "Express", "Supabase", "FastAPI", "Python", "Google Gemini API", "JWT"],
    github: "https://github.com/gouravverma23/Parakh.git",
    demo: "https://github.com/gouravverma23/Parakh.git",
    image: parakhLanding,
    pinned: true,
    details: [
      { type: "heading", text: "Project Overview" },
      { type: "paragraph", text: "Parakh is an enterprise-grade AI-powered answer sheet evaluation platform developed during the AICTE IDEA Lab Summer Internship at Guru Gobind Singh Indraprastha University (GGSIPU). The system is engineered to solve the operational bottlenecks of manual academic grading by automating the parsing, transcription, rubric generation, and evaluation of multi-page handwritten descriptive answer sheets in STEM and engineering disciplines. Built on an isolated 4-tier microservices architecture, Parakh seamlessly connects an interactive React frontend with a Node.js orchestration engine, private AI parsing services, and Supabase relational storage, achieving substantial evaluation speedups while retaining complete human oversight through an interactive grade override workspace." },
      
      { type: "heading", text: "Problem Statement" },
      { type: "paragraph", text: "Traditional academic assessment in engineering and technical domains relies heavily on manual evaluation of unstructured, handwritten answer scripts containing mathematical derivations, pseudocode, and technical diagrams. This process is inherently time-consuming, highly subjective, and prone to grader fatigue across large student cohorts. While generic Large Language Models (LLMs) exist, standard conversational APIs suffer from structural parsing errors, hallucinations, fractional mark calculation discrepancies, and context window truncations when handling complex multi-page handwritten documents. Educational institutions lack a centralized, secure, and deterministic platform that automates handwriting extraction while strictly adhering to institutional question schemes and scoring rubrics." },

      { type: "heading", text: "My Role & Key Technical Contributions" },
      { type: "paragraph", text: "As the Frontend Lead & Backend Developer (Node.js & Supabase Database/Auth) on the project, my primary responsibilities focused on constructing the complete web application interface and building the core backend orchestration engine:" },
      {
        type: "list", items: [
          "Frontend Architecture & Lead UI Development: Designed and developed the entire Single Page Application (SPA) using React, Vite, and modular CSS, establishing the core design system and responsive UI layouts.",
          "4-Step Evaluation Workflow Stepper: Built the end-to-end multi-step evaluation wizard guiding teachers through Question Paper Upload → Scheme & Rubric Review → Batch Answer Upload → Analytical Results Workspace.",
          "Dynamic Theme Engine: Implemented a global Light/Dark mode switcher powered by CSS custom properties and persistent state storage for high contrast and visual ergonomics during long grading sessions.",
          "Human-in-the-Loop Grade Override Interface: Developed the interactive review workspace in Step 4, allowing educators to review AI reasoning, adjust awarded marks per question node, and inject custom feedback comments.",
          "Node.js & Express Backend Orchestrator: Engineered the primary backend gateway (running on Port 5000) that manages request routing, JWT security headers, file stream handling, and service communication with AI microservices.",
          "Supabase Database Architecture & API Endpoints: Designed the relational database schema (DDL scripts) in Supabase, managing exam metadata, nested question trees, rubric criteria, student answer batch records, and evaluation results with cascading integrity.",
          "Authentication & Protected Routing: Integrated JWT-based authentication using RSA key wrappers, creating secure session handling (authFetch helper) and role-protected API endpoints for teacher accounts."
        ]
      },

      { type: "heading", text: "Project Team & Contributors" },
      { type: "paragraph", text: "Parakh was developed as a collaborative team project under the guidance of academic supervisors at GGSIPU. The team members and their respective specialized roles include:" },
      {
        type: "list", items: [
          "Gourav Verma (USICT, GGSIPU) — Frontend Lead & Backend Developer: Spearheaded React frontend architecture, UI/UX design, dark/light theme, Node.js Express orchestration engine, Supabase relational database design, JWT auth, and API endpoints.",
          "Aaditya Pokhriyal (USICT, GGSIPU) — AI Services Lead & Developer (QP-Parsing): Led the AI microservice architecture, prompt engineering strategies, Gemini 3 Flash multimodal API integrations, and built the Node.js Express Question Paper parsing service (QP-parsing microservice on Port 3000) for structured JSON schema extraction.",
          "Divyanshu Yadav (USAR, GGSIPU) — AI Services & Backend Developer (AS-Parsing): Engineered the Python FastAPI Answer Sheet evaluation engine (AS-parsing microservice on Port 8000), implementing vision OCR processing, handwritten script extraction, Pydantic response models, and AI evaluation feedback algorithms.",
          "Raj (USICT, GGSIPU) — UI/UX Developer: Focused on UI design systems, layout structure, interface components, visual ergonomics, and user experience optimizations.",
          "Anshu Kumar (USICT, GGSIPU) — Frontend Developer: Co-developed reusable React UI components, page layouts, file upload handlers, and responsive frontend styling alongside the Frontend Lead.",
          "Jai Singh Rathore (USICT, GGSIPU) — UI/UX Developer: Designed UI layouts, interactive interface elements, responsive styling, and user experience workflows."
        ]
      },
      { type: "paragraph", text: "Supervisors & Mentors: Dr. M. Balakrishna (Supervisor, USICT, GGSIPU) & Dr. Raj Kumar (Mentor, USICT, GGSIPU), AICTE IDEA Lab — Guru Gobind Singh Indraprastha University." },

      { type: "heading", text: "System Architecture & 4-Tier Hierarchy" },
      { type: "paragraph", text: "Parakh features a decoupled, isolated four-tier microservices architecture designed to isolate private AI execution environments behind a backend reverse proxy gateway for security and horizontal scalability:" },
      { type: "image", src: parakhArch, alt: "Parakh Isolated 4-Tier System Architecture Hierarchy Diagram" },
      {
        type: "list", items: [
          "Tier 1 — Frontend Client: React (Vite) Single Page Application providing interactive teacher dashboards, dark/light theme options, and evaluation step wizards.",
          "Tier 2 — Backend Orchestrator: Node.js & Express gateway (Port 5000) managing request authentication, payload validation, job queues, and API routing.",
          "Tier 3 — Private AI Services: Isolated Node.js QP-Parsing service (Port 3000) for question paper JSON extraction & Python FastAPI AS-Parsing engine (Port 8000) for vision-based handwritten answer grading.",
          "Tier 4 — Persistence Layer: Supabase relational PostgreSQL database managing exams, evaluation runs, student scores, rubrics, and user profiles."
        ]
      },
      { type: "subheading", text: "Repository Structure" },
      { type: "code", language: "Repository Structure Diagram", code: `Parakh/
│
├── frontend/              # React (Vite) Single Page Application
│   ├── src/
│   │   ├── components/    # Reusable UI components (PDFUploader, Navbar, etc.)
│   │   ├── pages/         # Landing, QP Upload, Answers Upload, Review, Results
│   │   ├── services/      # API services wrapper (authFetch, backend endpoints)
│   │   ├── App.jsx        # Routing & Application entry point
│   │   └── index.css      # Design system & CSS variables (Dark/Light theme)
│   ├── package.json
│   └── vite.config.js
│
├── backend/               # Node.js Express Orchestrator Gateway (Port 5000)
│   ├── config/            # Supabase DB connection & environment configuration
│   ├── controllers/       # Handlers for exams, rubrics, & evaluation sessions
│   ├── middleware/        # JWT auth verification, file upload & magic-byte check
│   ├── routes/            # Express router (/api/exams, /api/evaluations, /api/auth)
│   ├── services/          # Database queries & AI service routing proxies
│   ├── app.js             # Express entry point
│   └── package.json
│
├── ai-service/            # Private AI Processing Microservices
│   ├── QP-parsing/        # Question Paper JSON parser (Express on Port 3000)
│   │   ├── controllers/   # Multimodal Gemini Files API streaming controller
│   │   ├── middlewares/   # Magic byte file type validator
│   │   ├── prompts/       # Multi-shot prompts for structured JSON extraction
│   │   └── schemas/       # JSON output validation schemas
│   │
│   └── AS-parsing/        # Answer Sheet Grading Engine (FastAPI on Port 8000)
│       ├── pydantic_models/# Response models & schema validation
│       ├── helpers/       # Vision & OCR preprocessing helpers
│       ├── app.py         # FastAPI application entry point
│       └── requirements.txt
│
└── doc/                   # Documentation & Database Assets
    ├── Architectural docs/# Generated JSON samples & architectural diagrams
    ├── test PDFs/         # Sample question papers and student answer sheets
    ├── schema.sql         # Supabase PostgreSQL relational database schema
    └── Timeline.md        # AICTE Internship milestones & progress log` },

      { type: "heading", text: "Key Application Modules & Workflows" },

      { type: "subheading", text: "1. Landing Page & Dynamic Theme System" },
      { type: "paragraph", text: "The landing page introduces the Parakh platform, featuring a 4-step evaluation stepper, hero call-to-action triggers, contributor grid, and a global navigation header equipped with a seamless Day/Night theme toggler." },
      { type: "image", src: parakhLanding, alt: "Parakh Landing Page and Stepper Interface" },
      {
        type: "list", items: [
          "Interactive Stepper mapping the 4-stage evaluation process.",
          "Global Day/Night Theme Toggler powered by CSS variables and local storage persistence.",
          "Fully responsive mobile-to-desktop layout with accessibility standards compliance."
        ]
      },

      { type: "subheading", text: "2. Teacher Authentication & Session Security" },
      { type: "paragraph", text: "Secured via JWT tokens, the authentication portal allows educators to register or log into protected workspaces with institutional credentials." },
      { type: "image", src: parakhLogin, alt: "Parakh Teacher Authentication Portal" },
      {
        type: "list", items: [
          "Secure session management with automated JWT Bearer headers attached to API calls via authFetch.",
          "Protected client-side routing preventing unauthorized endpoint access.",
          "User profile dropdown displaying active teacher metadata and session control."
        ]
      },

      { type: "subheading", text: "3. Teacher Dashboard & Project Workspace" },
      { type: "paragraph", text: "The centralized hub where educators manage all examination evaluation projects, view historical grading sessions, monitor progress, and trigger new pipelines." },
      { type: "image", src: parakhDashboard, alt: "Parakh Teacher Dashboard Workspace" },
      {
        type: "list", items: [
          "Exam Project Cards detailing subject code, total marks, creation date, and status badges.",
          "Aggregate class analytics displaying total answer sheets processed and class average scores.",
          "Quick action triggers for resuming evaluations or modifying grading rubrics."
        ]
      },

      { type: "subheading", text: "4. Step 1: Question Paper & Metadata Upload" },
      { type: "paragraph", text: "Step 1 allows teachers to upload master examination PDFs/images along with exam metadata to initiate automated parsing." },
      { type: "image", src: parakhUploadQP, alt: "Step 1 Question Paper Upload Interface" },
      {
        type: "list", items: [
          "Drag-and-drop file upload supporting high-resolution images and PDF question papers.",
          "Configurable metadata parameters (Exam Title, Subject Code, Total Allocated Marks).",
          "Automated payload dispatch to the backend Node.js QP-parsing microservice."
        ]
      },

      { type: "subheading", text: "5. Step 2: AI Question Structure & Rubric Review" },
      { type: "paragraph", text: "Step 2 presents an interactive question tree generated by AI parsing, enabling educators to review subparts, edit scoring criteria, and adjust mark distributions." },
      { type: "image", src: parakhReview, alt: "Step 2 Question Paper Review & Rubric Editor Interface" },
      {
        type: "list", items: [
          "Hierarchical Question Tree displaying nested sub-questions (Q1 → Q1.a, Q1.b) with mark verification.",
          "Rubric & Reference Answer Editor allowing manual updates to AI-generated grading schemes.",
          "Automated Mark Distribution Core (marksDistributor.js) ensuring nested marks sum accurately to top-level totals."
        ]
      },

      { type: "subheading", text: "6. Step 3: Batch Student Answer Sheet Upload" },
      { type: "paragraph", text: "In Step 3, instructors upload batches of scanned handwritten student answer sheets for evaluation against the validated question schema." },
      { type: "image", src: parakhUploadAS, alt: "Step 3 Student Answer Sheet Batch Upload Interface" },
      {
        type: "list", items: [
          "Bulk file upload handling multi-page PDF answer sheets for entire student batches.",
          "Real-time processing queue feedback and status indicators during AI vision execution.",
          "Asynchronous job dispatching to the private FastAPI handwritten evaluation engine."
        ]
      },

      { type: "subheading", text: "7. Step 4: Analytical Results & Human-in-the-Loop Workspace" },
      { type: "paragraph", text: "Step 4 serves as the primary analytical grading workspace. Educators view comprehensive AI grading breakdowns, review feedback rationale, and manually override scores." },
      { type: "image", src: parakhResult, alt: "Step 4 Analytical Evaluation & Score Override Workspace" },
      {
        type: "list", items: [
          "Student Selector Sidebar featuring live search by name/roll number and total score previews.",
          "Granular Question Score Breakdown matching individual question nodes against maximum marks.",
          "AI Reasoning & Feedback displaying concept matching, missing points, and clarity tags.",
          "Human-in-the-Loop Override Controls enabling educators to adjust marks and save custom remarks directly to Supabase."
        ]
      },

      { type: "heading", text: "Integrity Guards & Verification Core" },
      { type: "paragraph", text: "To prevent structural degradation and AI calculation discrepancies, Parakh incorporates deterministic program guards:" },
      {
        type: "list", items: [
          "Mathematical Verification Core (marksDistributor.js): Intercepts parsed JSON payloads prior to serialization, programmatically verifying that subpart marks sum perfectly to section totals and preventing rounding hallucinations.",
          "Pydantic Schema & Exponential Backoff Guard: Strict Pydantic models validate JSON streams in FastAPI; formatting anomalies trigger automated exponential backoff retries up to 5 times."
        ]
      },

      { type: "heading", text: "Future Roadmap" },
      {
        type: "list", items: [
          "Direct PDF Annotation: Render OCR bounding boxes and AI redline marks directly onto the student PDF viewer.",
          "Multilingual Handwriting Support: Expand vision parsing models for regional Indian languages.",
          "LMS Integrations: Enable seamless grade exports to Canvas, Moodle, and Google Classroom."
        ]
      }
    ]
  },
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
      { type: "paragraph", text: "This project is a content-driven platform developed for my Instagram community, where I share insights on technology, science, world affairs, politics, history, and other curiosity-driven topics. The website serves as a central hub that extends the content experience beyond social media by offering structured articles, quick facts, and curated resources in an organized and user-friendly format. Built with React and Tailwind CSS, the platform focuses on delivering a fast, responsive, and engaging browsing experience. Users can discover content through intelligent search and filtering mechanisms, explore bite-sized facts through an infinite scrolling feed, and access a curated collection of recommended products through an affiliate-powered store section. The project demonstrates modern frontend development practices while emphasizing usability, performance, and scalable architecture." },
      { type: "heading", text: "Problem Statement"},
      { type: "paragraph", text: "Social media platforms are effective for content distribution but often make it difficult for users to discover older posts, explore content by category, or access information in a structured manner. Valuable content frequently gets buried within timelines, reducing long-term accessibility and engagement. This project addresses that challenge by creating a dedicated platform where content can be organized, searched, filtered, and explored more efficiently. The goal is to provide visitors with a seamless knowledge-discovery experience while also creating a sustainable ecosystem through curated recommendations and future content management capabilities."},
      { type: "heading", text: "Key Features"},
      { type: "subheading", text: "Explore Posts"},
      { type: "image", src: postpage, alt: "Explore Page screenshot from Website"},
      { type: "list", items: [
        "Implemented a fuzzy search mechanism that enables users to find relevant articles even when keywords are partially matched or not entered exactly.",
        "Developed category-based filtering to help users quickly narrow content according to their interests.",
        "Designed an intuitive user interface with searchable input fields and interactive category tags for a seamless browsing experience.",
        "Implemented dynamic filtering on the client side for smooth category switching without page reloads.",
        "Built reusable React components for article cards, filters, and search functionality to maintain scalability and code maintainability.",
        "Reduced unnecessary component re-renders through efficient state management practices.",
        "Improves content discoverability compared to traditional social media feeds.",
        "Enables users to locate relevant articles within seconds."
      ]},
      { type: "subheading", text: "Store Page"},
      { type: "paragraph", text: "The Store section was developed to extend the platform beyond content consumption by providing users with carefully curated product recommendations aligned with the themes and interests of the community. Rather than functioning as a traditional e-commerce platform, the store serves as a discovery layer that connects users with relevant products through amazon affiliate partnerships."},
      { type: "image", src: storecategory, alt: "Store Page Screenshot from Website"},
      { type: "image", src: storecategoryitems, alt: "Store Catergory items list screenshot from website"},
      { type: "list", items: [
        "Built dedicated category pages to organize products into meaningful collections for easier exploration.",
        "Integrated affiliate-based product navigation, allowing users to visit external marketplaces through tracked referral links.",
        "Demonstrates practical implementation of affiliate marketing within a web application."
      ]},
      { type: "subheading", text: "Quick facts page"},
      { type: "paragraph", text: "The Quick Facts section was designed to deliver bite-sized knowledge in a highly engaging format inspired by modern social media platforms. Instead of requiring users to navigate through multiple pages, content is continuously loaded as they scroll, creating a seamless discovery experience."},
      { type: "image", src: quickfacts, alt: "Quick fact scrollable feed screenshot from website"},
      { type: "list", items: [
        "Implemented infinite scrolling to continuously load content without requiring page refreshes or manual pagination.",
        "Designed interactive fact cards with visual elements to increase user engagement and readability.",
        "Created a distraction-free browsing experience focused on rapid knowledge consumption.",
        "Implemented lazy content loading through infinite scroll to improve perceived performance.",
        "Provides a familiar browsing experience inspired by modern content platforms."
      ]},
      { type: "heading", text: "Future Goals"},
      { type: "list", items: [
        "Build a scalable backend API for content management and data handling.",
        "Create an admin dashboard for creating, editing, publishing, and managing articles without code changes.",
        "Implement secure user authentication and role-based access control for administrators and content managers.",
        "Store articles, categories, tags, product recommendations, and user data in a dedicated database.",
        "Allow users to subscribe for updates and receive notifications about newly published content.",
        "Add bookmarking, reading history, likes, comments, and content sharing functionality."
      ]},

      { type: "heading", text: "Architecture & Design" },
      { type: "subheading", text: "Component Structure" },
      { type: "paragraph", text: "The application is organized into reusable React components, each responsible for a specific section of the UI. This modular approach makes the codebase easy to maintain and extend." },
      { type: "code", language: "Repository Structure Diagram", code: `project-root/
│
├── node_modules/
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── CategoryCard.jsx
│   │   ├── ContactSection.jsx
│   │   ├── FactCard.jsx
│   │   ├── FactCardSkeleton.jsx
│   │   ├── FactModal.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── PostCard.jsx
│   │   ├── PostCardSkeleton.jsx
│   │   ├── PostModal.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── Skeleton.jsx
│   │
│   ├── data/
│   │   ├── about.js
│   │   ├── facts.js
│   │   ├── posts.js
│   │   └── store.js
│   │
│   ├── hooks/
│   │   ├── useActiveCard.js
│   │   └── useScrollAnimation.js
│   │
│   ├── pages/
│   │   ├── CategoryDetails.jsx
│   │   ├── Disclosure.jsx
│   │   ├── Home.jsx
│   │   ├── Posts.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── QuickFacts.jsx
│   │   └── Store.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json
└── vite.config.js` },
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
    title: "Website Development(Frontend)",
    description: "I create professional landing pages for small businesses and portfolio websites for freelancers and professionals, helping them showcase their services, build credibility, and grow their online presence. Leveraging React, Tailwind CSS, and JavaScript, I deliver fast, responsive, and user-friendly web solutions optimized for performance and engagement.",
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