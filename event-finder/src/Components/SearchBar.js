import React, { useState } from "react";

const SearchBar = ({ setCityValue }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCityValue(city);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=""></label>
        <input
          type="text"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
