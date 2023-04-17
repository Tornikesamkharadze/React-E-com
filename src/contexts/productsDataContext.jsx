import React, { useContext, useEffect, useState } from "react";
import { getCategoriesAndDocumets } from "../utils/firebase/firebase.utils.js";
import SHOP_DATA from "../data/shop-data.js";

const ProductsDataContext = React.createContext();

const ProductsDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocumets();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

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
