import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>fashion</div>
      <Link to="./store">
        <h2>Store</h2>
      </Link>
    </div>
  );
};

export default Navbar;
