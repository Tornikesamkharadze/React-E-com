import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/CartIcon";
import { ReactComponent as Logo } from "../../assets/shopping-logo-svgrepo-com.svg";
import CartDropDown from "../../components/cart-dropdown/CartDropdown";
import { useUserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useCartContext } from "../../contexts/CartContext";
import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser } = useUserContext();
  const { isCartOpen } = useCartContext();
 
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
        <CartIcon />
      </div>
      {isCartOpen && <CartDropDown />}
    </div>
  );
};

export default Navigation;
