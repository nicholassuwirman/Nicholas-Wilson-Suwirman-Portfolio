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
          Hello there! My name is Wilson and I'm currently in my second semester at 
          Hochschule Darmstadt, studying Computer Science. My coursework has centered 
          around C++, particularly Object-Oriented Programming.
        </p>
        <p className="about-description">
          Over my summer break, I developed a strong passion for front-end web development and 
          honed my skills in creating engaging and responsive websites. I love blending creativity 
          with functionality to deliver delightful user experiences.
        </p>
        <p className="about-my-skills-text">My skills</p>
        <div className="about-skills-container">
          <div className="about-skills-left">
            <Skills text = {"C++"} />
            <Skills text = {"HTML"} />
            <Skills text = {"CSS"} />
            <Skills text = {"JavaScript"} />
          </div>
          <div className="about-skills-middle">
            <Skills text = {"JSX"} />
            <Skills text = {"React"} />
            <Skills text = {"Vite"} />
            <Skills text = {"Git"} />
          </div>
          <div className="about-skills-right">
            <Skills text = {"GitHub"} />
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
