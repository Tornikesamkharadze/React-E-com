import React from "react";
import { Link } from "react-router-dom";
import "./navigation.style.scss";
import { ReactComponent as Logo } from "../../assets/shopping-logo-svgrepo-com.svg";
import { useUserContext } from "../../contexts/userContext";

const Navigation = () => {
  const { currentUser } = useUserContext();
  console.log(currentUser);
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="Shop">
          Shop
        </Link>
        <Link className="nav-link" to="auth">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
