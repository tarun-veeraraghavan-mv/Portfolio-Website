export default function ProjectCard({ project, onLearnMore }) {
  return (
    <div className="project-card">
      <img src={project.imgSrc} alt={project.title} className="project-img" />
      <h3 className="project-title">{project.title}</h3>
      <button onClick={onLearnMore} className="learn-more-btn">
        Learn More
      </button>
    </div>
  );
}