import { useState } from "react";
import { projects } from "../constants/data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="about-container" id="projects">
      <p className="title">PROJECTS</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onLearnMore={() => openModal(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}