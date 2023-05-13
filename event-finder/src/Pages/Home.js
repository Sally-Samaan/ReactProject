import React from "react";
import Navbar from "../Components/Navbar";
import Description from "../Components/Description";
import SearchBar from "../Components/SearchBar";
import Results from "../Components/Results";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Description />
      <SearchBar />
      <Results />
    </div>
  );
};

export default Home;
