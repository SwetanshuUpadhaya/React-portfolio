import React from "react";
import "../styles/certifications.css"; // Import the CSS file

const Certificates = () => {
  return (
    <section id="certifications" className="cert-section">
      <h2>Certifications</h2>
      <div className="cert-container">
        <div className="cert-card">
          <h3>
            Career Essentials in Software Development by Microsoft and LinkedIn
          </h3>
          <p className="organization">Microsoft</p>
          <p className="date">Issued Feb 2024</p>
          <p className="technologies">Software Development · Programming</p>
          <div className="cert-links">
            <a href="#">Show Credentials</a>
          </div>
        </div>
        <div className="cert-card">
          <h3>Career Essentials in GitHub Professional Certificate</h3>
          <p className="organization">GitHub</p>
          <p className="date">Issued Feb 2024</p>
          <p className="technologies">GitHub · Git</p>
          <div className="cert-links">
            <a href="#">Show Credentials</a>
          </div>
        </div>
        <div className="cert-card">
          <h3>JavaScript Essential Training</h3>
          <p className="organization">LinkedIn</p>
          <p className="date">Issued Jan 2024</p>
          <p className="technologies">JavaScript</p>
          <div className="cert-links">
            <a href="#">Show Credentials</a>
          </div>
        </div>
        <div className="cert-card">
          <h3>React.js Development</h3>
          <p className="organization">LinkedIn</p>
          <p className="date">Issued Jan 2024</p>
          <p className="technologies">React.js · JavaScript</p>
          <div className="cert-links">
            <a href="#">Show Credentials</a>
          </div>
        </div>
        <div className="cert-card">
          <h3>Node.js Essential Training</h3>
          <p className="organization">LinkedIn</p>
          <p className="date">Issued Dec 2023</p>
          <p className="technologies">Node.js</p>
          <div className="cert-links">
            <a href="#">Show Credentials</a>
          </div>
        </div>
        <div className="cert-card">
          <h3>AWS Cloud Practitioner Essentials</h3>
          <p className="organization">Amazon Web Services(AWS)</p>
          <p className="date">Issued Jun 2022</p>
          <p className="technologies">AWS</p>
          <div className="cert-links">
            <a href="#">Show Credentials</a>
          </div>
        </div>
        <div className="cert-card">
          <h3>Web Development</h3>
          <p className="organization">Netmax</p>
          <p className="date">Issued Oct 2021</p>
          <p className="technologies">Python · Django · HTML · CSS · SQLite</p>
          <div className="cert-links">
            <a href="#">Show Credentials</a>
          </div>
        </div>
        <div className="cert-card">
          <h3>Python and Machine Learning</h3>
          <p className="organization">Microsoft</p>
          <p className="date">Issued Feb 2021</p>
          <p className="technologies">
            Python (Programming Language) · Machine Learning
          </p>
          <div className="cert-links">
            <a href="#">Show Credentials</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
