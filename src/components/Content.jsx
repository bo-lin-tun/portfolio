const Content = () => {
  return (
    <div className="contenyDiv">
      <div className="Right">
        {/* phone */}
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "40px" }}
        >
          <img src="phone.png" alt="" width={40} height={40} />
          <a
            href="tel:+959791563867"
            style={{ marginLeft: "40px", color: "black" }}
          >
            +959791563867
          </a>
        </div>
        {/* messenger */}
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "40px" }}
        >
          <img src="messenger.png" alt="" width={40} height={40} />
          <a
            href="https://www.messenger.com/"
            style={{ marginLeft: "40px", color: "black" }}
          >
            𝐁𝐨 Tun Hla
          </a>
        </div>
      </div>
      <div>
        {/* facebbok */}
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "40px" }}
        >
          <img src="facebook.png" alt="" width={40} height={40} />
          <a
            href="https://m.facebook.com/bo.l.htun.56?mibextid=LQQJ4d"
            style={{ marginLeft: "40px", color: "black" }}
          >
            𝐁𝐨 Tun Hla
          </a>
        </div>
        {/* gitgub */}
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "40px" }}
        >
          <img src="github.png" alt="" width={40} height={40} />
          <a
            href="https://github.com/bo-lin-tun"
            style={{ marginLeft: "40px", color: "black" }}
          >
            𝐛𝐨-tun-hla
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
