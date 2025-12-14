
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { personalInfo } from '../pageData';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            if (isHome) {
                const sections = ['home', 'about', 'projects', 'skills', 'contact'];
                const scrollPosition = window.scrollY + 100;

                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const offsetTop = element.offsetTop;
                        const offsetBottom = offsetTop + element.offsetHeight;

                        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    const scrollToSection = (sectionId) => {
        setMobileMenuOpen(false);

        if (!isHome) {
            if (sectionId === 'home') {
                navigate('/');
                window.scrollTo(0, 0);
            } else {
                navigate('/', { state: { scrollTo: sectionId } });
            }
            return;
        }

        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };

    // Handle navigation from other pages with state
    useEffect(() => {
        if (isHome && location.state?.scrollTo) {
            const sectionId = location.state.scrollTo;
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
                // Clear state to prevent scrolling on refresh
                navigate(location.pathname, { replace: true, state: {} });
            }, 100);
        }
    }, [isHome, location.state, navigate, location.pathname]);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/25' : 'bg-transparent'}`}>
            <div className="px-6 md:px-[7.6923%] py-4 flex items-center justify-between h-20">
                <div
                    className="text-2xl font-semibold tracking-tight cursor-pointer hover:text-[#00FFD1] transition-colors duration-300 text-white"
                    onClick={() => scrollToSection('home')}
                >
                    {personalInfo.name.split(' ')[0]}
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`text-lg font-normal capitalize transition-all duration-300 relative nav-link ${activeSection === section && isHome ? 'text-[#00FFD1]' : 'text-[#4D4D4D] hover:text-white'
                                }`}
                        >
                            {section === 'home' ? 'Home' : section}
                            {activeSection === section && isHome && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00FFD1] nav-underline"></span>
                            )}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-[#00FFD1] transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <nav className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/25 py-4 mobile-menu">
                    {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`block w-full text-left px-6 py-3 text-lg capitalize transition-colors duration-300 ${activeSection === section && isHome ? 'text-[#00FFD1] bg-[#00FFD1]/10' : 'text-white/70 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {section === 'home' ? 'Home' : section}
                        </button>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Navbar;
