import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { UserProvider } from "./contexts/userContext";
import { ProductsDataProvider } from "./contexts/productsDataContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsDataProvider>
        <App />
      </ProductsDataProvider>
    </UserProvider>
  </React.StrictMode>
);
