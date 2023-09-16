import ProjectCard from "../../components/project/projectCard";
import "./project.scss";
import { useState } from "react";
import { projects } from "../../data/data";

export default function Project() {
  const [currProj, setCurrProj] = useState(projects.PeerPrep);
  const getClassName = (name) => {
    return name === currProj.name
      ? "project-list-item selected"
      : "project-list-item";
  };
  return (
    <div className="project">
      <div>
        {"Here's a bunch of projects I got to build the past few years :]"}
      </div>
      <div className="project-list">
        {Object.keys(projects).map((proj) => (
          <div
            onClick={() => setCurrProj(projects[proj])}
            className={getClassName(projects[proj].name)}
          >
            {projects[proj].name}
          </div>
        ))}
      </div>
      <div className="project-details">
        <ProjectCard
          image={currProj.image}
          projectName={currProj.name}
          description={currProj.description}
        />
      </div>
    </div>
  );
}
