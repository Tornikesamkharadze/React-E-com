import React from "react";
import { useCartContext } from "../../contexts/CartContext";

const Checkout = () => {
  const { cartItems, addItemToCart } = useCartContext();

/*   const removeItem = (itemId) => {
    const removeItems = cartItems.filter((item) => {
      if (item.id !== itemId) {
        return item;
      }
    });
    return setCartItems(removeItems);
  }; */
  
  return (
    <div>
      {cartItems.map((product) => {
        const { id, name, price, imageUrl, quantity } = product;
        return (
          <div key={id} style={{ display: "flex" }}>
            <img src={imageUrl} alt={name} />
            <span style={{ paddingRight: "10px" }}>{name}</span>
            <div>
              {/*  <button
                onClick={{}}
                style={{ border: "none", cursor: "pointer" }}
              >
                {"<"}
              </button> */}
              {quantity}
              <button
                onClick={() => addItemToCart(product)}
                style={{ border: "none", cursor: "pointer" }}
              >
                {">"}
              </button>
            </div>
            <span style={{ paddingLeft: "10px" }}>price - {price}</span>
          {/*   <button
              onClick={() => removeItem(id)}
              style={{ height: "20px", marginLeft: "20px" }}
            >
              X
            </button> */}
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
