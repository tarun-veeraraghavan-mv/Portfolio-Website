import About from "./components/About";
import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <div>
        <Chatbot />
      </div>
    </>
  );
}

export default App;
