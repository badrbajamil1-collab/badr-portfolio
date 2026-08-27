import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { projectsData } from "../data/resumeData";
import mock1 from '../assets/images/mock01.png';
import mock2 from '../assets/images/mock02.png';
import mock3 from '../assets/images/mock03.png';
import mock4 from '../assets/images/mock04.png';

const covers = [mock1, mock2, mock3, mock4];

export function Project() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <div className="project-card" key={idx}>
            <Link to={`/project/${project.slug}`}>
              <img src={covers[idx % covers.length]} alt={project.title} />
            </Link>
            <Link to={`/project/${project.slug}`} className="project-title-link">
              <div className="project-title">{project.title}</div>
            </Link>
            <div className="project-period">{project.period}</div>
            <p className="project-desc">{project.description}</p>
            {project.highlight && (
              <p className="project-desc highlight">Key result: {project.highlight}</p>
            )}
            <div className="project-tech">
              {project.techStack.map((tech, tIdx) => (
                <span className="chip" key={tIdx}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <Link to={`/project/${project.slug}`} className="project-details-link">
                Details <FontAwesomeIcon icon={faArrowRight as IconProp} />
              </Link>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub as IconProp} /> GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
