import React from "react";
import { useAppContext } from "../../Context/appContext";

const Store = () => {
  const { product, addToStore, removeFromStore } = useAppContext();
  const storeChecker = (id) => {
    const boolean = product.some((card) => card.id === id);
    return boolean;
  };
  return (
    <div className="cardList">
      {product.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image_url} alt={"dsfsf"} />
          <h2>{card.category}</h2>
          {storeChecker(card.id) ? (
            <button onClick={() => removeFromStore(card.id)}>
              remove from store
            </button>
          ) : (
            <button onClick={() => addToStore(card)}>add to store</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Store;
