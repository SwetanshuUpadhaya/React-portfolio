import React from "react";
import "../styles/experience.css"; // Import the CSS file

const Experience = () => {
  return (
    <div id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
        <div className="experience-item">
          <h3>Software Developer</h3>
          <p className="company">Moving Riders Travel</p>
          <p className="location">Chandigarh, India</p>
          <p className="duration"> July 2023 - Dec 2023</p>
          <p className="description">
            Provided development and maintenance services for company’s website,
            utilizing React.js, HTML, CSS, and JavaScript to optimize frontend
            and backend performance. Implemented MongoDB and Node.js to enhance
            website functionality and improve user experience Collaborated
            closely with clients to understand their requirements, deliver
            solutions tailored to their needs, and ensure satisfaction with the
            final product.
          </p>
        </div>
        <div className="experience-item">
          <h3>Junior Software Developer</h3>
          <p className="company">Pennsylvania Enterprise (PENNEP)</p>
          <p className="location">Jalandhar, Punjab, India</p>
          <p className="duration"> Jan 2022 - July 2022</p>
          <p className="description">
            Utilized React.js, HTML, CSS, JavaScript, Bootstrap, and Node.js to
            develop both the frontend and backend of the company’s website, with
            a focus on leveraging Node.js for backend development. Conducted
            thorough testing and debugging to ensure the website's
            functionality, performance, and security standards. Actively
            participated in code reviews, providing constructive feedback and
            suggestions for improvements to maintain code quality and
            consistency. Received training in Amazon Cloud Services to boost my
            DevOps skills. Gained proficiency in deploying AWS services like
            DynamoDB, Lambda, API Gateway, SNS, CDK, and AWS SDK, enhancing my
            efficiency in cloud-based development and deployment.
          </p>
        </div>
        <div className="experience-item">
          <h3>Web Developer</h3>
          <p className="company">Netmax Technologies Pvt Ltd</p>
          <p className="location">Chandigarh, India</p>
          <p className="duration">Jul 2021 - Oct 2021</p>
          <p className="description">
            Internship focused on web development utilizing Django, Python,
            HTML, CSS, and SQLite. Hands-on experience in building dynamic web
            applications, implementing responsive designs, and managing
            databases Engaged in full-stack development processes, from frontend
            styling to backend logic, gaining practical skills in a real-world
            environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
