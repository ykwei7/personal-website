import React from "react";
import "./work.scss";
import WorkCard from "../../components/work/workCard";

export default function Work() {
  const experiences = ["DSO Laboratories", "SAP", "Hutchinson"];
  return (
    <div className="work">
      <div>
        Here's a bunch of the experiences I did during the past few years
      </div>
      <div className="work-list">
        {experiences.map((ele) => (
          <div className="work-list-item">{ele}</div>
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
