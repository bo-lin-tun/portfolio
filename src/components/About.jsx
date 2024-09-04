import react from "react";

import { Link } from "react-router-dom";
import Content from "./Content";
const About = () => {
  return (
    <div>
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
                𝐂𝐕
              </Link>
            </nav>
          </button>
        </div>
        <h1 style={{ color: "#F5F5F5" }}>
          𝙼𝚢 𝚗𝚊𝚖𝚎 𝚒𝚜{" "}
          <b style={{ color: "black", fontSize: "2em" }}>𝙱𝚘 𝙻𝚒𝚗𝚗 𝙷𝚝𝚞𝚗 </b>𝚊𝚗𝚍
          𝙸'𝚖 𝚊 𝚏𝚞𝚕𝚕 𝚜𝚝𝚊𝚌𝚔 𝚠𝚎𝚋 𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛
        </h1>
        <h3>
          "𝙸 𝚊𝚖 𝚊 𝚏𝚞𝚕𝚕 𝚜𝚝𝚊𝚌𝚔 𝚠𝚎𝚋 𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𝚏𝚛𝚘𝚖 𝙼𝚢𝚊𝚗𝚖𝚊𝚛. 𝙸 𝚌𝚊𝚗 𝚠𝚘𝚛𝚔 𝚘𝚗 𝚋𝚘𝚝𝚑
          𝚏𝚛𝚘𝚗𝚝𝚎𝚗𝚍 𝚊𝚗𝚍 𝚋𝚊𝚌𝚔𝚎𝚗𝚍.<br></br> 𝚃𝚑𝚎𝚜𝚎 𝚊𝚛𝚎 𝚖𝚢 𝚜𝚔𝚒𝚕𝚕𝚜. 𝙸 𝚊𝚖 𝚊𝚕𝚜𝚘
          𝚊𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 𝚏𝚘𝚛 𝚏𝚛𝚎𝚎𝚕𝚊𝚗𝚌𝚎 𝚠𝚘𝚛𝚔."
        </h3>
        {/* skill div    */}
        <h1 style={{ marginLeft: "-990px", color: "#F5F5F5" }}> 𝐬𝐤𝐢𝐥𝐥𝐬</h1>
        <div className="skill-div">
          <div className="front-end">
            <h3>𝐟𝐫𝐨𝐧𝐭-𝐄𝐧𝐝 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐒𝐤𝐢𝐥𝐥𝐬</h3>
            <div>
              <div
                className="skills-image"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src="html.jpg" width={40} style={{ marginLeft: 40 }} />
                <h2 style={{ marginLeft: 50, color: "#F5F5F5" }}>𝐇𝐓𝐌𝐋</h2>
              </div>

              {/* css */}
              <div
                className="skills-image css"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <img src="cssbg.png" width={50} style={{ marginLeft: 40 }} />
                <h2 style={{ marginLeft: 50, color: "#F5F5F5" }}>𝐜𝐬𝐬</h2>
              </div>
              {/* js */}
              <div
                className="skills-image js"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <img src="js-logo.png" width={40} style={{ marginLeft: 40 }} />
                <h2 style={{ marginLeft: 50, color: "#F5F5F5" }}>𝐣𝐬</h2>
              </div>

              {/* React */}
              <div
                className="skills-image react"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <img src="react.png" width={40} style={{ marginLeft: 40 }} />
                <h2 style={{ marginLeft: 50, color: "#F5F5F5" }}>𝐑𝐞𝐚𝐜𝐭</h2>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="Backend">
            <h3>𝐁𝐚𝐜𝐤𝐞𝐧𝐝 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐒𝐤𝐢𝐥𝐥𝐬</h3>
            <div
              style={{
                width: "400px",
                marginLeft: "120px",
              }}
            >
              {/* Note.js*/}
              <div
                className="skills-image note"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <img
                  src="nodejsremove.png"
                  width={60}
                  style={{ marginLeft: 40 }}
                />
                <h2 style={{ marginLeft: 50, color: "#F5F5F5" }}>𝐍𝐨𝐝𝐞.𝐣𝐬</h2>
              </div>

              {/* Express.js*/}
              <div
                className="skills-image express"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <img
                  src="expressbg.png"
                  width={70}
                  height={70}
                  style={{ marginLeft: 40 }}
                />
                <h2 style={{ marginLeft: 50, color: "#F5F5F5" }}>𝐄𝐱𝐩𝐫𝐞𝐬𝐬.𝐣𝐬</h2>
              </div>

              {/* prisma.js*/}
              <div
                className="skills-image prisma"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <img
                  src="prisma.png"
                  width={80}
                  height={60}
                  style={{ marginLeft: 40 }}
                />
                <h2 style={{ marginLeft: 50, color: "#F5F5F5" }}>𝐏𝐫𝐢𝐬𝐦𝐚</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#F5F5F5",

          width: "100%",
          height: "300px",
          marginTop: "-20px",
        }}
      >
        <h2 style={{ color: "black" }}> 𝐌𝐲 𝐂𝐨𝐧𝐭𝐞𝐧𝐭</h2>

        <Content />
      </div>
    </div>
  );
};

export default About;
