import React from "react";
import aboutus from "../../assets/aboutus.jpg";
import "./aboutUs.css";

function AboutUs() {
  return (
    <div className="about-container" id="aboutUs">
      <div className="aboutDiv">
        <img className="aboutImg" src={aboutus} alt="" />
      </div>
      <div className="about-contant">
        <h1 className="aboutHeading">More About Me</h1>
        As a web and frontend developer, I breathe life into digital spaces.
        With fingers dancing across the keyboard, I craft intricate webs of
        HTML, style them with the artistic flair of CSS, and bring them to life
        with the magic of JavaScript. I sculpt user interfaces that are both
        beautiful and functional, creating seamless experiences that connect
        people to information and each other. I am both architect and artist,
        problem-solver and innovator, continuously learning and adapting to
        build the future of the web, one website at a time.
      </div>
    </div>
  );
}

export default AboutUs;
