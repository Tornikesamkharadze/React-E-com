import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import App from "./App";
import { UserProvider } from "./contexts/userContext";
import { CategoriesProvider } from "./contexts/categoriesContext";
import { CartContextProvider } from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CategoriesProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </CategoriesProvider>
    </UserProvider>
  </React.StrictMode>
);
