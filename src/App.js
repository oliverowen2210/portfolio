import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectData from "./ProjectData";

function App() {
  return (
    <div className="App">
      <header>
        <div className="aboutBG" />
        <About links={[{ name: "beans" }, { name: "spleens" }]} />
      </header>
      <main>
        <Projects projects={ProjectData} />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
