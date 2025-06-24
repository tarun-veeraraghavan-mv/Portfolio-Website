export default function About() {
  return (
    <div className="about-container">
      <div>
        <p className="opening-box">
          <span className="intro-text">👋 Hey, I&apos;m Tarun. </span>

          <br />

          <span className="regular-text">I&apos;m a Full Stack Developer.</span>
        </p>

        <p style={{ marginBottom: "30px" }}>
          I&apos;m a full-stack developer and a LLM Engineer building my version
          of the digital world one step at a time. I love to work in Java,
          Python and TypeScript, but I am happy to use whatever tool is most
          suited for the job at hand. My two favorite daily activities are
          attending local tech meetups, contributing to open source projects.
        </p>

        <div className="my-details-box">
          <div>
            <p style={{ fontSize: "18px" }}>🏠 Phoenix, Arizona.</p>
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <a
              href="https://drive.google.com/file/d/1EIGM4x9PliT5DbWa7In01cXsiu4wIMO6/view?usp=sharing"
              className="github-link-tag"
              target="_blank"
            >
              Resume &rarr;
            </a>

            <a
              href="https://www.linkedin.com/in/tarun-v-835509321/?trk=nav_responsive_tab_profile_pic"
              className="github-link-tag"
              target="_blank"
            >
              Linkedin &rarr;
            </a>
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
