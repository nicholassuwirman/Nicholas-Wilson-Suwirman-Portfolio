import React from "react";
import './projects.css';


const ProjectCard = () => {
  return (
    <div className="projects-card">
      <p>a</p>
    </div>
  )
}

const Project = () => {
  return (
    <div className="projects-container" id="projects">
      <p className="projects-mywork">My work</p>
      <p className="projects-mywork-description">
        Here's a glimpse of some of my recent and exciting projects. 
        Each of them reflects my focus on transforming design into reality, 
        using a diverse range of front-end technologies to create 
        engaging and user-friendly web experiences.
      </p>
      <ProjectCard />
    </div>
  );
};

export default Project;
