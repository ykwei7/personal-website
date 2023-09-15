import ProjectCard from "../../components/project/projectCard";
import StreakBotImage from "../../assets/Streakbot.png";
import "./project.scss";

export default function Project() {
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
      <div>Here's a bunch of the projects I did during the past few years</div>
      <div className="project-list">
        {projects.map((ele) => (
          <div className="project-list-item">{ele}</div>
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
