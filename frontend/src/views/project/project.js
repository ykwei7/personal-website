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
      <div className="preamble">
        Here are some of the projects I got to build the past few years :]
      </div>
      <div className="project-list">
        {Object.keys(projects).map((proj) => (
          <div
            key={`proj-${proj}-1`}
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
          link={currProj.link}
          technologies={currProj.technologies}
        />
      </div>
      <div className="project-list single-line">
        {Object.keys(projects).map((proj) => (
          <div
            key={`proj-${proj}-2`}
            onClick={() => setCurrProj(projects[proj])}
            className={getClassName(projects[proj].name)}
          >
            {projects[proj].name}
          </div>
        ))}
      </div>
    </div>
  );
}
