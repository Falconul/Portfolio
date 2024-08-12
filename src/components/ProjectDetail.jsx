// src/components/ProjectDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './projectdetail.css';

// Projelerin örnek verileri
import projectImage from '../images/Tayfun-Photo.png'; // Resmi import edin

const projects = [
  {
    id: 1,
    title: "Project 1",
    imageUrl: projectImage, // Import edilen resmi kullanın
    description: "Detailed description of Project 1.",
    techStack: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    title: "Project 2",
    imageUrl: projectImage, // Import edilen resmi kullanın
    description: "Detailed description of Project 2.",
    techStack: ["React", "Node.js"]
  },
  {
    id: 3,
    title: "Project 3",
    imageUrl: projectImage, // Import edilen resmi kullanın
    description: "Detailed description of Project 3.",
    techStack: ["Vue.js", "Express"]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(proj => proj.id === parseInt(id, 10));

  if (!project) {
    return <div>Project Not Found</div>;
  }

  return (
    <div className="project-detail">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div className="project-info">
        <h2>Technologies Used:</h2>
        <ul>
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <Link to="/projects" className="back-button">Back to Projects</Link>
    </div>
  );
};

export default ProjectDetail;
