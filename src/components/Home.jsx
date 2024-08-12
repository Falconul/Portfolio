// src/components/Home.jsx
import React from 'react';
import About from './About'; // About bileşenini import ediyoruz
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';

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

