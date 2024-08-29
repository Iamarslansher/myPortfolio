import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AnchorLink from "react-anchor-link-smooth-scroll";
import img from "../../assets/img.jpeg";
import "./hero.css";
function Hero() {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "Web developer.", "Mobile App Developer."],
    loop: {},
  });
  return (
    <div id="home" className="hero-container">
      <div className="hero-info">
        <img className="img" src={img} alt="" />
      </div>
      <h3 className="name-head">
        Hi everyone 👋
        <span className="name-heading"> Myself Arsalan Sher. I'm a</span>
        <span className="skill-name">{text}</span>
        <span style={{ color: "red" }}>
          <Cursor />
        </span>
      </h3>
      <div className="btns">
        <button className="con_btn">
          <AnchorLink className="anch-link" href="#contactUs">
            <p>Contact Us</p>
          </AnchorLink>
        </button>
        <button className="abt_btn">
          <AnchorLink href="#aboutUs" className="anch-link">
            <p>More About Me</p>
          </AnchorLink>
        </button>
      </div>
    </div>
  );
}

export default Hero;
