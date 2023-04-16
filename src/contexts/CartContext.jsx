import React, { useContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const filterCartItem = (cartItems, cartItemToFilter) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToFilter.id);
};

const CartContext = React.createContext();
const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIscardOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const total = cartItems.reduce((total, cartItems) => {
      return total + cartItems.quantity;
    }, 0);
    setCartTotal(total);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const filterItemToCart = (cartItemToFilter) => {
    setCartItems(filterCartItem(cartItems, cartItemToFilter));
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIscardOpen,
        addItemToCart,
        filterItemToCart,
        removeItemToCart,
        cartItems,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartContextProvider, useCartContext };
