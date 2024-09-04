import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Cv from "./components/Cv";
import Skills from "./components/skills";

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
          <Route path="/cv" element={<Cv />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
