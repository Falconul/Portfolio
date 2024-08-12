import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './project.css';
import project1 from '../images/Tayfun-Photo.png';
import project2 from '../images/Tayfun-Photo.png';
import project3 from '../images/Tayfun-Photo.png';

const projects = [
  {
    id: 1,
    title: "Project 1",
    imageUrl: project1,
    detailsUrl: "/project-details/1",
  },
  {
    id: 2,
    title: "Project 2",
    imageUrl: project2,
    detailsUrl: "/project-details/2",
  },
  {
    id: 3,
    title: "Project 3",
    imageUrl: project3,
    detailsUrl: "/project-details/3",
  },
];

const Project = () => {
  return (
    <section id="projects">
      <h1 className="section-title">Projects</h1>
      <h2>FrontEnd</h2>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {projects.map((project) => (
          <div key={project.id} className="carousel-slide">
            <img src={project.imageUrl} alt={project.title} />
            <div className="carousel-caption">
              <h3>{project.title}</h3>
              <a href={project.detailsUrl} className="view-details-button">View Details</a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Project;
