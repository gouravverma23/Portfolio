import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { personalInfo, projects, social } from '../pageData';
import { ExternalLink, Github, ArrowLeft, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import Navbar from '../components/Navbar';
import Tilt from 'react-parallax-tilt';

const ProjectCard = React.memo(({ project }) => (
    <Card className="bg-[#121212] border-white/25 rounded-2xl overflow-hidden group project-card h-full flex flex-col">
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
                    className="p-3 bg-[#00FFD1] text-black rounded-sm hover:bg-[#00FFD1]/80 transition-all duration-300 transform hover:scale-110 project-link"
                >
                    <Github className="w-5 h-5" />
                </a>
                <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
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
        <CardContent className="mt-auto">
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
));

const BackgroundEffect = React.memo(() => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
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
        </div>
    );
});

const AllProjects = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const pinnedProjects = React.useMemo(() => projects.filter(p => p.pinned), []);
    const otherProjects = React.useMemo(() => projects.filter(p => !p.pinned), []);


    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <BackgroundEffect />

            <Navbar />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-[7.6923%]">
                <div className="max-w-6xl mx-auto">
                    <Button
                        onClick={() => navigate('/')}
                        className="mb-8 bg-transparent text-[#00FFD1] hover:text-black hover:bg-[#00FFD1] border border-[#00FFD1] flex items-center gap-2 transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Button>

                    <header className="mb-16">
                        <h1 className="text-5xl md:text-6xl font-semibold mb-4 text-[#00FFD1]">My Projects</h1>
                        <p className="text-xl text-white/70 max-w-2xl">
                            A comprehensive list of my work, ranging from web applications to CLI tools.
                        </p>
                    </header>

                    {pinnedProjects.length > 0 && (
                        <section className="mb-20">
                            <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
                                <span className="text-[#00FFD1]">Pinned Projects</span>
                                <div className="h-px bg-white/20 flex-1"></div>
                            </h2>
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
                                {pinnedProjects.map(project => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>
                        </section>
                    )}

                    <section>
                        <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
                            <span className="text-[#00FFD1]">All Projects</span>
                            <div className="h-px bg-white/20 flex-1"></div>
                        </h2>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otherProjects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </section>
                </div>
            </main>

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

export default AllProjects;
