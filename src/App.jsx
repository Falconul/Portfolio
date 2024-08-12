import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/SideBar.jsx';
import Home from './components/Home.jsx';
import Project from './components/Project.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Skill from './components/Skill.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
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
