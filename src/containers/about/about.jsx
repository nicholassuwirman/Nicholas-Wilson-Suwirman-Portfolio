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
          Hochschule Darmstadt, studying Computer Science. I currently work on the Gauss project team, developing a new website for our electric superbike project.
        </p>
        <p className="about-description">
        Over summer break, driven by a fear of missing out, I started with SuperSimpleDev's HTML & CSS tutorial, which quickly led to React, JavaScript, Vite, Tailwind, Vercel, everything I could find. I loved it, and now I keep an eye out for new front-end tech, especially with new JS frameworks popping out pretty much everyday.
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
            <Skills text = {"JSX"} />
            <Skills text = {"React"} />
            <Skills text = {"Vite"} />
          </div>
          <div className="about-skills-right">
            <Skills text = {"Vercel"} />
            <Skills text = {"Git"} />
            <Skills text = {"GitHub"} />
            <Skills text = {"Figma"} />
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
