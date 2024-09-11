
import Navbar from "./Navbar";
import Skills from "./skills";
const SkillSectioon = () => {
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
      <Skills />
    </div>
  );
};

export default SkillSectioon;