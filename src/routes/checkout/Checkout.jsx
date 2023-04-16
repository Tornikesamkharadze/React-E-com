import React from "react";
import { useCartContext } from "../../contexts/CartContext";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart, filterItemToCart } =
    useCartContext();

  return (
    <div>
      {cartItems.map((product) => {
        const { id, name, price, imageUrl, quantity } = product;
        return (
          <div key={id} style={{ display: "flex" }}>
            <img src={imageUrl} alt={name} />
            <span style={{ paddingRight: "10px" }}>{name}</span>
            <div>
              <button
                onClick={() => removeItemToCart(product)}
                style={{ border: "none", cursor: "pointer" }}
              >
                {"<"}
              </button>
              {quantity}
              <button
                onClick={() => addItemToCart(product)}
                style={{ border: "none", cursor: "pointer" }}
              >
                {">"}
              </button>
            </div>
            <span style={{ paddingLeft: "10px" }}>price - {price}</span>
            <span onClick={() => filterItemToCart(product)}> X</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
