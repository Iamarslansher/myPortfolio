import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/HeroSection/Hero";
import AboutUs from "./Components/AboutUs/AboutUs";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import ContactUS from "./Components/ContactUs/ContactUS";
import GoToTop from "./Components/GoToTop/GoToTop";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="">
        <Navbar />
        <Hero />
        <AboutUs />
        <Skills />
        <Projects />
        <ContactUS />
        <GoToTop />
      </div>
    );
  }
}

export default App;
