import React from "react";
import shoppingApp from "../../assets/shoppingImg.jpg";
import todoApp from "../../assets/todo.avif";
import dictionaryApp from "../../assets/dictionary.jpg";
import ageCalculator from "../../assets/ageCalculator.png";
import dataFetching from "../../assets/fetchingData.jfif";
import youth from "../../assets/youth.png";
import "./projects.css";

import { IoMdArrowRoundForward } from "react-icons/io";

function Projects() {
  return (
    <div id="projects" className="projects-container">
      <h1 className="projects-heading">My Latest Projects </h1>
      <div className="sub-projects-container">
        <div className="card">
          <img className="project-img" src={shoppingApp} alt="" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "20%",
            }}
          >
            <h3>Shopping App</h3>
            <a
              target="_blank"
              href="https://sasta-app.vercel.app/"
              className="demoBtn"
            >
              Live Demo <IoMdArrowRoundForward className="forwardArrow" />
            </a>
          </div>
        </div>
        <div className="card">
          <img className="project-img" src={dictionaryApp} alt="" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "20%",
            }}
          >
            <h3>Dictionary App</h3>
            <a
              target="_blank"
              href="https://arslan-dictionary.netlify.app"
              className="demoBtn"
            >
              Live Demo <IoMdArrowRoundForward className="forwardArrow" />
            </a>
          </div>
        </div>
        <div className="card">
          <img className="project-img" src={todoApp} alt="" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "20%",
            }}
          >
            <h3>Todo App</h3>
            <a
              target="_blank"
              href="https://arslan-todoapplication.netlify.app"
              className="demoBtn"
            >
              Live Demo <IoMdArrowRoundForward className="forwardArrow" />
            </a>
          </div>
        </div>
        <div className="card">
          <img className="project-img" src={ageCalculator} alt="" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "20%",
            }}
          >
            <h3>Age Calculator</h3>
            <a
              target="_blank"
              href="https://arslan-agecalculator.netlify.app"
              className="demoBtn"
            >
              Live Demo <IoMdArrowRoundForward className="forwardArrow" />
            </a>
          </div>
        </div>
        <div className="card">
          <img className="project-img" src={youth} alt="" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "20%",
            }}
          >
            <h3>Youth Opportunies</h3>
            <a
              target="_blank"
              href="https://youth-opportuinites.netlify.app"
              className="demoBtn"
            >
              Live Demo <IoMdArrowRoundForward className="forwardArrow" />
            </a>
          </div>
        </div>
        <div className="card">
          <img className="project-img" src={dataFetching} alt="" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "20%",
            }}
          >
            <h3>Fetching Git Data</h3>
            <a
              target="_blank"
              href="https://arslan-fetchingdata.netlify.app"
              className="demoBtn"
            >
              Live Demo <IoMdArrowRoundForward className="forwardArrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
