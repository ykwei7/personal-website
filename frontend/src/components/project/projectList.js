import React from "react";
import { Link } from "react-router-dom";

function ProjectList({ projects, currProj, scrollToProjStart }) {
  const getClassName = (name) => {
    return name === currProj.name
      ? "project-list-item selected"
      : "project-list-item";
  };
  const goToProjectStart = () => {
    if (!scrollToProjStart) {
      return;
    }
    const containerList = document.getElementsByClassName("project-card");
    if (containerList.length > 0) {
      containerList[0].scrollIntoView({ block: "start" });
    }
  };

  const handleProjClick = () => {
    goToProjectStart();
  };

  return (
    <div className="project-list">
      {Object.keys(projects).map((proj) => (
        <Link
          className={getClassName(projects[proj].name)}
          key={`proj-${proj}`}
          onClick={handleProjClick}
          to={`${projects[proj].name}`}
        >
          {projects[proj].name}
        </Link>
      ))}
    </div>
  );
}

export default ProjectList;
