import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag-svgrepo-com.svg";
import { useCartContext } from "../../contexts/CartContext";

const CartIcon = () => {
  const { isCartOpen, setIscardOpen, cartTotal } = useCartContext();

  const toggleCartHendler = () => {
    setIscardOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleCartHendler}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{cartTotal}</span>
    </div>
  );
};

export default CartIcon;
