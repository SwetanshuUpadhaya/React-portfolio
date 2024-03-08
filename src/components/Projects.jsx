import React from "react";
import "../styles/projects.css"; // Import the CSS file

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Social Blog Web-Application</h3>
          <p className="description">
            Developed a social blog application with Django, Python, HTML, CSS,
            and SQLite. This application incorporates user authentication,
            dynamic post listings, and a responsive design, utilizing SQLite for
            efficient data storage.
          </p>
          <p className="technologies">
            Python, Django, JavaScript, HTML, CSS, SQLite
          </p>
          <div className="project-links">
            <a
              href="https://github.com/SwetanshuUpadhaya/Social-Blog-Application"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="project-card">
          <h3>Student Management System</h3>
          <p className="description">
            A comprehensive Student Management System leveraging HTML, CSS,
            JavaScript, Django, Python, and SQLite for efficient management of
            student-related tasks and data within educational institutions.
          </p>
          <p className="technologies">
            Django, Python, JavaScript, HTML, CSS, SQLite
          </p>
          <div className="project-links">
            <a
              href="https://github.com/SwetanshuUpadhaya/Student-Management-System"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="project-card">
          <h3>Tour Booking Management Web-App</h3>
          <p className="description">
            A dynamic Tour and Travel Booking Web Application utilizing HTML,
            CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB for
            seamless booking and management of travel services and itineraries.
          </p>
          <p className="technologies">
            React.js, Node.js, JavaScript, HTML, CSS, Express.js, MongoDB
          </p>
          <div className="project-links">
            <a
              href="https://github.com/SwetanshuUpadhaya/tour-management-react-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="project-card">
          <h3>Speech Emotion Recognition using Multilayer-Perceptron</h3>
          <p className="description">
            Successfully implemented a Speech Emotion Recognition model
            employing a Multilayer Perceptron, training a neural network on
            audio features to classify various emotions within speech signals.
          </p>
          <p className="technologies">Python, Machine Learning, MLP</p>
          <div className="project-links">
            <a
              href="https://github.com/SwetanshuUpadhaya/Speech-Emotion-Recognition"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
