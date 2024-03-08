import React from "react";
import "../styles/education.css"; // Import the CSS file

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-container">
        <div className="education-item">
          <h3>Master of Engineering in Computer Science and Engineering</h3>
          <p className="institution">Chandigarh University</p>
          <p className="location">Mohali, Punjab</p>
          <p className="duration">2022 - 2024</p>
        </div>
        <div className="education-item">
          <h3>Bachelor of Technology in Computer Science and Engineering</h3>
          <p className="institution">DAV University</p>
          <p className="location">Jalandhar, Punjab</p>
          <p className="duration">2018 - 2022</p>
        </div>
        <div className="education-item">
          <h3>12th Non-Medical</h3>
          <p className="institution">Maharishi Vidya Mandir Public School</p>
          <p className="location">Dharamshala, Himachal Pradesh</p>
          <p className="duration">2018</p>
        </div>
        <div className="education-item">
          <h3>10th</h3>
          <p className="institution">Maharishi Vidya Mandir Public School</p>
          <p className="location">Dharamshala, Himachal Pradesh</p>
          <p className="duration">2016</p>
        </div>
        {/* Add more education items as needed */}
      </div>
    </section>
  );
};

export default Education;
