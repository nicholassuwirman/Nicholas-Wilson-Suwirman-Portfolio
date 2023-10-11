import React from "react";
import './projects.css';

import githubLogo from '../../assets/github-line.png'
import vrProjects from '../../assets/projects-vr-2.png'
import bakeryProjects from '../../assets/projects-bakery-2.png'

const ProjectCard = ({title, time, description, liveLink, gitLink, projectImage, customClassName}) => {
  return (
    <div className="projects-card">
      <div className="projects-card-left">
        <div>
          <p className="projects-title">{title}</p>
          <p className="projects-time">{time}</p>
          <p className="projects-description">{description}</p>
        </div>
        <div className="projects-card-links-container">
          <a className="projects-button" href={liveLink} target="_blank">
            <p>Live Link</p>
          </a>
          <a className="projects-github-container" href={gitLink} target="_blank">
            <img className="projects-github-logo" src={githubLogo} />
          </a>
        </div>
      </div>
      <div className={`projects-card-right ${customClassName}`}>
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

      <ProjectCard title={"Bakery E-Commerce"} time={"2023 - Web Development"}  
      description={"Design a bright and inviting e-commerce platform for a bakery, aligning with the client's request for a clean and appealing look. The goal is to showcase the bakery's diverse product range in an attractive and user-friendly manner."} 
      liveLink={"https://nicholassuwirman.github.io/Bear-Brownies-Website/"}
      gitLink={"https://github.com/nicholassuwirman/Bear-Brownies-Website"}
      projectImage={bakeryProjects}
      customClassName={"bakery-image-background"}/>
    </div>
  );
};

export default Project;
