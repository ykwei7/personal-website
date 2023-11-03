import React from "react";

function ProjectList({ projects, setCurrProj, currProj, scrollToProjStart }) {
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

  const handleProjClick = (proj) => {
    setCurrProj(projects[proj]);
    goToProjectStart();
  };
  return (
    <div className="project-list">
      {Object.keys(projects).map((proj) => (
        <div
          key={`proj-${proj}`}
          onClick={() => handleProjClick(proj)}
          className={getClassName(projects[proj].name)}
        >
          {projects[proj].name}
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
