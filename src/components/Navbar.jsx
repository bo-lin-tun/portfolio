import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isOPen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOPen);
  };
  return (
    <div>
      <div 

style={{top:0,position:"sticky"}}>
        <button
          style={{
            border: "none",
            fontSize: "1.07em",
            cursor: "pointer",

            backgroundColor: "transparent",
            paddingLeft: 50,
          }}
        >
          <nav className={`nav-links ${isOPen ? "show" : ""}`}>
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

        <button
          onClick={toggleMenu}
          style={{
            fontSize: "1.5em",
            border: "none",
            background: "none",
            cursor: "pointer",
            // display: "none", // Initially hidden, will show on smaller screens
          }}
          className="hamburger-menu"
        >
          <h3 style={{ marginTop: "-6px", marginBottom: "-10px" }}>
            &#9776;{" "}
            <b
              style={{
                color: "black",
                fontSize: "1em",
                marginLeft: "30px",
              }}
            >
              {" "}
              𝐁𝐎 Tun Hla
            </b>
          </h3>
          {/* Hamburger icon */}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
