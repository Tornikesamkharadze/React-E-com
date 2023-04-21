import React from "react";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag-svgrepo-com.svg";
import { useCartContext } from "../../contexts/CartContext";
import { CartIconContainer } from "./cart-icon.style.jsx";

const CartIcon = () => {
  const { isCartOpen, setIscardOpen, cartTotal } = useCartContext();

  const toggleCartHendler = () => {
    setIscardOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleCartHendler}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{cartTotal}</span>
    </CartIconContainer>
  );
};

export default CartIcon;
