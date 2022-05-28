import React from "react";
import AllGoods from "./AllGoods";
import Banner from "./Banner";
import CustomerServices from "./CustomerServices";
import Reviews from "./Reviews/Reviews";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllGoods />
      <Summary />
      <CustomerServices />
      <Reviews />
    </div>
  );
};

export default Home;
