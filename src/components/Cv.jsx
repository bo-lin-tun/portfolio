import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
const Cv = () => {
  return (
    <div>
      <div>
        {/* <div
          style={{
            backgroundColor: "#F5F5F5",
            padding: 10,
            top: 0,
            position: "sticky",
          }}
        >
          <Navbar />
        </div> */}
        <h1 style={{ color: "white" }}>CV</h1>
        <img
          style={{
            margin: "10px",
            border: "1px solid black",
            padding: 2,
          }}
          src="cv.png"
          alt=""
          width={350}
          height={600}
        />
      </div>

      <a href="cv.png" download="cv.png">
        <Button variant="contained" sx={{ mb: 2,bgcolor:"black" }}>
          <ArrowDownwardIcon /> Download CV
        </Button>
      </a>
    </div>
  );
};

export default Cv;
