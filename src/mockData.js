// from ai

// Mock data for portfolio website
import { Code2, Database, Globe, Cpu, GitBranch, Terminal, Linkedin, Github, Twitter, Instagram, Mail, Code, Loader, CornerDownLeftIcon, ArrowBigUp } from 'lucide-react';

export const personalInfo = {
  name: "Gourav Verma",
  title: "Aspiring Software Engineer",
  tagline: "Turning curiosity into code.",
  email: "gverma.developer@gmail.com",
  profileImage: "src/components/ui/dp4.jpg"
};

export const about = {
  intro: "I am a B.Tech student in Computer Science and Engineering at USICT, GGSIPU. I love exploring new technologies and solving problems that challenge me.",
  background: "I have been building a strong foundation in programming, algorithms, and software development, and enjoy applying what I learn through projects and hands-on workshops.",
  interests: "I am fascinated by Artificial Intelligence and machine learning, and love experimenting with ideas that could turn into real-world solutions.",
  careerGoals: "I aspire to build a career in AI and software development, working on innovative projects that make a difference while constantly learning and growing."
  /*
  intro: "I'm a passionate software engineer with 5+ years of experience building modern web applications. My journey in tech started with curiosity about how things work, and evolved into a deep love for creating elegant solutions to complex problems.",
  background: "With a strong foundation in computer science and hands-on experience across the full stack, I specialize in building scalable, performant applications. I thrive in collaborative environments where innovation meets pragmatism.",
  interests: "When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or diving into the latest developments in AI and cloud architecture.",
  careerGoals: "I'm passionate about leveraging technology to solve real-world problems and am always eager to take on challenges that push the boundaries of what's possible."
  */
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
    company: "Instagram",
    duration: "Jan 2020 - Present",
    responsibilities: [
      "Create and edit engaging Instagram reels and posts.",
      "Research and develop content ideas based on trends and audience interest.",
      "Maintain a consistent visual style and improve content quality over time.",
      "Track post performance to understand engagement and refine future content."
    ]
  }/*,
  {
    id: 2,
    role: "Full Stack Developer",
    company: "InnovateLabs",
    duration: "Mar 2020 - Dec 2021",
    responsibilities: [
      "Built responsive web applications using React and Node.js",
      "Designed and implemented RESTful APIs for mobile applications",
      "Collaborated with UX team to create intuitive user interfaces",
      "Reduced application load time by 45% through optimization"
    ]
  },
  {
    id: 3,
    role: "Software Developer",
    company: "StartupHub Inc",
    duration: "Jun 2019 - Feb 2020",
    responsibilities: [
      "Developed features for SaaS platform using JavaScript and Python",
      "Integrated third-party APIs and payment gateways",
      "Participated in agile development cycles and sprint planning",
      "Created comprehensive technical documentation"
    ]
  }*/
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
    technologies: ["HTML","CSS","JAVASCRIPT"],/*react,Python,tensorflow,postgreSQL,Docker*/
    github: "https://github.com/gouravverma23/demowebsite",
    demo: "https://gouravverma23.github.io/demowebsite/",
    image: "src/components/ui/websitefront.jpg"
    /*https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop*/
  },
  {
    id: 2,
    title: "Basic CLI calculator",
    description: "Addition, Subtraction, Multiplication, Division, Power",
    technologies: ["C"],
    github: "https://github.com/gouravverma23/Calculator",
    demo: "https://github.com/gouravverma23/Calculator/blob/main/intermediateclaculator.c",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "New projects will be added shortly.",
    description: "I’m working on developing new skills and exploring fresh ideas. Several projects are already in progress and will be showcased here soon. Stay tuned for more updates!",
    technologies: ["React.js", "Tailwind", "Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/gouravverma23/",
    demo: "",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  /*
  {
    id: 3,
    title: "E-Commerce Analytics Dashboard",
    description: "Comprehensive analytics platform providing real-time insights on sales, customer behavior, and inventory management.",
    technologies: ["Vue.js", "Express", "GraphQL", "MySQL", "AWS"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "DevOps Automation Suite",
    description: "Automated deployment pipeline with infrastructure-as-code, monitoring, and rollback capabilities for cloud applications.",
    technologies: ["Python", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with personalized AI coaching.",
    technologies: ["React Native", "Firebase", "TensorFlow Lite", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    image: "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?w=600&h=400&fit=crop"
  }*/
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
      /*{ name: "Go", icon: Cpu }*/
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
      /*{ name: "Node.js/Express", icon: Terminal },
      { name: "FastAPI", icon: Cpu },
      { name: "GraphQL", icon: Database },
      { name: "REST APIs", icon: Globe }
       */
      { name: "Learning", icon: Loader}
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

export const social = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/gaurav-verma-developer/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/gouravverma23", icon: Github },
  { name: "Back to top", url: "", icon: ArrowBigUp }, /*Twitter*/
  { name: "Instagram", url: "https://instagram.com/_gaurav_vermaaa_", icon: Instagram }
];