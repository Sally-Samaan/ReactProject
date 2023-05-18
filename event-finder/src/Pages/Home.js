import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Description from "../Components/Description";
import SearchBar from "../Components/SearchBar";
import Results from "../Components/Results";

const Home = () => {
  const [cityValue, setCityValue] = useState(() => {
    const localData = localStorage.getItem("cityValue");
    return localData ? JSON.parse(localData) : "Groningen";
  });
  useEffect(() => {
    localStorage.setItem("cityValue", JSON.stringify(cityValue));
  }, [cityValue]);
  return (
    <div>
      <Navbar />
      <Description />
      <SearchBar setCityValue={setCityValue} />
      <h2>Events In {cityValue}</h2>
      <Results cityValue={cityValue} />
    </div>
  );
};

export default Home;
