import React, { useState, useEffect } from 'react';
import ShapeGrid from './ShapeGrid';

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
        setSparkles((prev) => [...prev.slice(-6), newSparkle]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Dynamic Animated Cyan Neon Gradient */}
      <div className="animated-gradient"></div>

      {/* Interactive ShapeGrid Canvas */}
      <div className="absolute inset-0 opacity-60">
        <ShapeGrid 
          speed={0.4} 
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="rgba(0, 255, 209, 0.05)"
          hoverFillColor="rgba(0, 255, 209, 0.15)"
          shape="hexagon" // square, hexagon, circle, triangle
          hoverTrailAmount={6} // fading trail length
        />
      </div>

      {/* Custom Glowing Cursor Dot */}
      <div
        className="cursor-dot hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      ></div>

      {/* Custom Trailing Sparkles */}
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

export default BackgroundEffect;
