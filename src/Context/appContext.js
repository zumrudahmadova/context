import React, { useContext, useState } from "react";
import { createContext } from "react";
const AppContext = createContext(null);
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useUserContext was used outside of its Provider");
  }

  return context;
};
const AppContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const addToStore = (card) => {
    const oldCardList = [...product];
    const newCardList = oldCardList.concat(card);
    setProduct(newCardList);
  };
  const removeFromStore = (id) => {
    const oldCardList = [...product];
    const newCardList = oldCardList.filter((card) => card.id !== id);
    setProduct(newCardList);
  };
  return (
    <AppContext.Provider value={{ product, addToStore, removeFromStore }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
