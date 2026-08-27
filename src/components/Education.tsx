import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { educationData } from "../data/resumeData";

export function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">
        <FontAwesomeIcon icon={faGraduationCap as IconProp} /> Education
      </h2>
      <div className="work-card">
        <div className="work-role">{educationData.degree}</div>
        <div className="work-sub">{educationData.institution} · {educationData.location}</div>
        <div className="work-period">{educationData.period} · CGPA {educationData.cgpa}</div>
        <p className="work-points" style={{ marginTop: '1rem' }}><strong>Relevant Coursework</strong></p>
        <div className="chips" style={{ marginTop: '0.5rem' }}>
          {educationData.coursework.map((course, cIdx) => (
            <span className="chip" key={cIdx}>{course}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
