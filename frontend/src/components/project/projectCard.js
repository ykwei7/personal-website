import React from "react";
import "./projectCard.scss";

export default function ProjectCard({
  projectName,
  description,
  image,
  link,
  technologies,
}) {
  const joinArray = (arr) => {
    return arr.join(` ${"\u2022"} `);
  };
  return (
    <div className="project-card">
      <div className="img-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={`${projectName} Project`} />
        </a>
      </div>
      <div className="proj-desc">
        <span className="proj-name">{projectName}</span>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <p className="tech">Technologies: </p>
        <span>{joinArray(technologies)}</span>
      </div>
    </div>
  );
}
