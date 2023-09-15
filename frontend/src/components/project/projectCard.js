import React from "react";
import "./projectCard.scss";

export default function ProjectCard({ projectName, description, image }) {
  return (
    <div className="project-card">
      <div className="img-container">
        <img src={image} alt={`${projectName} Project`} />
      </div>
      <div className="proj-desc">
        <h2>{projectName}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
