import ProjectCard from "../../components/project/projectCard";
import "./project.scss";
import { useState } from "react";
import { projects } from "../../data/data";
import Preamble from "../../components/ui/Preamble";
import ProjectList from "../../components/project/projectList";

export default function Project() {
  const [currProj, setCurrProj] = useState(projects.PeerPrep);
  return (
    <div className="project">
      <Preamble>
        Here are some of the projects I got to build the past few years :]
      </Preamble>
      <ProjectList
        projects={projects}
        setCurrProj={setCurrProj}
        currProj={currProj}
      />
      <div className="project-details">
        <ProjectCard
          image={currProj.image}
          projectName={currProj.name}
          description={currProj.description}
          link={currProj.link}
          technologies={currProj.technologies}
        />
      </div>
      <ProjectList
        className="single-line"
        projects={projects}
        setCurrProj={setCurrProj}
        currProj={currProj}
        scrollToProjStart={true}
      />
    </div>
  );
}
