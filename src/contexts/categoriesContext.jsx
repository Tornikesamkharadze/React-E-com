import React, { useContext, useEffect, useState } from "react";
import { getCategoriesAndDocumets } from "../utils/firebase/firebase.utils.js";

const CategoriesContext = React.createContext();

const CategoriesProvider = ({ children }) => {
  const [catecogiresMap, setCategoriesMap] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocumets();
      setCategoriesMap(categoryMap);
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={{ catecogiresMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};

const useCategoriesProvider = () => {
  return useContext(CategoriesContext);
};

export { CategoriesContext, CategoriesProvider, useCategoriesProvider };
