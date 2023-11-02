import React from "react";

function ProjectList({ projects, setCurrProj, currProj }) {
  const getClassName = (name) => {
    return name === currProj.name
      ? "project-list-item selected"
      : "project-list-item";
  };
  return (
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
  );
}

export default ProjectList;
