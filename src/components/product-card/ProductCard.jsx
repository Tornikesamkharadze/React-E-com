import React from "react";
import "./product-card.style.scss";
import ButtonComponent from "../button/ButtonComponent";
import { useCartContext } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useCartContext();

  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent
        onClick={addProductToCart}
        buttonType="inverted"
      >
        Add to card
      </ButtonComponent>
    </div>
  );
};

export default ProductCard;
