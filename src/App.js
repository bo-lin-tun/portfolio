import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";



import ProjectsSection from "./components/ProjectsSection";
import SkillSectioon from "./components/SkillSection";
import Cvsectioon from "./components/Cvsectioon";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#229799",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cv" element={<Cvsectioon />}></Route>
          <Route path="/skills" element={<SkillSectioon />}></Route>
          <Route path="/projects" element={<ProjectsSection />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
