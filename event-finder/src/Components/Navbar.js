import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import FavContext from "../Context/FavContext";

const Navbar = () => {
  const { items } = useContext(FavContext);
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <p className="menu">Event-Finder</p>
      </Link>
      <Link to="/favorites" className="favorites-link">
        <div>
          <p className="menu">favorites</p>
          <MdFavorite className="heart" />
          <span>{items.length}</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
