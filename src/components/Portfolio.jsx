import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Certifications from "./Certifications";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

import "../styles/portfolio.css";

const Portfolio = () => {
  const element = <FontAwesomeIcon icon={faCircleArrowUp} />;

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add this function to handle the page refresh event
  const handlePageRefresh = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add this line to register the handlePageRefresh function with the onbeforeunload event
  window.onbeforeunload = handlePageRefresh;

  return (
    <div className="portfolio">
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      {showScrollToTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          title="Scroll to top"
        >
          <FontAwesomeIcon icon={faCircleArrowUp} />
        </button>
      )}
    </div>
  );
};

export default Portfolio;
