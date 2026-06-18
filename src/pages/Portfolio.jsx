// from ai

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { personalInfo, about, experience, education, projects, skills, social, services } from '../pageData';
import { ExternalLink, Github, Mail, Download, ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import Navbar from '../components/Navbar';
import Tilt from 'react-parallax-tilt';

const typewriterTitles = [
  'Full Stack Developer',
  'AI-ML Enthusiast'
];

const BackgroundEffect = React.memo(() => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Create trailing sparkles
      if (Math.random() > 0.5) {
        const newSparkle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 40,
          y: e.clientY + (Math.random() - 0.5) * 40,
        };
        setSparkles(prev => [...prev.slice(-6), newSparkle]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="animated-gradient"></div>
      <div className="grid-overlay"></div>
      <div
        className="cursor-dot"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      ></div>
      {/* Trailing sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="trailing-sparkle"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`
          }}
        ></div>
      ))}
    </div>
  );
});

const SkillGroup = ({ group }) => {
  const [expandedSkills, setExpandedSkills] = useState({});

  const toggleSkill = (skillName) => {
    setExpandedSkills(prev => ({
      ...prev,
      [skillName]: !prev[skillName]
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
      {group.items.map((skill, idx) => (
        <div key={idx} className="space-y-2">
          <div
            onClick={() => skill.subItems && toggleSkill(skill.name)}
            className={`flex items-center justify-between p-3 bg-white/5 border border-white/10 skill-item group relative transition-all duration-300 ${skill.subItems ? 'cursor-pointer hover:bg-white/10' : 'cursor-default'}`}
          >
            <div className="flex items-center gap-3">
              <skill.icon className="w-5 h-5 text-[#00FFD1] skill-icon group-hover:scale-110 transition-transform duration-300" />
              <span className="text-white/85 text-sm md:text-base">{skill.name}</span>
            </div>
            {skill.subItems && (
              <ChevronDown
                className={`w-4 h-4 text-[#00FFD1]/50 transition-transform duration-300 ${expandedSkills[skill.name] ? 'rotate-180' : ''}`}
              />
            )}
          </div>
          {skill.subItems && expandedSkills[skill.name] && (
            <div className="ml-8 space-y-2 relative animate-fade-in">
              {skill.subItems.map((subItem, sIdx) => (
                <div key={sIdx} className="relative flex items-center gap-3 pl-4 py-1 group/sub">
                  <div className="absolute -left-4 top-0 bottom-1/2 w-4 border-l border-b border-[#00FFD1]/30 rounded-bl-lg"></div>
                  {sIdx < skill.subItems.length - 1 && (
                    <div className="absolute -left-4 top-1/2 bottom-0 border-l border-[#00FFD1]/30"></div>
                  )}
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FFD1]/40 group-hover/sub:bg-[#00FFD1] group-hover/sub:shadow-[0_0_8px_#00FFD1] transition-all duration-300"></div>
                  <span className="text-white/60 text-xs md:text-sm group-hover/sub:text-white transition-colors duration-300 cursor-default">
                    {subItem}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Portfolio = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentTitle = typewriterTitles[currentTitleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % typewriterTitles.length);
        }
      }
    }, isDeleting ? 30 : 70);

    return () => clearTimeout(timeout);
  }, [displayedText, currentTitleIndex, isDeleting]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundEffect />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-[7.6923%] pt-20 relative z-10">
        <div className={`w-full max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <div className="text-[#00FFD1] text-lg font-medium animate-fade-in">Hello, I'm</div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight animate-slide-up">
                  {personalInfo.name}
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/85 animate-slide-up-delay">
                  {personalInfo.title}
                </h2>
                <div className="text-xl md:text-2xl lg:text-3xl font-medium text-[#00FFD1] animate-slide-up-delay min-h-[2rem]">
                  <span>{displayedText}</span><span className="animate-blink">|</span>
                </div>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl animate-fade-in-delay">
                  {personalInfo.tagline}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  onClick={() => scrollToSection('projects')}
                  className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/90 hover:scale-105 h-14 px-6 text-lg font-medium rounded-none flex items-center gap-2 transition-all duration-400 hero-button"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white/10 text-white hover:bg-white hover:text-black hover:scale-105 h-14 px-6 text-lg font-medium rounded-none transition-all duration-400 hero-button"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 profile-container">
                <div className="absolute inset-0 bg-[#00FFD1]/20 rounded-lg blur-3xl animate-pulse-slow"></div>
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  transitionSpeedMs={1500}
                  scale={1.05}
                  glareEnable={false}
                  glareMaxOpacity={0}
                  glareColor="#00FFD1"
                  glarePosition="all"
                  glareBorderRadius="0.5rem"
                  className="rounded-lg h-full border border-white/25 tilt-card-glow"
                >
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="relative w-full h-full object-cover rounded-lg pointer-events-none"
                  />
                </Tilt>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#00FFD1]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 md:px-[7.6923%] py-20 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-[#00FFD1] section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#121212] border-white/25 rounded-2xl card-hover about-card">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Background</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/85 text-lg leading-relaxed">{about.intro}</p>
                <p className="text-white/85 text-lg leading-relaxed mt-4">{about.background}</p>
              </CardContent>
            </Card>
            <Card className="bg-[#121212] border-white/25 rounded-2xl card-hover about-card">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Interests & Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/85 text-lg leading-relaxed">{about.interests}</p>
                <p className="text-white/85 text-lg leading-relaxed mt-4">{about.careerGoals}</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => navigate('/experience-education')}
              className="bg-transparent text-[#00FFD1] hover:text-black hover:bg-[#00FFD1] border border-[#00FFD1] flex items-center gap-2 px-8 py-6 text-xl rounded-none transition-all duration-300"
            >
              Experience & Education <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Sections removed: Experience and Education moved to new page */}


      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-6 md:px-[7.6923%] py-20 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-[#00FFD1] section-title">Projects</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => p.pinned).map((project) => (
              <Card
                key={project.id}
                className="bg-[#121212] border-white/25 rounded-2xl overflow-hidden group project-card cursor-pointer"
                onClick={() => navigate(`/project/${project.slug}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover project-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 project-overlay">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 bg-[#00FFD1] text-black rounded-sm hover:bg-[#00FFD1]/80 transition-all duration-300 transform hover:scale-110 project-link"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 bg-white text-black rounded-sm hover:bg-white/80 transition-all duration-300 transform hover:scale-110 project-link"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-white/85 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-[#00FFD1] text-[#00FFD1] bg-[#00FFD1]/10 rounded-sm px-3 py-1 hover:bg-[#00FFD1] hover:text-black transition-all duration-300 tech-badge"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
            {/*Stay tuned message if no pinned projects or just extra info*/}
            {projects.filter(p => p.pinned).length === 0 && (
              <div className="col-span-full text-center mt-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#00FFD1] mb-3">
                  New projects will be added shortly.
                </h3>
                <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                  I’m currently building new ideas, improving my skills, and working on several projects behind the scenes.
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => navigate('/projects')}
              className="bg-transparent text-[#00FFD1] hover:text-black hover:bg-[#00FFD1] border border-[#00FFD1] flex items-center gap-2 px-8 py-6 text-xl rounded-none transition-all duration-300"
            >
              View All Projects <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6 md:px-[7.6923%] py-20 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-[#00FFD1] section-title">Skills</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="bg-[#121212] border-white/25 rounded-2xl card-hover skills-card">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-[#00FFD1]">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <SkillGroup group={skillGroup} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center px-6 md:px-[7.6923%] py-20 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-[#00FFD1] section-title">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Tilt
                key={service.id}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                transitionSpeedMs={1500}
                scale={1.02}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#00FFD1"
                glarePosition="all"
                glareBorderRadius="1rem"
                className="rounded-2xl h-full border border-white/25 tilt-card-glow"
              >
                <Card className="bg-[#121212] border-none h-full flex flex-col items-center text-center p-6 rounded-2xl pointer-events-none">
                  <div className="mb-6 p-4 bg-[#00FFD1]/10 rounded-full">
                    <service.icon className="w-10 h-10 text-[#00FFD1]" />
                  </div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl md:text-2xl text-white mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-white/70 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 md:px-[7.6923%] py-20 relative z-10">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-[#00FFD1] section-title">Get In Touch</h2>
          <p className="text-xl md:text-2xl text-white/85 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col items-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 bg-[#00FFD1] text-black hover:bg-[#00FFD1]/90 hover:scale-105 h-14 px-8 text-lg font-medium rounded-none transition-all duration-400 contact-button"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 text-white hover:bg-white hover:text-black hover:scale-105 h-14 px-8 text-lg font-medium rounded-none transition-all duration-400 contact-button"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <div className="flex gap-6 mt-8">
              {social.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-[#00FFD1] hover:text-black text-white transition-all duration-300 social-icon"
                  aria-label={platform.name}
                >
                  <platform.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/25 py-8 px-6 md:px-[7.6923%] relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm md:text-base text-center md:text-left">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {social.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#00FFD1] transition-colors duration-300"
                aria-label={platform.name}
              >
                <platform.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;