import React from "react";
import { personalInfo } from "../data/resumeData";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </div>
        <div className="footer-col">
          <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
        </div>
        <div className="footer-col">
          <a href="/resume.pdf" download>Resume</a>
          <a href={`mailto:${personalInfo.email}`}>Let's talk</a>
          <span>{personalInfo.location}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
