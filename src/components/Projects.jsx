export default function Projects() {
  return (
    <section className="about-container" id="projects">
      <p className="title">PROJECTS</p>

      <div className="project-container">
        <img
          src="/startify-1.png"
          className="project-img"
          alt="Project image"
        />

        <p className="title">Stratify</p>
        <p className="project-content">
          A student-first planner designed to simplify college life. Manage
          courses, track assignments, set academic goals, and store important
          files—all in one place. Stay organized, boost productivity, and take
          control of your studies with an intuitive, distraction-free
          experience.
        </p>

        <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
          Links:
          <a
            href="https://github.com/tarun-veeraraghavan-mv/Stratify"
            className="github-link-tag"
            target="_blank"
          >
            Github &rarr;
          </a>
          <a
            href="https://drive.google.com/file/d/1IwtmqZZxZeMgUa2cu2eVfP4zB-AEoH3v/view?usp=sharing"
            className="github-link-tag"
            target="_blank"
          >
            DB Diagram &rarr;
          </a>
        </div>

        <ul className="project-skill-list">
          <li className="project-skill-item">Nextjs</li>
          <li className="project-skill-item">TypeScript</li>
          <li className="project-skill-item">Spring Boot</li>
          <li className="project-skill-item">Postgres</li>
          <li className="project-skill-item">AWS S3</li>
          <li className="project-skill-item">Terraform</li>
        </ul>
      </div>

      <div className="project-container">
        <img
          src="/heart-disease-1.png"
          alt="Project image"
          className="project-img"
        />

        <p className="title">Heart Disease Predictor</p>
        <p className="project-content">
          A full-stack machine learning web application that predicts the risk
          of heart disease based on clinical features such as age, cholesterol,
          resting blood pressure, and more. Built with a React frontend and a
          Flask backend, this project demonstrates an end-to-end ML deployment
          pipeline, complete with real-time predictions, data analysis, and
          model evaluation.
        </p>

        <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
          Links:
          <a
            href="https://github.com/tarun-veeraraghavan-mv/Heart-Disease-Predictor"
            className="github-link-tag"
            target="_blank"
          >
            Github &rarr;
          </a>
          <a
            href="https://heart-disease-predictor-v1.netlify.app/"
            className="github-link-tag"
            target="_blank"
          >
            Live App &rarr;
          </a>
        </div>

        <ul className="project-skill-list">
          <li className="project-skill-item">React</li>
          <li className="project-skill-item">Python</li>
          <li className="project-skill-item">Scikit-Learn</li>
          <li className="project-skill-item">Flask</li>
          <li className="project-skill-item">Netlify</li>
          <li className="project-skill-item">Railway</li>
        </ul>
      </div>
    </section>
  );
}
