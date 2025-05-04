export default function About() {
  return (
    <div className="about-container">
      <div>
        <p className="opening-box">
          <span className="intro-text">👋 Hey, I&apos;m Tarun. </span>

          <br />

          <span className="regular-text">I&apos;m a Full Stack Developer.</span>

          <button className="open-to-work-card">Open to work</button>
        </p>

        <div className="my-details-box">
          <div>
            <p>🏠 Phoenix, Arizona.</p>
          </div>

          <div>
            <a
              href="https://github.com/tarun-veeraraghavan-mv"
              className="github-link-tag"
              target="_blank"
            >
              Github &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
