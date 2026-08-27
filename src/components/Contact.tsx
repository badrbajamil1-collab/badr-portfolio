import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { personalInfo } from '../data/resumeData';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="contact-inner">
        <h2 className="section-title" style={{ justifyContent: 'center' }}>Let's talk</h2>
        <p>Interested in AI automation, computer vision, or full-stack work? Feel free to reach out.</p>
        <div className="contact-links">
          <a className="btn" href={`mailto:${personalInfo.email}`}>
            <FontAwesomeIcon icon={faEnvelope as IconProp} /> {personalInfo.email}
          </a>
          <a className="btn" href={`tel:${personalInfo.phone}`}>
            <FontAwesomeIcon icon={faPhone as IconProp} /> {personalInfo.phone}
          </a>
        </div>
        <p className="contact-location">
          <FontAwesomeIcon icon={faLocationDot as IconProp} /> {personalInfo.location}
        </p>
        <div className="hero-links">
          <a className="icon" href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub as IconProp} /></a>
          <a className="icon" href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin as IconProp} /></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
