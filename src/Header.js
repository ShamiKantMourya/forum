import React from "react";

const Header = () => {
  return (
    <div>
      <div
        style={{ borderBottom: "1px solid black",width: "100vh" }}
        className="main"
      >
        <h1
          style={{
            color: "violet",
            margin: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          My Forum
        </h1>
      </div>
    </div>
  );
};

export default Header;
