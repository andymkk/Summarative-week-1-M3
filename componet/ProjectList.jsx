import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="empty">No projects found</p>;
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
