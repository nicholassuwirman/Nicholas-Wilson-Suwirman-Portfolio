import React from "react";
import './projects.css';

import githubLogo from '../../assets/github-line.png'
import vrProjects from '../../assets/projects-vr.png'

const ProjectCard = ({title, time, description, liveLink, gitLink, projectImage}) => {
  return (
    <div className="projects-card">
      <div className="projects-card-left">
        <p className="projects-title">{title}</p>
        <p className="projects-time">{time}</p>
        <p className="projects-description">{description}</p>
        <div className="projects-card-links-container">
          <a className="projects-button" href={liveLink} target="_blank">
            <p>Live Link</p>
          </a>
          <a className="projects-github-container" href={gitLink} target="_blank">
            <img className="projects-github-logo" src={githubLogo} />
          </a>
        </div>
      </div>
      <div className="projects-card-right">
        <img className="projects-image" src={projectImage} />
      </div>
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
      <ProjectCard title={"VR E-Commerce"} time={"2023 - Web Development"}  
      description={"Developed an e-commerce landing page to showcase the latest VR product line, implementing a futuristic design approach while optimizing the brand identity. This transformation enhanced user engagement and facilitated a seamless shopping experience for potential customers."} 
      liveLink={"https://nicholassuwirman.github.io/vr-website-vite/"}
      gitLink={"https://github.com/nicholassuwirman/vr-website-vite"}
      projectImage={vrProjects}/>
      <ProjectCard title={"VR E-Commerce"} time={"2023 - Web Development"}  
      description={"Developed an e-commerce landing page to showcase the latest VR product line, implementing a futuristic design approach while optimizing the brand identity. This transformation enhanced user engagement and facilitated a seamless shopping experience for potential customers."} 
      liveLink={"https://nicholassuwirman.github.io/vr-website-vite/"}
      gitLink={"https://github.com/nicholassuwirman/vr-website-vite"}
      projectImage={vrProjects}/>
    </div>
  );
};

export default Project;
