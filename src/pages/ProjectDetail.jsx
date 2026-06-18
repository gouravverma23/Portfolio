import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects, personalInfo, social } from '../pageData';
import { ExternalLink, Github, ArrowLeft, Calendar, Code2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import Navbar from '../components/Navbar';

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

// Renders a single content block based on its type
const ContentBlock = ({ block, index }) => {
    const animationDelay = `${index * 0.08}s`;

    switch (block.type) {
        case 'heading':
            return (
                <h2
                    className="detail-block detail-heading"
                    style={{ animationDelay }}
                >
                    {block.text}
                </h2>
            );

        case 'subheading':
            return (
                <h3
                    className="detail-block detail-subheading"
                    style={{ animationDelay }}
                >
                    {block.text}
                </h3>
            );

        case 'paragraph':
            return (
                <p
                    className="detail-block detail-paragraph"
                    style={{ animationDelay }}
                >
                    {block.text}
                </p>
            );

        case 'image':
            return (
                <div
                    className="detail-block detail-image-wrapper"
                    style={{ animationDelay }}
                >
                    <img
                        src={block.src}
                        alt={block.alt || 'Project screenshot'}
                        className="detail-image"
                        loading="lazy"
                    />
                    {block.alt && (
                        <span className="detail-image-caption">{block.alt}</span>
                    )}
                </div>
            );

        case 'code':
            return (
                <div
                    className="detail-block detail-code-wrapper"
                    style={{ animationDelay }}
                >
                    {block.language && (
                        <div className="detail-code-lang">
                            <Code2 className="w-3.5 h-3.5" />
                            {block.language}
                        </div>
                    )}
                    <pre className="detail-code-pre">
                        <code>{block.code}</code>
                    </pre>
                </div>
            );

        case 'list':
            return (
                <ul
                    className="detail-block detail-list"
                    style={{ animationDelay }}
                >
                    {block.items.map((item, idx) => (
                        <li key={idx} className="detail-list-item">
                            <span className="detail-list-marker"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            );

        default:
            return null;
    }
};

const ProjectDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    const project = projects.find(p => p.slug === slug);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // 404 state
    if (!project) {
        return (
            <div className="min-h-screen bg-black text-white relative overflow-hidden">
                <BackgroundEffect />
                <Navbar />
                <main className="relative z-10 pt-32 pb-20 px-6 md:px-[7.6923%]">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-6xl md:text-8xl font-bold text-[#00FFD1] mb-6">404</h1>
                        <p className="text-xl text-white/70 mb-8">
                            This project doesn't exist or may have been removed.
                        </p>
                        <Button
                            onClick={() => navigate('/projects')}
                            className="bg-[#00FFD1] text-black hover:bg-[#00FFD1]/80 h-12 px-6 text-lg rounded-none"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Projects
                        </Button>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <BackgroundEffect />
            <Navbar />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-[7.6923%]">
                <div className="max-w-4xl mx-auto">

                    {/* Back Button */}
                    <Button
                        onClick={() => navigate('/projects')}
                        className="mb-10 bg-transparent text-[#00FFD1] hover:text-black hover:bg-[#00FFD1] border border-[#00FFD1] flex items-center gap-2 transition-all duration-300 rounded-none"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Projects
                    </Button>

                    {/* Hero Section */}
                    <div className={`detail-hero transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {/* Project Image Banner */}
                        <div className="detail-hero-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="detail-hero-image"
                            />
                            <div className="detail-hero-image-overlay"></div>
                        </div>

                        {/* Title & Meta */}
                        <div className="detail-hero-content">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                                {project.title}
                            </h1>
                            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6 max-w-3xl">
                                {project.description}
                            </p>

                            {/* Technology Badges */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.technologies.map((tech, idx) => (
                                    <Badge
                                        key={idx}
                                        variant="outline"
                                        className="border-[#00FFD1] text-[#00FFD1] bg-[#00FFD1]/10 rounded-sm px-4 py-1.5 text-sm hover:bg-[#00FFD1] hover:text-black transition-all duration-300"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="detail-action-btn detail-action-btn-primary"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="detail-action-btn detail-action-btn-secondary"
                                >
                                    <Github className="w-5 h-5" />
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Separator */}
                    <div className="detail-separator"></div>

                    {/* Content Blocks */}
                    <div className="detail-content">
                        {project.details && project.details.map((block, index) => (
                            <ContentBlock key={index} block={block} index={index} />
                        ))}

                        {(!project.details || project.details.length === 0) && (
                            <div className="text-center py-16">
                                <p className="text-white/50 text-lg">
                                    Detailed project documentation coming soon.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Bottom CTA */}
                    <div className="detail-bottom-cta">
                        <div className="detail-bottom-cta-inner">
                            <h3 className="text-2xl font-semibold text-white mb-3">
                                Interested in this project?
                            </h3>
                            <p className="text-white/60 mb-6">
                                Check out the source code or see it live in action.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="detail-action-btn detail-action-btn-primary"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="detail-action-btn detail-action-btn-secondary"
                                >
                                    <Github className="w-5 h-5" />
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

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

export default ProjectDetail;
