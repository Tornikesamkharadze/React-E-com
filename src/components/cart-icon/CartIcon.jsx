import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag-svgrepo-com.svg";
import { useCartContext } from "../../contexts/CartContext";

const CartIcon = () => {
  const { modalHendler } = useCartContext();
  return (
    <div className="cart-icon-container" onClick={modalHendler}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
