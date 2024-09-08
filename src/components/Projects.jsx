import Navbar from "./Navbar";
import Button from "@mui/material/Button";
const Projects = () => {
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
      {/* Projects start */}
      <div>
        <h1 style={{ color: "white" }}>𝗣𝗿𝗼𝗷𝗲𝗰𝘁𝘀</h1>
        <h2 style={{ marginLeft: -200 }}>1.Food-Man</h2>
        <p>
          𝐌𝐚𝐧𝐚𝐠𝐞 𝐲𝐨𝐮𝐫 𝐦𝐞𝐧𝐮 𝐜𝐚𝐭𝐚𝐥𝐨𝐠 𝐞𝐚𝐬𝐢𝐥𝐲 𝐰𝐢𝐭𝐡 𝐅𝐨𝐨𝐝 𝐌𝐚𝐧 𝐚𝐧𝐝 𝐞𝐧𝐭𝐢𝐜𝐞 𝐲𝐨𝐮𝐫
          𝐜𝐮𝐬𝐭𝐨𝐦𝐞𝐫𝐬 𝐰𝐢𝐭𝐡 𝐚 𝐐𝐑 𝐜𝐨𝐝𝐞 𝐨𝐫𝐝𝐞𝐫𝐢𝐧𝐠 𝐬𝐲𝐬𝐭𝐞𝐦.
        </p>
        <div style={{ position: "relative", display: "inline-block" }}>
          <a href="https://food-man.vercel.app/">
            <img src="food-man.png" alt="" width={340} height={180} />
          </a>
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "10px",
            }}
          >
            <Button
              variant="contained"
              sx={{ mb: 2 ,bgcolor:"white",color:"black"}}
              href="https://food-man.vercel.app/"
            >
              Visit 
            </Button>
            <Button
              variant="contained"
              sx={{ mb: 2 ,bgcolor:"black"}}
              href="" // Replace with your actual GitHub repo URL
            >
            Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
