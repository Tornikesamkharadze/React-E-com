import React, { useContext, useState } from "react";
import PRODUCSTDATA from "../data/shop-data.json";

const ProductsDataContext = React.createContext();

const ProductsDataProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCSTDATA);
  return (
    <ProductsDataContext.Provider value={{ products }}>
      {children}
    </ProductsDataContext.Provider>
  );
};

const useProductsDataContext = () => {
  return useContext(ProductsDataContext);
};

export { ProductsDataContext, ProductsDataProvider, useProductsDataContext };
