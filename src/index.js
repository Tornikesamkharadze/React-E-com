import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { UserProvider } from "./contexts/userContext";
import { ProductsDataProvider } from "./contexts/productsDataContext";
import { CartContextProvider } from "./contexts/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsDataProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductsDataProvider>
    </UserProvider>
  </React.StrictMode>
);
