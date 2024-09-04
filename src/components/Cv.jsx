import { Link } from "react-router-dom";

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
          <button
            style={{
              border: "none",
              fontSize: "1.07em",
              cursor: "pointer",

              backgroundColor: "transparent",
              paddingLeft: 50,
            }}
          >
            <nav>
              <Link className="nav-link " to="/">
                𝐇𝐨𝐦𝐞
              </Link>
              <Link className="nav-link " to="/about">
                𝐀𝐛𝐨𝐮𝐭
              </Link>
              <Link className="nav-link " to="/projects">
                𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬
              </Link>
              <Link className="nav-link " to="/skills">
                𝐬𝐤𝐢𝐥𝐥𝐬
              </Link>
              <Link className="nav-link " to="/cv">
                𝑪𝒗
              </Link>
            </nav>
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "300px",
          }}
        >
          <div>
            <img src="cv.png" alt="" width={400} height={600} />
          </div>

          <div>
            <a href="cv.png" download="cv.png">
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  height: "40px",
                  cursor: "pointer",
                  borderRadius: "10px",
                }}
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
