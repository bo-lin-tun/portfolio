import { useState } from "react";
import React from "react";
import About from "./About";
import App from "../App";
import { Link } from "react-router-dom";
import Content from "./Content";

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
        <h2 style={{ color: "white" }}>𝐇𝐞𝐥𝐥𝐨!</h2>
        <h3
          className="profileName"
        
        >
          {" "}
          <b
            style={{
              color: "black",
              fontSize: "2em",
             
              padding: "10px",
              
            }}
          >
            {" "}
            𝐈'm 𝐁𝐎 𝐋𝐈𝐍𝐍 𝐇𝐓𝐔𝐍
          </b>
        </h3>
        <p style={{ color: "#424242", fontSize: "1.5em" }}>
          "𝑻𝒉𝒊𝒔 𝒊𝒔 𝒎𝒚 𝒑𝒐𝒓𝒕𝒇𝒐𝒍𝒊𝒐 𝒘𝒆𝒃𝒔𝒊𝒕𝒆. 𝑰 𝒂𝒎 𝒂𝒔𝒑𝒊𝒓𝒊𝒏𝒈 𝒕𝒐 𝒃𝒆𝒄𝒐𝒎𝒆 𝒂 𝒘𝒆𝒃
          𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒗𝒊𝒔𝒊𝒕 𝒎𝒚 𝑨𝒃𝒐𝒖𝒕 𝒔𝒆𝒄𝒕𝒊𝒐𝒏 𝒕𝒐 𝒍𝒆𝒂𝒓𝒏 𝒎𝒐𝒓𝒆 𝒂𝒃𝒐𝒖𝒕 𝒎𝒆."
        </p>
        <div
          style={{
            backgroundColor: "#F5F5F5",

            width: "100%",
            height: "300px",
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
