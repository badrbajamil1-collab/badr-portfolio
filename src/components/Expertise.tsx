import React from 'react';
import { skillsData } from '../data/resumeData';

export function Expertise() {
    return (
    <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
            {skillsData.map((category, index) => (
                <div className="skill-card" key={index}>
                    <h3>{category.category}</h3>
                    {category.description && <p>{category.description}</p>}
                    <div className="chips">
                        {category.skills.map((skill, sIdx) => (
                            <span className="chip" key={sIdx}>{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
    );
}

export default Expertise;
