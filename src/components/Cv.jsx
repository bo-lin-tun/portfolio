import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Cv = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
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
      
        
            <img src="cv.png" alt="" width={400} height={600} />
         
        
      </div>
      
        <a href="cv.png" download="cv.png">
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              height: "40px",
              cursor: "pointer",
              borderRadius: "10px",
              position: "absolute",
            }}
          >
            Download CV
          </button>
        </a>
      </div>
    
  );
};

export default Cv;
