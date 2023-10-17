import React, { useState } from "react";
import './hero.css';
import { Link } from 'react-scroll';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import heroWilsonImage from '../../assets/hero-main-photo.png'
import heroTriangle from '../../assets/polygon.png'
import heroCircle from '../../assets/circle.png'
import heroSquare from '../../assets/scuare.png'

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const[toggleMenu, setToggleMenu] = useState(false);

  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const Menu = () => {
    return (
      <>
        <Link to="home" spy={true} smooth={true} duration={500} onMouseOver={() => handleMouseOver(0)} onMouseLeave={handleMouseLeave}>Home</Link>
        <Link to="about" spy={true} offset={-44} smooth={true} duration={500} onMouseOver={() => handleMouseOver(1)} onMouseLeave={handleMouseLeave}>About</Link>
        <Link to="projects" spy={true} smooth={true} duration={750} onMouseOver={() => handleMouseOver(2)} onMouseLeave={handleMouseLeave}>Projects</Link>
        <Link to="contact" spy={true} offset={25} smooth={true} duration={1000} onMouseOver={() => handleMouseOver(3)} onMouseLeave={handleMouseLeave}>Contact</Link>
      </>
    )
  }

  return (
    <div className="menu" id="home">
      <div className="menu-items">
       <Menu />
      </div>
      <div className="navbar-mobile-menu">
        {toggleMenu
            ? <RiCloseLine color="#FFFFFF" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#FFFFFF" size={27} onClick={() => setToggleMenu(true)} />}
        
            <div className={`navbar-mobile-container ${toggleMenu ? 'visible' : ''}`}>
              <Menu />
            </div>
      </div>
      <div className="hero-bottom-container">
        <div className="hero-bottom-images-container">
          <img className="hero-wilson-image" src={heroWilsonImage} />
          <img className="hero-triangle" src={heroTriangle} />
          <img className="hero-circle" src={heroCircle} />
          <img className="hero-square" src={heroSquare} />
        </div>
      </div>
      <div className="hero-text-container">
        <p className="hero-title">Hi, I'm Nicholas <span className="hero-title-wilson">Wilson</span>  Suwirman</p>
        <p className="hero-description">I'm an aspiring CS student who's deeply passionate about front-end web development. 
        Dedicated to creating engaging and seamless user experiences through clean and innovative web design.
        </p>
      </div>
      <div className={`menu-background-pattern pattern-${activeIndex !== null ? activeIndex : ''}`}></div>
      
    </div>
  );
};

export default Hero;
