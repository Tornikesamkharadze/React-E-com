import React from "react";
import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../button/ButtonComponent";
import { useCartContext } from "../../contexts/CartContext";

import { Wrapper } from "./product-card.style";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useCartContext();

  const addProductToCart = () => addItemToCart(product);
  return (
    <Wrapper>
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">Price: ${price}</span>
      </div>
      <ButtonComponent
        onClick={addProductToCart}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Add to card
      </ButtonComponent>
    </Wrapper>
  );
};

export default ProductCard;
