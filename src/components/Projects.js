import uniqid from "uniqid";

import ProjectCard from "./ProjectCard";

export default function Projects(props) {
  return (
    <div className="projects">
      <h2>Algunos de mis proyectos</h2>
      <div className="projectGrid">
        {props.projects.map((project) => (
          <ProjectCard project={project} key={uniqid()} />
        ))}
      </div>
    </div>
  );
}
