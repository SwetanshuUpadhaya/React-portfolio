import React from "react";
import profileImage from "../images/profile-image.png"; // Import your profile image
import "../styles/about.css"; // Import the CSS file

const About = () => {
  const scrollToSection = (sectionId) => {
    window.scroll({
      top: document.getElementById(sectionId).offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>
            Swetanshu <span>Upadhaya</span>
          </h2>
          <p>
            I'm a software developer specializing in crafting scalable, secure,
            and data-driven online solutions. My professional journey has honed
            my skills in utilizing React.js, AWS, Git, Python, HTML/CSS and
            Node.js to create innovative solutions, and my goal is to continue
            pushing the boundaries of software development through continuous
            learning and contribution to industry innovation.
          </p>
          <button>
            <a
              href="https://drive.google.com/file/d/1ZXxwIi2S1MQGOqKYnnBxEx6SmRR88KJW/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </a>
          </button>
          <button>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact Me
            </a>
          </button>
          <span>
            <i className="fa-brands fa-linkedin"></i>
          </span>
        </div>
        <div className="profile-photo-container">
          <img src={profileImage} alt="Profile" className="profile-photo" />
        </div>
      </div>
    </div>
  );
};

export default About;
