import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { UserProvider } from "./contexts/userContext";
import { ShopDataProvider } from "./contexts/shopDataContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ShopDataProvider>
        <App />
      </ShopDataProvider>
    </UserProvider>
  </React.StrictMode>
);
