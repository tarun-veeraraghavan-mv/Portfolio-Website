import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="navbar">
      <div>
        <p className="logo">Tarun Veeraraghavan</p>
      </div>
      <div className="link-box">
        <a href="#projects" className="link-item">
          Projects
        </a>
        <a href="#contact" className="link-item">
          Contact
        </a>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
}