import React from "react";
import About from "./About";
import App from "../App";

import Content from "./Content";
import Navbar from "./Navbar";
import Skills from "./skills";
import Projects from "./Projects";
import Cv from "./Cv";

const HomePage = () => {
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

      <div
        style={{
          // backgroundImage: `url('/portfolio-2.png')`,
          backgroundColor: "#22979",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      >
        <img
          src="/profile.jpg"
          alt=""
          width={200}
          height={200}
          style={{
            borderRadius: "1000px",
            border: "2px solid #F5F5F5",
            marginTop: 50,
            boxShadow: "2px 4px 50px black",
          }}
        />
        <h3 style={{ color: "white" }}>{"<𝐇𝐞𝐥𝐥𝐨/>"}</h3>
        <h3 className="profileName">
          {" "}
          <b
            style={{
              color: "black",

              padding: "10px",
            }}
          >
            {" "}
            𝐈'm 𝐁𝐎 𝐋𝐈𝐍𝐍 𝐇𝐓𝐔𝐍
          </b>
        </h3>
        <p
          style={{ color: "#424242", fontSize: "1em" }}
          className="tagHompePage"
        >
          "𝑻𝒉𝒊𝒔 𝒊𝒔 𝒎𝒚 𝒑𝒐𝒓𝒕𝒇𝒐𝒍𝒊𝒐 𝒘𝒆𝒃𝒔𝒊𝒕𝒆. 𝑰 𝒂𝒎 𝒂𝒔𝒑𝒊𝒓𝒊𝒏𝒈 𝒕𝒐 𝒃𝒆𝒄𝒐𝒎𝒆 𝒂 𝒘𝒆𝒃
          𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒗𝒊𝒔𝒊𝒕 𝒎𝒚 𝑨𝒃𝒐𝒖𝒕 𝒔𝒆𝒄𝒕𝒊𝒐𝒏 𝒕𝒐 𝒍𝒆𝒂𝒓𝒏 𝒎𝒐𝒓𝒆 𝒂𝒃𝒐𝒖𝒕 𝒎𝒆."
        </p>
        {/* skills */}
        <div style={{ backgroundColor: "#229799",marginTop:10 }}>
          <Skills />
        </div>

        {/* Projects */}
        <div  id="cv-section" style={{ backgroundColor: "#229799", marginTop: "-25px" }}>
          <Projects />
        </div>
        {/* Cv */}

        <div  style={{ backgroundColor: "#229799", marginTop: "-23px" }}>
          <Cv />
        </div>
        {/* content */}
        <div
          style={{
            backgroundColor: "#F5F5F5",

            width: "100%",
            marginTop: "-20px",
          }}
        >
          <h2 style={{ color: "black" }}> 𝐌𝐲 𝐂𝐨𝐧𝐭𝐞𝐧𝐭</h2>

          <Content />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
