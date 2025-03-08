import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hey there! I’m Abhishek, a frontend developer who loves turning
              ideas into interactive, dynamic, and meaningful experiences.
              Whether it’s writing clean, efficient code or designing seamless
              user interfaces, I thrive on bringing digital visions to life.
            </p>
            <p>
              "Adapt like water, build like fire, think like air, and stand like
              earth."
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "35%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>ExpressJS</p> <hr style={{ width: "20%" }} />
            </div>
            <div className="about-skill">
              <p>DBMS</p> <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
