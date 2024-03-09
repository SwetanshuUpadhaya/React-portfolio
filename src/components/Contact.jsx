import React from "react";
import "../styles/contact.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  <FontAwesomeIcon icon={[faEnvelope, faPhone, faLinkedin, faLocationDot]} />;

  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="mailto:swetanshuupadhaya@gmail.com" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} /> swetanshuupadhaya@gmail.com
        </a>
        <a href="tel:+918988458771" className="contact-link">
          <FontAwesomeIcon icon={faPhone} /> +91 8988 458 771
        </a>
        <a
          href="https://www.linkedin.com/in/swetanshu-upadhaya-884034218/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a
          href="https://www.google.com/maps/place/Dharamshala,+Himachal+Pradesh/@32.2168132,76.2985227,14z/data=!3m1!4b1!4m6!3m5!1s0x391b50df65bd7311:0x3e08bdb100c6dc10!8m2!3d32.219042!4d76.3234037!16s%2Fm%2F0j65lnw?entry=ttu"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faLocationDot} /> Dharamshala, Himachal
          Pradesh, India
        </a>
      </div>
    </div>
  );
};

export default Contact;
