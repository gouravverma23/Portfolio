import React, { useState, useEffect } from 'react';
import { education } from '../pageData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Education = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
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

      <Navbar />

      <div className="relative z-10 px-6 md:px-[7.6923%] py-8 pt-24">
        <Button
          onClick={() => navigate('/')}
          className="mb-8 bg-transparent text-[#00FFD1] hover:text-white hover:bg-white/10 border border-[#00FFD1] flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Button>

        {/* Education Section */}
        <section id="education" className="py-10">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-[#00FFD1] section-title">
              Education
            </h2>

            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.id} className="bg-[#121212] border-white/25 rounded-2xl education-card">
                  <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl text-white">{edu.degree}</CardTitle>
                    <CardDescription className="text-lg md:text-xl text-[#00FFD1]">
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap items-center gap-4 text-white/85 text-base md:text-lg">
                      <span>Completed: {edu.year}</span>
                      {edu.gpa && (
                        <>
                          <span>•</span>
                          <span>GPA: {edu.gpa}</span>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </section>

        <div className="flex justify-center mb-12">
          <Button
            onClick={() => navigate('/')}
            className="bg-transparent text-[#00FFD1] hover:text-white hover:bg-white/10 border border-[#00FFD1] flex items-center gap-2 px-8 py-6 text-lg rounded-none transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Education;
