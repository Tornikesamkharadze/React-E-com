import React, { useContext } from "react";

const ShopDataContext = React.createContext();
const ShopDataProvider = ({ children }) => {
  return (
    <ShopDataContext.Provider value={{}}>{children}</ShopDataContext.Provider>
  );
};

const useShopDataContext = () => {
  return useContext(ShopDataContext);
};

export { ShopDataContext, ShopDataProvider, useShopDataContext };
