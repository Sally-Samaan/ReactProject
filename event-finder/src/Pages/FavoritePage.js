import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import FavContext from "../Context/FavContext";
import Icon from "../Components/Icon";

const FavoritePage = () => {
  const { items } = useContext(FavContext);
  console.log(items);
  return (
    <div>
      <Navbar />
      <h1 className="favorite-title">FavoritePage</h1>
      <div className="card-container">
        {items.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt="" className="card-image" />
            <h1 className="card-title">{item.name}</h1>
            <p className="card-date">{item.date}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="buy-ticket-link"
            >
              Buy Ticket
            </a>
            <div className="heartIcon">
              <Icon
                id={item.id}
                name={item.name}
                date={item.date}
                image={item.image}
                url={item.url}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
