import uniqid from "uniqid";

import ProjectCard from "./ProjectCard";

export default function Projects(props) {
  return (
    <div className="projects">
      <h2>My projects</h2>
      <div className="projectGrid">
        {props.projects.map((project) => (
          <ProjectCard project={project} key={uniqid()} />
        ))}
      </div>
    </div>
  );
}
