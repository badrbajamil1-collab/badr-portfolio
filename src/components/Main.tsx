import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { personalInfo } from "../data/resumeData";

const AVATAR_URL = "https://github.com/badrfaez1.png";

export function Main() {
  const [avatarFailed, setAvatarFailed] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>{personalInfo.name}</h1>
          <p className="hero-role">{personalInfo.title}</p>
          <p className="hero-bio">{personalInfo.bio}</p>
          <div className="hero-links">
            <a className="icon" href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub as IconProp} /></a>
            <a className="icon" href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin as IconProp} /></a>
            <a className="icon" href={`mailto:${personalInfo.email}`} aria-label="Email"><FontAwesomeIcon icon={faEnvelope as IconProp} /></a>
          </div>
          <a className="link-arrow" href="#experience">Learn more about me →</a>
        </div>
        <div className="hero-avatar">
          {avatarFailed ? (
            <div className="avatar-fallback">BB</div>
          ) : (
            <img className="avatar" src={AVATAR_URL} alt={personalInfo.name} onError={() => setAvatarFailed(true)} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Main;
