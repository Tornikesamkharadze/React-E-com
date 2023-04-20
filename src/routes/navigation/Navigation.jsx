import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/CartIcon";
import { ReactComponent as Logo } from "../../assets/shopping-logo-svgrepo-com.svg";
import CartDropDown from "../../components/cart-dropdown/CartDropdown";
import { useUserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useCartContext } from "../../contexts/CartContext";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  Navlink,
} from "./navigation.style";

const Navigation = () => {
  const { currentUser } = useUserContext();
  const { isCartOpen } = useCartContext();

  return (
    <NavigationContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <NavLinks>
        <Navlink to="/">Home</Navlink>
        <Navlink to="Shop">Shop</Navlink>
        {currentUser ? (
          <Navlink as="span" onClick={signOutUser}>SIGN OUT</Navlink>
        ) : (
          <Link className="nav-link" to="auth">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </NavLinks>
      {isCartOpen && <CartDropDown />}
    </NavigationContainer>
  );
};

export default Navigation;
