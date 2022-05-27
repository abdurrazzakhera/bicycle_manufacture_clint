import React from "react";
import AllGoods from "./AllGoods";
import Banner from "./Banner";
import Reviews from "./Reviews/Reviews";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllGoods />
      <Summary />
      <Reviews />
    </div>
  );
};

export default Home;
