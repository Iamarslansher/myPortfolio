import React from "react";
import "./skills.css";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

function Skills() {
  return (
    <div>
      <div id="skills" className="skills-container">
        <h1 className="skill-heading">My Skills</h1>
        <div className="sub-skills-container">
          {/* P_card-1*/}
          <div class="skill-card">
            <div class="skill-title">
              <span>HTML5</span>
            </div>
            <div class="skill-info">
              <div class="skill-icon html">
                <FaHtml5 />
              </div>
              <div class="skill-percentage">85%</div>
            </div>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          {/* P_card-2*/}
          <div class="skill-card">
            <div class="skill-title">
              <span>CSS3</span>
            </div>
            <div class="skill-info">
              <div class="skill-icon css">
                <FaCss3 />
              </div>
              <div class="skill-percentage">90%</div>
            </div>
            <div class="progress-bar">
              <div class="progress css_p"></div>
            </div>
          </div>
          {/* P_card-3*/}
          <div class="skill-card">
            <div class="skill-title">
              <span>JAVASCRIPT</span>
            </div>
            <div class="skill-info">
              <div class="skill-icon javascript">
                <IoLogoJavascript />
              </div>
              <div class="skill-percentage">83%</div>
            </div>
            <div class="progress-bar">
              <div class="progress javascript_p"></div>
            </div>
          </div>
          {/* P_card-4*/}
          <div class="skill-card">
            <div class="skill-title">
              <span>REACTJS</span>
            </div>
            <div class="skill-info">
              <div class="skill-icon react">
                <FaReact />
              </div>
              <div class="skill-percentage">80%</div>
            </div>
            <div class="progress-bar">
              <div class="progress react_p"></div>
            </div>
          </div>
          {/* P_card-5*/}
          <div class="skill-card">
            <div class="skill-title">
              <span>BOOTSTRAP</span>
            </div>
            <div class="skill-info">
              <div class="skill-icon bootstrap">
                <FaBootstrap />
              </div>
              <div class="skill-percentage">85%</div>
            </div>
            <div class="progress-bar">
              <div class="progress bootstrap_p"></div>
            </div>
          </div>
          {/* P_card-6*/}
          <div class="skill-card">
            <div class="skill-title">
              <span>FIREBASE</span>
            </div>
            <div class="skill-info">
              <div class="skill-icon firebase">
                <FaFire />
              </div>
              <div class="skill-percentage ">85%</div>
            </div>
            <div class="progress-bar">
              <div class="progress firebase_p"></div>
            </div>
          </div>
          {/* P_card-7*/}
          <div class="skill-card">
            <div class="skill-title">
              <span>MONGODB</span>
            </div>
            <div class="skill-info">
              <div class="skill-icon mongodb">
                <SiMongodb />
              </div>
              <div class="skill-percentage ">70%</div>
            </div>
            <div class="progress-bar">
              <div class="progress mongodb_p"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
