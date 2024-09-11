import Projects from "./Projects";
import Navbar from "./Navbar";
const ProjectsSection = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#F5F5F5",
          padding: 10,
          top: 0,
          position: "sticky",
        }}
      >
        <Navbar />
      </div>
      <Projects />
    </div>
  );
};

export default ProjectsSection;
