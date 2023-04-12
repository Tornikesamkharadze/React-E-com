import React from "react";
import { Link } from "react-router-dom";
import "./navigation.style.scss";
import { ReactComponent as Logo } from "../../assets/shopping-logo-svgrepo-com.svg";
import { useUserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useUserContext();

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
        {currentUser ? (
          <span className="nav-link" onClick={signOutUser}>
            SIGN OUT
          </span>
        ) : (
          <Link className="nav-link" to="auth">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navigation;
