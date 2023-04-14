import React, { useContext, useState } from "react";

const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIscardOpen] = useState(false);
  const modalHendler = () => {
    setIscardOpen(!isCartOpen);
  };
  return (
    <CartContext.Provider value={{ isCartOpen, modalHendler }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartContextProvider, useCartContext };
