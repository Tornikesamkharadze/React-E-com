import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <div>logo</div>
      </Link>
      <div className="nav-links-container">
        <Link to="/">Home</Link>
        <Link to="Shop">Shop</Link>
      </div>
    </div>
  );
};

export default Navigation;
