
import Navbar from "./Navbar";
import Cv from "./Cv";
const Cvsectioon = () => {
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
      <Cv />
    </div>
  );
};

export default Cvsectioon;