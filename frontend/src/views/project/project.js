import ProjectCard from "../../components/project/projectCard";
import StreakBotImage from "../../assets/Streakbot.png";
import "./project.scss";
import { useState } from "react";

export default function Project() {
  const [currProj, setCurrProj] = useState("PeerPrep");
  const getClassName = (name) => {
    return name === currProj
      ? "project-list-item selected"
      : "project-list-item";
  };
  const projects = [
    "PeerPrep",
    "StreakBot",
    "Track-O",
    "Sarcasm Detection",
    "WenMoon Journey",
    "HelpMeMahjong",
  ];
  return (
    <div className="project">
      <div>{"Here's a bunch of the projects I did the last few years :]"}</div>
      <div className="project-list">
        {projects.map((proj) => (
          <div onClick={() => setCurrProj(proj)} className={getClassName(proj)}>
            {proj}
          </div>
        ))}
      </div>
      <div className="project-details">
        <ProjectCard
          image={StreakBotImage}
          projectName={"StreakBot"}
          description={"description of project"}
        />
      </div>
    </div>
  );
}
