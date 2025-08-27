export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="title">{project.title}</h2>
        <img
          src={project.imgSrc}
          className="project-img"
          alt="Project image"
          style={{ marginBottom: "20px", width: "100%", maxHeight: "300px", objectFit: "cover" }}
        />
        <p
          className="project-content"
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
            alignItems: "center",
          }}
        >
          Links:
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="github-link-tag"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name} &rarr;
            </a>
          ))}
        </div>

        <ul className="project-skill-list">
          {project.skills.map((skill) => (
            <li key={skill} className="project-skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}