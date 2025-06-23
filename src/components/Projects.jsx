export default function Projects() {
  return (
    <section className="about-container" id="projects">
      <p className="title">PROJECTS</p>

      <div className="project-container">
        <img
          src="/quick-tube.png"
          className="project-img"
          alt="Project image"
          style={{ marginBottom: "20px" }}
        />

        <p className="title">QuickTube</p>
        <p className="project-content">
          An AI-powered YouTube knowledge extractor — ask any question about a
          video, and get real-time, context-aware answers. Powered by LangChain
          + Pinecone + DeepSeek LLM, this full-stack RAG app chunks transcripts,
          embeds them into a vector DB, and generates intelligent responses on
          demand.
        </p>
        <p className="project-content">
          Supports JWT auth, persistent chat history, and lets users download
          full transcripts via AWS S3. Deployed with Terraform for full
          infra-as-code control.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
            alignItems: "center",
          }}
        >
          Links:
          <a
            href="https://drive.google.com/file/d/1zucRpNzQs78sCudGpequOUWLi_pnbaCp/view?usp=sharing"
            className="github-link-tag"
            target="_blank"
          >
            Live Demo &rarr;
          </a>
          <a
            href="https://github.com/tarun-veeraraghavan-mv/QuickTube"
            className="github-link-tag"
            target="_blank"
          >
            Github &rarr;
          </a>
        </div>

        <ul className="project-skill-list">
          <li className="project-skill-item">Nextjs</li>
          <li className="project-skill-item">TypeScript</li>
          <li className="project-skill-item">Django</li>
          <li className="project-skill-item">Langchain</li>
          <li className="project-skill-item">Postgres</li>
          <li className="project-skill-item">AWS S3</li>
          <li className="project-skill-item">Terraform</li>
        </ul>
      </div>

      <div className="project-container">
        <img
          src="/ai-code-review.png"
          className="project-img"
          alt="Project image"
          style={{ marginBottom: "20px" }}
        />

        <p className="title">Reviewey</p>
        <p className="project-content">
          AI-powered code review assistant that slashes review time and enforces
          custom coding standards — all in one click. Upload code files, select
          your language/editor, and let DeepSeek LLM generate detailed,
          intelligent quality reports instantly.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
            alignItems: "center",
          }}
        >
          Links:
          <a
            href="https://drive.google.com/file/d/1Vosmw7GXFgtmHh9cSGoeg_-zSQrJSJKT/view?usp=sharing"
            className="github-link-tag"
            target="_blank"
          >
            Live Demo &rarr;
          </a>
          <a
            href="https://github.com/tarun-veeraraghavan-mv/Reviewey"
            className="github-link-tag"
            target="_blank"
          >
            Github &rarr;
          </a>
        </div>

        <ul className="project-skill-list">
          <li className="project-skill-item">React</li>
          <li className="project-skill-item">Express</li>
          <li className="project-skill-item">MongoDB</li>
          <li className="project-skill-item">DeepSeek LLM</li>
        </ul>
      </div>

      <div className="project-container">
        <img
          src="/startify-1.png"
          className="project-img"
          alt="Project image"
          style={{ marginBottom: "20px" }}
        />

        <p className="title">Stratify</p>
        <p className="project-content">
          A student-first planner designed to simplify college life. Manage
          courses, track assignments, set academic goals, and store important
          files—all in one place. Stay organized, boost productivity, and take
          control of your studies with an intuitive, distraction-free
          experience.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
            alignItems: "center",
          }}
        >
          Links:
          <a
            href="https://drive.google.com/file/d/1CoUCX3tUduFrlXlwAqAmZ8vnihwm6ipC/view"
            className="github-link-tag"
            target="_blank"
          >
            Demo Video &rarr;
          </a>
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
          style={{ marginBottom: "20px" }}
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

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
            alignItems: "center",
          }}
        >
          Links:
          <a
            href="https://drive.google.com/file/d/1uuXDWiDkxNa4TvIvRuBGSQn9shw7LH0h/view?usp=sharing"
            className="github-link-tag"
            target="_blank"
          >
            Demo Video &rarr;
          </a>
          <a
            href="https://github.com/tarun-veeraraghavan-mv/Heart-Disease-Predictor"
            className="github-link-tag"
            target="_blank"
          >
            Github &rarr;
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
