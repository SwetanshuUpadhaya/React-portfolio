import React, { useState } from "react";
import "../styles/header.css"; // Import the CSS file

const Header = () => {
  const [activeLink, setActiveLink] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    setActiveLink(sectionId);
    window.scroll({
      top: document.getElementById(sectionId).offsetTop,
      behavior: "smooth",
    });
    setMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <header className="header">
      <h1 className="logo">Swetanshu Upadhaya</h1>
      <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
        <div className="nav-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className={
                activeLink === "about" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("experience");
              }}
              className={
                activeLink === "experience" ? "nav-link active" : "nav-link"
              }
            >
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className={
                activeLink === "projects" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              className={
                activeLink === "skills" ? "nav-link active" : "nav-link"
              }
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("education");
              }}
              className={
                activeLink === "education" ? "nav-link active" : "nav-link"
              }
            >
              Education
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#certifications"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("certifications");
              }}
              className={
                activeLink === "certifications" ? "nav-link active" : "nav-link"
              }
            >
              Certifications
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className={
                activeLink === "contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
