import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import FavContext from "../Context/FavContext";

const Icon = ({ name, date, id, image, url }) => {
  const { items, setItems } = useContext(FavContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const addToFav = () => {
    setIsFavorite(true);
    const isDuplicate = items.some(
      (item) => item.name === name && item.date === date
    );
    if (isDuplicate) {
      return;
    }

    setItems((prevState) => [...prevState, { name, date, id, image, url }]);
  };

  const removeFromFav = () => {
    setIsFavorite(false);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleFavorite = () => {
    items.forEach((event) => {
      if (event.id === id) {
        setIsFavorite(true);
      }
    });
  };

  useEffect(toggleFavorite);

  return (
    <div>
      {isFavorite ? (
        <MdFavorite
          style={{ color: "#D14081" }}
          size={30}
          onClick={() => removeFromFav()}
        />
      ) : (
        <MdFavoriteBorder
          style={{ color: "#D14081" }}
          size={30}
          onClick={() => {
            addToFav();
          }}
        />
      )}
    </div>
  );
};

export default Icon;
