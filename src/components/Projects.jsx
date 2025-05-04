export default function Projects() {
  return (
    <section className="about-container" id="projects">
      <p className="title">PROJECTS</p>

      <div className="project-container">
        <img src="../public/startify-1.png" className="project-img" />

        <p className="title">Stratify</p>
        <p className="project-content">
          A student-first planner designed to simplify college life. Manage
          courses, track assignments, set academic goals, and store important
          files—all in one place. Stay organized, boost productivity, and take
          control of your studies with an intuitive, distraction-free
          experience.
        </p>

        <ul className="project-skill-list">
          <li className="project-skill-item">Nextjs</li>
          <li className="project-skill-item">TypeScript</li>
          <li className="project-skill-item">Spring Boot</li>
          <li className="project-skill-item">Postgres</li>
          <li className="project-skill-item">AWS S3</li>
          <li className="project-skill-item">Terraform</li>
        </ul>
      </div>
    </section>
  );
}
