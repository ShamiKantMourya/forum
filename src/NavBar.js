import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const NavBar = () => {
  return (
    <div>
      <div className="main">
        <div className="links">
        <Link to= "/">Home</Link>
        <Link to= "/explore">Explore</Link>
        <Link to= "/bookmark">Bookmark</Link>
        <Link to= "/explore">Profile</Link>
        
        </div>
      </div>
    </div>
  );
};

export default NavBar;
