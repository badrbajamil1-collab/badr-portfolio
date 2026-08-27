import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { leadershipData } from "../data/resumeData";

export function Leadership() {
  return (
    <section id="leadership" className="section">
      <h2 className="section-title">
        <FontAwesomeIcon icon={faUsers as IconProp} /> Leadership & Activities
      </h2>
      {leadershipData.map((item, idx) => (
        <div className="work-card" key={idx}>
          <div className="work-role">{item.title}</div>
          <div className="work-sub">{item.company} · {item.location}</div>
          <div className="work-period">{item.period}</div>
          <ul className="work-points">
            {item.points.map((point, pIdx) => (
              <li key={pIdx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Leadership;
