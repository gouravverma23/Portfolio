import { FaJs, FaPython, FaJava, FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaChartBar, FaCss3 } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiTailwindcss, SiExpress, SiSupabase, SiMongodb, SiVscodium, SiVercel, SiGooglecolab, SiNumpy, SiPandas, SiScikitlearn } from 'react-icons/si';

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
