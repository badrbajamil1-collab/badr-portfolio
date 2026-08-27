import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faDownload } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { experienceData } from "../data/resumeData";

export function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">
        <FontAwesomeIcon icon={faBriefcase as IconProp} /> Work Experience
      </h2>
      {experienceData.map((exp, idx) => (
        <div className="work-card" key={idx}>
          <div className="work-role">{exp.title}</div>
          <div className="work-sub">{exp.company} · {exp.location}</div>
          <div className="work-period">{exp.period}</div>
          <ul className="work-points">
            {exp.points.map((point, pIdx) => (
              <li key={pIdx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}

      <a className="btn" href="/resume.pdf" download>
        <FontAwesomeIcon icon={faDownload as IconProp} /> Download Resume (PDF)
      </a>
    </section>
  );
}

export default Experience;
