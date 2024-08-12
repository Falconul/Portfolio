import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path='/skill' element={<Skill />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project-details/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
