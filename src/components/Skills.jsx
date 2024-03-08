import React from "react";
import "../styles/skills.css"; // Import the CSS file

const Skills = () => {
  return (
    <section id="skills" className="skill-section">
      <h2>Skills</h2>
      <div className="skill-flex">
        <div className="skills-container">
          <h3>Languages</h3>
          <div className="skill-item">
            <h4>Python</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h4>C/C++</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h4>JavaScript</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h4>HTML</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h4>CSS</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h4>SQL</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h4>AWS</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
        <div className="skills-container">
          <h3>Technologies</h3>
          <div className="skill-item">
            <h4>Node.js</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h4>React.js</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h4>Django</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h4>MongoDB</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h4>MySQL</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h4>Machine Learning</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="skill-item">
            <h4>Git</h4>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
