import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_pic.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        
        <span>I,m Abhishek Kunwar, </span> eager to learn frontend developement.
      </h1>
      <p>
        I’m currently in my second year, building my skills in frontend
        development with a deep interest in creating modern, user-friendly, and
        visually appealing websites. I believe in continuous learning, and every
        day, I strive to enhance my expertise in React, JavaScript, and UI/UX
        design.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero
