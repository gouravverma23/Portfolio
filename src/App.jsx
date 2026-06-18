import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio.jsx';
import ExperienceEducation from './pages/ExperienceEducation.jsx';
import AllProjects from './pages/AllProjects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/experience-education" element={<ExperienceEducation />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
