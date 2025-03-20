import './projects.css';

import githubLogo from '../../assets/github-line.png'
import vrProjects from '../../assets/projects-vr-2.png'
import bakeryProjects from '../../assets/projects-bakery-2.png'
import gaussProjects from '../../assets/projects-gauss.png'
import dreambridgeHero from '../../assets/dreambridge-hero.png'

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
const ProjectCardDreamBridge = ({title, time, description, liveLink, gitLink, projectImage, customClassName}) => {
  return (
    <div className="projects-card">
      <div className="projects-card-left">
        <div>
          <p className="projects-title">{title}</p>
          <p className="projects-time">{time}</p>
          <p className="projects-description">{description}</p>
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
        Here are some of my recent projects. 
        Each one demonstrates how my skills have grown as I continue adapting to new front-end technologies.
      </p>
      <ProjectCardDreamBridge title={"Dreambridge Website"} time={"2025 - Web Development"}  
      description={"I am working on the DreamBridge team to develop their website, which integrates an API to later support media students. (Work in progress)"} 
      liveLink={"https://gauss-webseite.vercel.app/"}
      gitLink={"https://github.com/nicholassuwirman/Gauss-Webseite"}
      customClassName={"dreambridge-image-background"}
      projectImage={dreambridgeHero}/>

      <ProjectCard title={"Gauss Website"} time={"2024 - Web Development"}  
      description={"I led the complete redesign and development of Gauss's website to better showcase their electric motorcycles. (Work in progress)"} 
      liveLink={"https://gauss-webseite.vercel.app/"}
      gitLink={"https://github.com/nicholassuwirman/Gauss-Webseite"}
      customClassName={"gauss-image-background"}
      projectImage={gaussProjects}/>

      <ProjectCard title={"VR E-Commerce"} time={"2023 - Web Development"}  
      description={"Developed a modern e-commerce landing page to showcase the latest VR product line."} 
      liveLink={"https://nicholassuwirman.github.io/vr-website-vite/"}
      gitLink={"https://github.com/nicholassuwirman/vr-website-vite"}
      projectImage={vrProjects}/>

      <ProjectCard title={"Bakery E-Commerce"} time={"2023 - Web Development"}  
      description={"Designed and built a bright and inviting e-commerce platform for a bakery, aligning with the client's request for a clean and appealing look."} 
      liveLink={"https://nicholassuwirman.github.io/Bear-Brownies-Website/"}
      gitLink={"https://github.com/nicholassuwirman/Bear-Brownies-Website"}
      projectImage={bakeryProjects}
      customClassName={"bakery-image-background"}/>
    </div>
  );
};

export default Project;
