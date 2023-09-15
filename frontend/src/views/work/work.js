import React, { useState } from "react";
import "./work.scss";
import WorkCard from "../../components/work/workCard";

export default function Work() {
  const experiences = ["DSO Laboratories", "SAP", "Hutchinson"];
  const [currWork, setCurrWork] = useState("DSO Laboratories");
  const getClassName = (name) => {
    return name === currWork ? "work-list-item selected" : "work-list-item";
  };
  return (
    <div className="work">
      <div>
        Here's a bunch of the experiences I did during the past few years
      </div>
      <div className="work-list">
        {experiences.map((exp) => (
          <div onClick={() => setCurrWork(exp)} className={getClassName(exp)}>
            {exp}
          </div>
        ))}
      </div>
      <div className="project-details">
        <WorkCard
          projectName={"StreakBot"}
          description={"description of project"}
        />
      </div>
    </div>
  );
}
