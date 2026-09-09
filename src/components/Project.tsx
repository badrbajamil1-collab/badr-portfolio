import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import { projectsData } from "../data/resumeData";
import mock1 from '../assets/images/mock01.png';
import mock2 from '../assets/images/mock02.png';
import mock3 from '../assets/images/mock03.png';
import mock4 from '../assets/images/mock04.png';
import awsArchLight from '../assets/images/aws-architecture.svg';
import awsArchDark from '../assets/images/aws-architecture-dark.svg';

const covers: Record<string, string> = {
  'aws-architecture': awsArchDark,
};
const lightCovers: Record<string, string> = {
  'aws-architecture': awsArchLight,
};
const fallbackCovers = [mock1, mock2, mock3, mock4];

export function Project() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, idx) => {
          const coverSrc = project.image && covers[project.image] ? covers[project.image] : fallbackCovers[idx % fallbackCovers.length];
          const isArchitecture = project.image === 'aws-architecture';
          const lightSrc = project.image ? lightCovers[project.image] : undefined;
          return (
          <div className="project-card" key={idx}>
            {isArchitecture && lightSrc ? (
              <button
                type="button"
                onClick={() => setLightbox(lightSrc)}
                style={{ display: 'block', width: '100%', padding: 0, border: 'none', background: 'transparent', cursor: 'zoom-in', borderRadius: '10px', overflow: 'hidden' }}
                aria-label={`Expand architecture diagram for ${project.title}`}
              >
                <img
                  src={coverSrc}
                  alt={project.title}
                  style={{ display: 'block', width: '100%', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}
                />
              </button>
            ) : (
              <Link to={`/project/${project.slug}`}>
                <img src={coverSrc} alt={project.title} />
              </Link>
            )}
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
          );
        })}
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(10,10,15,0.72)', backdropFilter: 'blur(10px)', padding: '24px', cursor: 'zoom-out'
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', maxWidth: '1080px', width: '100%', maxHeight: '90vh', overflow: 'auto', borderRadius: '16px', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 1, width: '36px', height: '36px', borderRadius: '999px', border: '1px solid #e2e8f0', background: '#ffffff', color: '#0f172a', fontSize: '18px', lineHeight: 1, cursor: 'pointer' }}
            >×</button>
            <img src={lightbox} alt="AWS Architecture — full diagram (light)" style={{ display: 'block', width: '100%', height: 'auto', background: '#ffffff', borderRadius: '16px' }} />
            <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(15,23,42,0.9)', color: '#e2e8f0', fontFamily: 'var(--font-mono)', fontSize: '11px', padding: '6px 12px', borderRadius: '999px', whiteSpace: 'nowrap' }}>
              IoT → Kinesis → EKS → EventBridge → Aurora / SNS • polyline • click outside to close
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
