import dp4 from '../components/ui/dp4.jpg';
import { Layout, Share2, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

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
  }
];

export const social = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/gaurav-verma-developer/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/gouravverma23", icon: Github },
  { name: "Twitter", url: "https://twitter.com/gverma_dev", icon: Twitter },
  { name: "Instagram", url: "https://instagram.com/_gaurav_vermaaa_", icon: Instagram },
  { name: "Discord", url: "https://discord.com/users/1479012535540645938", icon: FaDiscord }
];
