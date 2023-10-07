import React from "react";
import './about.css';

import aboutPhoto from '../../assets/about-photo.jpg'
import aboutPhotoBG from '../../assets/bg (2).png'
import hi from '../../assets/hi.png'

const About = () => {

  return (
    <div className="about" id="about">
      <div className="about-left">
        <p className="about-title">About me</p>
        <p className="about-description">
          Hello there! My name is Wilson and I'm currently in my second semester at 
          Hochschule Darmstadt , studying Computer Science. My coursework has centered 
          around C++, particularly Object-Oriented Programming.
        </p>
        <p className="about-description">
        Over my summer break, I developed a strong passion for front-end web 
        development. I've gained proficiency in HTML, CSS, JavaScript, React, 
        Vite, and Figma. I love creating engaging and responsive websites, 
        blending creativity with functionality to deliver delightful user 
        experiences.
        </p>
      </div>
      <div className="about-right">
        <img className="about-photo" src={aboutPhoto} />
        <img className="about-photo-bg" src={aboutPhotoBG} />
        <img className="about-hi" src={hi} />
      </div>
    </div>
  );
};


export default About;
