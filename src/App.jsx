import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio.jsx';
import ExperienceEducation from './pages/ExperienceEducation.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/experience-education" element={<ExperienceEducation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
