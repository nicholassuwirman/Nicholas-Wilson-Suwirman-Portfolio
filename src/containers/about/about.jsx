import React from "react";
import './about.css';

import aboutPhoto from '../../assets/about-photo.jpg'
import aboutPhotoBG from '../../assets/bg (2).png'
import hi from '../../assets/hi.png'
import dot from '../../assets/Ellipse 1.png'

const Skills = ({text}) => {
  return (
    <div className="about-function-skills-container">
      <img className="about-function-dot" src={dot} />
      <p className="about-function-text">{text}</p>
    </div>
  )
}

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <p className="about-title">About me</p>
        <p className="about-description">
          Hello there! My name is Wilson and I'm currently in my fifth semester at 
          Hochschule Darmstadt, studying computer science. I’m currently a full stack developer working student at SAP, where I work on a internal tool used across the company.
        </p>
        <p className="about-description">
          During the summer of 2023, I started with SuperSimpleDev's HTML & CSS tutorial, which quickly led to JavaScript, React, Tailwind, Node.js, everything I could find. 
          I liked it, and like every developer, I’m always ready for the next Javascript framework.
        </p>
        <p className="about-my-skills-text">My skills</p>
        <div className="about-skills-container">
          <div className="about-skills-left">
            <Skills text = {"C++"} />
            <Skills text = {"HTML"} />
            <Skills text = {"CSS"} />
            <Skills text = {"Tailwind CSS"} />
          </div>
          <div className="about-skills-middle">
            <Skills text = {"JavaScript"} />
            <Skills text = {"Typescript"} />
            <Skills text = {"React"} />
            <Skills text = {"Vue"} />
          </div>
          <div className="about-skills-middle">
            <Skills text = {"Node.js"} />
            <Skills text = {"PostgreSQL"} />
            <Skills text = {"Supabase"} />
            <Skills text = {"Next.js"} />
          </div>
          <div className="about-skills-right">
            <Skills text = {"Express.js"} />
            <Skills text = {"PHP"} />
            <Skills text = {"Unit Testing"} />
            <Skills text = {"Gitlab"} />
          </div>
        </div>
      </div>
      <div className="about-right">
        <img className="about-photo-bg" src={aboutPhotoBG} />
        <img className="about-photo" src={aboutPhoto} />
        <img className="about-hi" src={hi} />
      </div>
    </div>
  );
};


export default About;
