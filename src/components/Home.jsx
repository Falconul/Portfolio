// src/components/Home.jsx
import React from 'react';
import About from './About.jsx'; 
import Skill from './Skill.jsx';
import Project from './Project.jsx';
import Contact from './Contact.jsx';

const Home = () => {
  return (
    <section id="home">
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page.</p>
      
      <Project/>
      <Skill/>
      <About />
      <Contact/>
    </section>
  );
};

export default Home;

