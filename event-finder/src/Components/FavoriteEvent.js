import React from "react";

export const FavoriteEvent = ({ name, date, image, url }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{date}</p>
      <img src={image} alt="" />
      <p>{url}</p>
    </div>
  );
};
